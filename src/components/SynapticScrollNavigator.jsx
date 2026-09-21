'use client';

import React, { useEffect, useState, useRef } from 'react';
import { playClick } from '../utils/sound';

export default function SynapticScrollNavigator() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('down'); // 'down' | 'up'
  const [isWaving, setIsWaving] = useState(false);
  const [showSpeechBubble, setShowSpeechBubble] = useState(false);
  const [speechText, setSpeechText] = useState("Hi! I'm Shreyans 🚀");

  const lastScrollYRef = useRef(0);
  const scrollTimeoutRef = useRef(null);

  const sections = [
    { id: 'hero', name: 'Neural Core', label: 'Architect', color: '#38bdf8', speech: "Welcome! I'm Shreyans 👋" },
    { id: 'act-systems', name: 'Production Systems', label: 'Systems', color: '#10b981', speech: 'Architecting Swarms & RAG ⚡' },
    { id: 'act-journey', name: 'Career Odyssey', label: 'Odyssey', color: '#c084fc', speech: '4+ Years Engineering Experience 💼' },
    { id: 'act-safety', name: 'Safety & Trust', label: 'Trust', color: '#f59e0b', speech: '98.4% DeepEval Groundedness 🛡️' },
    { id: 'act-contact', name: 'Executive Contact', label: 'Contact', color: '#f43f5e', speech: "Let's build something epic! ☕" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? Math.min(Math.max(scrollY / maxScroll, 0), 1) : 0;
      setScrollProgress(progress);

      // Detect scroll direction and set scrolling state
      if (scrollY > lastScrollYRef.current + 2) {
        setScrollDirection('down');
      } else if (scrollY < lastScrollYRef.current - 2) {
        setScrollDirection('up');
      }
      lastScrollYRef.current = scrollY;

      setIsScrolling(true);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 220);

      // Determine active section based on waypoint offsets
      const viewportMid = scrollY + window.innerHeight * 0.4;
      let currentIdx = 0;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= viewportMid) {
          currentIdx = i;
          break;
        }
      }
      setActiveSection(currentIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const scrollToSection = (id, idx) => {
    playClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(idx);
    }
  };

  const handleStickmanClick = () => {
    playClick();
    setIsWaving(true);
    setShowSpeechBubble(true);
    setSpeechText(sections[activeSection]?.speech || "Hi, I'm Shreyans! 🚀");
    setTimeout(() => {
      setIsWaving(false);
    }, 1800);
    setTimeout(() => {
      setShowSpeechBubble(false);
    }, 4000);
  };

  return (
    <aside className="vertical-scroll-spine-root" aria-label="Vertical Navigation Spine">
      <div className="spine-track-container">
        {/* Connecting Background Line */}
        <div className="spine-rail-bg" />

        {/* Dynamic Glowing Filled Progress Line */}
        <div
          className="spine-rail-fill"
          style={{ height: `${Math.min(Math.max(scrollProgress * 100, 0), 100)}%` }}
        />

        {/* Section Waypoint Nodes (Dots with connecting lines) */}
        {sections.map((sec, idx) => {
          const waypointPercent = (idx / (sections.length - 1)) * 100;
          const isPassed = scrollProgress * 100 >= waypointPercent - 2;
          const isCurrent = activeSection === idx;

          return (
            <div
              key={sec.id}
              className={`spine-waypoint-node ${isPassed ? 'passed' : ''} ${isCurrent ? 'current' : ''}`}
              style={{ top: `${waypointPercent}%` }}
              onClick={() => scrollToSection(sec.id, idx)}
              title={`${sec.name} (Click to jump)`}
            >
              {/* Outer pulse aura for current section */}
              {isCurrent && (
                <span
                  className="waypoint-pulse-ring"
                  style={{ borderColor: sec.color }}
                />
              )}

              {/* Waypoint Dot */}
              <span
                className="waypoint-dot"
                style={{
                  backgroundColor: isCurrent ? sec.color : isPassed ? '#38bdf8' : 'rgba(255, 255, 255, 0.25)',
                  boxShadow: isCurrent ? `0 0 14px ${sec.color}` : isPassed ? '0 0 8px rgba(56, 189, 248, 0.6)' : 'none',
                }}
              />

              {/* Waypoint Label Badge (visible on hover / active on desktop) */}
              <div className="waypoint-label-card">
                <span className="waypoint-index">0{idx + 1}</span>
                <span className="waypoint-text">{sec.label}</span>
              </div>
            </div>
          );
        })}

        {/* Dynamic Traveling Stickman ("Shreyans") Avatar */}
        <div
          className={`spine-stickman-capsule ${isScrolling ? 'is-walking' : 'is-idle'} ${isWaving ? 'is-waving' : ''} direction-${scrollDirection}`}
          style={{
            top: `${Math.min(Math.max(scrollProgress * 100, 0), 100)}%`,
          }}
          onClick={handleStickmanClick}
          title="Shreyans — AI Systems Architect (Click me!)"
        >
          {/* Jetpack / Propulsion Energy Aura when scrolling */}
          {isScrolling && (
            <div className={`stickman-thrust-glow ${scrollDirection === 'down' ? 'thrust-up' : 'thrust-down'}`} />
          )}

          {/* Interactive Speech Bubble */}
          {(showSpeechBubble || isScrolling) && (
            <div className="stickman-speech-bubble">
              <span className="bubble-text">
                {showSpeechBubble ? speechText : sections[activeSection]?.label}
              </span>
              <span className="bubble-pointer" />
            </div>
          )}

          {/* Stickman SVG Graphic */}
          <div className="stickman-svg-wrap">
            <svg
              className="stickman-svg"
              viewBox="0 0 44 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Head / Visor */}
              <circle
                cx="22"
                cy="12"
                r="7.5"
                stroke="#38bdf8"
                strokeWidth="2.5"
                fill="#0b0f19"
              />
              {/* Cyber Goggles / Visor Lens */}
              <path
                d="M17 11.5 H27"
                stroke="#10b981"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              {/* AI Cyber Halo / Headphones */}
              <path
                d="M14 12 C14 7 30 7 30 12"
                stroke="#c084fc"
                strokeWidth="1.5"
                strokeLinecap="round"
              />

              {/* Spine / Torso */}
              <line
                x1="22"
                y1="19.5"
                x2="22"
                y2="38"
                stroke="#38bdf8"
                strokeWidth="3"
                strokeLinecap="round"
              />
              {/* Core Arc Reactor Heart */}
              <circle cx="22" cy="27" r="2.2" fill="#10b981" />

              {/* Left Arm */}
              <path
                className="stickman-left-arm"
                d="M22 22 L11 31"
                stroke="#38bdf8"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Right Arm (Waving or Striding) */}
              <path
                className="stickman-right-arm"
                d="M22 22 L33 31"
                stroke="#38bdf8"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Left Leg */}
              <path
                className="stickman-left-leg"
                d="M22 38 L12 56"
                stroke="#38bdf8"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Right Leg */}
              <path
                className="stickman-right-leg"
                d="M22 38 L32 56"
                stroke="#38bdf8"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Jet Thruster Boots / Ground Spark Dots */}
              <circle className="boot-glow-l" cx="12" cy="57" r="1.5" fill="#f59e0b" />
              <circle className="boot-glow-r" cx="32" cy="57" r="1.5" fill="#f59e0b" />
            </svg>
          </div>
        </div>
      </div>

      <style jsx>{`
        .vertical-scroll-spine-root {
          position: fixed;
          left: 32px;
          top: 110px;
          bottom: 110px;
          width: 38px;
          z-index: 150;
          pointer-events: none;
          display: flex;
          align-items: center;
          justify-content: center;
          user-select: none;
        }

        .spine-track-container {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* The vertical background line */
        .spine-rail-bg {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 3px;
          background: rgba(255, 255, 255, 0.12);
          border-radius: 9999px;
        }

        /* The dynamic filled line */
        .spine-rail-fill {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 3px;
          background: linear-gradient(180deg, #38bdf8 0%, #10b981 35%, #c084fc 70%, #f59e0b 100%);
          border-radius: 9999px;
          box-shadow: 0 0 10px rgba(56, 189, 248, 0.7);
          transition: height 0.08s linear;
        }

        /* Waypoint Dots with connecting nodes */
        .spine-waypoint-node {
          position: absolute;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 26px;
          height: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          pointer-events: auto;
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .spine-waypoint-node:hover {
          transform: translate(-50%, -50%) scale(1.3);
        }

        .waypoint-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 2px solid #07090e;
          transition: all 0.25s ease;
          z-index: 2;
        }

        .spine-waypoint-node.passed .waypoint-dot {
          transform: scale(1.1);
        }

        .waypoint-pulse-ring {
          position: absolute;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          border: 1.5px solid #38bdf8;
          animation: waypointRipple 2s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
          pointer-events: none;
        }

        @keyframes waypointRipple {
          0% { transform: scale(0.6); opacity: 0.9; }
          100% { transform: scale(1.8); opacity: 0; }
        }

        /* Waypoint label badge on hover / active */
        .waypoint-label-card {
          position: absolute;
          left: 32px;
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 5px 12px;
          background: rgba(11, 15, 25, 0.95);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 8px;
          white-space: nowrap;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
          opacity: 0;
          transform: translateX(-8px);
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
          backdrop-filter: blur(12px);
        }

        .spine-waypoint-node:hover .waypoint-label-card,
        .spine-waypoint-node.current:hover .waypoint-label-card {
          opacity: 1;
          transform: translateX(0);
        }

        .waypoint-index {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--accent-cyan);
          font-weight: 700;
        }

        .waypoint-text {
          font-size: 0.8rem;
          font-weight: 700;
          color: #f8fafc;
          letter-spacing: 0.02em;
        }

        /* Stickman Capsule pinned to scroll progress */
        .spine-stickman-capsule {
          position: absolute;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 44px;
          height: 64px;
          pointer-events: auto;
          cursor: pointer;
          z-index: 10;
          transition: top 0.06s linear;
        }

        .stickman-svg-wrap {
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 0 10px rgba(56, 189, 248, 0.65));
          transition: transform 0.2s ease;
        }

        .spine-stickman-capsule:hover .stickman-svg-wrap {
          transform: scale(1.18);
          filter: drop-shadow(0 0 16px rgba(56, 189, 248, 0.95));
        }

        /* Idle Hover Animation */
        .spine-stickman-capsule.is-idle .stickman-svg-wrap {
          animation: stickmanFloat 3.6s ease-in-out infinite;
        }

        @keyframes stickmanFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        /* Active Scrolling Animation (Walking / Striding) */
        .spine-stickman-capsule.is-walking .stickman-left-leg {
          animation: legStrideLeft 0.35s ease-in-out infinite alternate;
        }
        .spine-stickman-capsule.is-walking .stickman-right-leg {
          animation: legStrideRight 0.35s ease-in-out infinite alternate;
        }
        .spine-stickman-capsule.is-walking .stickman-left-arm {
          animation: armSwingLeft 0.35s ease-in-out infinite alternate;
        }
        .spine-stickman-capsule.is-walking .stickman-right-arm {
          animation: armSwingRight 0.35s ease-in-out infinite alternate;
        }

        @keyframes legStrideLeft {
          from { d: path("M22 38 L12 56"); }
          to { d: path("M22 38 L16 48"); }
        }
        @keyframes legStrideRight {
          from { d: path("M22 38 L28 48"); }
          to { d: path("M22 38 L34 56"); }
        }
        @keyframes armSwingLeft {
          from { d: path("M22 22 L10 32"); }
          to { d: path("M22 22 L14 18"); }
        }
        @keyframes armSwingRight {
          from { d: path("M22 22 L30 18"); }
          to { d: path("M22 22 L34 32"); }
        }

        /* Waving Animation on Click */
        .spine-stickman-capsule.is-waving .stickman-right-arm {
          animation: armWave 0.3s ease-in-out infinite alternate !important;
        }

        @keyframes armWave {
          from { d: path("M22 22 L34 12"); }
          to { d: path("M22 22 L38 20"); }
        }

        /* Thruster glow underneath feet */
        .stickman-thrust-glow {
          position: absolute;
          bottom: 2px;
          left: 50%;
          transform: translateX(-50%);
          width: 22px;
          height: 10px;
          background: radial-gradient(ellipse at center, rgba(245, 158, 11, 0.8) 0%, rgba(244, 63, 94, 0.4) 60%, transparent 80%);
          filter: blur(2px);
          animation: thrustFlicker 0.15s infinite;
        }

        @keyframes thrustFlicker {
          0%, 100% { opacity: 0.9; transform: translateX(-50%) scale(1); }
          50% { opacity: 0.5; transform: translateX(-50%) scale(0.85); }
        }

        /* Stickman Speech / Telemetry Bubble */
        .stickman-speech-bubble {
          position: absolute;
          left: 48px;
          top: 8px;
          background: rgba(14, 18, 27, 0.96);
          border: 1px solid rgba(56, 189, 248, 0.5);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.65), 0 0 16px rgba(56, 189, 248, 0.25);
          padding: 6px 14px;
          border-radius: 10px;
          white-space: nowrap;
          pointer-events: none;
          z-index: 20;
          animation: bubblePop 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .bubble-text {
          font-family: var(--font-mono);
          font-size: 0.76rem;
          font-weight: 700;
          color: #f8fafc;
          letter-spacing: 0.02em;
        }

        .bubble-pointer {
          position: absolute;
          left: -6px;
          top: 50%;
          transform: translateY(-50%) rotate(45deg);
          width: 10px;
          height: 10px;
          background: rgba(14, 18, 27, 0.96);
          border-left: 1px solid rgba(56, 189, 248, 0.5);
          border-bottom: 1px solid rgba(56, 189, 248, 0.5);
        }

        @keyframes bubblePop {
          from { opacity: 0; transform: scale(0.8) translateX(-10px); }
          to { opacity: 1; transform: scale(1) translateX(0); }
        }

        /* ==========================================================================
           RESPONSIVE MOBILE DESIGN: Sleek Edge Rail
           ========================================================================== */
        @media (max-width: 900px) {
          .vertical-scroll-spine-root {
            left: 14px;
            top: 80px;
            bottom: 80px;
            width: 32px;
          }
          .waypoint-label-card {
            display: none; /* Hide hover card on touch screens to save space */
          }
          .stickman-speech-bubble {
            left: 36px;
            padding: 4px 10px;
            font-size: 0.70rem;
          }
        }

        @media (max-width: 600px) {
          .vertical-scroll-spine-root {
            display: none;
          }
        }
      `}</style>
    </aside>
  );
}
