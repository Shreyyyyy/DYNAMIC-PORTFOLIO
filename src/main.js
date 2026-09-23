import * as THREE from 'three';
import confetti from 'canvas-confetti';

/* ==========================================================================
   SHREYANS JAIN — NARRATIVE CURSOR STORY ENGINE
   Dynamic HUD tracking, 3D synaptic flow, and storytelling animations
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initCyberTelemetryChassis();
  initCyberAudioEngine();
  initCyberCommandConsole();
  initStoryCursorHUD();
  initThreeSynapticFlow();
  initActObserver();
  initHeroAgentSandbox();
  initSwarmInteraction();
  initVoiceTurnSimulation();
  initStoryTerminal();
  initScrollAIGenerationBeam();
  initScrollDrivenContentReveal();
  init3DCardParallax();
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

  const count = 90; // Rich, vibrant cyber constellation
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const vels = [];

  const cyberPalette = [
    new THREE.Color(0x00f0ff), // Electric Cyan
    new THREE.Color(0x38bdf8), // Sky Blue
    new THREE.Color(0xa855f7), // Neon Violet
    new THREE.Color(0xf43f5e), // Cyber Pink / Rose
    new THREE.Color(0x00ff9d), // Matrix Emerald
    new THREE.Color(0xfb7185)  // Sunset Coral
  ];

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 80;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 60;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 40;

    const colorIndex = i % cyberPalette.length;
    const nextColorIndex = (colorIndex + 1) % cyberPalette.length;
    const ratio = Math.random();
    const c = cyberPalette[colorIndex].clone().lerp(cyberPalette[nextColorIndex], ratio);

    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;

    vels.push({
      x: (Math.random() - 0.5) * 0.009,
      y: (Math.random() - 0.5) * 0.009,
      z: (Math.random() - 0.5) * 0.007
    });
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const pMaterial = new THREE.PointsMaterial({
    size: 2.4,
    vertexColors: true,
    transparent: true,
    opacity: 0.75,
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
    color: 0x818cf8, // Indigo-cyan neural connections
    transparent: true,
    opacity: 0.22,
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
      confetti({ particleCount: 100, spread: 80, origin: { y: 0.8 }, colors: ['#fbbf24', '#f59e0b', '#c084fc', '#a855f7', '#fef08a'] });
      appendLog('Kernel', `<b>Direct Lines:</b><br>
        📞 <b>Phone:</b> <a href="tel:+919958510891" style="color:#fbbf24;font-weight:700;">+91 9958510891</a><br>
        ✉️ <b>Email:</b> <a href="mailto:shreyansjain.placement@gmail.com" style="color:#c084fc;font-weight:700;">shreyansjain.placement@gmail.com</a><br>
        💼 <b>LinkedIn:</b> <a href="https://www.linkedin.com/in/shreyans-jain-9255351a7/" target="_blank" style="color:#fbbf24;font-weight:700;">linkedin.com/in/shreyans-jain-9255351a7</a><br>
        📍 <b>Location:</b> Gurugram, Haryana, India (Open to Worldwide Relocation / Remote)`, 'bot');
    } else {
      confetti({ particleCount: 80, spread: 70, colors: ['#fbbf24', '#f59e0b', '#c084fc', '#a855f7', '#fef08a'] });
      appendLog('Agent', `Inquiry registered for: "<em>${cmd}</em>". Direct message logged for Shreyans. Feel free to call directly at <a href="tel:+919958510891" style="color:#fbbf24;font-weight:700;">+91 9958510891</a>.`, 'bot');
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

/* ---------------- 3.5 Interactive Live Agent Swarm Sandbox ---------------- */
function initHeroAgentSandbox() {
  const tabs = document.querySelectorAll('.s-tab');
  const panels = document.querySelectorAll('.sandbox-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const mode = tab.getAttribute('data-mode');
      const targetPanel = document.getElementById(`panel-${mode}`);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  // Voice Trigger
  const btnVoice = document.getElementById('btn-trigger-voice');
  const voiceFeed = document.getElementById('live-voice-feed');
  const voicePhrases = [
    "“Whisper STT decoded Hindi/English mixed input in 180ms.”",
    "“Neural TTS synthesized voice chunk. VAD silence detected.”",
    "“Test-drive appointment booked: Saturday 4:00 PM for Safari EV.”",
    "“Live bidirectional WebSocket buffer streaming at 60 FPS.”"
  ];
  let vIdx = 0;
  if (btnVoice && voiceFeed) {
    btnVoice.addEventListener('click', () => {
      confetti({ particleCount: 30, spread: 45, origin: { y: 0.4, x: 0.75 }, colors: ['#00f0ff', '#38bdf8', '#c084fc', '#f43f5e', '#00ff9d'] });
      btnVoice.innerHTML = '<span>🎙️ Processing Audio...</span>';
      voiceFeed.textContent = "Listening to microphone packet stream...";
      setTimeout(() => {
        vIdx = (vIdx + 1) % voicePhrases.length;
        voiceFeed.textContent = voicePhrases[vIdx];
        btnVoice.innerHTML = '<span>Speak / Prompt Agent</span> <span class="action-ripple">✨</span>';
      }, 700);
    });
  }

  // Swarm Trigger
  const btnSwarm = document.getElementById('btn-trigger-swarm');
  const swarmFeed = document.getElementById('live-swarm-feed');
  const swarmPhrases = [
    "[LANGGRAPH] Supervisor routed query: 1 SQL agent + 1 Chart agent.",
    "[FINE-TUNED MISTRAL] Generated valid JSON tool params (+30% accuracy).",
    "[GUARDRAILS-AI] Clean check passed with 0 hallucination score.",
    "[COMPLETED] CRM email drafted and sent to Kafka event queue."
  ];
  let sIdx = 0;
  if (btnSwarm && swarmFeed) {
    btnSwarm.addEventListener('click', () => {
      confetti({ particleCount: 35, spread: 55, origin: { y: 0.4, x: 0.75 }, colors: ['#00f0ff', '#38bdf8', '#c084fc', '#f43f5e', '#00ff9d'] });
      btnSwarm.innerHTML = '<span>⚡ Orchestrating DAG...</span>';
      swarmFeed.textContent = "[SUPERVISOR] Decomposing workflow into sub-nodes...";
      setTimeout(() => {
        sIdx = (sIdx + 1) % swarmPhrases.length;
        swarmFeed.textContent = swarmPhrases[sIdx];
        btnSwarm.innerHTML = '<span>Dispatch Multi-Agent Task</span> <span class="action-ripple">⚡</span>';
      }, 700);
    });
  }

  // RAG Trigger
  const btnRag = document.getElementById('btn-trigger-rag');
  const ragFeed = document.getElementById('live-rag-feed');
  const ragPhrases = [
    "Indexed 4,200 PDF pages in 18.4s. Hybrid Dense/BM25 vectors ready.",
    "Lookup completed in 0.42s (vs 60+ min manual). 98.4% groundedness.",
    "Citation verified: Section 4.2 of Enterprise Compliance Manual.",
    "DeepEval Faithfulness score clocked at 0.992 across 50 queries."
  ];
  let rIdx = 0;
  if (btnRag && ragFeed) {
    btnRag.addEventListener('click', () => {
      confetti({ particleCount: 40, spread: 60, origin: { y: 0.4, x: 0.75 }, colors: ['#00f0ff', '#38bdf8', '#c084fc', '#f43f5e', '#00ff9d'] });
      btnRag.innerHTML = '<span>🔍 Vector Lookup...</span>';
      ragFeed.textContent = "Querying hybrid vector index...";
      setTimeout(() => {
        rIdx = (rIdx + 1) % ragPhrases.length;
        ragFeed.textContent = ragPhrases[rIdx];
        btnRag.innerHTML = '<span>Query Vector Space</span> <span class="action-ripple">🔍</span>';
      }, 650);
    });
  }
}

/* ---------------- 8. Scroll-Driven Multi-Genre AI Inference Generation Beam ---------------- */
function initScrollAIGenerationBeam() {
  const beam = document.getElementById('ai-generation-beam');
  if (!beam) return;

  const chipGenre = document.getElementById('beam-chip-genre');
  const chipStatus = document.getElementById('beam-chip-status');
  const coreEmitter = document.getElementById('beam-core-emitter');
  const sections = document.querySelectorAll('.story-act');

  // Multi-Genre Configuration for every sector
  const genreConfigs = {
    quantum: {
      name: 'GENRE: QUANTUM SINGULARITY',
      status: 'GENERATING // 4,096 T/S',
      phrase: '⚡ Quantum AI Core online · Multi-agent architecture active',
      color: '#00f0ff',
      tokenBase: 4096
    },
    matrix: {
      name: 'GENRE: CYBER MATRIX MESH',
      status: 'STREAMING // FAST RAG & AGENT DAGS',
      phrase: '🤖 Agentic DAGs, Whisper voice streams & Fast RAG verified',
      color: '#10b981',
      tokenBase: 5120
    },
    plasma: {
      name: 'GENRE: ULTRAVIOLET PLASMA ARC',
      status: 'MATERIALIZING // PRODUCTION BLUEPRINTS',
      phrase: '🚀 6 Enterprise AI platforms delivered at dentsu & Flipkart',
      color: '#c084fc',
      tokenBase: 3840
    },
    temporal: {
      name: 'GENRE: TEMPORAL CHRONO-LASER',
      status: 'SYNCHRONIZING // CAREER TIMELINE',
      phrase: '💼 Research academia to Senior AI Systems Engineer',
      color: '#f59e0b',
      tokenBase: 4608
    },
    security: {
      name: 'GENRE: VERTEX SECURITY FIELD',
      status: 'VERIFYING // ZERO HALLUCINATIONS',
      phrase: '🛡️ DeepEval 99.4% groundedness · Google Cloud Certified',
      color: '#06b6d4',
      tokenBase: 6144
    },
    uplink: {
      name: 'GENRE: SUB-SPACE QUANTUM UPLINK',
      status: 'TRANSMITTING // EXECUTIVE SUITE',
      phrase: '✦ Available for Staff / Senior AI Engineer roles worldwide',
      color: '#a855f7',
      tokenBase: 4096
    }
  };

  let currentY = window.innerHeight * 0.42;
  let targetY = currentY;
  let currentGenreKey = 'quantum';
  let activeSection = null;
  let lastScrollY = window.scrollY || window.pageYOffset;
  let scrollVelocity = 0;
  let time = 0;
  let frameCount = 0;

  // Track scroll velocity for realistic inertia
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY || window.pageYOffset;
    scrollVelocity = currentScrollY - lastScrollY;
    lastScrollY = currentScrollY;
  }, { passive: true });

  function updateGenerationBeam() {
    time += 0.035;
    frameCount++;
    const H = window.innerHeight;

    // Beam base elevation: centered around 40-42% of viewport height
    // Slight inertia displacement when scrolling, plus micro hover wave
    const hoverWave = Math.sin(time * 2.0) * 8;
    const velocityOffset = Math.max(Math.min(scrollVelocity * 0.35, 30), -30);
    // Decay velocity smoothly
    scrollVelocity *= 0.88;

    const baseElevation = H * 0.42;
    targetY = baseElevation + hoverWave + velocityOffset;

    // Smooth interpolation (lerp)
    currentY += (targetY - currentY) * 0.12;
    beam.style.transform = `translate3d(0, ${currentY.toFixed(1)}px, 0)`;

    // Detect Active Section intersecting the beam line
    let newActiveSection = null;
    let maxOverlap = -Infinity;

    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      // Test intersection with the beam focal line
      if (rect.top <= currentY + 140 && rect.bottom >= currentY - 140) {
        const overlap = Math.min(rect.bottom, currentY + 140) - Math.max(rect.top, currentY - 140);
        if (overlap > maxOverlap) {
          maxOverlap = overlap;
          newActiveSection = sec;
        }
      }
    });

    if (!newActiveSection && sections.length > 0) {
      // Fallback: section most visible in viewport
      let maxVisible = -Infinity;
      sections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        const visibleH = Math.min(rect.bottom, H) - Math.max(rect.top, 0);
        if (visibleH > maxVisible) {
          maxVisible = visibleH;
          newActiveSection = sec;
        }
      });
    }

    if (newActiveSection && newActiveSection !== activeSection) {
      if (activeSection) {
        activeSection.classList.remove('act-generating');
      }
      activeSection = newActiveSection;
      activeSection.classList.add('act-generating');

      const genreKey = activeSection.getAttribute('data-genre') || 'quantum';
      if (genreKey !== currentGenreKey) {
        currentGenreKey = genreKey;
        beam.className = `ai-generation-beam genre-${genreKey}`;

        const cfg = genreConfigs[genreKey] || genreConfigs.quantum;
        if (chipGenre) chipGenre.textContent = cfg.name;
        if (chipStatus) chipStatus.textContent = cfg.status;

        if (typeof playCyberChirp === 'function') {
          playCyberChirp(680, 1150, 0.045, 0.022);
        }
      }
    }

    // Dynamic Token Rate Telemetry Jitter (every 45 frames)
    if (frameCount % 45 === 0 && chipStatus) {
      const cfg = genreConfigs[currentGenreKey] || genreConfigs.quantum;
      const jitter = Math.floor((Math.random() - 0.5) * 400);
      const dynamicTokens = Math.max(2048, cfg.tokenBase + jitter);
      chipStatus.textContent = `GENERATING // ${dynamicTokens.toLocaleString()} T/S`;
    }

    requestAnimationFrame(updateGenerationBeam);
  }

  requestAnimationFrame(updateGenerationBeam);

  // Interactive Click on the Docked Core Emitter
  if (coreEmitter) {
    coreEmitter.addEventListener('click', (e) => {
      e.stopPropagation();
      const cfg = genreConfigs[currentGenreKey] || genreConfigs.quantum;

      if (typeof playCyberPulse === 'function') {
        playCyberPulse(740, 0.16, 0.08);
      }

      const rect = coreEmitter.getBoundingClientRect();
      confetti({
        particleCount: 45,
        spread: 75,
        origin: {
          x: (rect.left + rect.width / 2) / window.innerWidth,
          y: (rect.top + rect.height / 2) / window.innerHeight
        },
        colors: [cfg.color, '#ffffff', '#c084fc', '#38bdf8']
      });

      // Quick pulse feedback on the chip
      const chip = coreEmitter.querySelector('.emitter-telemetry-chip');
      if (chip) {
        chip.style.transform = 'scale(1.08)';
        setTimeout(() => { chip.style.transform = ''; }, 260);
      }
    });
  }
}

/* ---------------- 9. 3D Card Parallax & Glare System ---------------- */
function init3DCardParallax() {
  // Only apply tilt on desktop with fine mouse pointer
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  const cards = document.querySelectorAll('.product-card-3d, .system-card, .skill-matrix-box, .journey-card-content, .acquisition-spec-card, .luxury-contact-tile, .magnetic-hover');

  cards.forEach(card => {
    let bounds;
    let rafId = null;

    function onMouseEnter() {
      bounds = card.getBoundingClientRect();
      document.addEventListener('mousemove', onMouseMove);
    }

    function onMouseMove(e) {
      if (!bounds) bounds = card.getBoundingClientRect();
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const leftX = mouseX - bounds.left;
      const topY = mouseY - bounds.top;
      const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2
      };

      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const maxTilt = 4.5;
        const rotateX = (-center.y / (bounds.height / 2)) * maxTilt;
        const rotateY = (center.x / (bounds.width / 2)) * maxTilt;

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
        card.style.setProperty('--mouse-x', `${leftX}px`);
        card.style.setProperty('--mouse-y', `${topY}px`);
      });
    }

    function onMouseLeave() {
      document.removeEventListener('mousemove', onMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
      bounds = null;
    }

    card.addEventListener('mouseenter', onMouseEnter);
    card.addEventListener('mouseleave', onMouseLeave);
  });
}

/* ---------------- 10. Cyber Command Console System ---------------- */
function initCyberCommandConsole() {
  const btnVoice = document.getElementById('btn-cmd-voice');
  const btnSwarm = document.getElementById('btn-cmd-swarm');
  const btnRag = document.getElementById('btn-cmd-rag');
  const outputEl = document.getElementById('console-live-output');
  const spectrumBars = document.querySelectorAll('.audio-spectrum-reactor .spectrum-bar');

  if (!outputEl) return;

  function flashSpectrumBars() {
    spectrumBars.forEach(bar => {
      const randomH = Math.floor(40 + Math.random() * 55);
      bar.style.height = `${randomH}%`;
    });
    setTimeout(() => {
      spectrumBars.forEach(bar => {
        bar.style.height = '';
      });
    }, 1800);
  }

  let typingTimeout = null;

  function streamOutput(text, prefix = '[DIAGNOSTIC]', prefixColor = '#00f0ff') {
    if (typingTimeout) clearTimeout(typingTimeout);
    playCyberPulse(580, 0.12, 0.05);
    flashSpectrumBars();

    outputEl.innerHTML = `<span style="color:${prefixColor}; font-weight:700; text-shadow:0 0 8px ${prefixColor}66;">${prefix}</span> `;
    let i = 0;
    
    function typeChar() {
      if (i < text.length) {
        outputEl.innerHTML += text.charAt(i);
        i++;
        typingTimeout = setTimeout(typeChar, 14);
      }
    }
    typeChar();
  }

  if (btnVoice) {
    btnVoice.addEventListener('click', () => {
      streamOutput(
        'WebSocket dual-stream channel established. Audio input captured via VAD -> Whisper STT transcribed in 142ms: "Verify multi-agent latency across cloud regions." -> Intent verified -> TTS synthesized in 186ms. Total turnaround: 328ms (<400ms target). STATUS: NOMINAL.',
        '[VOICE AI ACTIVE]',
        '#00f0ff'
      );
    });
  }

  if (btnSwarm) {
    btnSwarm.addEventListener('click', () => {
      streamOutput(
        'LangGraph State Graph initialized. Supervisor activated. Dispatching 4 autonomous sub-agents: [Director-Agent], [Script-Agent], [Veo-Video-Generator], and [DeepEval-QA]. Checkpointed state saved to memory. Zero hallucinations detected. STATUS: 100% SUCCESS.',
        '[SWARM DISPATCH]',
        '#c084fc'
      );
    });
  }

  if (btnRag) {
    btnRag.addEventListener('click', () => {
      streamOutput(
        'Ingesting 4,200 enterprise technical manuals. Executing Hybrid Dense Vector + BM25 Sparse Search. Re-ranking top 5 relevant chunks. DeepEval Faithfulness: 99.4% (Threshold: 90%). Retrieval completed in 48ms. STATUS: VERIFIED.',
        '[RAG BENCHMARK]',
        '#00ff9d'
      );
    });
  }
}

/* ---------------- 11. Cyber Viewport Telemetry Chassis ---------------- */
function initCyberTelemetryChassis() {
  const clockEl = document.getElementById('cyber-utc-clock');
  const pingEl = document.getElementById('cyber-ping');

  function updateClock() {
    if (clockEl) {
      const now = new Date();
      const yr = now.getUTCFullYear();
      const mo = String(now.getUTCMonth() + 1).padStart(2, '0');
      const da = String(now.getUTCDate()).padStart(2, '0');
      const hr = String(now.getUTCHours()).padStart(2, '0');
      const mi = String(now.getUTCMinutes()).padStart(2, '0');
      const se = String(now.getUTCSeconds()).padStart(2, '0');
      const ms = String(now.getUTCMilliseconds()).padStart(3, '0');
      clockEl.textContent = `UTC ${yr}.${mo}.${da} [${hr}:${mi}:${se}.${ms}]`;
    }
  }
  setInterval(updateClock, 60);
  updateClock();

  if (pingEl) {
    setInterval(() => {
      const ping = Math.floor(11 + Math.random() * 6);
      pingEl.textContent = `PING: ${ping}ms · 60FPS`;
    }, 2800);
  }
}

/* ---------------- 12. Cyber Audio Synthesizer (Web Audio API) ---------------- */
let audioCtx = null;
let isAudioMuted = false;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playCyberChirp(freq1 = 880, freq2 = 1320, duration = 0.05, volume = 0.03) {
  if (isAudioMuted) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const now = ctx.currentTime;

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq1, now);
    osc.frequency.exponentialRampToValueAtTime(freq2, now + duration);

    gain.gain.setValueAtTime(volume, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + duration);
  } catch (e) {
    // Autoplay policy: will resume on first user interaction
  }
}

function playCyberPulse(freq = 440, duration = 0.12, volume = 0.05) {
  if (isAudioMuted) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const now = ctx.currentTime;

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, now);
    osc.frequency.exponentialRampToValueAtTime(freq * 1.6, now + (duration * 0.4));
    osc.frequency.exponentialRampToValueAtTime(freq * 0.6, now + duration);

    gain.gain.setValueAtTime(volume, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + duration);
  } catch (e) {
    // Ignore
  }
}

function initCyberAudioEngine() {
  const toggleBtn = document.getElementById('btn-toggle-sfx');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      // First click safely unblocks AudioContext in modern browsers
      getAudioContext();
      isAudioMuted = !isAudioMuted;
      const sfxText = toggleBtn.querySelector('.sfx-text');
      const sfxIcon = toggleBtn.querySelector('.sfx-wave-icon');
      if (isAudioMuted) {
        if (sfxText) sfxText.textContent = 'FX: OFF';
        if (sfxIcon) sfxIcon.textContent = '🔇';
        toggleBtn.style.opacity = '0.5';
      } else {
        if (sfxText) sfxText.textContent = 'FX: ON';
        if (sfxIcon) sfxIcon.textContent = '🔊';
        toggleBtn.style.opacity = '1';
        playCyberPulse(520, 0.12, 0.06);
      }
    });
  }

  // Micro-chirp on hovering cyber cards and action triggers
  const interactiveCyberTargets = document.querySelectorAll(
    '.product-card-3d, .console-trigger-btn, .btn-dev-primary, .btn-dev-secondary, .header-cta-gold, .tel-link-btn, .menu-link, .cyber-sfx-toggle, .drone-core-wrap'
  );

  interactiveCyberTargets.forEach(el => {
    el.addEventListener('mouseenter', () => {
      playCyberChirp(980, 1480, 0.045, 0.025);
    });
  });
}

/* ---------------- 10. Authentic AI Generative Materialization Wavefront ---------------- */
function initScrollDrivenContentReveal() {
  const cards = document.querySelectorAll(
    '.story-act:not(#act-0) .product-card-3d, .story-act:not(#act-0) .terminal-window, .scroll-generate-item'
  );
  const headers = document.querySelectorAll('.story-act:not(#act-0) .story-header-left');

  // Stagger indices inside each parent grid container
  const parentGrids = document.querySelectorAll(
    '.comprehensive-skills-grid, .systems-grid, .timeline-flow, .eval-matrix-grid, .acquisition-specs-grid, .contact-split-grid'
  );

  parentGrids.forEach(grid => {
    const gridCards = grid.querySelectorAll('.product-card-3d');
    gridCards.forEach((card, idx) => {
      card.style.setProperty('--stagger-idx', idx);
    });
  });

  function triggerCardGeneration(card, delayMs = 0) {
    setTimeout(() => {
      if (card.classList.contains('is-generated') || card.classList.contains('is-generating')) return;

      card.classList.add('is-generating');

      // Glitch header status decoding effect — progressive GPT token stream
      const statusEl = card.querySelector('.c-status');
      let originalHtml = '';
      if (statusEl) {
        originalHtml = statusEl.innerHTML;
        statusEl.innerHTML = '<span class="sys-pulse-green"></span> [STREAMING 25%... ▮]';
        statusEl.style.color = '#00f0ff';

        // Stage 2: Token generation at 450ms
        setTimeout(() => {
          if (card.classList.contains('is-generating') && statusEl) {
            statusEl.innerHTML = '<span class="sys-pulse-green"></span> [GENERATING TOKENS... ▮]';
            statusEl.style.color = '#38bdf8';
            if (typeof playCyberChirp === 'function') playCyberChirp(840, 1420, 0.025, 0.012);
          }
        }, 450);

        // Stage 3: Neural weights computed at 950ms
        setTimeout(() => {
          if (card.classList.contains('is-generating') && statusEl) {
            statusEl.innerHTML = '<span class="sys-pulse-green"></span> [DECODING 88%... ▮]';
            statusEl.style.color = '#c084fc';
            if (typeof playCyberChirp === 'function') playCyberChirp(960, 1600, 0.025, 0.012);
          }
        }, 950);

        // Stage 4: Finalizing inference at 1350ms
        setTimeout(() => {
          if (card.classList.contains('is-generating') && statusEl) {
            statusEl.innerHTML = '<span class="sys-pulse-green"></span> [SYNTHESIS READY 99%]';
            statusEl.style.color = '#34d399';
          }
        }, 1350);
      }

      if (typeof playCyberChirp === 'function') {
        playCyberChirp(720, 1180, 0.04, 0.018);
      }

      // Complete generation when laser reaches bottom (1.6s deliberate GPT pacing)
      setTimeout(() => {
        card.classList.remove('is-generating');
        card.classList.add('is-generated');
        if (statusEl) {
          statusEl.innerHTML = originalHtml || '<span class="sys-pulse-green"></span> 99.8% OPTIMAL';
          statusEl.style.color = '';
        }
      }, 1620);
    }, delayMs);
  }

  // Header Observer
  const headerObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-generated');
        obs.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px 40px 0px', threshold: 0.1 });

  headers.forEach(h => headerObserver.observe(h));

  // Card Observer with staggered GPT sequence
  const cardObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const card = entry.target;
        const staggerIdx = parseInt(card.style.getPropertyValue('--stagger-idx')) || 0;
        triggerCardGeneration(card, staggerIdx * 220);
        obs.unobserve(card);
      }
    });
  }, {
    rootMargin: '0px 0px 40px 0px',
    threshold: 0.1
  });

  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85 && rect.bottom > 0) {
      card.classList.add('is-generated');
    } else {
      cardObserver.observe(card);
    }
  });
}
