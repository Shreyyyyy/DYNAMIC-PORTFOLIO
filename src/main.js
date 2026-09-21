import * as THREE from 'three';
import confetti from 'canvas-confetti';

/* ==========================================================================
   SHREYANS JAIN — NARRATIVE CURSOR STORY ENGINE
   Dynamic HUD tracking, 3D synaptic flow, and storytelling animations
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initStoryCursorHUD();
  initThreeSynapticFlow();
  initActObserver();
  initSwarmInteraction();
  initVoiceTurnSimulation();
  initStoryTerminal();
});

/* ---------------- 1. Story Cursor HUD System ---------------- */
function initStoryCursorHUD() {
  const hud = document.getElementById('cursor-hud');
  const hudChapter = hud.querySelector('.hud-chapter');
  const hudText = hud.querySelector('.hud-text');

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let posX = mouseX;
  let posY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function renderHUD() {
    posX += (mouseX - posX) * 0.18;
    posY += (mouseY - posY) * 0.18;
    hud.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
    requestAnimationFrame(renderHUD);
  }
  renderHUD();

  // Dynamic Hover Inspect Overrides
  const inspectElements = document.querySelectorAll('[data-hud-override]');
  inspectElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      hud.classList.add('hovering');
      hudText.textContent = el.getAttribute('data-hud-override');
    });
    el.addEventListener('mouseleave', () => {
      hud.classList.remove('hovering');
      // restore current chapter
      const currentAct = document.querySelector('.step-item.active');
      const actIndex = currentAct ? currentAct.getAttribute('data-act') : '0';
      const activeSection = document.getElementById(`act-${actIndex}`);
      if (activeSection) {
        hudText.textContent = activeSection.getAttribute('data-hud') || 'EXPLORING MIND';
      }
    });
  });
}

/* ---------------- 2. Three.js Synaptic Flow Simulation ---------------- */
function initThreeSynapticFlow() {
  const canvas = document.getElementById('neural-canvas');
  if (!canvas) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 40;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const count = 75; // Quiet, subtle elegance
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const vels = [];

  const col1 = new THREE.Color(0xd4af37); // Antique Champagne Gold
  const col2 = new THREE.Color(0x997d33); // Bronze Brass Warmth

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 80;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 60;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 40;

    const ratio = Math.random();
    const c = col1.clone().lerp(col2, ratio);
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;

    vels.push({
      x: (Math.random() - 0.5) * 0.008, // Slow, peaceful, floating dust
      y: (Math.random() - 0.5) * 0.008,
      z: (Math.random() - 0.5) * 0.006
    });
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const pMaterial = new THREE.PointsMaterial({
    size: 2.0,
    vertexColors: true,
    transparent: true,
    opacity: 0.55,
    blending: THREE.AdditiveBlending
  });
  const pointMesh = new THREE.Points(geometry, pMaterial);
  scene.add(pointMesh);

  // Synaptic lines
  const maxLines = count * 3;
  const linePositions = new Float32Array(maxLines * 6);
  const lineGeometry = new THREE.BufferGeometry();
  lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));

  const lineMaterial = new THREE.LineBasicMaterial({
    color: 0x38bdf8,
    transparent: true,
    opacity: 0.14, // Subtle, ethereal connections
    blending: THREE.AdditiveBlending
  });
  const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
  scene.add(lineMesh);

  let targetX = 0;
  let targetY = 0;
  window.addEventListener('mousemove', (e) => {
    targetX = ((e.clientX - window.innerWidth / 2) / window.innerWidth) * 0.4;
    targetY = ((e.clientY - window.innerHeight / 2) / window.innerHeight) * 0.4;
  });

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  function animate() {
    requestAnimationFrame(animate);

    const pos = geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
      pos[i * 3] += vels[i].x;
      pos[i * 3 + 1] += vels[i].y;
      pos[i * 3 + 2] += vels[i].z;

      if (pos[i * 3] > 40 || pos[i * 3] < -40) vels[i].x *= -1;
      if (pos[i * 3 + 1] > 30 || pos[i * 3 + 1] < -30) vels[i].y *= -1;
      if (pos[i * 3 + 2] > 20 || pos[i * 3 + 2] < -20) vels[i].z *= -1;
    }
    geometry.attributes.position.needsUpdate = true;

    // Connect adjacent nodes
    let lIdx = 0;
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = pos[i * 3] - pos[j * 3];
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < 12 && lIdx < maxLines) {
          linePositions[lIdx * 6] = pos[i * 3];
          linePositions[lIdx * 6 + 1] = pos[i * 3 + 1];
          linePositions[lIdx * 6 + 2] = pos[i * 3 + 2];
          linePositions[lIdx * 6 + 3] = pos[j * 3];
          linePositions[lIdx * 6 + 4] = pos[j * 3 + 1];
          linePositions[lIdx * 6 + 5] = pos[j * 3 + 2];
          lIdx++;
        }
      }
    }
    lineGeometry.setDrawRange(0, lIdx * 2);
    lineGeometry.attributes.position.needsUpdate = true;

    pointMesh.rotation.y += 0.001;
    lineMesh.rotation.y += 0.001;

    scene.rotation.y += (targetX - scene.rotation.y) * 0.04;
    scene.rotation.x += (targetY - scene.rotation.x) * 0.04;

    renderer.render(scene, camera);
  }
  animate();
}

/* ---------------- 3. Act Observer (Narrative Chapter Tracker) ---------------- */
function initActObserver() {
  const acts = document.querySelectorAll('.story-act');
  const navLinks = document.querySelectorAll('.menu-link');
  const mobileDockBtns = document.querySelectorAll('.mobile-dock-btn:not(.dock-call-highlight)');
  const hudChapter = document.querySelector('.hud-chapter');
  const hudText = document.querySelector('.hud-text');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        const actNum = id.replace('act-', '');
        
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('data-act') === actNum);
        });

        mobileDockBtns.forEach(btn => {
          btn.classList.toggle('active', btn.getAttribute('data-act') === actNum);
        });

        const chapterTitle = entry.target.getAttribute('data-chapter') || `ACT ${actNum.toUpperCase()}`;
        const hudGoal = entry.target.getAttribute('data-hud') || 'EXPLORING MIND';

        if (hudChapter) hudChapter.textContent = chapterTitle;
        if (hudText && !document.getElementById('cursor-hud').classList.contains('hovering')) {
          hudText.textContent = hudGoal;
        }
      }
    });
  }, { threshold: 0.3 });

  acts.forEach(act => observer.observe(act));

  // Navigation Links smooth scroll (Desktop & Mobile Dock)
  const allNavTriggers = document.querySelectorAll('.menu-link, .mobile-dock-btn:not([href^="tel:"])');
  allNavTriggers.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Dynamic 3D Magnetic Hover for Cards
  const magneticCards = document.querySelectorAll('.journey-card-content, .feature-story-card, .stat-pill, .skill-matrix-box, .system-card, .luxury-contact-tile');
  magneticCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });
}

/* ---------------- 4. Swarm Node Interaction ---------------- */
function initSwarmInteraction() {
  const nodes = document.querySelectorAll('.swarm-node');
  const feed = document.getElementById('swarm-feed');

  const nodeStories = {
    supervisor: {
      tag: '[SUPERVISOR]',
      cls: 'agent-tag',
      msg: 'LangGraph DAG planner decomposing enterprise CRM goal into asynchronous tool calls.'
    },
    toolcall: {
      tag: '[MISTRAL_FT]',
      cls: 'agent-tag tool',
      msg: 'Fine-tuned Mistral-7B weights loaded. Generating parameter JSON with 30% improved precision.'
    },
    delegation: {
      tag: '[KAFKA_BUS]',
      cls: 'agent-tag pass',
      msg: 'Dispatched task message to event streaming queue with automatic retry handlers.'
    }
  };

  nodes.forEach(node => {
    node.addEventListener('click', () => {
      nodes.forEach(n => n.classList.remove('active'));
      node.classList.add('active');

      const agentKey = node.getAttribute('data-agent');
      const story = nodeStories[agentKey];
      if (story && feed) {
        const p = document.createElement('div');
        p.className = 'thought-line';
        p.innerHTML = `<span class="${story.cls}">${story.tag}</span> ${story.msg}`;
        feed.prepend(p);
      }
    });
  });
}

/* ---------------- 5. Voice Turn Simulation ---------------- */
function initVoiceTurnSimulation() {
  const trigger = document.getElementById('test-audio-trigger');
  const output = document.getElementById('voice-output-text');
  if (!trigger || !output) return;

  const dialogue = [
    "Brief acknowledged. Generating 4-scene video storyboard with protagonist style lock.",
    "Streaming audio turnaround clocked at 240ms. Multilingual STT buffer clear.",
    "Imagen 3 keyframe synthesized. Google VEO temporal motion initialized."
  ];
  let idx = 0;

  trigger.addEventListener('click', () => {
    trigger.disabled = true;
    trigger.innerHTML = '<span>🎙️ Synthesizing...</span>';
    output.textContent = "Listening to audio packet stream...";

    setTimeout(() => {
      idx = (idx + 1) % dialogue.length;
      output.textContent = dialogue[idx];
      trigger.disabled = false;
      trigger.innerHTML = '<span>Trigger Voice Turn</span> <span class="btn-arrow">→</span>';
    }, 900);
  });
}

/* ---------------- 6. Smart Story Terminal ---------------- */
function initStoryTerminal() {
  const form = document.getElementById('story-term-form');
  const input = document.getElementById('story-term-input');
  const log = document.getElementById('story-term-logs');
  const chips = document.querySelectorAll('.quick-chip');

  if (!form || !input || !log) return;

  function appendLog(sender, text, cls) {
    const d = document.createElement('div');
    d.className = `log-line ${cls}`;
    d.innerHTML = `<strong>[${sender}]</strong> ${text}`;
    log.appendChild(d);
    log.scrollTop = log.scrollHeight;
  }

  function handleCommand(cmd) {
    const q = cmd.toLowerCase().trim();
    appendLog('You', cmd, 'user');

    if (q === 'systems') {
      appendLog('Kernel', `<b>Shipped Enterprise AI Systems:</b><br>
        1. <b>Flipkart Talk2Data:</b> Natural language SQL analytics &amp; forecasting with LangGraph &amp; Google ADK.<br>
        2. <b>Enterprise RAG Platform:</b> Reduced lookup from 60+ min to &lt;1 min with hybrid search.<br>
        3. <b>Multilingual Voice AI:</b> Real-time Whisper/FastAPI bot handling 5 concurrent conversations with zero human handoff.<br>
        4. <b>Agentic Video Pipeline:</b> LangGraph + Google Veo + Nano Banana multi-agent film studio.<br>
        5. <b>Creativium Banner Generator:</b> Automated advertising banner generation.<br>
        6. <b>AI RFP Analyzer:</b> Document intelligence, costing &amp; SLA modeling.`, 'bot');
    } else if (q === 'why-hire') {
      appendLog('Kernel', `<b>Why Hire Shreyans Jain:</b><br>
        • <b>Proven in Production:</b> Built systems handling concurrent enterprise voice, sub-minute RAG lookups, and multi-agent workflows.<br>
        • <b>Fine-Tuning Expertise:</b> +30% tool calling accuracy gains on open-weight LLaMA &amp; Mistral.<br>
        • <b>Reliability First:</b> -40% execution faults using Guardrails-AI and DeepEval benchmarking.<br>
        • <b>Rapid Delivery:</b> From research to shipping in enterprise production environments at dentsu and BusinessNext.`, 'bot');
    } else if (q === 'skills') {
      appendLog('Kernel', `<b>Full Technical Arsenal:</b><br>
        • <b>Agentic &amp; LLM:</b> LangGraph, LangChain, Google ADK, MCP (Model Context Protocol), Tool Calling, Multi-Agent Swarms<br>
        • <b>Multimodal:</b> Google Gemini 1.5, Google Veo, Imagen 3, Whisper STT, Neural TTS, VAD<br>
        • <b>Safety &amp; Ops:</b> DeepEval, Guardrails-AI, FastAPI, Docker, Kafka, MLflow, WebSockets, Python, SQL`, 'bot');
    } else if (q === 'call' || q === 'contact') {
      confetti({ particleCount: 100, spread: 80, origin: { y: 0.8 } });
      appendLog('Kernel', `<b>Direct Lines:</b><br>
        📞 <b>Phone:</b> <a href="tel:+919958510891" style="color:#38bdf8;font-weight:700;">+91 9958510891</a><br>
        ✉️ <b>Email:</b> <a href="mailto:shreyansjain.placement@gmail.com" style="color:#38bdf8;font-weight:700;">shreyansjain.placement@gmail.com</a><br>
        💼 <b>LinkedIn:</b> <a href="https://www.linkedin.com/in/shreyans-jain-9255351a7/" target="_blank" style="color:#38bdf8;font-weight:700;">linkedin.com/in/shreyans-jain-9255351a7</a><br>
        📍 <b>Location:</b> Gurugram, Haryana, India (Open to Worldwide Relocation / Remote)`, 'bot');
    } else {
      confetti({ particleCount: 80, spread: 70 });
      appendLog('Agent', `Inquiry registered for: "<em>${cmd}</em>". Direct message logged for Shreyans. Feel free to call directly at <a href="tel:+919958510891" style="color:#38bdf8;">+91 9958510891</a>.`, 'bot');
    }
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = input.value.trim();
    if (!val) return;
    input.value = '';
    handleCommand(val);
  });

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const c = chip.getAttribute('data-cmd');
      handleCommand(c);
    });
  });
}
