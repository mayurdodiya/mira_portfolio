
import React from 'react';
import { motion } from 'framer-motion';
import { useSpring, animated } from 'react-spring';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Galactic E-Commerce",
    description: "Full-stack e-commerce platform with cosmic design, featuring stellar user experience and interstellar payment processing.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://demo-ecommerce.com",
    githubUrl: "https://github.com/johndoe/ecommerce"
  },
  {
    id: 2,
    title: "AI Nebula Chat",
    description: "Advanced AI chat application with neural network responses, featuring real-time cosmic communication across the universe.",
    image: "https://images.unsplash.com/photo-1587560699334-bea93482d4dc?w=400&h=250&fit=crop",
    technologies: ["React", "Socket.io", "OpenAI", "Express"],
    liveUrl: "https://ai-chat-demo.com",
    githubUrl: "https://github.com/johndoe/ai-chat"
  },
  {
    id: 3,
    title: "Stellar Weather Hub",
    description: "Interactive space weather dashboard with real-time solar wind data, aurora predictions, and cosmic storm tracking.",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=250&fit=crop",
    technologies: ["React", "D3.js", "NASA API", "Three.js"],
    liveUrl: "https://space-weather.com",
    githubUrl: "https://github.com/johndoe/space-weather"
  },
  {
    id: 4,
    title: "Quantum Portfolio Tracker",
    description: "Cryptocurrency portfolio tracker with quantum-level precision, featuring real-time price updates and cosmic market analysis.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop",
    technologies: ["React", "Web3", "Chart.js", "CoinGecko API"],
    liveUrl: "https://crypto-tracker.com",
    githubUrl: "https://github.com/johndoe/crypto-tracker"
  },
  {
    id: 5,
    title: "Cosmic Task Manager",
    description: "Productivity application with stellar organization features, featuring orbital task tracking and galactic collaboration tools.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
    technologies: ["React", "Firebase", "Tailwind", "Framer Motion"],
    liveUrl: "https://cosmic-tasks.com",
    githubUrl: "https://github.com/johndoe/cosmic-tasks"
  },
  {
    id: 6,
    title: "Neural Network Visualizer",
    description: "Interactive 3D neural network visualization tool for understanding AI architectures in an immersive cosmic environment.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=250&fit=crop",
    technologies: ["React", "Three.js", "TensorFlow.js", "WebGL"],
    liveUrl: "https://neural-viz.com",
    githubUrl: "https://github.com/johndoe/neural-viz"
  }
];

const FloatingProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  
  const springProps = useSpring({
    transform: isHovered 
      ? 'translateY(-20px) rotateX(5deg) rotateY(5deg) scale(1.05)' 
      : `translateY(${Math.sin(Date.now() * 0.001 + index) * 10}px) rotateX(0deg) rotateY(0deg) scale(1)`,
    boxShadow: isHovered
      ? '0 25px 50px rgba(34, 211, 238, 0.3), 0 0 0 1px rgba(168, 85, 247, 0.4)'
      : '0 10px 30px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(168, 85, 247, 0.2)',
    config: { tension: 300, friction: 30 }
  });

  const orbitAnimation = useSpring({
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
    config: { duration: 20000 + index * 2000 },
    loop: true
  });

  return (
    <div className="relative group">
      {/* Floating orbital ring */}
      <animated.div
        style={orbitAnimation}
        className="absolute -inset-4 border border-cyan-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
      
      <animated.div
        style={springProps}
        className="bg-gradient-to-br from-slate-900/80 to-purple-900/40 backdrop-blur-lg border border-purple-500/30 rounded-2xl overflow-hidden cursor-pointer interactive transform-gpu"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Holographic border effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
        
        {/* Image section with cosmic overlay */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          
          {/* Floating particles on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </div>

        {/* Content section */}
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
            {project.title}
          </h3>
          
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Technology badges */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 rounded-full border border-cyan-500/30 backdrop-blur-sm"
                style={{ animationDelay: `${techIndex * 0.1}s` }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 pt-2">
            <Button
              className="flex-1 bg-gradient-to-r from-cyan-500/80 to-blue-500/80 hover:from-cyan-400 hover:to-blue-400 text-white border-0 backdrop-blur-sm"
              onClick={() => window.open(project.liveUrl, '_blank')}
            >
              <ExternalLink size={14} className="mr-2" />
              Live Preview
            </Button>
            <Button
              variant="outline"
              className="flex-1 border-purple-400/50 text-purple-300 hover:bg-purple-400/20 hover:text-white backdrop-blur-sm"
              onClick={() => window.open(project.githubUrl, '_blank')}
            >
              <Github size={14} className="mr-2" />
              View Code
            </Button>
          </div>
        </div>

        {/* Scanning line effect */}
        <motion.div
          className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100"
          animate={{
            y: [0, 300, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </animated.div>
    </div>
  );
};

const FloatingProjectCards: React.FC = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Cosmic Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore my digital cosmos - each project is a carefully crafted universe of code, 
            floating like satellites in the vast expanse of innovation.
          </p>
        </motion.div>

        {/* Floating project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 100, rotateX: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100 
              }}
              viewport={{ once: true }}
            >
              <FloatingProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FloatingProjectCards;
