
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const SpaceshipCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const trailRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    // Add hover detection for interactive elements
    const interactiveElements = document.querySelectorAll(
      'button, a, [role="button"], input, textarea, select, .interactive, iframe, canvas'
    );
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Create cursor trail effect
    const trail = [];
    for (let i = 0; i < 8; i++) {
      const dot = document.createElement('div');
      dot.className = `fixed pointer-events-none z-[9999] w-1 h-1 bg-cyan-400/30 rounded-full`;
      document.body.appendChild(dot);
      trail.push(dot);
    }
    trailRef.current = trail;

    let animationId: number;
    const animateTrail = () => {
      trail.forEach((dot, index) => {
        gsap.to(dot, {
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
          duration: 0.1 + index * 0.05,
          ease: "power2.out"
        });
      });
      animationId = requestAnimationFrame(animateTrail);
    };
    animateTrail();

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });

      trail.forEach(dot => document.body.removeChild(dot));
      cancelAnimationFrame(animationId);
    };
  }, [mousePosition.x, mousePosition.y]);

  return (
    <>
      {/* Main Crosshair Cursor */}
      <motion.div
        className="fixed pointer-events-none z-[10000] mix-blend-difference"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
        }}
        animate={{
          scale: isHovering ? 1.5 : isClicking ? 0.8 : 1,
          rotate: isClicking ? 45 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
      >
        {/* Spaceship Reticle Design */}
        <div className="relative w-8 h-8">
          {/* Central dot */}
          <div className="absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-cyan-400 rounded-full" />
          
          {/* Corner brackets */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-400" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-400" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400" />
          
          {/* Scanning lines */}
          <motion.div
            className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
            animate={{ scaleX: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
        </div>
      </motion.div>

      {/* Outer Ring */}
      <motion.div
        className="fixed pointer-events-none z-[9999] border-2 border-cyan-400/30 rounded-full"
        style={{
          left: mousePosition.x - 32,
          top: mousePosition.y - 32,
          width: 64,
          height: 64,
        }}
        animate={{
          scale: isHovering ? 1.8 : isClicking ? 0.6 : 1,
          rotate: 360,
          opacity: isHovering ? 0.8 : 0.3,
        }}
        transition={{
          scale: { type: "spring", stiffness: 300, damping: 20 },
          rotate: { duration: 8, repeat: Infinity, ease: "linear" },
          opacity: { duration: 0.2 }
        }}
      />

      {/* Hover Glow Effect */}
      {isHovering && (
        <motion.div
          className="fixed pointer-events-none z-[9998] bg-cyan-400/10 rounded-full blur-xl"
          style={{
            left: mousePosition.x - 50,
            top: mousePosition.y - 50,
            width: 100,
            height: 100,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </>
  );
};

export default SpaceshipCursor;
