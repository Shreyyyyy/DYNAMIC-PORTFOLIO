'use client';

import React, { useEffect, useRef } from 'react';

export default function NeuralBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let dpr = window.devicePixelRatio || 1;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resizeCanvas = () => {
      dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle nodes configuration
    const isMobile = window.innerWidth < 768;
    const nodeCount = isMobile ? 38 : 74;
    const maxDistance = isMobile ? 120 : 180;

    const particles = [];
    const colors = [
      { r: 56, g: 189, b: 248, hex: '#38bdf8' }, // Cyan
      { r: 16, g: 185, b: 129, hex: '#10b981' }, // Emerald
      { r: 192, g: 132, b: 252, hex: '#c084fc' }, // Purple
      { r: 245, g: 158, b: 11, hex: '#f59e0b' }, // Gold
    ];

    for (let i = 0; i < nodeCount; i++) {
      const col = colors[Math.floor(Math.random() * colors.length)];
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: 0, // Particles start completely still (stops when not scrolling)
        vy: 0,
        radius: Math.random() * 2.4 + 2.0,
        color: col,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    // Scroll-only physics: particles ONLY move when user scrolls
    let lastScrollY = window.scrollY;
    let scrollStopTimer = null;
    let isScrolling = false;

    const handleScrollPhysics = () => {
      const currentScrollY = window.scrollY;
      const deltaY = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      if (Math.abs(deltaY) < 0.5) return;
      isScrolling = true;

      const dir = Math.sign(deltaY) || 1;
      const magnitude = Math.min(Math.abs(deltaY), 80);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        // Move opposite/aligned with scroll direction with lively speed
        p.vy = -dir * (magnitude * 0.16 + (i % 5) * 0.08);
        p.vx = Math.sin(i * 12.34 + currentScrollY * 0.02) * (magnitude * 0.06);
      }

      if (scrollStopTimer) clearTimeout(scrollStopTimer);
      scrollStopTimer = setTimeout(() => {
        isScrolling = false;
      }, 70);
    };

    window.addEventListener('scroll', handleScrollPhysics, { passive: true });

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Synaptic Connecting Lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.38;
            const grad = ctx.createLinearGradient(
              particles[i].x,
              particles[i].y,
              particles[j].x,
              particles[j].y
            );
            grad.addColorStop(0, `rgba(${particles[i].color.r}, ${particles[i].color.g}, ${particles[i].color.b}, ${alpha})`);
            grad.addColorStop(1, `rgba(${particles[j].color.r}, ${particles[j].color.g}, ${particles[j].color.b}, ${alpha})`);

            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 1.2;
            ctx.stroke();

            // When actively scrolling, draw traveling data photons between lines
            if (isScrolling && (i + j) % 6 === 0) {
              const packetPos = (Math.sin(time * 3 + i) + 1) / 2;
              const px = particles[i].x + dx * -packetPos;
              const py = particles[i].y + dy * -packetPos;
              ctx.beginPath();
              ctx.arc(px, py, 2.2, 0, Math.PI * 2);
              ctx.fillStyle = '#ffffff';
              ctx.shadowColor = '#38bdf8';
              ctx.shadowBlur = 8;
              ctx.fill();
              ctx.shadowBlur = 0;
            }
          }
        }
      }

      // 2. Draw & Update Glowing Nodes
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Apply velocities
        p.x += p.vx;
        p.y += p.vy;

        // Friction damping: rapidly decelerates and completely stops when scrolling stops
        p.vx *= 0.84;
        p.vy *= 0.84;

        if (Math.abs(p.vx) < 0.01) p.vx = 0;
        if (Math.abs(p.vy) < 0.01) p.vy = 0;

        // Screen boundary wrapping
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        // Node size
        const currentRadius = p.radius + (isScrolling ? Math.sin(time * 3 + p.pulseOffset) * 0.8 : 0);

        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(currentRadius, 1.8), 0, Math.PI * 2);
        ctx.fillStyle = p.color.hex;
        ctx.shadowColor = p.color.hex;
        ctx.shadowBlur = isScrolling ? 16 : 10;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Inner bright nucleus
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(currentRadius * 0.45, 1), 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScrollPhysics);
      if (scrollStopTimer) clearTimeout(scrollStopTimer);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 1,
        opacity: 0.9,
      }}
    />
  );
}
