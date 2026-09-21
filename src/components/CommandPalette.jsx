'use client';

import React, { useState, useEffect, useRef } from 'react';
import { playClick, playHover } from '../utils/sound';

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const actions = [
    {
      id: 'rag',
      category: 'Production Systems',
      title: 'Enterprise Sub-Minute RAG Platform',
      desc: 'Dense + BM25 hybrid search, <60s lookup time, 98.4% faithfulness',
      action: () => {
        window.location.hash = 'act-rag';
        onClose();
      },
      badge: 'NODE 02',
    },
    {
      id: 'flipkart',
      category: 'Production Systems',
      title: 'Flipkart Talk2Data (Natural-Language SQL)',
      desc: 'LangGraph multi-agent SQL synthesis, <2% error loop, +30% accuracy',
      action: () => {
        window.location.hash = 'act-systems';
        onClose();
      },
      badge: 'NODE 01',
    },
    {
      id: 'voice',
      category: 'Production Systems',
      title: 'Multilingual Low-Latency Voice AI',
      desc: 'Full-duplex WebSocket streaming, <400ms turnaround, 5 streams',
      action: () => {
        window.location.hash = 'act-voice';
        onClose();
      },
      badge: 'NODE 03',
    },
    {
      id: 'veo',
      category: 'Production Systems',
      title: 'Veo GenAI Film & Video Studio',
      desc: '4-agent script-to-screen workflow, 80% production cycle reduction',
      action: () => {
        window.location.hash = 'act-video';
        onClose();
      },
      badge: 'NODE 04',
    },
    {
      id: 'creativium',
      category: 'Production Systems',
      title: 'Creativium Autonomous Marketing Suite',
      desc: 'Brand-compliant automated multi-aspect ratio banner generation',
      action: () => {
        window.location.hash = 'act-systems';
        onClose();
      },
      badge: 'NODE 05',
    },
    {
      id: 'rfp',
      category: 'Production Systems',
      title: 'Autonomous RFP Intelligence Engine',
      desc: '200+ page enterprise document parsing with 0 hallucination guarantee',
      action: () => {
        window.location.hash = 'act-systems';
        onClose();
      },
      badge: 'NODE 06',
    },
    {
      id: 'dentsu',
      category: 'Career Odyssey',
      title: 'dentsu — Artificial Intelligence Engineer',
      desc: 'May 2026 — Present · Architecting enterprise LLMs & voice agents',
      action: () => {
        window.location.hash = 'act-journey';
        onClose();
      },
      badge: 'CURRENT',
    },
    {
      id: 'businessnext',
      category: 'Career Odyssey',
      title: 'BUSINESSNEXT — Agentic & GenAI Engineer',
      desc: '2025 — 2026 · Multi-agent CRM, model fine-tuning & DeepEval guardrails',
      action: () => {
        window.location.hash = 'act-journey';
        onClose();
      },
      badge: '2025-2026',
    },
    {
      id: 'email',
      category: 'Quick Actions',
      title: 'Copy Direct Email Address',
      desc: 'shreyansjain244@gmail.com',
      action: () => {
        navigator.clipboard.writeText('shreyansjain244@gmail.com');
        alert('Copied shreyansjain244@gmail.com to clipboard!');
        onClose();
      },
      badge: 'COPY',
    },
    {
      id: 'github',
      category: 'Quick Actions',
      title: 'Open GitHub Repositories',
      desc: 'Explore open source code & production experiments',
      action: () => {
        window.open('https://github.com/Shreyyyyy?tab=repositories', '_blank');
        onClose();
      },
      badge: 'EXTERNAL',
    },
    {
      id: 'linkedin',
      category: 'Quick Actions',
      title: 'Connect on LinkedIn',
      desc: 'shreyans-jain-5674a21b3 profile',
      action: () => {
        window.open('https://www.linkedin.com/in/shreyans-jain-5674a21b3', '_blank');
        onClose();
      },
      badge: 'EXTERNAL',
    },
  ];

  const filtered = actions.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.desc.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        playHover();
        setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        playHover();
        setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
      } else if (e.key === 'Enter' && filtered[selectedIndex]) {
        e.preventDefault();
        playClick();
        filtered[selectedIndex].action();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filtered, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div className="command-palette-backdrop" onClick={onClose}>
      <div className="command-palette-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="command-palette-search">
          <span className="search-icon">🔍</span>
          <input
            ref={inputRef}
            type="text"
            className="command-palette-input"
            placeholder="Search systems, milestones, skills, or actions... (Esc to exit)"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
          />
          <kbd className="kbd-shortcut">ESC</kbd>
        </div>

        <div className="command-palette-results">
          {filtered.length === 0 ? (
            <div className="command-palette-empty">No matching systems or milestones found.</div>
          ) : (
            filtered.map((item, idx) => (
              <div
                key={item.id}
                className={`command-result-item ${selectedIndex === idx ? 'selected' : ''}`}
                onMouseEnter={() => {
                  setSelectedIndex(idx);
                  playHover();
                }}
                onClick={() => {
                  playClick();
                  item.action();
                }}
              >
                <div className="result-main">
                  <div className="result-category">{item.category}</div>
                  <div className="result-title">{item.title}</div>
                  <div className="result-desc">{item.desc}</div>
                </div>
                <div className="result-badge">{item.badge}</div>
              </div>
            ))
          )}
        </div>

        <div className="command-palette-footer">
          <span>Navigate with <kbd>↑</kbd> <kbd>↓</kbd></span>
          <span>Select with <kbd>↵ Enter</kbd></span>
          <span>Close with <kbd>Esc</kbd></span>
        </div>
      </div>
    </div>
  );
}
