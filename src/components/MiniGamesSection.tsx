
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, GamepadIcon, Zap, Trophy, Sparkles } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import TicTacToe from '@/components/games/TicTacToe';
import MemoryGame from '@/components/games/MemoryGame';
import SnakeGame from '@/components/games/SnakeGame';

const MiniGamesSection = () => {
  const [activeGame, setActiveGame] = useState<string | null>(null);

  const games = [
    {
      id: 'tictactoe',
      title: 'Cosmic Tic Tac Toe',
      description: 'Classic Tic Tac Toe with a galactic twist',
      icon: <GamepadIcon size={32} />,
      color: 'from-cyan-500 to-blue-500',
      component: <TicTacToe />
    },
    {
      id: 'memory',
      title: 'Space Memory',
      description: 'Test your memory with cosmic cards',
      icon: <Zap size={32} />,
      color: 'from-purple-500 to-pink-500',
      component: <MemoryGame />
    },
    {
      id: 'snake',
      title: 'Stellar Snake',
      description: 'Guide your snake through the stars',
      icon: <Trophy size={32} />,
      color: 'from-green-500 to-teal-500',
      component: <SnakeGame />
    }
  ];

  return (
    <section id="games" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Mini Games
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Take a break and enjoy some interactive games in the cosmic playground
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group"
            >
              <Card className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 border border-purple-500/20 overflow-hidden backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${game.color} mb-6`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="text-white">
                      {game.icon}
                    </div>
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {game.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6">
                    {game.description}
                  </p>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        className={`w-full bg-gradient-to-r ${game.color} hover:opacity-90 text-white`}
                        onClick={() => setActiveGame(game.id)}
                      >
                        <Play size={16} className="mr-2" />
                        Play Now
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl bg-slate-900 border-purple-500/20">
                      <DialogHeader>
                        <DialogTitle className="text-2xl text-white">{game.title}</DialogTitle>
                      </DialogHeader>
                      <div className="mt-4">
                        {game.component}
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Interactive Animation Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.2, 1] }}
              transition={{ 
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity }
              }}
            >
              <Sparkles className="text-yellow-400" size={32} />
            </motion.div>
            <h3 className="text-3xl font-bold text-white">Interactive Cosmic Animations</h3>
            <motion.div
              animate={{ rotate: -360, y: [0, -10, 0] }}
              transition={{ 
                rotate: { duration: 6, repeat: Infinity, ease: "linear" },
                y: { duration: 3, repeat: Infinity }
              }}
            >
              <Sparkles className="text-purple-400" size={32} />
            </motion.div>
          </div>
          
          <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 border border-purple-500/20 rounded-lg p-8 backdrop-blur-sm relative overflow-hidden">
            {/* Cosmic Border Animation */}
            <div className="absolute inset-0 rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/50 to-cyan-400/0 animate-pulse" />
            </div>
            
            <div className="relative z-10">
              <iframe
                src="https://codepen.io/cassie-codes/embed/YzKpOYa?default-tab=result&theme-id=dark"
                style={{ 
                  width: '100%', 
                  height: '400px', 
                  border: 'none',
                  borderRadius: '8px',
                  background: '#000'
                }}
                title="Interactive Cosmic Animation Playground"
                allowFullScreen
              />
              <p className="text-gray-400 mt-4">
                🚀 Interact with this creative animation playground - try clicking and dragging to discover cosmic magic!
              </p>
            </div>

            {/* Floating Animation Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    x: [0, 20, -20, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: Math.random() * 6 + 4,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-10 left-10 text-green-400/10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        >
          <GamepadIcon size={80} />
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 right-10 text-purple-400/10">
        <motion.div
          animate={{ rotate: -360, scale: [1, 1.3, 1] }}
          transition={{ 
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity }
          }}
        >
          <Trophy size={60} />
        </motion.div>
      </div>
    </section>
  );
};

export default MiniGamesSection;
