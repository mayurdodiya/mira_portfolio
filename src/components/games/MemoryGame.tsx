
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MemoryGame = () => {
  const [cards, setCards] = useState<{ id: number; value: string; isFlipped: boolean; isMatched: boolean }[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);

  const cardValues = ['🚀', '⭐', '🌌', '🛸', '🌙', '💫', '🌍', '☄️'];

  const initializeGame = () => {
    const shuffledCards = [...cardValues, ...cardValues]
      .sort(() => Math.random() - 0.5)
      .map((value, index) => ({
        id: index,
        value,
        isFlipped: false,
        isMatched: false
      }));
    
    setCards(shuffledCards);
    setFlippedCards([]);
    setMoves(0);
    setMatches(0);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      if (cards[first].value === cards[second].value) {
        setCards(prev => prev.map(card => 
          card.id === first || card.id === second 
            ? { ...card, isMatched: true }
            : card
        ));
        setMatches(prev => prev + 1);
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          setCards(prev => prev.map(card => 
            card.id === first || card.id === second 
              ? { ...card, isFlipped: false }
              : card
          ));
          setFlippedCards([]);
        }, 1000);
      }
      setMoves(prev => prev + 1);
    }
  }, [flippedCards, cards]);

  const handleCardClick = (id: number) => {
    if (flippedCards.length === 2 || cards[id].isFlipped || cards[id].isMatched) return;

    setCards(prev => prev.map(card => 
      card.id === id ? { ...card, isFlipped: true } : card
    ));
    setFlippedCards(prev => [...prev, id]);
  };

  const isGameComplete = matches === 8;

  return (
    <div className="text-center">
      <div className="flex justify-between items-center mb-6">
        <div className="text-white">Moves: {moves}</div>
        <div className="text-white">Matches: {matches}/8</div>
      </div>

      {isGameComplete && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="mb-4 text-2xl font-bold text-cyan-400"
        >
          🎉 Congratulations! You won in {moves} moves! 🎉
        </motion.div>
      )}

      <div className="grid grid-cols-4 gap-2 max-w-md mx-auto mb-6">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className="w-16 h-16 cursor-pointer"
            onClick={() => handleCardClick(card.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="w-full h-full relative preserve-3d"
              animate={{ rotateY: card.isFlipped || card.isMatched ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Star className="text-white" size={20} />
              </div>
              <div className="absolute inset-0 backface-hidden rotateY-180 bg-slate-700 rounded-lg flex items-center justify-center text-2xl border-2 border-purple-500/30">
                {card.value}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <Button onClick={initializeGame} className="bg-gradient-to-r from-purple-500 to-pink-500">
        <RotateCcw size={16} className="mr-2" />
        New Game
      </Button>
    </div>
  );
};

export default MemoryGame;
