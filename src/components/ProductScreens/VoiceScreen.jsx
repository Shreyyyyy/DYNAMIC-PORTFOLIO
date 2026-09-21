'use client';

import React, { useState } from 'react';

export default function VoiceScreen() {
  const [isSpeaking, setIsSpeaking] = useState(true);
  const [transcript, setTranscript] = useState(
    'Streaming 240ms turnaround... Whisper STT connected on 5 concurrent channels.'
  );

  const toggleVoice = () => {
    setIsSpeaking((prev) => !prev);
    const phrases = [
      'Customer: "Book test drive for Sunday 11 AM in Gurugram." → Scheduled in 380ms.',
      'VAD detected speech end in 120ms. LLM chunk response streamed without lag.',
      'Neural TTS streaming synthesized audio packet #24 over WebSocket.',
      'Zero human handoff achieved across full conversational support flow.',
    ];
    setTranscript(phrases[Math.floor(Math.random() * phrases.length)]);
  };

  return (
    <div className="screen-panel-inner">
      <div style={{ marginBottom: '8px' }}>
        <span style={{ fontSize: '0.74rem', color: '#94a3b8', textTransform: 'uppercase', display: 'block', letterSpacing: '0.04em' }}>
          FULL-DUPLEX WEBSOCKET VOICE AI · REAL-TIME STREAMING
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.96rem', color: '#f8fafc', fontWeight: 700 }}>
          Whisper STT + Streaming Neural TTS with Sub-Chunked VAD
        </span>
      </div>

      <div className="voice-visualizer-container">
        <div className="voice-wave-bars">
          {[...Array(11)].map((_, i) => (
            <span
              key={i}
              className="voice-bar"
              style={{
                animationPlayState: isSpeaking ? 'running' : 'paused',
                opacity: isSpeaking ? 1 : 0.35,
              }}
            ></span>
          ))}
        </div>

        <div className="voice-stats-row">
          <span>⚡ Latency: &lt;400ms</span>
          <span>🎙️ 5 Concurrent Streams</span>
          <span>✨ 100% Automated Bookings</span>
        </div>
      </div>

      <div className="terminal-stream-box" style={{ flex: 'none', height: '110px' }}>
        <div className="terminal-line">
          <span className="terminal-prompt" style={{ color: '#fbbf24' }}>voice://socket $</span>
          <span>stream --duplex=true --vad=active --tts=neural</span>
        </div>
        <div style={{ color: '#fbbf24', fontSize: '0.82rem', marginTop: '6px', fontWeight: 600 }}>
          &gt; "{transcript}"
        </div>
        <div style={{ textAlign: 'right', marginTop: '8px' }}>
          <button
            onClick={toggleVoice}
            style={{
              padding: '5px 12px',
              fontSize: '0.74rem',
              background: 'rgba(245, 158, 11, 0.15)',
              border: '1px solid rgba(245, 158, 11, 0.35)',
              color: '#fbbf24',
              borderRadius: '8px',
              cursor: 'pointer',
              fontFamily: 'var(--font-mono)',
              fontWeight: 600,
            }}
          >
            {isSpeaking ? '⏸ Pause Stream' : '▶ Resume Voice Stream'}
          </button>
        </div>
      </div>
    </div>
  );
}
