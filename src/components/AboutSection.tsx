
import React from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, GraduationCap, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'TechCorp Solutions',
      period: '2022 - Present',
      description: 'Leading frontend development for enterprise applications, mentoring junior developers, and implementing modern React architectures.'
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations',
      period: '2020 - 2022',
      description: 'Developed scalable web applications using React, Node.js, and MongoDB. Collaborated with cross-functional teams to deliver high-quality products.'
    },
    {
      title: 'Software Developer',
      company: 'StartupXYZ',
      period: '2019 - 2020',
      description: 'Built responsive web applications and RESTful APIs. Worked in an agile environment with rapid iteration and deployment cycles.'
    }
  ];

  const achievements = [
    { icon: '🏆', title: 'Best Developer Award 2023', description: 'Recognition for outstanding contribution to project success' },
    { icon: '🚀', title: '15+ Projects Delivered', description: 'Successfully completed diverse web and mobile applications' },
    { icon: '👥', title: 'Team Leadership', description: 'Led a team of 5 developers on multiple high-impact projects' },
    { icon: '📈', title: 'Performance Optimization', description: 'Improved application performance by 60% through code optimization' }
  ];

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Journey through my professional cosmos and discover the story behind the code
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Astronaut Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="relative mx-auto lg:mx-0 w-80 h-80 mb-8">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div
                className="absolute inset-4 bg-gradient-to-br from-slate-800 to-purple-900 rounded-full border-4 border-cyan-400/30 flex items-center justify-center overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-8xl">👨‍🚀</div>
              </motion.div>
              
              {/* Floating particles around avatar */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                  style={{
                    left: `${20 + Math.cos(i * 45 * Math.PI / 180) * 160}px`,
                    top: `${20 + Math.sin(i * 45 * Math.PI / 180) * 160}px`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-white mb-4 flex items-center">
                <User className="mr-3 text-cyan-400" size={32} />
                Professional Journey
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                I'm a passionate Software IT Developer with 5+ years of experience crafting digital solutions 
                that bridge the gap between imagination and reality. My journey in the cosmos of code began 
                with a simple "Hello, World!" and has evolved into creating complex, scalable applications.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community. I believe in writing clean, 
                maintainable code that not only works but inspires.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-slate-800/50 to-cyan-900/30 p-4 rounded-lg border border-cyan-500/20">
                <div className="text-2xl font-bold text-cyan-400">50+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 p-4 rounded-lg border border-purple-500/20">
                <div className="text-2xl font-bold text-purple-400">5+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center justify-center">
            <Briefcase className="mr-3 text-cyan-400" size={32} />
            Professional Experience
          </h3>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 border border-purple-500/20 hover:border-cyan-400/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                        <p className="text-cyan-400">{exp.company}</p>
                      </div>
                      <div className="text-gray-400 text-sm mt-2 md:mt-0">{exp.period}</div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center justify-center">
            <Award className="mr-3 text-yellow-400" size={32} />
            Key Achievements
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-slate-800/50 to-yellow-900/30 border border-yellow-500/20 rounded-lg p-6 text-center hover:border-yellow-400/40 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h4 className="text-lg font-bold text-white mb-2">{achievement.title}</h4>
                <p className="text-gray-400 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
