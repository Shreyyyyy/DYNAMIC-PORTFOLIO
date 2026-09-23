'use client';

import React, { useEffect, useRef } from 'react';

/**
 * QuantumFluxBackground
 * A mind-blowing, completely unexpected background engine:
 * 1. Living Volumetric Gravitational Distortion Grid with interactive mouse warping.
 * 2. Quantum Particle Flow following 4D Perlin-approximated vector tensor fields.
 * 3. Chromatic dispersion ripples that erupt subtly on user scroll or mouse movements.
 * 4. Micro-aurora atmospheric depth rendering with deep spatial perspective.
 * 5. High-performance GPU-friendly canvas rendering (sub-sampled on low-end / mobile).
 */
export default function QuantumFluxBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    // Mouse coordinates & interpolation for silky gravitational warp
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      active: false,
      radius: 220,
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    // Scroll reactivity: induces a quantum burst of momentum & phase shift
    let scrollVelocity = 0;
    let lastScrollY = window.scrollY;
    let scrollPhase = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;
      scrollVelocity += delta * 0.15;
      scrollPhase += delta * 0.002;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Quantum Tensor Stream Particles
    const isMobile = width < 768;
    const particleCount = isMobile ? 80 : 160;
    const particles = [];

    // Curated ethereal palette: Imperial Radiant Gold, Royal Violet, Amber Flare, Amethyst Purple, Champagne
    const palette = [
      { r: 251, g: 191, b: 36, hex: '#fbbf24' },  // Radiant Gold
      { r: 192, g: 132, b: 252, hex: '#c084fc' }, // Royal Violet
      { r: 245, g: 158, b: 11, hex: '#f59e0b' },  // Amber Flare
      { r: 168, g: 85, b: 247, hex: '#a855f7' },  // Amethyst Purple
      { r: 254, g: 240, b: 138, hex: '#fef08a' }, // Champagne Light
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        prevX: 0,
        prevY: 0,
        vx: 0,
        vy: 0,
        baseSpeed: 0.7 + Math.random() * 1.4,
        size: 1.2 + Math.random() * 2.2,
        color: palette[i % palette.length],
        seed: Math.random() * 1000,
        orbitAngle: Math.random() * Math.PI * 2,
        orbitDist: 60 + Math.random() * 160,
        life: Math.random(),
      });
    }

    // Grid coordinates for the gravitational tensor mesh
    const gridSpacing = isMobile ? 65 : 48;
    let gridCols = Math.ceil(width / gridSpacing) + 2;
    let gridRows = Math.ceil(height / gridSpacing) + 2;

    let time = 0;

    const render = () => {
      time += 0.012;

      // Mouse smooth interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Scroll damping
      scrollVelocity *= 0.91;
      if (Math.abs(scrollVelocity) < 0.05) scrollVelocity = 0;

      // Deep void clear
      ctx.clearRect(0, 0, width, height);

      // =========================================================================
      // LAYER 1: Deep Volumetric Space Aurora (3 Breathing Chromatic Singularity Nodes)
      // =========================================================================
      const g1X = width * 0.25 + Math.sin(time * 0.4 + scrollPhase) * 120;
      const g1Y = height * 0.35 + Math.cos(time * 0.35) * 90;
      const rad1 = Math.max(width * 0.45, 300);

      const grad1 = ctx.createRadialGradient(g1X, g1Y, 0, g1X, g1Y, rad1);
      grad1.addColorStop(0, 'rgba(56, 189, 248, 0.09)');
      grad1.addColorStop(0.5, 'rgba(192, 132, 252, 0.035)');
      grad1.addColorStop(1, 'rgba(7, 9, 14, 0)');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const g2X = width * 0.8 + Math.cos(time * 0.3 + scrollPhase) * 140;
      const g2Y = height * 0.65 + Math.sin(time * 0.45) * 110;
      const rad2 = Math.max(width * 0.5, 340);

      const grad2 = ctx.createRadialGradient(g2X, g2Y, 0, g2X, g2Y, rad2);
      grad2.addColorStop(0, 'rgba(16, 185, 129, 0.075)');
      grad2.addColorStop(0.6, 'rgba(56, 189, 248, 0.025)');
      grad2.addColorStop(1, 'rgba(7, 9, 14, 0)');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // =========================================================================
      // LAYER 2: Gravitational Spacetime Tensor Mesh
      // A fluid grid that physically warps, expands, and folds under the cursor & scrolls
      // =========================================================================
      ctx.save();
      ctx.lineWidth = 0.65;

      const points = [];
      for (let r = 0; r <= gridRows; r++) {
        points[r] = [];
        for (let c = 0; c <= gridCols; c++) {
          let origX = c * gridSpacing - gridSpacing;
          let origY = r * gridSpacing - gridSpacing;

          // Harmonic wave distortion
          const waveX = Math.sin(origY * 0.006 + time + scrollPhase) * 14;
          const waveY = Math.cos(origX * 0.006 + time * 0.8) * 14;

          let px = origX + waveX;
          let py = origY + waveY;

          // Mouse Gravitational lens distortion
          const dx = px - mouse.x;
          const dy = py - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const force = (1 - dist / mouse.radius);
            // Repel and twist in a vortex lens
            const angle = Math.atan2(dy, dx) + force * 0.5;
            const push = force * force * 52;
            px += Math.cos(angle) * push;
            py += Math.sin(angle) * push;
          }

          // Scroll inertial warp
          py += scrollVelocity * 0.35 * Math.sin(c * 0.4);

          points[r][c] = { x: px, y: py, dist };
        }
      }

      // Draw horizontal warp lines with chromatic glow
      for (let r = 0; r <= gridRows; r += 2) {
        ctx.beginPath();
        for (let c = 0; c <= gridCols; c++) {
          const pt = points[r][c];
          if (c === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        }
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.04)';
        ctx.stroke();
      }

      // Draw subtle intersections / gravitational quantum nodes
      for (let r = 0; r <= gridRows; r += 2) {
        for (let c = 0; c <= gridCols; c += 2) {
          const pt = points[r][c];
          if (pt.x >= 0 && pt.x <= width && pt.y >= 0 && pt.y <= height) {
            const nearMouse = pt.dist < mouse.radius;
            const alpha = nearMouse ? (1 - pt.dist / mouse.radius) * 0.45 : 0.08;
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, nearMouse ? 2.2 : 1.1, 0, Math.PI * 2);
            ctx.fillStyle = nearMouse ? 'rgba(56, 189, 248, ' + alpha + ')' : 'rgba(255, 255, 255, ' + alpha + ')';
            ctx.fill();
          }
        }
      }
      ctx.restore();

      // =========================================================================
      // LAYER 3: 4D Quantum Vector Flow Streams (Particles that orbit and weave)
      // =========================================================================
      ctx.save();
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.prevX = p.x;
        p.prevY = p.y;

        // Flow field calculation: 2 harmonic sinusoidal vector field octaves
        const angle1 = (Math.sin(p.y * 0.0035 + time * 0.5) + Math.cos(p.x * 0.0035 + scrollPhase)) * Math.PI;
        const angle2 = Math.sin(p.x * 0.007 + p.y * 0.007 + time * 0.8) * Math.PI * 2;
        const finalAngle = angle1 * 0.7 + angle2 * 0.3;

        let flowVx = Math.cos(finalAngle) * p.baseSpeed;
        let flowVy = Math.sin(finalAngle) * p.baseSpeed;

        // Mouse vortex pull
        const mdx = mouse.x - p.x;
        const mdy = mouse.y - p.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mDist < 260 && mDist > 8) {
          const orbitForce = (1 - mDist / 260) * 2.8;
          // Perpendicular tangential vortex velocity
          flowVx += (-mdy / mDist) * orbitForce;
          flowVy += (mdx / mDist) * orbitForce;
        }

        // Scroll momentum
        flowVy -= scrollVelocity * 0.12;

        p.vx += (flowVx - p.vx) * 0.1;
        p.vy += (flowVy - p.vy) * 0.1;

        p.x += p.vx;
        p.y += p.vy;

        // Life cycle & boundary respawn
        p.life += 0.004;
        if (p.x < -30) { p.x = width + 30; p.prevX = p.x; }
        if (p.x > width + 30) { p.x = -30; p.prevX = p.x; }
        if (p.y < -30) { p.y = height + 30; p.prevY = p.y; }
        if (p.y > height + 30) { p.y = -30; p.prevY = p.y; }

        // Render luminous particle trailing light filament
        const alpha = Math.sin(p.life * Math.PI) * 0.65;
        const speedMag = Math.sqrt(p.vx * p.vx + p.vy * p.vy);

        ctx.beginPath();
        ctx.moveTo(p.prevX, p.prevY);
        ctx.lineTo(p.x, p.y);
        ctx.strokeStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${Math.min(alpha * (speedMag * 0.6), 0.75)})`;
        ctx.lineWidth = Math.min(p.size, 2.8);
        ctx.stroke();

        // Glowing nucleus
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${alpha})`;
        ctx.shadowColor = p.color.hex;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      ctx.restore();

      // =========================================================================
      // LAYER 4: Interactive Singular Gravitational Halo Around Cursor
      // =========================================================================
      if (mouse.active) {
        ctx.save();
        const cursorGlow = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, mouse.radius
        );
        cursorGlow.addColorStop(0, 'rgba(56, 189, 248, 0.08)');
        cursorGlow.addColorStop(0.5, 'rgba(192, 132, 252, 0.03)');
        cursorGlow.addColorStop(1, 'rgba(7, 9, 14, 0)');
        ctx.fillStyle = cursorGlow;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      />
      {/* Subtle organic noise overlay for authentic cinematic tactile texture */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.015) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          opacity: 0.7,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}
