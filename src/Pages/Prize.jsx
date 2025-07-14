import React, { useState, useEffect, useRef } from "react";
import {
  Compass, Anchor, Ship, Skull, Gem, 
  Sword, Map, Coins, Wind, Feather, Sparkles
} from "lucide-react";
import SectionTitle from '../Components/SectionTitle';


const TreasureParticle = ({ isActive }) => {
  const randomRotation = Math.random() * 360;
  const randomDelay = Math.random() * 2;
  const size = Math.random() * 8 + 4;

  return (
    <div
      className={`absolute rounded-full transition-all duration-1000 ${
        isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"
      }`}
      style={{
        background: `linear-gradient(${randomRotation}deg, #fbbf24, #f59e0b)`,
        animation: isActive
          ? `particleFloat 3s ${randomDelay}s infinite, particleFade 3s ${randomDelay}s infinite`
          : "none",
        width: `${size}px`,
        height: `${size}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    />
  );
};

const PrizeCard = ({ position, amount, icon: Icon, description, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "50px",
      }
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

  // Counter animation effect
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

  const handleMouseMove = (e) => {
    if (!cardRef.current || !isVisible) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientY - rect.top) / rect.height - 0.5;
    const y = (e.clientX - rect.left) / rect.width - 0.5;

    setRotation({
      x: x * 35,
      y: y * 35,
    });
  };

  return (
    <div
      ref={cardRef}
      className="perspective-1000 group"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setRotation({ x: 0, y: 0 });
      }}
    >
      <div
        className={`
          transform-gpu transition-all duration-700
          rounded-2xl p-4 sm:p-8 border-4
          relative overflow-hidden cursor-pointer
          ${isVisible ? "shadow-[0_0_50px_10px_rgba(245,158,11,0.3)]" : "shadow-none"}
          bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 shadow-xl
        `}
        style={{
          transform: isVisible
            ? `
              perspective(1000px)
              rotateX(${rotation.x}deg) 
              rotateY(${-rotation.y}deg)
              scale3d(${isHovered ? 1.1 : 1}, ${isHovered ? 1.1 : 1}, 1)
            `
            : "scale(0.8) rotateY(180deg)",
          transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
          transitionDelay: `${delay}s`
        }}
      >
        {isVisible && [...Array(10)].map((_, i) => (
          <TreasureParticle key={i} isActive={isHovered} />
        ))}

        <div
          className={`relative z-10 flex flex-col items-center text-center space-y-4 sm:space-y-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 rotate-0" : "opacity-0 rotate-180"
          }`}
        >
          <div className="p-5 bg-orange-600/90 rounded-full shadow-[0_0_40px_8px_rgba(245,158,11,0.4)] transform-gpu transition-all duration-500">
            <Icon
              className={`w-8 h-8 sm:w-10 sm:h-10 ${
                isVisible ? "text-orange-300 animate-pulse" : "text-orange-600"
              }`}
            />
          </div>

          <h3
            className={`text-xl sm:text-2xl font-bold ${
              isVisible ? "text-yellow-500" : "text-amber-900/0"
            }`}
            style={{ fontFamily: '"Pirata One", cursive' }}
          >
            {position}
          </h3>

          <div
            className={`transform-gpu transition-all duration-500 ${
              isHovered && isVisible ? "scale-110" : ""
            }`}
          >
            <div className="text-3xl sm:text-4xl font-bold text-white relative">
              ₹{count.toLocaleString()}
              <Sparkles
                className={`absolute -right-8 -top-4 w-6 h-6 ${
                  isVisible ? "text-yellow-400 animate-spin" : "text-amber-900/0"
                }`}
              />
            </div>
          </div>

          {description && (
            <p className={`text-sm sm:text-lg ${
              isVisible ? "text-amber-800" : "text-amber-900/0"
            }`}>
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const Prize = () => {
  const titleRef = useRef(null);
  const [isTitleVisible, setIsTitleVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsTitleVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center w-full bg-space-blue/30 p-[4vh]">


      <style>
        {`
          @keyframes particleFloat {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(50px, -50px) rotate(90deg); }
            50% { transform: translate(0, -100px) rotate(180deg); }
            75% { transform: translate(-50px, -50px) rotate(270deg); }
          }

          @keyframes particleFade {
            0%, 100% { opacity: 0; }
            50% { opacity: 1; }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }

          .animate-float { animation: float 6s ease-in-out infinite; }
          .perspective-1000 { perspective: 1000px; }
        `}
      </style>

      <div className="max-w-7xl mx-auto text-center">
       <SectionTitle centered={true} containerClass="mb-10 text-lg">Prize</SectionTitle>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-1 mt-8">
          <PrizeCard
            position="Winner"
            amount={15000}
            icon={Ship}
          />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-8">
          <PrizeCard
            position="Runner-Up"
            amount={10000}
            icon={Anchor}
          
          />
          <PrizeCard
            position="2ⁿᵈ Runner-Up"
            amount={7000}
            icon={Sword}
           
          />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-8">
          <PrizeCard
            position="Best Beginner Team"
            amount={4000}
            icon={Gem}
            description=""
            
          />
          <PrizeCard
            position="Best Girls Team"
            amount={4000}
            icon={Gem}
            description=""
            
          />
        </div>
      </div>
    </div>
  );
};

export default Prize;