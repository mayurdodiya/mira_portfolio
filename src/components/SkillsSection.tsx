
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Server, Smartphone, Palette } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Globe size={32} />,
      color: 'from-cyan-500 to-blue-500',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 92 }
      ]
    },
    {
      title: 'Backend',
      icon: <Server size={32} />,
      color: 'from-green-500 to-teal-500',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Express', level: 85 },
        { name: 'Python', level: 82 },
        { name: 'GraphQL', level: 78 }
      ]
    },
    {
      title: 'Database',
      icon: <Database size={32} />,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'MongoDB', level: 90 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'Redis', level: 75 },
        { name: 'Firebase', level: 80 }
      ]
    },
    {
      title: 'Mobile',
      icon: <Smartphone size={32} />,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'React Native', level: 82 },
        { name: 'Flutter', level: 75 },
        { name: 'iOS', level: 70 },
        { name: 'Android', level: 72 }
      ]
    }
  ];

  const technologies = [
    { name: 'React', icon: '⚛️', delay: 0 },
    { name: 'Node.js', icon: '🟢', delay: 0.2 },
    { name: 'MongoDB', icon: '🍃', delay: 0.4 },
    { name: 'TypeScript', icon: '🔷', delay: 0.6 },
    { name: 'Next.js', icon: '▲', delay: 0.8 },
    { name: 'Python', icon: '🐍', delay: 1.0 },
    { name: 'Docker', icon: '🐋', delay: 1.2 },
    { name: 'AWS', icon: '☁️', delay: 1.4 }
  ];

  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Animated Activities
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover my cosmic arsenal of technologies and skills floating through the digital universe
          </p>
        </motion.div>

        {/* Rotating Tech Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative mb-20"
        >
          <div className="relative w-80 h-80 mx-auto">
            <motion.div
              className="absolute inset-0 border-2 border-purple-500/30 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-8 border border-cyan-500/20 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            
            {technologies.map((tech, index) => {
              const angle = (index * 360) / technologies.length;
              const radius = 120;
              const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius;
              const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius;
              
              return (
                <motion.div
                  key={tech.name}
                  className="absolute w-16 h-16 bg-gradient-to-br from-slate-800 to-purple-900 rounded-full border border-purple-500/40 flex items-center justify-center cursor-pointer"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: tech.delay, duration: 0.5 }}
                  whileHover={{ 
                    scale: 1.2, 
                    boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)',
                    transition: { duration: 0.2 }
                  }}
                  animate={{
                    rotate: 360,
                    y: [0, -10, 0]
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }
                  }}
                >
                  <span className="text-2xl">{tech.icon}</span>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    {tech.name}
                  </div>
                </motion.div>
              );
            })}
            
            {/* Central Core */}
            <motion.div
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center"
              animate={{
                scale: [1, 1.1, 1],
                boxShadow: [
                  '0 0 20px rgba(168, 85, 247, 0.3)',
                  '0 0 40px rgba(168, 85, 247, 0.6)',
                  '0 0 20px rgba(168, 85, 247, 0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Code className="text-white" size={32} />
            </motion.div>
          </div>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 border border-purple-500/20 rounded-lg p-6 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <motion.div
                  className={`w-12 h-12 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="text-white">{category.icon}</div>
                </motion.div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </section>
  );
};

export default SkillsSection;
