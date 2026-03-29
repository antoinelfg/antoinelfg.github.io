import { motion } from "motion/react";
import { useEffect, useRef } from "react";

// Geometry-aware: colorful geometrical figures
export function GeometryBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg className="w-full h-full opacity-50" viewBox="0 0 800 600">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--orange)" stopOpacity="0.9" />
            <stop offset="50%" stopColor="var(--yellow)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--red)" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--blue)" stopOpacity="0.9" />
            <stop offset="50%" stopColor="var(--purple)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--green)" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        
        {/* Animated geometric shapes */}
        <motion.circle
          cx="150"
          cy="150"
          r="80"
          fill="url(#grad1)"
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        <motion.rect
          x="400"
          y="100"
          width="120"
          height="120"
          fill="url(#grad2)"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        
        <motion.polygon
          points="600,400 700,550 500,550"
          fill="url(#grad1)"
          opacity="0.8"
          initial={{ scale: 0.8 }}
          animate={{ scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.ellipse
          cx="200"
          cy="450"
          rx="100"
          ry="60"
          fill="url(#grad2)"
          opacity="0.9"
          initial={{ rotate: 0 }}
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Additional decorative shapes */}
        <motion.path
          d="M 650 50 L 750 50 L 700 150 Z"
          fill="url(#grad1)"
          opacity="0.7"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}

// Anisotropic: dynamic ball moving down a slope
export function AnisotropicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 800;
    canvas.height = 600;

    let animationId: number;
    let ballX = 100;
    let ballY = 100;
    let velocityX = 2;
    let velocityY = 0;
    const gravity = 0.3;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw slope with higher opacity
      ctx.strokeStyle = "rgba(139, 92, 246, 0.7)";
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.moveTo(50, 150);
      ctx.quadraticCurveTo(400, 350, 750, 500);
      ctx.stroke();

      // Update ball physics
      velocityY += gravity;
      ballX += velocityX;
      ballY += velocityY;

      // Calculate slope position
      const slopeY = 150 + ((ballX - 50) / 700) * 350;
      
      if (ballY > slopeY - 20) {
        ballY = slopeY - 20;
        velocityY = -velocityY * 0.7; // Bounce with damping
        velocityX *= 0.98;
      }

      // Reset if ball goes off screen
      if (ballX > 750 || ballY > 600) {
        ballX = 100;
        ballY = 100;
        velocityX = 2;
        velocityY = 0;
      }

      // Draw ball with brighter gradient
      const gradient = ctx.createRadialGradient(ballX, ballY, 0, ballX, ballY, 20);
      gradient.addColorStop(0, "rgba(34, 197, 94, 1)");
      gradient.addColorStop(0.5, "rgba(59, 130, 246, 1)");
      gradient.addColorStop(1, "rgba(139, 92, 246, 0.9)");

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(ballX, ballY, 20, 0, Math.PI * 2);
      ctx.fill();

      // Motion trail with higher opacity
      ctx.fillStyle = "rgba(59, 130, 246, 0.3)";
      ctx.beginPath();
      ctx.arc(ballX - velocityX * 2, ballY - velocityY * 2, 15, 0, Math.PI * 2);
      ctx.fill();

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full opacity-60" />
    </div>
  );
}

// Decision interfaces: music notes / orchestra
export function MusicNotesBackground() {
  const notes = ["♪", "♫", "♬", "♩", "♭", "♯"];
  
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 20 }).map((_, i) => {
        const randomNote = notes[Math.floor(Math.random() * notes.length)];
        const randomX = Math.random() * 100;
        const randomDelay = Math.random() * 5;
        const randomDuration = 10 + Math.random() * 10;
        
        return (
          <motion.div
            key={i}
            className="absolute text-6xl"
            style={{
              left: `${randomX}%`,
              top: "100%",
              color: i % 3 === 0 ? "var(--purple)" : i % 3 === 1 ? "var(--blue)" : "var(--orange)",
              opacity: 0.35
            }}
            animate={{
              y: [-100, -800],
              x: [0, (Math.random() - 0.5) * 100],
              rotate: [0, 360],
            }}
            transition={{
              duration: randomDuration,
              delay: randomDelay,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {randomNote}
          </motion.div>
        );
      })}
      
      {/* Staff lines with higher opacity */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`staff-${i}`}
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-[var(--purple)]/50 to-transparent"
          style={{ top: `${20 + i * 15}%` }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, delay: i * 0.2 }}
        />
      ))}
    </div>
  );
}