
import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SnakeGame = () => {
  const BOARD_SIZE = 15;
  const INITIAL_SNAKE = [{ x: 7, y: 7 }];
  const INITIAL_FOOD = { x: 5, y: 5 };

  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState(INITIAL_FOOD);
  const [direction, setDirection] = useState({ x: 0, y: 0 });
  const [gameRunning, setGameRunning] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const generateFood = useCallback(() => {
    let newFood;
    do {
      newFood = {
        x: Math.floor(Math.random() * BOARD_SIZE),
        y: Math.floor(Math.random() * BOARD_SIZE)
      };
    } while (snake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
    return newFood;
  }, [snake]);

  const moveSnake = useCallback(() => {
    if (!gameRunning || gameOver) return;

    setSnake(currentSnake => {
      const newSnake = [...currentSnake];
      const head = { ...newSnake[0] };
      
      head.x += direction.x;
      head.y += direction.y;

      // Check boundaries
      if (head.x < 0 || head.x >= BOARD_SIZE || head.y < 0 || head.y >= BOARD_SIZE) {
        setGameOver(true);
        setGameRunning(false);
        return currentSnake;
      }

      // Check self collision
      if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
        setGameOver(true);
        setGameRunning(false);
        return currentSnake;
      }

      newSnake.unshift(head);

      // Check food collision
      if (head.x === food.x && head.y === food.y) {
        setScore(prev => prev + 10);
        setFood(generateFood());
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, food, gameRunning, gameOver, generateFood]);

  useEffect(() => {
    const gameLoop = setInterval(moveSnake, 200);
    return () => clearInterval(gameLoop);
  }, [moveSnake]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!gameRunning) return;
      
      switch (e.key) {
        case 'ArrowUp':
          if (direction.y === 0) setDirection({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
          if (direction.y === 0) setDirection({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
          if (direction.x === 0) setDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
          if (direction.x === 0) setDirection({ x: 1, y: 0 });
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [direction, gameRunning]);

  const startGame = () => {
    setGameRunning(true);
    setDirection({ x: 1, y: 0 });
  };

  const pauseGame = () => {
    setGameRunning(!gameRunning);
  };

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setFood(INITIAL_FOOD);
    setDirection({ x: 0, y: 0 });
    setGameRunning(false);
    setScore(0);
    setGameOver(false);
  };

  return (
    <div className="text-center">
      <div className="mb-4">
        <div className="text-white text-xl mb-2">Score: {score}</div>
        {gameOver && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-red-400 text-lg mb-2"
          >
            Game Over! 🐍
          </motion.div>
        )}
      </div>

      <div className="bg-slate-800 p-4 rounded-lg mb-4 mx-auto" style={{ width: 'fit-content' }}>
        <div 
          className="grid gap-1 bg-slate-900 p-2 rounded"
          style={{ 
            gridTemplateColumns: `repeat(${BOARD_SIZE}, 1fr)`,
            width: `${BOARD_SIZE * 20}px`,
            height: `${BOARD_SIZE * 20}px`
          }}
        >
          {Array.from({ length: BOARD_SIZE * BOARD_SIZE }).map((_, index) => {
            const x = index % BOARD_SIZE;
            const y = Math.floor(index / BOARD_SIZE);
            const isSnake = snake.some(segment => segment.x === x && segment.y === y);
            const isHead = snake[0]?.x === x && snake[0]?.y === y;
            const isFood = food.x === x && food.y === y;

            return (
              <div
                key={index}
                className={`w-4 h-4 rounded-sm ${
                  isFood 
                    ? 'bg-red-400' 
                    : isHead 
                    ? 'bg-cyan-400' 
                    : isSnake 
                    ? 'bg-green-400' 
                    : 'bg-slate-700'
                }`}
              />
            );
          })}
        </div>
      </div>

      <div className="text-gray-400 text-sm mb-4">
        Use arrow keys to control the snake
      </div>

      <div className="flex gap-2 justify-center">
        {!gameRunning && !gameOver && (
          <Button onClick={startGame} className="bg-gradient-to-r from-green-500 to-teal-500">
            <Play size={16} className="mr-2" />
            Start
          </Button>
        )}
        
        {gameRunning && (
          <Button onClick={pauseGame} className="bg-gradient-to-r from-yellow-500 to-orange-500">
            <Pause size={16} className="mr-2" />
            Pause
          </Button>
        )}
        
        <Button onClick={resetGame} className="bg-gradient-to-r from-purple-500 to-pink-500">
          <RotateCcw size={16} className="mr-2" />
          Reset
        </Button>
      </div>
    </div>
  );
};

export default SnakeGame;
