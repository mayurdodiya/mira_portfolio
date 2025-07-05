
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Server, Smartphone, Palette } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const SkillsSection = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <Code size={32} />,
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      category: "Backend",
      icon: <Server size={32} />,
      skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      category: "Database",
      icon: <Database size={32} />,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Supabase"],
      color: "from-green-500 to-teal-500"
    },
    {
      category: "Web Technologies",
      icon: <Globe size={32} />,
      skills: ["REST APIs", "GraphQL", "WebSockets", "PWA", "SEO"],
      color: "from-pink-500 to-rose-500"
    },
    {
      category: "Mobile",
      icon: <Smartphone size={32} />,
      skills: ["React Native", "Expo", "Flutter", "iOS", "Android"],
      color: "from-orange-500 to-red-500"
    },
    {
      category: "Design",
      icon: <Palette size={32} />,
      skills: ["Figma", "Adobe XD", "Photoshop", "UI/UX", "Prototyping"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

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
            My Skills
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life in the digital cosmos
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <Card className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 border border-purple-500/20 overflow-hidden backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${skillGroup.color} mb-6`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="text-white">
                      {skillGroup.icon}
                    </div>
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {skillGroup.category}
                  </h3>
                  
                  <div className="space-y-3">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: skillIndex * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full" />
                        <span className="text-gray-300 hover:text-cyan-400 transition-colors">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating skill particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-10 left-10 text-purple-400/10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <Code size={80} />
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 right-10 text-cyan-400/10">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <Database size={60} />
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
