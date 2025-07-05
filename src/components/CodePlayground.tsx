
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, RotateCcw, Copy, Code, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const CodePlayground = () => {
  const [htmlCode, setHtmlCode] = useState(`<div class="cosmic-card">
  <h2>Cosmic Card</h2>
  <p>Welcome to the galaxy!</p>
  <button class="glow-btn">Explore</button>
</div>`);

  const [cssCode, setCssCode] = useState(`.cosmic-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  color: white;
  box-shadow: 0 0 30px rgba(102, 126, 234, 0.5);
}

.glow-btn {
  background: transparent;
  border: 2px solid #00ffff;
  color: #00ffff;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.glow-btn:hover {
  background: #00ffff;
  color: #000;
  box-shadow: 0 0 20px #00ffff;
}`);

  const [jsCode, setJsCode] = useState(`document.querySelector('.glow-btn').addEventListener('click', function() {
  this.textContent = this.textContent === 'Explore' ? 'Discovered!' : 'Explore';
  
  // Add particle effect
  for(let i = 0; i < 10; i++) {
    const particle = document.createElement('div');
    particle.style.cssText = \`
      position: absolute;
      width: 4px;
      height: 4px;
      background: #00ffff;
      border-radius: 50%;
      pointer-events: none;
      animation: particle \${Math.random() * 2 + 1}s ease-out forwards;
    \`;
    this.parentNode.appendChild(particle);
    setTimeout(() => particle.remove(), 2000);
  }
});

// Add CSS animation
const style = document.createElement('style');
style.textContent = \`
  @keyframes particle {
    0% { transform: translate(0, 0) scale(1); opacity: 1; }
    100% { transform: translate(\${Math.random() * 200 - 100}px, \${Math.random() * 200 - 100}px) scale(0); opacity: 0; }
  }
\`;
document.head.appendChild(style);`);

  const [output, setOutput] = useState('');

  const runCode = () => {
    const combinedCode = `
      <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>
          ${htmlCode}
          <script>${jsCode}</script>
        </body>
      </html>
    `;
    setOutput(combinedCode);
  };

  const resetCode = () => {
    setHtmlCode(`<div class="cosmic-card">
  <h2>Cosmic Card</h2>
  <p>Welcome to the galaxy!</p>
  <button class="glow-btn">Explore</button>
</div>`);
    setCssCode(`.cosmic-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  color: white;
  box-shadow: 0 0 30px rgba(102, 126, 234, 0.5);
}

.glow-btn {
  background: transparent;
  border: 2px solid #00ffff;
  color: #00ffff;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.glow-btn:hover {
  background: #00ffff;
  color: #000;
  box-shadow: 0 0 20px #00ffff;
}`);
    setJsCode(`document.querySelector('.glow-btn').addEventListener('click', function() {
  this.textContent = this.textContent === 'Explore' ? 'Discovered!' : 'Explore';
  
  // Add particle effect
  for(let i = 0; i < 10; i++) {
    const particle = document.createElement('div');
    particle.style.cssText = \`
      position: absolute;
      width: 4px;
      height: 4px;
      background: #00ffff;
      border-radius: 50%;
      pointer-events: none;
      animation: particle \${Math.random() * 2 + 1}s ease-out forwards;
    \`;
    this.parentNode.appendChild(particle);
    setTimeout(() => particle.remove(), 2000);
  }
});

// Add CSS animation
const style = document.createElement('style');
style.textContent = \`
  @keyframes particle {
    0% { transform: translate(0, 0) scale(1); opacity: 1; }
    100% { transform: translate(\${Math.random() * 200 - 100}px, \${Math.random() * 200 - 100}px) scale(0); opacity: 0; }
  }
\`;
document.head.appendChild(style);`);
  };

  const copyCode = () => {
    const fullCode = `HTML:\n${htmlCode}\n\nCSS:\n${cssCode}\n\nJS:\n${jsCode}`;
    navigator.clipboard.writeText(fullCode);
  };

  useEffect(() => {
    runCode();
  }, [htmlCode, cssCode, jsCode]);

  return (
    <section id="playground" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Interactive Code Playground
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experiment with cosmic code in real-time. Edit, run, and see the magic happen instantly!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Code Editors */}
          <div className="space-y-6">
            {/* HTML Editor */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 border border-purple-500/20">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Code className="text-orange-400" size={20} />
                    <h3 className="text-white font-semibold">HTML</h3>
                  </div>
                  <textarea
                    value={htmlCode}
                    onChange={(e) => setHtmlCode(e.target.value)}
                    className="w-full h-32 bg-slate-900 text-white p-3 rounded border border-gray-600 font-mono text-sm resize-none focus:border-cyan-400 focus:outline-none"
                    spellCheck={false}
                  />
                </CardContent>
              </Card>
            </motion.div>

            {/* CSS Editor */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 border border-purple-500/20">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Code className="text-blue-400" size={20} />
                    <h3 className="text-white font-semibold">CSS</h3>
                  </div>
                  <textarea
                    value={cssCode}
                    onChange={(e) => setCssCode(e.target.value)}
                    className="w-full h-48 bg-slate-900 text-white p-3 rounded border border-gray-600 font-mono text-sm resize-none focus:border-cyan-400 focus:outline-none"
                    spellCheck={false}
                  />
                </CardContent>
              </Card>
            </motion.div>

            {/* JavaScript Editor */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 border border-purple-500/20">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Code className="text-yellow-400" size={20} />
                    <h3 className="text-white font-semibold">JavaScript</h3>
                  </div>
                  <textarea
                    value={jsCode}
                    onChange={(e) => setJsCode(e.target.value)}
                    className="w-full h-48 bg-slate-900 text-white p-3 rounded border border-gray-600 font-mono text-sm resize-none focus:border-cyan-400 focus:outline-none"
                    spellCheck={false}
                  />
                </CardContent>
              </Card>
            </motion.div>

            {/* Control Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <Button
                onClick={runCode}
                className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600"
              >
                <Play size={16} className="mr-2" />
                Run Code
              </Button>
              <Button
                onClick={resetCode}
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
              >
                <RotateCcw size={16} className="mr-2" />
                Reset
              </Button>
              <Button
                onClick={copyCode}
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white"
              >
                <Copy size={16} className="mr-2" />
                Copy Code
              </Button>
            </motion.div>
          </div>

          {/* Preview Output */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 border border-purple-500/20 h-full">
              <CardContent className="p-4 h-full">
                <div className="flex items-center gap-2 mb-3">
                  <Monitor className="text-green-400" size={20} />
                  <h3 className="text-white font-semibold">Live Preview</h3>
                </div>
                <div className="bg-white rounded border border-gray-600 h-[calc(100%-2rem)] relative overflow-hidden">
                  <iframe
                    srcDoc={output}
                    className="w-full h-full border-none"
                    title="Code Preview"
                    sandbox="allow-scripts allow-same-origin"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Floating Code Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-cyan-400/20 text-xs font-mono"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0, 1, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: Math.random() * 8 + 4,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            >
              {['<div>', '</div>', '{', '}', '()', '[]'][Math.floor(Math.random() * 6)]}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-10 left-10 text-purple-400/10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Code size={60} />
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 right-10 text-cyan-400/10">
        <motion.div
          animate={{ rotate: -360, scale: [1, 1.2, 1] }}
          transition={{ 
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity }
          }}
        >
          <Monitor size={80} />
        </motion.div>
      </div>
    </section>
  );
};

export default CodePlayground;
