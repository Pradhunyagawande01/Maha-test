import React, { useState, useEffect, useRef } from "react";
import {
  Gamepad2, Trophy, Star, Zap, Crown, 
  Target, Joystick, Cpu, Sparkles, Coins
} from "lucide-react";
import SectionTitle from '../Components/SectionTitle';

const PixelParticle = ({ isActive }) => {
  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#F9CA24', '#F0932B', '#EB4D4B', '#6C5CE7', '#00D2D3'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const size = Math.random() > 0.5 ? 8 : 16; // Only 8px or 16px sizes for pixel effect
  
  return (
    <div
      className={`absolute transition-all duration-1000 pixel-particle ${
        isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"
      }`}
      style={{
        backgroundColor: randomColor,
        width: `${size}px`,
        height: `${size}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animation: isActive ? `pixelFloat 2s infinite, pixelBlink 1s infinite` : "none",
        animationDelay: `${Math.random() * 2}s`,
        imageRendering: 'pixelated',
        imageRendering: '-moz-crisp-edges',
        imageRendering: 'crisp-edges',
      }}
    />
  );
};

const PrizeCard = ({ position, amount, icon: Icon, description, delay, tier }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [glitchOffset, setGlitchOffset] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  // Tier colors (8-bit palette)
  const tierStyles = {
    gold: {
      primary: '#FFD700',
      secondary: '#FFA500',
      bg: '#1A1A00',
      border: '#FFD700',
      shadow: '#FFD700',
      text: '#FFFFFF'
    },
    silver: {
      primary: '#C0C0C0',
      secondary: '#A0A0A0',
      bg: '#1A1A1A',
      border: '#C0C0C0',
      shadow: '#C0C0C0',
      text: '#FFFFFF'
    },
    bronze: {
      primary: '#CD7F32',
      secondary: '#A0522D',
      bg: '#1A0F00',
      border: '#CD7F32',
      shadow: '#CD7F32',
      text: '#FFFFFF'
    },
    special: {
      primary: '#FF6B6B',
      secondary: '#cc2424',
      bg: '#0F0F1A',
      border: '#FF6B6B',
      shadow: '#FF6B6B',
      text: '#FFFFFF'
    }
  };

  const currentTier = tierStyles[tier] || tierStyles.special;

  // Glitch effect
  useEffect(() => {
    let glitchInterval;
    if (isHovered) {
      glitchInterval = setInterval(() => {
        setGlitchOffset({
          x: Math.random() * 4 - 2,
          y: Math.random() * 4 - 2
        });
        setTimeout(() => setGlitchOffset({ x: 0, y: 0 }), 50);
      }, 100);
    }
    return () => clearInterval(glitchInterval);
  }, [isHovered]);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3, rootMargin: "50px" }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  // Counter animation
  useEffect(() => {
    let frameId;
    if (isVisible) {
      const animate = () => {
        setCount((prev) => {
          const next = prev + Math.ceil(amount / 100);
          if (next >= amount) {
            return amount;
          }
          frameId = requestAnimationFrame(animate);
          return next;
        });
      };
      frameId = requestAnimationFrame(animate);
    }
    return () => cancelAnimationFrame(frameId);
  }, [isVisible, amount]);

  return (
    <div
      ref={cardRef}
      className="pixel-card-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`pixel-card ${isVisible ? 'visible' : ''} ${isHovered ? 'hovered' : ''}`}
        style={{
          '--primary-color': currentTier.primary,
          '--secondary-color': currentTier.secondary,
          '--bg-color': currentTier.bg,
          '--border-color': currentTier.border,
          '--shadow-color': currentTier.shadow,
          '--text-color': currentTier.text,
          transform: `translate(${glitchOffset.x}px, ${glitchOffset.y}px) scale(${isVisible ? 1 : 0.8})`,
          transitionDelay: `${delay}s`
        }}
      >
        {/* Pixel border decorations */}
        <div className="pixel-corners">
          <div className="pixel-corner top-left"></div>
          <div className="pixel-corner top-right"></div>
          <div className="pixel-corner bottom-left"></div>
          <div className="pixel-corner bottom-right"></div>
        </div>

        {/* Scanlines */}
        <div className="scanlines"></div>

        {/* Particles */}
        {isVisible && [...Array(8)].map((_, i) => (
          <PixelParticle key={i} isActive={isHovered} />
        ))}

        <div className="pixel-content">
          {/* Icon container */}
          <div className="pixel-icon-container">
            <div className="pixel-icon-bg"></div>
            <Icon className="pixel-icon" />
          </div>

          {/* Title */}
          <div className="pixel-title-container">
            <h3 className="pixel-title">{position}</h3>
            {tier === 'gold' && <div className="pixel-crown">👑</div>}
          </div>

          {/* Amount */}
          <div className="pixel-amount-container">
            <div className="pixel-amount">₹{count.toLocaleString()}</div>
            <div className="pixel-coin">🪙</div>
          </div>

          {/* Description */}
          {description && (
            <p className="pixel-description">{description}</p>
          )}

          {/* Pixel dots decoration */}
          <div className="pixel-dots">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="pixel-dot" style={{ animationDelay: `${i * 0.2}s` }}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Prize = () => {
  const [backgroundPixels, setBackgroundPixels] = useState([]);

  useEffect(() => {
    // Generate random background pixels
    const pixels = [];
    for (let i = 0; i < 100; i++) {
      pixels.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() > 0.7 ? 16 : 8,
        color: ['#FF6B6B', '#F9CA24', '#F9CA24'][Math.floor(Math.random() * 4)],
        delay: Math.random() * 5
      });
    }
    setBackgroundPixels(pixels);
  }, []);

  return (
    <div className="pixel-prize-container">
      <div className="pixel-content-wrapper">
        <SectionTitle centered={true} containerClass="mb-10 text-lg">
          <span > PRIZES </span>
        </SectionTitle>

        {/* Winner */}
        <div className="prize-row single">
          <PrizeCard
            position="🥇 GRAND CHAMPION"
            amount={15000}
            icon={Trophy}
            tier="gold"
            delay={0}
          />
        </div>

        {/* Runners-up */}
        <div className="prize-row double">
          <PrizeCard
            position="🥈 RUNNER-UP"
            amount={10000}
            icon={Star}
            tier="silver"
            delay={0.2}
          />
          <PrizeCard
            position="🥉 2ᴺᴰ RUNNER-UP"
            amount={7000}
            icon={Zap}
            tier="bronze"
            delay={0.4}
          />
        </div>

        {/* Special Categories */}
        <div className="prize-row double">
          <PrizeCard
            position=" BEST BEGINNER TEAM"
            amount={4000}
            icon={Gamepad2}
            tier="special"
            delay={0.6}
          />
          <PrizeCard
            position="👑 BEST GIRLS TEAM"
            amount={4000}
            icon={Crown}
            tier="special"
            delay={0.8}
          />
        </div>

        
        
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        
       
        
       
        
        .bg-pixel {
          position: absolute;
          image-rendering: pixelated;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
          animation: pixelTwinkle 3s infinite;
        }
        
        .pixel-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px);
          background-size: 32px 32px;
          animation: gridScroll 20s linear infinite;
          pointer-events: none;
        }
        
        .pixel-content-wrapper {
          position: relative;
          z-index: 10;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .pixel-main-title {
          font-family: 'Press Start 2P', monospace;
          font-size: 2rem;
          color: #00ffff;
          text-shadow: 
            2px 2px 0px #ff00ff,
            4px 4px 0px #ffff00,
            6px 6px 0px #ff0000;
          animation: titleGlow 2s infinite alternate;
          image-rendering: pixelated;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
        }
        
        .prize-row {
          display: grid;
          gap: 2rem;
          margin-bottom: 3rem;
        }
        
        .prize-row.single {
          grid-template-columns: 1fr;
          max-width: 600px;
          margin: 0 auto 3rem auto;
        }
        
        .prize-row.double {
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }
        
        .pixel-card-container {
          perspective: 1000px;
        }
        
        .pixel-card {
          background: var(--bg-color);
          border: 4px solid var(--border-color);
          padding: 2rem;
          position: relative;
          transition: all 0.3s ease;
          image-rendering: pixelated;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
          box-shadow: 
            0 0 20px var(--shadow-color),
            inset 0 0 20px rgba(255,255,255,0.1);
          opacity: 0;
          transform: scale(0.8);
        }
        
        .pixel-card.visible {
          opacity: 1;
          transform: scale(1);
        }
        
        .pixel-card.hovered {
          transform: scale(1.05);
          box-shadow: 
            0 0 40px var(--shadow-color),
            inset 0 0 40px rgba(255,255,255,0.2);
        }
        
        .pixel-corners {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        
        .pixel-corner {
          position: absolute;
          width: 16px;
          height: 16px;
          background: var(--primary-color);
          image-rendering: pixelated;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
        }
        
        .pixel-corner.top-left { top: -8px; left: -8px; }
        .pixel-corner.top-right { top: -8px; right: -8px; }
        .pixel-corner.bottom-left { bottom: -8px; left: -8px; }
        .pixel-corner.bottom-right { bottom: -8px; right: -8px; }
        
        .scanlines {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            transparent 0%,
            rgba(0,255,255,0.1) 50%,
            transparent 100%
          );
          animation: scanlineMove 2s infinite;
          pointer-events: none;
        }
        
        .pixel-content {
          position: relative;
          z-index: 10;
          text-align: center;
          color: var(--text-color);
        }
        
        .pixel-icon-container {
          position: relative;
          display: inline-block;
          margin-bottom: 1rem;
        }
        
        .pixel-icon-bg {
          position: absolute;
          inset: -8px;
          background: var(--primary-color);
          border: 4px solid var(--secondary-color);
          image-rendering: pixelated;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
        }
        
        .pixel-icon {
          position: relative;
          z-index: 10;
          width: 3rem;
          height: 3rem;
          color: var(--bg-color);
          filter: contrast(2);
        }
        
        .pixel-title-container {
          position: relative;
          margin-bottom: 1rem;
        }
        
        .pixel-title {
          font-family: 'Press Start 2P', monospace;
          font-size: 1.2rem;
          color: var(--primary-color);
          text-shadow: 2px 2px 0px var(--secondary-color);
          margin-bottom: 0.5rem;
          image-rendering: pixelated;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
        }
        
        .pixel-crown {
          position: absolute;
          top: -2rem;
          left: 50%;
          transform: translateX(-50%);
          font-size: 1.5rem;
          animation: crownBounce 1s infinite;
        }
        
        .pixel-amount-container {
          position: relative;
          margin-bottom: 1rem;
        }
        
        .pixel-amount {
          font-family: 'Press Start 2P', monospace;
          font-size: 2rem;
          color: var(--primary-color);
          text-shadow: 
            2px 2px 0px var(--secondary-color),
            4px 4px 0px rgba(0,0,0,0.5);
          animation: amountPulse 2s infinite;
          image-rendering: pixelated;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
        }
        
        .pixel-coin {
          position: absolute;
          top: -0.5rem;
          right: -2rem;
          font-size: 1.5rem;
          animation: coinSpin 2s infinite;
        }
        
        .pixel-description {
          font-family: 'Press Start 2P', monospace;
          font-size: 0.7rem;
          color: var(--secondary-color);
          margin-bottom: 1rem;
          image-rendering: pixelated;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
        }
        
        .pixel-dots {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
        }
        
        .pixel-dot {
          width: 8px;
          height: 8px;
          background: var(--primary-color);
          animation: dotBlink 1s infinite;
          image-rendering: pixelated;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
        }
        
        .pixel-footer {
          text-align: center;
          margin-top: 3rem;
        }
        
        .pixel-footer-content {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 2rem;
          background: rgba(0,0,0,0.8);
          border: 4px solid #00ffff;
          image-rendering: pixelated;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
        }
        
        .pixel-footer-icon {
          width: 2rem;
          height: 2rem;
          color: #00ffff;
          animation: iconPulse 1s infinite;
        }
        
        .pixel-footer-text {
          font-family: 'Press Start 2P', monospace;
          font-size: 1rem;
          color: #00ffff;
          text-shadow: 2px 2px 0px #ff00ff;
          image-rendering: pixelated;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
        }
        
        .pixel-particle {
          image-rendering: pixelated;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
          pointer-events: none;
        }
        
        @keyframes pixelFloat {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(20px, -20px); }
          50% { transform: translate(-20px, -40px); }
          75% { transform: translate(-40px, -20px); }
        }
        
        @keyframes pixelBlink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0.3; }
        }
        
        @keyframes pixelTwinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        @keyframes crownBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-10px); }
        }
        
        @keyframes amountPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        @keyframes coinSpin {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
        
        @keyframes dotBlink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0.3; }
        }
        
        @keyframes iconPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        
        @media (max-width: 768px) {
          .pixel-main-title {
            font-size: 1.5rem;
          }
          
          .pixel-title {
            font-size: 0.9rem;
          }
          
          .pixel-amount {
            font-size: 1.5rem;
          }
          
          .prize-row.double {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Prize;