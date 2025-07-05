
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState<string | null>(null);

  const checkWinner = (squares: (string | null)[]) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  return (
    <div className="text-center">
      <div className="mb-6">
        {winner ? (
          <motion.h3 
            className="text-2xl font-bold text-cyan-400"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            🎉 Player {winner} Wins! 🎉
          </motion.h3>
        ) : (
          <h3 className="text-xl text-white">
            Current Player: <span className={isXNext ? 'text-cyan-400' : 'text-purple-400'}>
              {isXNext ? 'X' : 'O'}
            </span>
          </h3>
        )}
      </div>

      <div className="grid grid-cols-3 gap-2 max-w-xs mx-auto mb-6">
        {board.map((cell, index) => (
          <motion.button
            key={index}
            className="w-20 h-20 bg-slate-700 border-2 border-purple-500/30 rounded-lg text-2xl font-bold hover:bg-slate-600 transition-colors"
            onClick={() => handleClick(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={cell === 'X' ? 'text-cyan-400' : 'text-purple-400'}>
              {cell}
            </span>
          </motion.button>
        ))}
      </div>

      <Button onClick={resetGame} className="bg-gradient-to-r from-cyan-500 to-purple-500">
        <RotateCcw size={16} className="mr-2" />
        Reset Game
      </Button>
    </div>
  );
};

export default TicTacToe;
