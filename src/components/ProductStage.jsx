'use client';

import React, { useRef, useState, useEffect } from 'react';
import HeroScreen from './ProductScreens/HeroScreen';
import RagScreen from './ProductScreens/RagScreen';
import AgenticScreen from './ProductScreens/AgenticScreen';
import VoiceScreen from './ProductScreens/VoiceScreen';
import VideoScreen from './ProductScreens/VideoScreen';
import { playClick, playHover } from '../utils/sound';

export default function ProductStage({ activeActIndex = 0, onSelectMode }) {
  const cardRef = useRef(null);
  const [internalMode, setInternalMode] = useState(0);

  useEffect(() => {
    setInternalMode(activeActIndex);
  }, [activeActIndex]);

  const modes = [
    { id: 0, label: 'Apex Core Swarm', icon: '⚡' },
    { id: 1, label: 'Sub-Minute RAG', icon: '🔍' },
    { id: 2, label: 'LangGraph DAG', icon: '🤖' },
    { id: 3, label: 'Voice AI Stream', icon: '🎙️' },
    { id: 4, label: 'Veo Video Studio', icon: '🎬' },
  ];

  const handleMouseMove = (e) => {
    if (!cardRef.current || window.innerWidth < 900) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const tiltX = -(y / (rect.height / 2)) * 4;
    const tiltY = (x / (rect.width / 2)) * 4;
    cardRef.current.style.transform = `perspective(1400px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(1400px) rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <div className="product-stage-root">
      <div className="product-aura-glow"></div>
      <div
        ref={cardRef}
        className="product-stage-card-3d"
        id="product-card-3d"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="product-chassis">
          {/* Top Hardware Bezel */}
          <div className="product-top-bezel">
            <div className="bezel-left">
              <span className="bezel-dot red"></span>
              <span className="bezel-dot yellow"></span>
              <span className="bezel-dot green"></span>
              <span className="bezel-title">
                APEX-01 // PRODUCTION RUNTIME CONSOLE
              </span>
            </div>
            <div className="bezel-badge">
              <span className="pulse-dot"></span>
              <span>LIVE CLUSTER ONLINE</span>
            </div>
          </div>

          {/* Glass Screen Surface */}
          <div className="product-screen">
            <div className="product-reflection"></div>

            <div className="product-screen-content">
              {/* Internal Switcher Tabs */}
              <div className="device-tabs">
                {modes.map((m) => (
                  <button
                    key={m.id}
                    className={`device-tab ${internalMode === m.id ? 'active' : ''}`}
                    onClick={() => {
                      playClick();
                      setInternalMode(m.id);
                      if (onSelectMode) onSelectMode(m.id);
                    }}
                    onMouseEnter={() => playHover()}
                  >
                    <span>{m.icon}</span>
                    <span>{m.label}</span>
                  </button>
                ))}
              </div>

              {/* Pre-rendered Screen Panels */}
              <div className={`screen-panel ${internalMode === 0 ? 'active' : ''}`} id="panel-hero">
                <HeroScreen />
              </div>
              <div className={`screen-panel ${internalMode === 1 ? 'active' : ''}`} id="panel-rag">
                <RagScreen />
              </div>
              <div className={`screen-panel ${internalMode === 2 ? 'active' : ''}`} id="panel-agentic">
                <AgenticScreen />
              </div>
              <div className={`screen-panel ${internalMode === 3 ? 'active' : ''}`} id="panel-voice">
                <VoiceScreen />
              </div>
              <div className={`screen-panel ${internalMode >= 4 ? 'active' : ''}`} id="panel-video">
                <VideoScreen />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .product-stage-root {
          position: relative;
          width: 100%;
          max-width: 1040px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .product-aura-glow {
          position: absolute;
          width: 92%;
          height: 92%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(56, 189, 248, 0.18) 0%, rgba(168, 85, 247, 0.12) 45%, transparent 70%);
          filter: blur(65px);
          pointer-events: none;
          z-index: 1;
        }

        .product-stage-card-3d {
          position: relative;
          width: 100%;
          height: 550px;
          z-index: 2;
          transition: transform 0.2s ease-out, box-shadow 0.3s ease;
        }

        @media (max-width: 900px) {
          .product-stage-card-3d {
            height: 500px;
          }
        }

        @media (max-width: 600px) {
          .product-stage-card-3d {
            height: 380px;
          }
        }
      `}</style>
    </div>
  );
}
