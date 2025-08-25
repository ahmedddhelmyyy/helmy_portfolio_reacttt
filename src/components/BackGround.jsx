// src/components/BubbleBackground.jsx
import React from 'react';
import './BubbleBackground.css';


const BubbleBackground = () => {
    
  return (
    <div className="bubble-background">
      {[...Array(140)].map((_, i) => {
        const left = Math.random() * 100; // % from left
        const delay = -Math.random() * 10; // negative for staggered start
        const duration = 10 + Math.random() * 10; // 10s to 20s

        return (
          <span
            key={i}
            style={{
              left: `${left}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`
            }}
          ></span>
        );
      })}
    </div>
  );
};

export default BubbleBackground;
