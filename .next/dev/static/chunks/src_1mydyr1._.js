(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Navbar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CommandPalette$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CommandPalette.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SynapticScrollNavigator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SynapticScrollNavigator.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuantumFluxBackground$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/QuantumFluxBackground.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScrollStorySection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ScrollStorySection.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SystemsPortfolio$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SystemsPortfolio.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImpactReel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ImpactReel.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChronologicalOdyssey$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ChronologicalOdyssey.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SafetyDashboard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SafetyDashboard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExecutiveContact$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ExecutiveContact.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Footer.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScrollAnimationEngine$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ScrollAnimationEngine.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
function Home() {
    _s();
    const [commandPaletteOpen, setCommandPaletteOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const handleKeyDown = {
                "Home.useEffect.handleKeyDown": (e)=>{
                    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                        e.preventDefault();
                        setCommandPaletteOpen({
                            "Home.useEffect.handleKeyDown": (prev)=>!prev
                        }["Home.useEffect.handleKeyDown"]);
                    }
                }
            }["Home.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "Home.useEffect": ()=>window.removeEventListener('keydown', handleKeyDown)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        style: {
            position: 'relative',
            width: '100%',
            overflowX: 'clip'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScrollAnimationEngine$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onOpenSearch: ()=>setCommandPaletteOpen(true)
            }, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CommandPalette$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: commandPaletteOpen,
                onClose: ()=>setCommandPaletteOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SynapticScrollNavigator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuantumFluxBackground$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScrollStorySection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SystemsPortfolio$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImpactReel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChronologicalOdyssey$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SafetyDashboard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExecutiveContact$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.jsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(Home, "22CiY2n5L3PBEAVRNyvJKZvs+Uk=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ChronologicalOdyssey.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChronologicalOdyssey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/sound.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ChronologicalOdyssey() {
    _s();
    const [activeEraIndex, setActiveEraIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(4); // Default to current role (dentsu)
    const [activeDetailTab, setActiveDetailTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('deployments'); // 'deployments' | 'breakthroughs' | 'tech'
    const milestones = [
        {
            id: 'era-academia-foundations',
            period: '2020 — 2025',
            yearShort: '2020-25',
            company: 'Christ University & VIT Vellore',
            role: 'Master & Bachelor of Computer Applications',
            location: '📍 Bangalore & Vellore, India',
            status: 'ACADEMIC FOUNDATIONS',
            statusColor: '#38bdf8',
            headline: 'Rigorous Foundations in Distributed Computing & ML',
            deployments: [
                'Master of Computer Applications (MCA) — Christ University (2023–2025).',
                'Bachelor of Computer Applications (BCA) — VIT Vellore (2020–2023).',
                'Core research in distributed systems, neural networks, and algorithmic complexity.'
            ],
            breakthroughs: [
                'Graduated with honors across both post-graduate and undergraduate programs.',
                'Spearheaded technical symposiums on scalable software architecture and high-throughput data pipelines.'
            ],
            tech: [
                'Distributed Systems',
                'Machine Learning',
                'Data Structures & Algorithms',
                'Python',
                'Java',
                'SQL'
            ],
            metrics: [
                {
                    val: '2 Degrees',
                    lbl: 'MCA + BCA'
                },
                {
                    val: 'Honors',
                    lbl: 'Academic Rank'
                },
                {
                    val: '5 Years',
                    lbl: 'Deep CS Focus'
                }
            ]
        },
        {
            id: 'era-christ-faculty',
            period: 'March 2024 — Dec 2024',
            yearShort: '2024',
            company: 'Christ University',
            role: 'Faculty & AI / ML Researcher',
            location: '📍 Bengaluru, Karnataka, India',
            status: 'ACADEMIA & RESEARCH',
            statusColor: '#fbbf24',
            headline: 'Engineering Mentorship & Advanced Applied Machine Learning Instruction',
            deployments: [
                'Delivered hands-on curriculum in Python, object-oriented design, and algorithms.',
                'Conducted systems engineering labs focusing on CI/CD lifecycle and test-driven development.',
                'Spearheaded departmental hackathons focused on applied Generative AI and automation.'
            ],
            breakthroughs: [
                'Mentored 100+ engineers on production software patterns, microservices, and system reliability.',
                'Designed modular coursework bridging theoretical ML models with production delivery.'
            ],
            tech: [
                'Python Instruction',
                'OOP Architecture',
                'Algorithms',
                'Mentorship',
                'Curriculum Design'
            ],
            metrics: [
                {
                    val: '100+',
                    lbl: 'Engineers Mentored'
                },
                {
                    val: '100%',
                    lbl: 'Curriculum Pass'
                },
                {
                    val: '10 Mos',
                    lbl: 'Research Tenure'
                }
            ]
        },
        {
            id: 'era-businessnext-genai',
            period: 'Jan 2025 — May 2025',
            yearShort: '2025 (H1)',
            company: 'BUSINESSNEXT',
            role: 'Generative AI Engineer',
            location: '📍 Noida, Uttar Pradesh, India',
            status: 'DEV INNOVATION',
            statusColor: '#60a5fa',
            headline: 'Autonomous Engineering Intelligence & CI/CD Multi-Agent Systems',
            deployments: [
                'Automated sprint risk analysis and engineering backlog synthesis for product teams.',
                'Engineered autonomous QA multi-agent system generating automated test suites from PR git diffs.',
                'Analyzed 50+ Azure DevOps work items per sprint with automated SLA risk detection.',
                'Created synthetic benchmark datasets ensuring strict instruction fidelity and data privacy.'
            ],
            breakthroughs: [
                'Cut QA test suite generation time from 4 hours to instantaneous CI/CD PR triggers.',
                'Eliminated sprint planning discrepancies via automated risk extraction.'
            ],
            tech: [
                'QA Automation Agents',
                'Azure DevOps',
                'Synthetic Datasets',
                'FastAPI',
                'Git Diffs API'
            ],
            metrics: [
                {
                    val: '50+ Items',
                    lbl: 'Sprints Analyzed'
                },
                {
                    val: '4x Faster',
                    lbl: 'QA Test Gen'
                },
                {
                    val: '0 Leakage',
                    lbl: 'Data Privacy'
                }
            ]
        },
        {
            id: 'era-businessnext-agentic',
            period: 'June 2025 — May 2026',
            yearShort: '2025-26',
            company: 'BUSINESSNEXT',
            role: 'Agentic AI Engineer',
            location: '📍 Noida, Uttar Pradesh, India',
            status: 'ENTERPRISE SCALE',
            statusColor: '#c084fc',
            headline: 'Enterprise Multi-Agent CRM Systems & Model Fine-Tuning',
            deployments: [
                'Automated enterprise CRM communications across tier-1 banking clients, boosting turnaround by 35%.',
                'Built stateful multi-agent workflows with autonomous tool calling and Guardrails-AI verification.',
                'Fine-tuned open-source LLaMA and Mistral models for structured JSON output and schema compliance.',
                'Established centralized LLM observability and regression evaluation telemetry with DeepEval.'
            ],
            breakthroughs: [
                'Increased tool calling precision by +30% via specialized LoRA instruction fine-tuning.',
                'Enforced zero PII leakage and eliminated hallucinated financial commitments in live banking ops.'
            ],
            tech: [
                'LangChain (v1)',
                'Fine-Tuned LLaMA',
                'Fine-Tuned Mistral',
                'Guardrails-AI',
                'DeepEval',
                'LoRA'
            ],
            metrics: [
                {
                    val: '+30%',
                    lbl: 'Accuracy Lift'
                },
                {
                    val: '+35%',
                    lbl: 'Response Speed'
                },
                {
                    val: 'DeepEval',
                    lbl: 'Telemetry Guard'
                }
            ]
        },
        {
            id: 'era-dentsu-lead',
            period: 'May 2026 — Present',
            yearShort: '2026-PRES',
            company: 'dentsu',
            role: 'Artificial Intelligence Engineer',
            location: '📍 Gurugram, Haryana, India',
            status: 'CURRENT ROLE',
            statusColor: '#10b981',
            headline: 'Production Agent Swarms, Sub-Minute RAG & Voice AI for Global Brands',
            deployments: [
                'Flipkart Talk2Data: Multi-agent NL-to-SQL platform with self-healing reflection loops (<2% error rate).',
                'Enterprise RAG Platform: Reduced document lookup from 60+ minutes to <1 minute with 98.4% groundedness.',
                'Multilingual Voice AI: 5 concurrent full-duplex channels for test-drive booking without human handoff (<400ms SLA).',
                'AI Film Studio & Veo: 4-agent script-to-screen pipeline reducing creative production cycles by 80%.',
                'Creativium Engine: Automated brand-compliant marketing asset generation across 12+ aspect ratios.'
            ],
            breakthroughs: [
                'Delivered autonomous agent swarms directly into production workflows for Fortune 500 retail clients.',
                'Standardized stateful LangGraph workflows and Model Context Protocol (MCP) integrations across engineering squads.'
            ],
            tech: [
                'LangGraph',
                'Google ADK',
                'Gemini 1.5 Pro',
                'Google Veo',
                'Whisper STT',
                'FastAPI WebSockets',
                'MCP'
            ],
            metrics: [
                {
                    val: '5+ Systems',
                    lbl: 'Shipped to Prod'
                },
                {
                    val: '<60s',
                    lbl: 'RAG Lookup'
                },
                {
                    val: '<400ms',
                    lbl: 'Voice Latency'
                }
            ]
        }
    ];
    const currentEra = milestones[activeEraIndex];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "act-journey",
        style: {
            paddingTop: '90px',
            paddingBottom: '100px'
        },
        className: "jsx-e89ff6ce644ffe3d" + " " + "container-custom",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-e89ff6ce644ffe3d" + " " + "section-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: '14px'
                        },
                        className: "jsx-e89ff6ce644ffe3d" + " " + "glass-pill",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-e89ff6ce644ffe3d" + " " + "pulse-dot"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-e89ff6ce644ffe3d",
                                children: "CHRONOLOGICAL TRAJECTORY · CAREER ODYSSEY"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "jsx-e89ff6ce644ffe3d",
                        children: [
                            "Engineering Trajectory.",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                className: "jsx-e89ff6ce644ffe3d"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                lineNumber: 158,
                                columnNumber: 34
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-e89ff6ce644ffe3d" + " " + "text-glow-gradient",
                                children: "Click Any Station to Switch & Explore Eras."
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "jsx-e89ff6ce644ffe3d",
                        children: "Click any milestone station below to inspect roles, enterprise systems shipped, and measurable business results."
                    }, void 0, false, {
                        fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                lineNumber: 152,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-e89ff6ce644ffe3d" + " " + "career-velocity-strip",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-e89ff6ce644ffe3d" + " " + "velocity-box",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-e89ff6ce644ffe3d" + " " + "velocity-val text-glow-emerald",
                                children: "4+ Years"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                lineNumber: 169,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-e89ff6ce644ffe3d" + " " + "velocity-title",
                                children: "Applied AI & Software Eng."
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-e89ff6ce644ffe3d" + " " + "velocity-box",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-e89ff6ce644ffe3d" + " " + "velocity-val text-glow-cyan",
                                children: "100+"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-e89ff6ce644ffe3d" + " " + "velocity-title",
                                children: "Engineers Mentored"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                lineNumber: 174,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-e89ff6ce644ffe3d" + " " + "velocity-box",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-e89ff6ce644ffe3d" + " " + "velocity-val text-glow-purple",
                                children: "5+ Shipped"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-e89ff6ce644ffe3d" + " " + "velocity-title",
                                children: "Enterprise Production Systems"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-e89ff6ce644ffe3d" + " " + "velocity-box",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-e89ff6ce644ffe3d" + " " + "velocity-val text-glow-gold",
                                children: "+30%"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-e89ff6ce644ffe3d" + " " + "velocity-title",
                                children: "Fine-Tuned Accuracy Lift"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-e89ff6ce644ffe3d" + " " + "odyssey-stage glass-panel",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-e89ff6ce644ffe3d" + " " + "transit-interactive-hint",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-e89ff6ce644ffe3d" + " " + "hint-pulse"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-e89ff6ce644ffe3d",
                                children: "⚡ CLICK ANY STATION TO CHANGE & EXPLORE CAREER ERAS"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-e89ff6ce644ffe3d" + " " + "guided-timeline-transit-wrapper",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-e89ff6ce644ffe3d" + " " + "transit-rail-track",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-e89ff6ce644ffe3d" + " " + "transit-rail-base"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                        lineNumber: 197,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: `${activeEraIndex / (milestones.length - 1) * 100}%`,
                                            background: `linear-gradient(90deg, #38bdf8 0%, #fbbf24 30%, #60a5fa 55%, #c084fc 80%, ${currentEra.statusColor} 100%)`
                                        },
                                        className: "jsx-e89ff6ce644ffe3d" + " " + "transit-rail-fill"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                        lineNumber: 198,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-e89ff6ce644ffe3d" + " " + "transit-guided-photon"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                        lineNumber: 206,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                lineNumber: 196,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-e89ff6ce644ffe3d" + " " + "transit-stations-row",
                                children: milestones.map((m, idx)=>{
                                    const isSelected = activeEraIndex === idx;
                                    const isPassed = idx <= activeEraIndex;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playClick"])();
                                            setActiveEraIndex(idx);
                                        },
                                        onMouseEnter: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playHover"])(),
                                        className: "jsx-e89ff6ce644ffe3d" + " " + `transit-station-node ${isSelected ? 'active' : ''} ${isPassed ? 'passed' : ''}`,
                                        children: [
                                            isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    borderColor: m.statusColor
                                                },
                                                className: "jsx-e89ff6ce644ffe3d" + " " + "transit-node-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                                lineNumber: 224,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    background: isSelected ? m.statusColor : isPassed ? '#38bdf8' : 'rgba(255,255,255,0.25)',
                                                    boxShadow: isSelected ? `0 0 16px ${m.statusColor}` : 'none'
                                                },
                                                className: "jsx-e89ff6ce644ffe3d" + " " + "transit-node-dot"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                                lineNumber: 229,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-e89ff6ce644ffe3d" + " " + "transit-node-info",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-e89ff6ce644ffe3d" + " " + "station-year",
                                                        children: m.yearShort
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                                        lineNumber: 237,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-e89ff6ce644ffe3d" + " " + "station-company",
                                                        children: m.company.split(' ')[0]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                                        lineNumber: 238,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                                lineNumber: 236,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, m.id, true, {
                                        fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                        lineNumber: 214,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                lineNumber: 209,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-e89ff6ce644ffe3d" + " " + "milestone-content-body",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-e89ff6ce644ffe3d" + " " + "milestone-header-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-e89ff6ce644ffe3d",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    color: currentEra.statusColor
                                                },
                                                className: "jsx-e89ff6ce644ffe3d" + " " + "milestone-status-tag",
                                                children: [
                                                    "● ",
                                                    currentEra.status,
                                                    " · ",
                                                    currentEra.period
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                                lineNumber: 251,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "jsx-e89ff6ce644ffe3d" + " " + "milestone-role-title",
                                                children: currentEra.role
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                                lineNumber: 254,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-e89ff6ce644ffe3d" + " " + "milestone-company-location",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        style: {
                                                            color: '#ffffff'
                                                        },
                                                        className: "jsx-e89ff6ce644ffe3d",
                                                        children: currentEra.company
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                                        lineNumber: 256,
                                                        columnNumber: 17
                                                    }, this),
                                                    " · ",
                                                    currentEra.location
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                                lineNumber: 255,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                        lineNumber: 250,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-e89ff6ce644ffe3d" + " " + "milestone-metrics-group",
                                        children: currentEra.metrics.map((met, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-e89ff6ce644ffe3d" + " " + "milestone-metric-box",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-e89ff6ce644ffe3d" + " " + "metric-box-val",
                                                        children: met.val
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                                        lineNumber: 264,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-e89ff6ce644ffe3d" + " " + "metric-box-lbl",
                                                        children: met.lbl
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                                        lineNumber: 265,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                                lineNumber: 263,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                        lineNumber: 261,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                lineNumber: 249,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-e89ff6ce644ffe3d" + " " + "milestone-headline-banner",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-e89ff6ce644ffe3d" + " " + "headline-icon",
                                        children: "🎯"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                        lineNumber: 272,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-e89ff6ce644ffe3d" + " " + "headline-text",
                                        children: currentEra.headline
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                        lineNumber: 273,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                lineNumber: 271,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-e89ff6ce644ffe3d" + " " + "milestone-tabs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playClick"])();
                                            setActiveDetailTab('deployments');
                                        },
                                        className: "jsx-e89ff6ce644ffe3d" + " " + `m-tab ${activeDetailTab === 'deployments' ? 'active' : ''}`,
                                        children: [
                                            "🚀 Production Deployments (",
                                            currentEra.deployments.length,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                        lineNumber: 278,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playClick"])();
                                            setActiveDetailTab('breakthroughs');
                                        },
                                        className: "jsx-e89ff6ce644ffe3d" + " " + `m-tab ${activeDetailTab === 'breakthroughs' ? 'active' : ''}`,
                                        children: [
                                            "🏆 Architectural Breakthroughs (",
                                            currentEra.breakthroughs.length,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                        lineNumber: 287,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playClick"])();
                                            setActiveDetailTab('tech');
                                        },
                                        className: "jsx-e89ff6ce644ffe3d" + " " + `m-tab ${activeDetailTab === 'tech' ? 'active' : ''}`,
                                        children: [
                                            "⚡ Tech Stack (",
                                            currentEra.tech.length,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                        lineNumber: 296,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                lineNumber: 277,
                                columnNumber: 11
                            }, this),
                            activeDetailTab === 'deployments' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "jsx-e89ff6ce644ffe3d" + " " + "milestone-list",
                                children: currentEra.deployments.map((dep, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "jsx-e89ff6ce644ffe3d" + " " + "milestone-list-item",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-e89ff6ce644ffe3d" + " " + "item-guided-conduit",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            backgroundColor: currentEra.statusColor,
                                                            boxShadow: `0 0 10px ${currentEra.statusColor}`
                                                        },
                                                        className: "jsx-e89ff6ce644ffe3d" + " " + "item-node-dot"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                                        lineNumber: 313,
                                                        columnNumber: 21
                                                    }, this),
                                                    i < currentEra.deployments.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-e89ff6ce644ffe3d" + " " + "item-vertical-wire"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                                        lineNumber: 314,
                                                        columnNumber: 63
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                                lineNumber: 312,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-e89ff6ce644ffe3d" + " " + "item-content-wrap",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-e89ff6ce644ffe3d",
                                                    children: dep
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                                    lineNumber: 317,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                                lineNumber: 316,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                        lineNumber: 311,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                lineNumber: 309,
                                columnNumber: 13
                            }, this),
                            activeDetailTab === 'breakthroughs' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "jsx-e89ff6ce644ffe3d" + " " + "milestone-list",
                                children: currentEra.breakthroughs.map((brk, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "jsx-e89ff6ce644ffe3d" + " " + "milestone-list-item",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-e89ff6ce644ffe3d" + " " + "item-guided-conduit",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            backgroundColor: '#fbbf24',
                                                            boxShadow: '0 0 10px #fbbf24'
                                                        },
                                                        className: "jsx-e89ff6ce644ffe3d" + " " + "item-node-dot"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                                        lineNumber: 329,
                                                        columnNumber: 21
                                                    }, this),
                                                    i < currentEra.breakthroughs.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-e89ff6ce644ffe3d" + " " + "item-vertical-wire"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                                        lineNumber: 330,
                                                        columnNumber: 65
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                                lineNumber: 328,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-e89ff6ce644ffe3d" + " " + "item-content-wrap",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-e89ff6ce644ffe3d",
                                                    children: brk
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                                    lineNumber: 333,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                                lineNumber: 332,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                        lineNumber: 327,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                lineNumber: 325,
                                columnNumber: 13
                            }, this),
                            activeDetailTab === 'tech' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-e89ff6ce644ffe3d" + " " + "tech-pills-wrap",
                                children: currentEra.tech.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-e89ff6ce644ffe3d" + " " + "tech-badge",
                                        children: t
                                    }, i, false, {
                                        fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                        lineNumber: 343,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                                lineNumber: 341,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                        lineNumber: 247,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
                lineNumber: 187,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "e89ff6ce644ffe3d",
                children: ".career-velocity-strip.jsx-e89ff6ce644ffe3d{grid-template-columns:repeat(4,1fr);gap:18px;margin-bottom:36px;display:grid}.velocity-box.jsx-e89ff6ce644ffe3d{text-align:center;opacity:0;background:#0e121bcc;border:1px solid #ffffff14;border-radius:18px;padding:22px 18px;transition:opacity .65s cubic-bezier(.16,1,.3,1),transform .65s cubic-bezier(.175,.885,.32,1.25),border-color .25s,box-shadow .25s;transform:perspective(800px)translateY(45px)scale(.92)}.velocity-box.is-scrolled-in.jsx-e89ff6ce644ffe3d{opacity:1;transform:perspective(800px)translateY(0)scale(1);box-shadow:0 16px 36px -8px #000000b3,0 0 24px #38bdf81f}.velocity-box.jsx-e89ff6ce644ffe3d:hover{border-color:#38bdf859;transform:translateY(-4px)scale(1.02)}.velocity-val.jsx-e89ff6ce644ffe3d{font-family:var(--font-mono);font-size:2.2rem;font-weight:850;display:block}.velocity-title.jsx-e89ff6ce644ffe3d{color:var(--text-muted);text-transform:uppercase;letter-spacing:.05em;margin-top:6px;font-size:.88rem;font-weight:600}.odyssey-stage.jsx-e89ff6ce644ffe3d{opacity:0;background:#0d111ad9;border:1px solid #ffffff1a;border-radius:24px;padding:38px 34px;transition:opacity .75s cubic-bezier(.16,1,.3,1),transform .75s cubic-bezier(.175,.885,.32,1.22),box-shadow .3s;transform:perspective(1000px)translateY(55px)scale(.94)}.odyssey-stage.is-scrolled-in.jsx-e89ff6ce644ffe3d{opacity:1;transform:perspective(1000px)translateY(0)scale(1);box-shadow:0 28px 65px -15px #000000d9,0 0 36px #c084fc24}.transit-interactive-hint.jsx-e89ff6ce644ffe3d{font-family:var(--font-mono);color:#7dd3fc;letter-spacing:.05em;background:#38bdf814;border:1px solid #38bdf840;border-radius:9999px;align-items:center;gap:8px;margin-bottom:22px;padding:6px 16px;font-size:.76rem;font-weight:700;display:inline-flex}.hint-pulse.jsx-e89ff6ce644ffe3d{background:#38bdf8;border-radius:50%;width:7px;height:7px;animation:1.5s infinite pulseGlow;box-shadow:0 0 8px #38bdf8}.guided-timeline-transit-wrapper.jsx-e89ff6ce644ffe3d{scrollbar-width:none;-webkit-overflow-scrolling:touch;border-bottom:1px solid #ffffff14;width:100%;margin-bottom:28px;padding-top:10px;padding-bottom:28px;position:relative;overflow-x:auto}.transit-rail-track.jsx-e89ff6ce644ffe3d{pointer-events:none;z-index:1;height:4px;position:absolute;top:24px;left:44px;right:44px}.transit-rail-base.jsx-e89ff6ce644ffe3d{background:#ffffff1f;border-radius:9999px;width:100%;height:100%;position:absolute}.transit-rail-fill.jsx-e89ff6ce644ffe3d{border-radius:9999px;height:100%;transition:width .4s cubic-bezier(.16,1,.3,1);position:absolute;box-shadow:0 0 14px #38bdf8b3}.transit-guided-photon.jsx-e89ff6ce644ffe3d{background:#fff;border-radius:50%;width:11px;height:11px;animation:4.8s cubic-bezier(.4,0,.2,1) infinite travelTransitPhoton;position:absolute;top:50%;transform:translate(-50%,-50%);box-shadow:0 0 14px #38bdf8,0 0 24px #38bdf8}@keyframes travelTransitPhoton{0%{opacity:0;left:0%}8%{opacity:1}92%{opacity:1}to{opacity:0;left:100%}}.transit-stations-row.jsx-e89ff6ce644ffe3d{z-index:2;justify-content:space-between;align-items:center;gap:16px;min-width:680px;display:flex;position:relative}.transit-station-node.jsx-e89ff6ce644ffe3d{cursor:pointer;background:0 0;border:none;flex-direction:column;align-items:center;padding:6px 12px;transition:transform .22s cubic-bezier(.16,1,.3,1);display:flex;position:relative}.transit-station-node.jsx-e89ff6ce644ffe3d:hover{transform:translateY(-3px)scale(1.04)}.transit-node-dot.jsx-e89ff6ce644ffe3d{z-index:3;border:3px solid #0d111a;border-radius:50%;width:14px;height:14px;margin-bottom:12px;transition:all .25s}.transit-station-node.active.jsx-e89ff6ce644ffe3d .transit-node-dot.jsx-e89ff6ce644ffe3d{transform:scale(1.35)}.transit-node-pulse.jsx-e89ff6ce644ffe3d{pointer-events:none;border:1.5px solid;border-radius:50%;width:26px;height:26px;animation:1.8s infinite waypointRipple;position:absolute;top:11px}.transit-node-info.jsx-e89ff6ce644ffe3d{font-family:var(--font-mono);color:var(--text-secondary);background:#ffffff0d;border:1px solid #ffffff1a;border-radius:9999px;align-items:center;gap:9px;padding:7px 18px;font-size:.88rem;transition:all .22s;display:inline-flex}.transit-station-node.active.jsx-e89ff6ce644ffe3d .transit-node-info.jsx-e89ff6ce644ffe3d{color:#fff;background:#38bdf82e;border-color:#38bdf873;box-shadow:0 0 18px #38bdf840}.item-guided-conduit.jsx-e89ff6ce644ffe3d{flex-direction:column;flex-shrink:0;align-items:center;width:20px;margin-top:6px;display:flex}.item-node-dot.jsx-e89ff6ce644ffe3d{border-radius:50%;width:9px;height:9px}.item-vertical-wire.jsx-e89ff6ce644ffe3d{background:linear-gradient(#38bdf880,#ffffff14);border-radius:9999px;flex:1;width:2px;min-height:24px;margin-top:6px}.item-content-wrap.jsx-e89ff6ce644ffe3d{flex:1}.station-year.jsx-e89ff6ce644ffe3d{color:#fff;font-weight:800}.station-company.jsx-e89ff6ce644ffe3d{color:var(--text-muted)}.milestone-content-body.jsx-e89ff6ce644ffe3d{padding-top:32px}.milestone-header-row.jsx-e89ff6ce644ffe3d{flex-wrap:wrap;justify-content:space-between;align-items:flex-start;gap:22px;margin-bottom:24px;display:flex}.milestone-status-tag.jsx-e89ff6ce644ffe3d{font-family:var(--font-mono);letter-spacing:.06em;text-transform:uppercase;margin-bottom:6px;font-size:.82rem;font-weight:750}.milestone-role-title.jsx-e89ff6ce644ffe3d{color:#fff;margin-bottom:8px;font-size:2.35rem;font-weight:800;line-height:1.15}.milestone-company-location.jsx-e89ff6ce644ffe3d{color:var(--text-secondary);font-size:1.08rem}.milestone-metrics-group.jsx-e89ff6ce644ffe3d{gap:14px;display:flex}.milestone-metric-box.jsx-e89ff6ce644ffe3d{text-align:center;background:#ffffff0a;border:1px solid #ffffff1a;border-radius:14px;min-width:96px;padding:12px 18px}.metric-box-val.jsx-e89ff6ce644ffe3d{font-family:var(--font-mono);color:#fff;font-size:1.45rem;font-weight:850;display:block}.metric-box-lbl.jsx-e89ff6ce644ffe3d{font-family:var(--font-mono);color:var(--text-muted);text-transform:uppercase;font-size:.74rem;font-weight:600}.milestone-headline-banner.jsx-e89ff6ce644ffe3d{background:#38bdf814;border:1px solid #38bdf847;border-radius:14px;align-items:center;gap:16px;margin-bottom:28px;padding:16px 20px;display:flex}.headline-icon.jsx-e89ff6ce644ffe3d{font-size:1.4rem}.headline-text.jsx-e89ff6ce644ffe3d{color:#f1f5f9;font-size:1.12rem;font-weight:650}.milestone-tabs.jsx-e89ff6ce644ffe3d{scrollbar-width:none;gap:12px;margin-bottom:24px;display:flex;overflow-x:auto}.m-tab.jsx-e89ff6ce644ffe3d{min-height:48px;color:var(--text-secondary);font-family:var(--font-mono);cursor:pointer;white-space:nowrap;background:#ffffff0d;border:1px solid #ffffff1a;border-radius:12px;padding:11px 22px;font-size:.9rem;font-weight:650;transition:all .2s}.m-tab.jsx-e89ff6ce644ffe3d:hover{color:#fff;background:#ffffff1c}.m-tab.active.jsx-e89ff6ce644ffe3d{color:#fff;background:#ffffff29;border-color:#ffffff4d}.milestone-list.jsx-e89ff6ce644ffe3d{flex-direction:column;gap:14px;padding:0;list-style:none;display:flex}.milestone-list-item.jsx-e89ff6ce644ffe3d{color:#e2e8f0;gap:14px;font-size:1.06rem;line-height:1.68;display:flex}.bullet-arrow.jsx-e89ff6ce644ffe3d{color:#38bdf8;font-family:var(--font-mono);font-weight:700}.tech-pills-wrap.jsx-e89ff6ce644ffe3d{flex-wrap:wrap;gap:12px;display:flex}.tech-badge.jsx-e89ff6ce644ffe3d{font-family:var(--font-mono);color:#7dd3fc;background:#38bdf814;border:1px solid #38bdf838;border-radius:8px;padding:7px 16px;font-size:.85rem}@media (width<=800px){.career-velocity-strip.jsx-e89ff6ce644ffe3d{grid-template-columns:repeat(2,1fr);gap:12px}.odyssey-stage.jsx-e89ff6ce644ffe3d{padding:22px 18px}.milestone-role-title.jsx-e89ff6ce644ffe3d{font-size:1.65rem}.milestone-metrics-group.jsx-e89ff6ce644ffe3d{width:100%}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ChronologicalOdyssey.jsx",
        lineNumber: 150,
        columnNumber: 5
    }, this);
}
_s(ChronologicalOdyssey, "MNfNabm4XTPFam1yhm1VT8jYO6c=");
_c = ChronologicalOdyssey;
var _c;
__turbopack_context__.k.register(_c, "ChronologicalOdyssey");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/CommandPalette.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CommandPalette
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/sound.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function CommandPalette({ isOpen, onClose }) {
    _s();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedIndex, setSelectedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const actions = [
        {
            id: 'rag',
            category: 'Production Systems',
            title: 'Enterprise Sub-Minute RAG Platform',
            desc: 'Dense + BM25 hybrid search, <60s lookup time, 98.4% faithfulness',
            action: ()=>{
                window.location.hash = 'act-rag';
                onClose();
            },
            badge: 'NODE 02'
        },
        {
            id: 'flipkart',
            category: 'Production Systems',
            title: 'Flipkart Talk2Data (Natural-Language SQL)',
            desc: 'LangGraph multi-agent SQL synthesis, <2% error loop, +30% accuracy',
            action: ()=>{
                window.location.hash = 'act-systems';
                onClose();
            },
            badge: 'NODE 01'
        },
        {
            id: 'voice',
            category: 'Production Systems',
            title: 'Multilingual Low-Latency Voice AI',
            desc: 'Full-duplex WebSocket streaming, <400ms turnaround, 5 streams',
            action: ()=>{
                window.location.hash = 'act-voice';
                onClose();
            },
            badge: 'NODE 03'
        },
        {
            id: 'veo',
            category: 'Production Systems',
            title: 'Veo GenAI Film & Video Studio',
            desc: '4-agent script-to-screen workflow, 80% production cycle reduction',
            action: ()=>{
                window.location.hash = 'act-video';
                onClose();
            },
            badge: 'NODE 04'
        },
        {
            id: 'creativium',
            category: 'Production Systems',
            title: 'Creativium Autonomous Marketing Suite',
            desc: 'Brand-compliant automated multi-aspect ratio banner generation',
            action: ()=>{
                window.location.hash = 'act-systems';
                onClose();
            },
            badge: 'NODE 05'
        },
        {
            id: 'rfp',
            category: 'Production Systems',
            title: 'Autonomous RFP Intelligence Engine',
            desc: '200+ page enterprise document parsing with 0 hallucination guarantee',
            action: ()=>{
                window.location.hash = 'act-systems';
                onClose();
            },
            badge: 'NODE 06'
        },
        {
            id: 'dentsu',
            category: 'Career Odyssey',
            title: 'dentsu — Artificial Intelligence Engineer',
            desc: 'May 2026 — Present · Architecting enterprise LLMs & voice agents',
            action: ()=>{
                window.location.hash = 'act-journey';
                onClose();
            },
            badge: 'CURRENT'
        },
        {
            id: 'businessnext',
            category: 'Career Odyssey',
            title: 'BUSINESSNEXT — Agentic & GenAI Engineer',
            desc: '2025 — 2026 · Multi-agent CRM, model fine-tuning & DeepEval guardrails',
            action: ()=>{
                window.location.hash = 'act-journey';
                onClose();
            },
            badge: '2025-2026'
        },
        {
            id: 'email',
            category: 'Quick Actions',
            title: 'Copy Direct Email Address',
            desc: 'shreyansjain244@gmail.com',
            action: ()=>{
                navigator.clipboard.writeText('shreyansjain244@gmail.com');
                alert('Copied shreyansjain244@gmail.com to clipboard!');
                onClose();
            },
            badge: 'COPY'
        },
        {
            id: 'github',
            category: 'Quick Actions',
            title: 'Open GitHub Repositories',
            desc: 'Explore open source code & production experiments',
            action: ()=>{
                window.open('https://github.com/Shreyyyyy?tab=repositories', '_blank');
                onClose();
            },
            badge: 'EXTERNAL'
        },
        {
            id: 'linkedin',
            category: 'Quick Actions',
            title: 'Connect on LinkedIn',
            desc: 'shreyans-jain-5674a21b3 profile',
            action: ()=>{
                window.open('https://www.linkedin.com/in/shreyans-jain-5674a21b3', '_blank');
                onClose();
            },
            badge: 'EXTERNAL'
        }
    ];
    const filtered = actions.filter((item)=>item.title.toLowerCase().includes(query.toLowerCase()) || item.desc.toLowerCase().includes(query.toLowerCase()) || item.category.toLowerCase().includes(query.toLowerCase()));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CommandPalette.useEffect": ()=>{
            if (isOpen) {
                setTimeout({
                    "CommandPalette.useEffect": ()=>inputRef.current?.focus()
                }["CommandPalette.useEffect"], 50);
                setSelectedIndex(0);
            }
        }
    }["CommandPalette.useEffect"], [
        isOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CommandPalette.useEffect": ()=>{
            const handleKeyDown = {
                "CommandPalette.useEffect.handleKeyDown": (e)=>{
                    if (!isOpen) return;
                    if (e.key === 'Escape') {
                        onClose();
                    } else if (e.key === 'ArrowDown') {
                        e.preventDefault();
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playHover"])();
                        setSelectedIndex({
                            "CommandPalette.useEffect.handleKeyDown": (prev)=>(prev + 1) % (filtered.length || 1)
                        }["CommandPalette.useEffect.handleKeyDown"]);
                    } else if (e.key === 'ArrowUp') {
                        e.preventDefault();
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playHover"])();
                        setSelectedIndex({
                            "CommandPalette.useEffect.handleKeyDown": (prev)=>(prev - 1 + filtered.length) % (filtered.length || 1)
                        }["CommandPalette.useEffect.handleKeyDown"]);
                    } else if (e.key === 'Enter' && filtered[selectedIndex]) {
                        e.preventDefault();
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playClick"])();
                        filtered[selectedIndex].action();
                    }
                }
            }["CommandPalette.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "CommandPalette.useEffect": ()=>window.removeEventListener('keydown', handleKeyDown)
            })["CommandPalette.useEffect"];
        }
    }["CommandPalette.useEffect"], [
        isOpen,
        filtered,
        selectedIndex,
        onClose
    ]);
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "command-palette-backdrop",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "command-palette-dialog",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "command-palette-search",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "search-icon",
                            children: "🔍"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CommandPalette.jsx",
                            lineNumber: 181,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            ref: inputRef,
                            type: "text",
                            className: "command-palette-input",
                            placeholder: "Search systems, milestones, skills, or actions... (Esc to exit)",
                            value: query,
                            onChange: (e)=>{
                                setQuery(e.target.value);
                                setSelectedIndex(0);
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/CommandPalette.jsx",
                            lineNumber: 182,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                            className: "kbd-shortcut",
                            children: "ESC"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CommandPalette.jsx",
                            lineNumber: 193,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CommandPalette.jsx",
                    lineNumber: 180,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "command-palette-results",
                    children: filtered.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "command-palette-empty",
                        children: "No matching systems or milestones found."
                    }, void 0, false, {
                        fileName: "[project]/src/components/CommandPalette.jsx",
                        lineNumber: 198,
                        columnNumber: 13
                    }, this) : filtered.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `command-result-item ${selectedIndex === idx ? 'selected' : ''}`,
                            onMouseEnter: ()=>{
                                setSelectedIndex(idx);
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playHover"])();
                            },
                            onClick: ()=>{
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playClick"])();
                                item.action();
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "result-main",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "result-category",
                                            children: item.category
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CommandPalette.jsx",
                                            lineNumber: 214,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "result-title",
                                            children: item.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CommandPalette.jsx",
                                            lineNumber: 215,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "result-desc",
                                            children: item.desc
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CommandPalette.jsx",
                                            lineNumber: 216,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CommandPalette.jsx",
                                    lineNumber: 213,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "result-badge",
                                    children: item.badge
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CommandPalette.jsx",
                                    lineNumber: 218,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, item.id, true, {
                            fileName: "[project]/src/components/CommandPalette.jsx",
                            lineNumber: 201,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/CommandPalette.jsx",
                    lineNumber: 196,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "command-palette-footer",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "Navigate with ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                    children: "↑"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CommandPalette.jsx",
                                    lineNumber: 225,
                                    columnNumber: 31
                                }, this),
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                    children: "↓"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CommandPalette.jsx",
                                    lineNumber: 225,
                                    columnNumber: 44
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CommandPalette.jsx",
                            lineNumber: 225,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "Select with ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                    children: "↵ Enter"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CommandPalette.jsx",
                                    lineNumber: 226,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CommandPalette.jsx",
                            lineNumber: 226,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "Close with ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                    children: "Esc"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CommandPalette.jsx",
                                    lineNumber: 227,
                                    columnNumber: 28
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CommandPalette.jsx",
                            lineNumber: 227,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CommandPalette.jsx",
                    lineNumber: 224,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CommandPalette.jsx",
            lineNumber: 179,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/CommandPalette.jsx",
        lineNumber: 178,
        columnNumber: 5
    }, this);
}
_s(CommandPalette, "Vs3u3RF38qK9ZPux1MXR/Ap6JK8=");
_c = CommandPalette;
var _c;
__turbopack_context__.k.register(_c, "CommandPalette");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ExecutiveContact.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExecutiveContact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/sound.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ExecutiveContact() {
    _s();
    const [toastMsg, setToastMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const copyToClipboard = (text, label)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playClick"])();
        if (navigator?.clipboard) {
            navigator.clipboard.writeText(text);
            setToastMsg(`Copied ${label} to clipboard!`);
            setTimeout(()=>setToastMsg(null), 2500);
        }
    };
    const channels = [
        {
            type: 'DIRECT EMAIL',
            value: 'shreyansjain.placement@gmail.com',
            desc: 'Send technical role inquiries, hiring specifications & interview invitations.',
            actionLabel: 'Copy Email',
            actionType: 'copy',
            copyVal: 'shreyansjain.placement@gmail.com',
            link: 'mailto:shreyansjain.placement@gmail.com?subject=Role%20Discussion%20-%20AI%20Engineer',
            color: '#10b981',
            icon: '✉️'
        },
        {
            type: 'LINKEDIN NETWORK',
            value: 'in/shreyans-jain-9255351a7',
            desc: 'Recommendations, verified employment history & mutual professional connections.',
            actionLabel: 'Open Profile ↗',
            actionType: 'link',
            link: 'https://www.linkedin.com/in/shreyans-jain-9255351a7/',
            color: '#38bdf8',
            icon: '💼'
        },
        {
            type: 'INSTANT WHATSAPP',
            value: '+91 9958510891',
            desc: 'Direct instant messaging for quick syncs, screening calls, and scheduling.',
            actionLabel: 'Chat on WhatsApp ↗',
            actionType: 'link',
            link: 'https://wa.me/919958510891?text=Hi%20Shreyans%2C%20reviewed%20your%20portfolio%20and%20would%20love%20to%20connect.',
            color: '#22c55e',
            icon: '💬'
        },
        {
            type: 'DIRECT TELEPHONE',
            value: '+91 9958510891',
            desc: 'Immediate cellular line for founders, CTOs, and recruitment directors.',
            actionLabel: 'Call Phone',
            actionType: 'copy',
            copyVal: '+91 9958510891',
            link: 'tel:+919958510891',
            color: '#f59e0b',
            icon: '📞'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "act-contact",
        style: {
            paddingTop: '90px',
            paddingBottom: '130px'
        },
        className: "jsx-40dcc13cb9e37bb6" + " " + "container-custom",
        children: [
            toastMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-40dcc13cb9e37bb6" + " " + "portfolio-toast",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "jsx-40dcc13cb9e37bb6",
                        children: "✓"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ExecutiveContact.jsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "jsx-40dcc13cb9e37bb6",
                        children: toastMsg
                    }, void 0, false, {
                        fileName: "[project]/src/components/ExecutiveContact.jsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ExecutiveContact.jsx",
                lineNumber: 67,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-40dcc13cb9e37bb6" + " " + "section-header centered",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: '14px'
                        },
                        className: "jsx-40dcc13cb9e37bb6" + " " + "glass-pill",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "jsx-40dcc13cb9e37bb6",
                            children: "✦ DIRECT STRATEGIC ACCESS"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ExecutiveContact.jsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ExecutiveContact.jsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "jsx-40dcc13cb9e37bb6",
                        children: [
                            "Let's Build the Next Generation of",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                className: "jsx-40dcc13cb9e37bb6"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ExecutiveContact.jsx",
                                lineNumber: 79,
                                columnNumber: 45
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-40dcc13cb9e37bb6" + " " + "text-glow-gold",
                                children: "Autonomous AI Systems."
                            }, void 0, false, {
                                fileName: "[project]/src/components/ExecutiveContact.jsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ExecutiveContact.jsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "jsx-40dcc13cb9e37bb6",
                        children: [
                            "Open to ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "jsx-40dcc13cb9e37bb6",
                                children: "Senior & Staff Applied AI Engineer"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ExecutiveContact.jsx",
                                lineNumber: 83,
                                columnNumber: 19
                            }, this),
                            ", ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "jsx-40dcc13cb9e37bb6",
                                children: "Agentic Architect"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ExecutiveContact.jsx",
                                lineNumber: 83,
                                columnNumber: 76
                            }, this),
                            ", and ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "jsx-40dcc13cb9e37bb6",
                                children: "Voice AI Lead"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ExecutiveContact.jsx",
                                lineNumber: 83,
                                columnNumber: 116
                            }, this),
                            " roles globally — Remote, Hybrid, or On-site in India & Worldwide."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ExecutiveContact.jsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ExecutiveContact.jsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-40dcc13cb9e37bb6" + " " + "contact-grid",
                children: channels.map((ch, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-40dcc13cb9e37bb6" + " " + "contact-card glass-panel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-40dcc13cb9e37bb6" + " " + "card-header-line",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: `${ch.color}18`,
                                            borderColor: `${ch.color}45`
                                        },
                                        className: "jsx-40dcc13cb9e37bb6" + " " + "channel-icon-box",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-40dcc13cb9e37bb6",
                                            children: ch.icon
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ExecutiveContact.jsx",
                                            lineNumber: 93,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ExecutiveContact.jsx",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: ch.color
                                        },
                                        className: "jsx-40dcc13cb9e37bb6" + " " + "channel-type-lbl",
                                        children: ch.type
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ExecutiveContact.jsx",
                                        lineNumber: 95,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ExecutiveContact.jsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-40dcc13cb9e37bb6" + " " + "channel-val-text",
                                children: ch.value
                            }, void 0, false, {
                                fileName: "[project]/src/components/ExecutiveContact.jsx",
                                lineNumber: 100,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-40dcc13cb9e37bb6" + " " + "channel-desc-text",
                                children: ch.desc
                            }, void 0, false, {
                                fileName: "[project]/src/components/ExecutiveContact.jsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-40dcc13cb9e37bb6" + " " + "channel-action-row",
                                children: ch.actionType === 'copy' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: '8px'
                                    },
                                    className: "jsx-40dcc13cb9e37bb6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>copyToClipboard(ch.copyVal, ch.type),
                                            style: {
                                                borderColor: `${ch.color}45`,
                                                color: ch.color,
                                                flex: 1
                                            },
                                            className: "jsx-40dcc13cb9e37bb6" + " " + "contact-action-btn",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-40dcc13cb9e37bb6",
                                                children: [
                                                    "📋 ",
                                                    ch.actionLabel
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ExecutiveContact.jsx",
                                                lineNumber: 111,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ExecutiveContact.jsx",
                                            lineNumber: 106,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: ch.link,
                                            style: {
                                                borderColor: `${ch.color}45`,
                                                color: ch.color
                                            },
                                            title: `Open ${ch.type}`,
                                            className: "jsx-40dcc13cb9e37bb6" + " " + "contact-action-btn-icon",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-40dcc13cb9e37bb6",
                                                children: "↗"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ExecutiveContact.jsx",
                                                lineNumber: 119,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ExecutiveContact.jsx",
                                            lineNumber: 113,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ExecutiveContact.jsx",
                                    lineNumber: 105,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: ch.link,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    style: {
                                        borderColor: `${ch.color}45`,
                                        color: ch.color
                                    },
                                    className: "jsx-40dcc13cb9e37bb6" + " " + "contact-action-btn",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-40dcc13cb9e37bb6",
                                        children: ch.actionLabel
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ExecutiveContact.jsx",
                                        lineNumber: 130,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ExecutiveContact.jsx",
                                    lineNumber: 123,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ExecutiveContact.jsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/src/components/ExecutiveContact.jsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ExecutiveContact.jsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "40dcc13cb9e37bb6",
                children: ".contact-grid.jsx-40dcc13cb9e37bb6{grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;display:grid}.contact-card.jsx-40dcc13cb9e37bb6{opacity:0;background:#0d111ad9;border:1px solid #ffffff1a;border-radius:22px;flex-direction:column;padding:36px 30px;transition:opacity .65s cubic-bezier(.16,1,.3,1),transform .65s cubic-bezier(.175,.885,.32,1.25),border-color .28s,box-shadow .28s;display:flex;transform:perspective(800px)translateY(45px)scale(.92)}.contact-card.is-scrolled-in.jsx-40dcc13cb9e37bb6{opacity:1;transform:perspective(800px)translateY(0)scale(1);box-shadow:0 20px 48px -12px #000c,0 0 24px #38bdf814}.contact-card.jsx-40dcc13cb9e37bb6:hover{border-color:#ffffff52;transform:perspective(800px)translateY(-5px)scale(1.02);box-shadow:0 28px 60px -10px #000000d9,0 0 32px #38bdf824}.card-header-line.jsx-40dcc13cb9e37bb6{align-items:center;gap:14px;margin-bottom:20px;display:flex}.channel-icon-box.jsx-40dcc13cb9e37bb6{border:1px solid;border-radius:14px;justify-content:center;align-items:center;width:50px;height:50px;font-size:1.45rem;display:flex}.channel-type-lbl.jsx-40dcc13cb9e37bb6{font-family:var(--font-mono);letter-spacing:.06em;font-size:.82rem;font-weight:750}.channel-val-text.jsx-40dcc13cb9e37bb6{color:#fff;word-break:break-all;margin-bottom:10px;font-size:1.3rem;font-weight:750}.channel-desc-text.jsx-40dcc13cb9e37bb6{color:var(--text-secondary);flex:1;margin-bottom:26px;font-size:1.02rem;line-height:1.68}.channel-action-row.jsx-40dcc13cb9e37bb6{margin-top:auto}.contact-action-btn.jsx-40dcc13cb9e37bb6{width:100%;min-height:52px;font-family:var(--font-mono);cursor:pointer;background:#ffffff0d;border:1px solid;border-radius:12px;justify-content:center;align-items:center;padding:14px 22px;font-size:.92rem;font-weight:750;text-decoration:none;transition:all .22s;display:flex}.contact-action-btn.jsx-40dcc13cb9e37bb6:hover{background:#ffffff1f;transform:translateY(-2px)}.contact-action-btn-icon.jsx-40dcc13cb9e37bb6{width:52px;min-height:52px;font-family:var(--font-mono);background:#ffffff0d;border:1px solid;border-radius:12px;justify-content:center;align-items:center;font-size:1.1rem;text-decoration:none;transition:all .22s;display:flex}.contact-action-btn-icon.jsx-40dcc13cb9e37bb6:hover{background:#ffffff1f;transform:translateY(-2px)}@media (width<=600px){.contact-card.jsx-40dcc13cb9e37bb6{padding:24px 20px}.channel-val-text.jsx-40dcc13cb9e37bb6{font-size:1.15rem}.channel-desc-text.jsx-40dcc13cb9e37bb6{font-size:.95rem}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ExecutiveContact.jsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_s(ExecutiveContact, "TfgreXxunX46c4xgX3CN1KgQjLc=");
_c = ExecutiveContact;
var _c;
__turbopack_context__.k.register(_c, "ExecutiveContact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Footer.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/sound.js [app-client] (ecmascript)");
'use client';
;
;
;
function Footer() {
    const scrollToTop = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playClick"])();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        style: {
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '36px 24px',
            background: '#040508'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-custom",
            style: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '16px'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '0.86rem',
                                        color: '#f8fafc',
                                        fontWeight: 700
                                    },
                                    children: "SHREYANS JAIN"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.jsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: '0.70rem',
                                        color: 'var(--accent-cyan)',
                                        fontFamily: 'var(--font-mono)'
                                    },
                                    children: "· AI SYSTEMS ARCHITECT"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.jsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.jsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: '0.76rem',
                                color: 'var(--text-muted)',
                                marginTop: '4px'
                            },
                            children: "Engineering autonomous agent swarms, sub-minute enterprise RAG & low-latency voice AI."
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer.jsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer.jsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://github.com/Shreyyyyy",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            style: {
                                color: 'var(--text-secondary)',
                                textDecoration: 'none',
                                fontSize: '0.80rem',
                                transition: 'color 0.15s ease'
                            },
                            className: "footer-link",
                            children: "GitHub ↗"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer.jsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://www.linkedin.com/in/shreyans-jain-9255351a7/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            style: {
                                color: 'var(--text-secondary)',
                                textDecoration: 'none',
                                fontSize: '0.80rem',
                                transition: 'color 0.15s ease'
                            },
                            className: "footer-link",
                            children: "LinkedIn ↗"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer.jsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "mailto:shreyansjain.placement@gmail.com",
                            style: {
                                color: 'var(--text-secondary)',
                                textDecoration: 'none',
                                fontSize: '0.80rem',
                                transition: 'color 0.15s ease'
                            },
                            className: "footer-link",
                            children: "Email ↗"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer.jsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: scrollToTop,
                            style: {
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                color: '#ffffff',
                                padding: '6px 14px',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontSize: '0.74rem',
                                fontFamily: 'var(--font-mono)',
                                transition: 'all 0.2s ease'
                            },
                            children: "↑ Top"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer.jsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer.jsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Footer.jsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Footer.jsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ImpactReel.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ImpactReel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ImpactReel() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const reelCards = [
        {
            icon: '⚡',
            metric: '<2%',
            sub: 'Error Rate',
            label: 'Flipkart Talk2Data',
            detail: 'Zero-shot NL→SQL across petabyte-scale warehouse analytics. Self-healing multi-agent loops.',
            color: '#38bdf8'
        },
        {
            icon: '🎯',
            metric: '98.4%',
            sub: 'Groundedness',
            label: 'Enterprise RAG',
            detail: 'Sub-minute document retrieval from 100+ page manuals with zero hallucination SLA.',
            color: '#10b981'
        },
        {
            icon: '🎙',
            metric: '<400ms',
            sub: 'Voice Latency',
            label: 'Multilingual Voice AI',
            detail: 'Full-duplex WebSocket pipeline. 5 concurrent channels. 100% automated scheduling.',
            color: '#f59e0b'
        },
        {
            icon: '🎬',
            metric: '80%',
            sub: 'Cycle Cut',
            label: 'AI Film Studio',
            detail: 'Script-to-screen in hours via 4-agent LangGraph DAG with visual memory anchors.',
            color: '#3b82f6'
        },
        {
            icon: '🖼',
            metric: '10×',
            sub: 'Asset Velocity',
            label: 'Creativium Engine',
            detail: 'Brand-compliant marketing assets across 12+ formats via Imagen 3 outpainting.',
            color: '#ec4899'
        },
        {
            icon: '📄',
            metric: '75%',
            sub: 'Faster Bids',
            label: 'RFP Intelligence',
            detail: '200+ page tender analysis with zero hallucinated contractual obligations.',
            color: '#8b5cf6'
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ImpactReel.useEffect": ()=>{
            const section = sectionRef.current;
            const track = trackRef.current;
            if (!section || !track) return;
            const handleScroll = {
                "ImpactReel.useEffect.handleScroll": ()=>{
                    const rect = section.getBoundingClientRect();
                    const sectionHeight = section.offsetHeight;
                    const viewH = window.innerHeight;
                    // Pin range: when section top hits viewport top, until we've scrolled sectionHeight
                    const scrolled = -rect.top;
                    const maxScroll = sectionHeight - viewH;
                    if (scrolled < 0 || scrolled > maxScroll) {
                        setProgress(scrolled > maxScroll ? 1 : 0);
                        return;
                    }
                    const pct = scrolled / maxScroll;
                    setProgress(pct);
                    // Translate track horizontally
                    const trackWidth = track.scrollWidth - track.clientWidth;
                    track.style.transform = `translateX(-${pct * trackWidth}px)`;
                }
            }["ImpactReel.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll, {
                passive: true
            });
            handleScroll();
            return ({
                "ImpactReel.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["ImpactReel.useEffect"];
        }
    }["ImpactReel.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        id: "impact-reel",
        style: {
            height: '320vh',
            position: 'relative'
        },
        className: "jsx-d9aca67e6d629db9",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-d9aca67e6d629db9" + " " + "reel-sticky-wrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-d9aca67e6d629db9" + " " + "reel-header-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: '0'
                                },
                                className: "jsx-d9aca67e6d629db9" + " " + "glass-pill",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-d9aca67e6d629db9" + " " + "pulse-dot"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ImpactReel.jsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-d9aca67e6d629db9",
                                        children: "PRODUCTION IMPACT REEL · SCROLL TO ADVANCE →"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ImpactReel.jsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ImpactReel.jsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-d9aca67e6d629db9" + " " + "reel-progress-track",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: `${progress * 100}%`
                                    },
                                    className: "jsx-d9aca67e6d629db9" + " " + "reel-progress-fill"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ImpactReel.jsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ImpactReel.jsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-d9aca67e6d629db9" + " " + "reel-progress-pct",
                                children: [
                                    Math.round(progress * 100),
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ImpactReel.jsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ImpactReel.jsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "jsx-d9aca67e6d629db9" + " " + "reel-headline",
                        children: [
                            "Six Systems.",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                className: "jsx-d9aca67e6d629db9"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ImpactReel.jsx",
                                lineNumber: 119,
                                columnNumber: 23
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-d9aca67e6d629db9" + " " + "text-glow-gradient",
                                children: "One Engineering Standard."
                            }, void 0, false, {
                                fileName: "[project]/src/components/ImpactReel.jsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ImpactReel.jsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-d9aca67e6d629db9" + " " + "reel-overflow-clip",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: trackRef,
                            className: "jsx-d9aca67e6d629db9" + " " + "reel-track",
                            children: reelCards.map((card, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        '--reel-color': card.color,
                                        transitionDelay: `${i * 0.06}s`
                                    },
                                    className: "jsx-d9aca67e6d629db9" + " " + "reel-card glass-panel",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-d9aca67e6d629db9" + " " + "reel-card-icon",
                                            children: card.icon
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ImpactReel.jsx",
                                            lineNumber: 135,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                color: card.color
                                            },
                                            className: "jsx-d9aca67e6d629db9" + " " + "reel-card-metric",
                                            children: card.metric
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ImpactReel.jsx",
                                            lineNumber: 136,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-d9aca67e6d629db9" + " " + "reel-card-sub",
                                            children: card.sub
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ImpactReel.jsx",
                                            lineNumber: 139,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-d9aca67e6d629db9" + " " + "reel-card-label",
                                            children: card.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ImpactReel.jsx",
                                            lineNumber: 140,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-d9aca67e6d629db9" + " " + "reel-card-detail",
                                            children: card.detail
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ImpactReel.jsx",
                                            lineNumber: 141,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                borderColor: `${card.color}30`
                                            },
                                            className: "jsx-d9aca67e6d629db9" + " " + "reel-corner-accent"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ImpactReel.jsx",
                                            lineNumber: 144,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/src/components/ImpactReel.jsx",
                                    lineNumber: 127,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ImpactReel.jsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ImpactReel.jsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "jsx-d9aca67e6d629db9" + " " + "reel-scroll-hint",
                        children: "↓ Keep scrolling to advance the reel"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ImpactReel.jsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ImpactReel.jsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "d9aca67e6d629db9",
                children: '.reel-sticky-wrap.jsx-d9aca67e6d629db9{z-index:10;background:#07090eeb;flex-direction:column;justify-content:center;height:100vh;padding:0 40px;display:flex;position:sticky;top:0;overflow:hidden}.reel-header-row.jsx-d9aca67e6d629db9{flex-wrap:wrap;align-items:center;gap:20px;margin-bottom:24px;display:flex}.reel-progress-track.jsx-d9aca67e6d629db9{background:#d4af3726;border-radius:9999px;flex:1;max-width:260px;height:3px;overflow:hidden}.reel-progress-fill.jsx-d9aca67e6d629db9{background:linear-gradient(90deg,#b8860b,#f3e5ab,#d4af37);border-radius:9999px;height:100%;transition:width .12s linear;box-shadow:0 0 10px #d4af37b3}.reel-progress-pct.jsx-d9aca67e6d629db9{color:#d4af37;min-width:34px;font-family:JetBrains Mono,monospace;font-size:.78rem;font-weight:700}.reel-headline.jsx-d9aca67e6d629db9{letter-spacing:-.03em;color:#fff;margin-bottom:36px;font-size:max(2.2rem,min(4vw,3.4rem));font-weight:850;line-height:1.12}.reel-overflow-clip.jsx-d9aca67e6d629db9{width:100%;padding-bottom:8px;overflow:hidden}.reel-track.jsx-d9aca67e6d629db9{will-change:transform;gap:24px;width:max-content;padding:4px 4px 16px;transition:transform 50ms linear;display:flex}.reel-card.jsx-d9aca67e6d629db9{background:#0e121bd9;border:1px solid #ffffff17;border-radius:22px;flex-direction:column;flex-shrink:0;gap:10px;width:300px;padding:32px 28px;transition:border-color .25s,box-shadow .25s,transform .28s cubic-bezier(.16,1,.3,1);display:flex;position:relative;overflow:hidden}.reel-card.jsx-d9aca67e6d629db9:after{content:"";background:radial-gradient(circle at 20% 20%, var(--reel-color,#38bdf8) 0%, transparent 60%);opacity:.04;pointer-events:none;position:absolute;inset:0}.reel-card.jsx-d9aca67e6d629db9:hover{border-color:var(--reel-color,#fff3);box-shadow:0 20px 50px -12px #000000e6, 0 0 30px -8px var(--reel-color,#38bdf826);transform:translateY(-6px)scale(1.02)}.reel-corner-accent.jsx-d9aca67e6d629db9{pointer-events:none;border-top:1px solid;border-right:1px solid;border-top-right-radius:22px;width:80px;height:80px;position:absolute;top:0;right:0}.reel-card-icon.jsx-d9aca67e6d629db9{filter:drop-shadow(0 0 12px);font-size:2rem;line-height:1}.reel-card-metric.jsx-d9aca67e6d629db9{text-shadow:0 0 24px;font-family:JetBrains Mono,monospace;font-size:2.8rem;font-weight:850;line-height:1;transition:text-shadow .3s}.reel-card.jsx-d9aca67e6d629db9:hover .reel-card-metric.jsx-d9aca67e6d629db9{text-shadow:0 0 40px}.reel-card-sub.jsx-d9aca67e6d629db9{letter-spacing:.06em;text-transform:uppercase;color:var(--text-muted,#94a3b8);margin-top:-6px;font-family:JetBrains Mono,monospace;font-size:.8rem;font-weight:700}.reel-card-label.jsx-d9aca67e6d629db9{color:#fff;margin-top:4px;font-size:1.05rem;font-weight:750}.reel-card-detail.jsx-d9aca67e6d629db9{color:var(--text-secondary,#e2e8f0);margin:0;font-size:.9rem;line-height:1.55}.reel-scroll-hint.jsx-d9aca67e6d629db9{color:#d4af3799;letter-spacing:.05em;margin-top:22px;font-family:JetBrains Mono,monospace;font-size:.78rem;animation:2s ease-in-out infinite hintBounce}@keyframes hintBounce{0%,to{opacity:.6;transform:translateY(0)}50%{opacity:1;transform:translateY(4px)}}@media (width<=768px){.reel-sticky-wrap.jsx-d9aca67e6d629db9{padding:0 20px}.reel-card.jsx-d9aca67e6d629db9{width:260px}.reel-card-metric.jsx-d9aca67e6d629db9{font-size:2.2rem}}'
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ImpactReel.jsx",
        lineNumber: 100,
        columnNumber: 5
    }, this);
}
_s(ImpactReel, "NI8ks27diJEQr/U8l/LcZM6e95k=");
_c = ImpactReel;
var _c;
__turbopack_context__.k.register(_c, "ImpactReel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Navbar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/sound.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Navbar({ onOpenSearch }) {
    _s();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sfxEnabled, setSfxEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            setSfxEnabled((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSoundEnabled"])());
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>{
                    setScrolled(window.scrollY > 20);
                }
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll, {
                passive: true
            });
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    const navLinks = [
        {
            label: 'Overview',
            href: '#hero'
        },
        {
            label: 'Systems & Impact',
            href: '#act-systems'
        },
        {
            label: 'Trajectory',
            href: '#act-journey'
        },
        {
            label: 'Observability',
            href: '#act-safety'
        },
        {
            label: 'Contact',
            href: '#act-contact'
        }
    ];
    const handleNavClick = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playClick"])();
        setMobileMenuOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        style: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            padding: scrolled ? '12px 20px' : '20px 24px',
            transition: 'all 0.25s ease',
            background: scrolled || mobileMenuOpen ? 'rgba(7, 9, 14, 0.92)' : 'rgba(7, 9, 14, 0.5)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderBottom: scrolled || mobileMenuOpen ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid transparent'
        },
        className: "jsx-627997346352dc50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                },
                className: "jsx-627997346352dc50" + " " + "container-custom",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#hero",
                        onClick: handleNavClick,
                        style: {
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'
                        },
                        className: "jsx-627997346352dc50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: 'var(--font-mono)',
                                    fontWeight: 800,
                                    fontSize: '0.96rem',
                                    letterSpacing: '0.06em',
                                    color: '#ffffff'
                                },
                                className: "jsx-627997346352dc50",
                                children: "SHREYANS JAIN"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.jsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '0.72rem',
                                    padding: '3px 10px',
                                    borderRadius: '9999px',
                                    background: 'rgba(56, 189, 248, 0.12)',
                                    color: '#38bdf8',
                                    border: '1px solid rgba(56, 189, 248, 0.3)',
                                    fontWeight: 600
                                },
                                className: "jsx-627997346352dc50",
                                children: "AI ARCHITECT"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.jsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.jsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        style: {
                            display: 'none',
                            gap: '28px',
                            alignItems: 'center'
                        },
                        className: "jsx-627997346352dc50" + " " + "desktop-nav",
                        children: navLinks.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: item.href,
                                onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playClick"])(),
                                className: "jsx-627997346352dc50" + " " + "nav-link",
                                children: item.label
                            }, item.href, false, {
                                fileName: "[project]/src/components/Navbar.jsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.jsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                        },
                        className: "jsx-627997346352dc50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playClick"])();
                                    if (onOpenSearch) onOpenSearch();
                                },
                                title: "Search systems, roles, and tech stack (Cmd+K)",
                                className: "jsx-627997346352dc50" + " " + "nav-tool-btn",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-627997346352dc50",
                                        children: "🔍"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.jsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-627997346352dc50" + " " + "nav-tool-label",
                                        children: "Search"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.jsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                        className: "jsx-627997346352dc50" + " " + "nav-kbd",
                                        children: "⌘K"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.jsx",
                                        lineNumber: 124,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navbar.jsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    const next = !sfxEnabled;
                                    setSfxEnabled(next);
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setSoundEnabled"])(next);
                                    if (next) {
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initAudio"])();
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playNodeActivate"])();
                                    }
                                },
                                title: sfxEnabled ? 'Sound Enabled' : 'Sound Muted',
                                className: "jsx-627997346352dc50" + " " + `nav-tool-btn ${sfxEnabled ? 'active-sfx' : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-627997346352dc50",
                                    children: sfxEnabled ? '🔊' : '🔇'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.jsx",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.jsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#act-contact",
                                style: {
                                    padding: '8px 18px',
                                    fontSize: '0.86rem',
                                    minHeight: 'auto'
                                },
                                onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playClick"])(),
                                className: "jsx-627997346352dc50" + " " + "btn-primary desktop-connect-btn",
                                children: "Connect →"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.jsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playClick"])();
                                    setMobileMenuOpen((prev)=>!prev);
                                },
                                "aria-label": "Toggle Mobile Menu",
                                className: "jsx-627997346352dc50" + " " + "mobile-menu-btn",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-627997346352dc50",
                                    children: mobileMenuOpen ? '✕' : '☰'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.jsx",
                                    lineNumber: 167,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.jsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.jsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.jsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            mobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-627997346352dc50" + " " + "mobile-nav-drawer",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-627997346352dc50" + " " + "mobile-drawer-links",
                    children: [
                        navLinks.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: item.href,
                                onClick: handleNavClick,
                                className: "jsx-627997346352dc50" + " " + "mobile-nav-item",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-627997346352dc50",
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.jsx",
                                        lineNumber: 183,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: 'var(--accent-cyan)'
                                        },
                                        className: "jsx-627997346352dc50",
                                        children: "→"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.jsx",
                                        lineNumber: 184,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, item.href, true, {
                                fileName: "[project]/src/components/Navbar.jsx",
                                lineNumber: 177,
                                columnNumber: 15
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#act-contact",
                            onClick: handleNavClick,
                            style: {
                                marginTop: '12px',
                                width: '100%',
                                justifyContent: 'center',
                                padding: '12px',
                                fontSize: '0.95rem'
                            },
                            className: "jsx-627997346352dc50" + " " + "btn-primary",
                            children: "💼 Connect with Shreyans →"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.jsx",
                            lineNumber: 187,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Navbar.jsx",
                    lineNumber: 175,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.jsx",
                lineNumber: 174,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "627997346352dc50",
                children: ".nav-link.jsx-627997346352dc50{color:var(--text-secondary);font-size:.92rem;font-weight:500;text-decoration:none;transition:color .15s}.nav-link.jsx-627997346352dc50:hover{color:#fff}.nav-tool-btn.jsx-627997346352dc50{min-height:38px;color:var(--text-secondary);font-family:var(--font-mono);cursor:pointer;background:#ffffff0d;border:1px solid #ffffff1a;border-radius:9px;align-items:center;gap:6px;padding:7px 12px;font-size:.8rem;transition:all .2s;display:inline-flex}.nav-tool-btn.jsx-627997346352dc50:hover{color:#fff;background:#ffffff1a;border-color:#fff3}.nav-tool-btn.active-sfx.jsx-627997346352dc50{color:#34d399;background:#10b98124;border-color:#10b98159}.nav-kbd.jsx-627997346352dc50{color:#cbd5e1;background:#ffffff14;border:1px solid #ffffff24;border-radius:4px;padding:1px 6px;font-size:.68rem}.mobile-menu-btn.jsx-627997346352dc50{color:#fff;cursor:pointer;background:#ffffff0f;border:1px solid #ffffff1f;border-radius:9px;justify-content:center;align-items:center;width:40px;height:40px;font-size:1.2rem;display:none}.mobile-nav-drawer.jsx-627997346352dc50{border-top:1px solid #ffffff14;padding:20px 24px 28px;animation:.25s ease-out slideDown}@keyframes slideDown{0%{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}.mobile-drawer-links.jsx-627997346352dc50{flex-direction:column;gap:12px;display:flex}.mobile-nav-item.jsx-627997346352dc50{color:#f8fafc;background:#ffffff08;border:1px solid #ffffff0f;border-radius:10px;justify-content:space-between;align-items:center;padding:12px 14px;font-size:1rem;font-weight:600;text-decoration:none;display:flex}.mobile-nav-item.jsx-627997346352dc50:hover{background:#ffffff14}@media (width<=600px){.nav-tool-label.jsx-627997346352dc50{display:none}.desktop-connect-btn.jsx-627997346352dc50{display:none!important}}@media (width<=900px){.mobile-menu-btn.jsx-627997346352dc50{display:flex!important}}@media (width>=901px){.desktop-nav.jsx-627997346352dc50{display:flex!important}.mobile-nav-drawer.jsx-627997346352dc50{display:none!important}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Navbar.jsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(Navbar, "eAkDeCJ1uyBoUSx0wZ+h8D7ZAac=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ProductScreens/AgenticScreen.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AgenticScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function AgenticScreen() {
    _s();
    const [activeNode, setActiveNode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const nodes = [
        {
            title: 'Supervisor Node',
            desc: 'LangGraph Router',
            role: 'Decomposing natural inquiry into execution sub-graphs'
        },
        {
            title: 'Worker Agent',
            desc: 'Mistral SQL FT',
            role: 'Generating zero-shot schema reflected SQL with reflection'
        },
        {
            title: 'Evaluation Guard',
            desc: 'DeepEval Interceptor',
            role: 'AST syntax verification & zero hallucination enforcement'
        }
    ];
    const handleStep = ()=>{
        setActiveNode((prev)=>(prev + 1) % nodes.length);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "screen-panel-inner",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: '12px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: '0.74rem',
                            color: '#94a3b8',
                            textTransform: 'uppercase',
                            display: 'block',
                            letterSpacing: '0.04em'
                        },
                        children: "MULTI-AGENT ORCHESTRATION GRAPH · LANGGRAPH"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductScreens/AgenticScreen.jsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.96rem',
                            color: '#f8fafc',
                            fontWeight: 700
                        },
                        children: "Stateful Directed Acyclic Graph with Self-Healing Loops"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductScreens/AgenticScreen.jsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProductScreens/AgenticScreen.jsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "swarm-dag-container",
                children: nodes.map((n, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `swarm-node ${activeNode === i ? 'active-pulse' : ''}`,
                                onClick: ()=>setActiveNode(i),
                                style: {
                                    cursor: 'pointer'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "swarm-node-title",
                                        children: n.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductScreens/AgenticScreen.jsx",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "swarm-node-sub",
                                        children: n.desc
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductScreens/AgenticScreen.jsx",
                                        lineNumber: 37,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProductScreens/AgenticScreen.jsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this),
                            i < nodes.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "swarm-connector-arrow",
                                children: "➔"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductScreens/AgenticScreen.jsx",
                                lineNumber: 39,
                                columnNumber: 38
                            }, this)
                        ]
                    }, n.title, true, {
                        fileName: "[project]/src/components/ProductScreens/AgenticScreen.jsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ProductScreens/AgenticScreen.jsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "terminal-stream-box",
                style: {
                    marginTop: '14px',
                    flex: 'none',
                    height: '110px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "terminal-line",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "terminal-prompt",
                                style: {
                                    color: '#c084fc'
                                },
                                children: "swarm://dag $"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductScreens/AgenticScreen.jsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "exec --subgraph=flipkart_talk2data --node=",
                                    activeNode + 1
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProductScreens/AgenticScreen.jsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductScreens/AgenticScreen.jsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            color: '#c084fc',
                            fontSize: '0.82rem',
                            marginTop: '6px',
                            fontWeight: 600
                        },
                        children: [
                            "> Step [",
                            activeNode + 1,
                            "/3] (",
                            nodes[activeNode].title,
                            "): ",
                            nodes[activeNode].role
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductScreens/AgenticScreen.jsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'right',
                            marginTop: '8px'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleStep,
                            style: {
                                padding: '5px 12px',
                                fontSize: '0.74rem',
                                background: 'rgba(168, 85, 247, 0.15)',
                                border: '1px solid rgba(168, 85, 247, 0.35)',
                                color: '#c084fc',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontFamily: 'var(--font-mono)',
                                fontWeight: 600
                            },
                            children: "⚡ Step DAG Execution (Next Agent)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductScreens/AgenticScreen.jsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductScreens/AgenticScreen.jsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProductScreens/AgenticScreen.jsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProductScreens/AgenticScreen.jsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(AgenticScreen, "6yy/nJRCRhlAtFgR+tFUoYC4Rtc=");
_c = AgenticScreen;
var _c;
__turbopack_context__.k.register(_c, "AgenticScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ProductScreens/HeroScreen.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function HeroScreen() {
    _s();
    const [promptCount, setPromptCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(142);
    const [activeLog, setActiveLog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Apex Swarm initialized. All nodes healthy.');
    const [typedText, setTypedText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const logs = [
        'Dispatched dynamic task to Mistral SQL Worker.',
        'LangGraph Router validated 4 sub-agent branches.',
        'DeepEval test runner: 98.4% groundedness verified.',
        'Voice stream session synchronized with VAD audio buffer.',
        'Gemini 1.5 Pro reflection loop cleared AST validation in 42ms.'
    ];
    // Dynamic typing animation for the live log
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroScreen.useEffect": ()=>{
            let index = 0;
            setTypedText('');
            const interval = setInterval({
                "HeroScreen.useEffect.interval": ()=>{
                    if (index < activeLog.length) {
                        setTypedText(activeLog.slice(0, index + 1));
                        index++;
                    } else {
                        clearInterval(interval);
                    }
                }
            }["HeroScreen.useEffect.interval"], 25);
            return ({
                "HeroScreen.useEffect": ()=>clearInterval(interval)
            })["HeroScreen.useEffect"];
        }
    }["HeroScreen.useEffect"], [
        activeLog
    ]);
    const handleTrigger = ()=>{
        setPromptCount((prev)=>prev + 1);
        const randomLog = logs[Math.floor(Math.random() * logs.length)];
        setActiveLog(randomLog);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-854e42b6cf195894" + " " + "screen-panel-inner",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-854e42b6cf195894" + " " + "hero-screen-top",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-854e42b6cf195894" + " " + "agent-id-box",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-854e42b6cf195894" + " " + "agent-avatar-ring",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/shreyans.jpg",
                                    alt: "Shreyans Jain",
                                    className: "jsx-854e42b6cf195894" + " " + "agent-avatar-img"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductScreens/HeroScreen.jsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductScreens/HeroScreen.jsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-854e42b6cf195894",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-854e42b6cf195894" + " " + "agent-meta-name",
                                        children: "Shreyans Jain"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductScreens/HeroScreen.jsx",
                                        lineNumber: 47,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-854e42b6cf195894" + " " + "agent-meta-role",
                                        children: "Applied LLM & Swarm Architect · dentsu"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductScreens/HeroScreen.jsx",
                                        lineNumber: 48,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProductScreens/HeroScreen.jsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductScreens/HeroScreen.jsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-854e42b6cf195894" + " " + "bezel-badge",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-854e42b6cf195894" + " " + "pulse-dot"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductScreens/HeroScreen.jsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-854e42b6cf195894",
                                children: "AVAILABLE FOR NEW ROLES"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductScreens/HeroScreen.jsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductScreens/HeroScreen.jsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProductScreens/HeroScreen.jsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-854e42b6cf195894" + " " + "metric-grid-hero",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-854e42b6cf195894" + " " + "metric-item-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-854e42b6cf195894" + " " + "metric-val text-glow-cyan",
                                children: "<60s"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductScreens/HeroScreen.jsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-854e42b6cf195894" + " " + "metric-lbl",
                                children: "RAG Search Speed"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductScreens/HeroScreen.jsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductScreens/HeroScreen.jsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-854e42b6cf195894" + " " + "metric-item-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-854e42b6cf195894" + " " + "metric-val text-glow-emerald",
                                children: "+30%"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductScreens/HeroScreen.jsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-854e42b6cf195894" + " " + "metric-lbl",
                                children: "Fine-Tuned Accuracy"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductScreens/HeroScreen.jsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductScreens/HeroScreen.jsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-854e42b6cf195894" + " " + "metric-item-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-854e42b6cf195894" + " " + "metric-val text-glow-purple",
                                children: "<400ms"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductScreens/HeroScreen.jsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-854e42b6cf195894" + " " + "metric-lbl",
                                children: "Voice Turnaround"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductScreens/HeroScreen.jsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductScreens/HeroScreen.jsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProductScreens/HeroScreen.jsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-854e42b6cf195894" + " " + "terminal-stream-box",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: '8px'
                        },
                        className: "jsx-854e42b6cf195894" + " " + "terminal-line",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-854e42b6cf195894" + " " + "terminal-prompt",
                                children: "apex://runtime $"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductScreens/HeroScreen.jsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-854e42b6cf195894",
                                children: "dispatch --mode=swarm --parallel=4 --guardrails=strict"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductScreens/HeroScreen.jsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductScreens/HeroScreen.jsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-854e42b6cf195894" + " " + "terminal-live-log",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#38bdf8'
                                },
                                className: "jsx-854e42b6cf195894",
                                children: [
                                    "> ",
                                    typedText
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProductScreens/HeroScreen.jsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-854e42b6cf195894" + " " + "terminal-cursor",
                                children: "▋"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductScreens/HeroScreen.jsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductScreens/HeroScreen.jsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-854e42b6cf195894" + " " + "terminal-action-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-854e42b6cf195894" + " " + "requests-counter",
                                children: [
                                    "Requests Processed: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "jsx-854e42b6cf195894",
                                        children: promptCount
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductScreens/HeroScreen.jsx",
                                        lineNumber: 82,
                                        columnNumber: 66
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProductScreens/HeroScreen.jsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleTrigger,
                                className: "jsx-854e42b6cf195894" + " " + "btn-terminal-trigger",
                                children: "⚡ Trigger Swarm Event"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductScreens/HeroScreen.jsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductScreens/HeroScreen.jsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProductScreens/HeroScreen.jsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "854e42b6cf195894",
                children: ".hero-screen-top.jsx-854e42b6cf195894{flex-wrap:wrap;justify-content:space-between;align-items:center;gap:12px;margin-bottom:16px;display:flex}.agent-id-box.jsx-854e42b6cf195894{align-items:center;gap:14px;display:flex}.agent-avatar-ring.jsx-854e42b6cf195894{border:2px solid #38bdf873;border-radius:14px;flex-shrink:0;width:50px;height:50px;position:relative;overflow:hidden;box-shadow:0 0 20px #38bdf84d}.agent-avatar-img.jsx-854e42b6cf195894{object-fit:cover;width:100%;height:100%}.agent-meta-name.jsx-854e42b6cf195894{color:#fff;font-size:1.12rem;font-weight:700}.agent-meta-role.jsx-854e42b6cf195894{font-size:.82rem;font-family:var(--font-mono);color:var(--accent-cyan);margin-top:2px}.metric-grid-hero.jsx-854e42b6cf195894{grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:16px;display:grid}.metric-item-card.jsx-854e42b6cf195894{background:#ffffff0a;border:1px solid #ffffff14;border-radius:12px;padding:12px 14px}.metric-val.jsx-854e42b6cf195894{font-family:var(--font-mono);font-size:1.45rem;font-weight:800;display:block}.metric-lbl.jsx-854e42b6cf195894{color:var(--text-muted);text-transform:uppercase;letter-spacing:.04em;margin-top:2px;font-size:.74rem}.terminal-stream-box.jsx-854e42b6cf195894{font-family:var(--font-mono);color:#94a3b8;background:#04070d;border:1px solid #ffffff1a;border-radius:12px;flex-direction:column;flex:1;justify-content:space-between;padding:14px 16px;font-size:.84rem;line-height:1.55;display:flex}.terminal-live-log.jsx-854e42b6cf195894{align-items:center;gap:2px;min-height:26px;font-size:.86rem;display:flex}.terminal-cursor.jsx-854e42b6cf195894{color:#38bdf8;font-size:.85rem;animation:.8s infinite blinkCursor}@keyframes blinkCursor{0%,to{opacity:1}50%{opacity:0}}.terminal-action-row.jsx-854e42b6cf195894{border-top:1px solid #ffffff0f;justify-content:space-between;align-items:center;margin-top:10px;padding-top:8px;display:flex}.requests-counter.jsx-854e42b6cf195894{color:#64748b;font-size:.76rem}.requests-counter.jsx-854e42b6cf195894 strong.jsx-854e42b6cf195894{color:#f8fafc}.btn-terminal-trigger.jsx-854e42b6cf195894{color:#38bdf8;cursor:pointer;font-size:.76rem;font-family:var(--font-mono);background:#38bdf826;border:1px solid #38bdf859;border-radius:8px;padding:6px 14px;font-weight:600;transition:all .2s}.btn-terminal-trigger.jsx-854e42b6cf195894:hover{background:#38bdf840;transform:translateY(-1px)}@media (width<=600px){.metric-val.jsx-854e42b6cf195894{font-size:1.15rem}.metric-lbl.jsx-854e42b6cf195894{font-size:.65rem}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProductScreens/HeroScreen.jsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(HeroScreen, "7JUj6Y8XjouLXnVo/ji9BRb5QlI=");
_c = HeroScreen;
var _c;
__turbopack_context__.k.register(_c, "HeroScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ProductScreens/RagScreen.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RagScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function RagScreen() {
    _s();
    const [activeQuery, setActiveQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('enterprise_sla_spec.pdf#page=42');
    const [similarity, setSimilarity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0.984);
    const simulateLookup = ()=>{
        const queries = [
            'enterprise_sla_spec.pdf#page=42 (98.4% match)',
            'flipkart_catalog_schema.json (99.1% match)',
            'multimodal_audio_spec.proto (97.8% match)',
            'guardrails_telemetry_v2.md (99.5% match)'
        ];
        const picked = queries[Math.floor(Math.random() * queries.length)];
        setActiveQuery(picked);
        setSimilarity(+(0.97 + Math.random() * 0.025).toFixed(3));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "screen-panel-inner",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rag-matrix-canvas",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rag-flow-bar",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: '0.74rem',
                                        color: '#94a3b8',
                                        textTransform: 'uppercase',
                                        display: 'block',
                                        letterSpacing: '0.04em'
                                    },
                                    children: "HYBRID RETRIEVAL PIPELINE · DENSE + BM25 FUSION"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductScreens/RagScreen.jsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '0.96rem',
                                        color: '#f8fafc',
                                        fontWeight: 700
                                    },
                                    children: "Reciprocal Rank Fusion & Cross-Encoder Re-Ranking"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductScreens/RagScreen.jsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductScreens/RagScreen.jsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rag-score-pill",
                            children: [
                                "⚡ ",
                                (similarity * 100).toFixed(1),
                                "% FAITHFULNESS"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductScreens/RagScreen.jsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProductScreens/RagScreen.jsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rag-chunks-grid",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rag-chunk-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rag-chunk-title",
                                    children: "Chunk #891 · Dense Vector Space"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductScreens/RagScreen.jsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rag-chunk-desc",
                                    children: "Extracted SLA penalties from 200+ page enterprise RFP specification with exact section citations."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductScreens/RagScreen.jsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductScreens/RagScreen.jsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rag-chunk-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rag-chunk-title",
                                    children: "Chunk #892 · Context Graph & BM25"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductScreens/RagScreen.jsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rag-chunk-desc",
                                    children: "Synthesized cross-document citations across engineering manuals in under 60 seconds."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductScreens/RagScreen.jsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductScreens/RagScreen.jsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProductScreens/RagScreen.jsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "terminal-stream-box",
                    style: {
                        flex: 'none',
                        height: '110px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "terminal-line",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "terminal-prompt",
                                    children: "rag://vector-db $"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductScreens/RagScreen.jsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "query --top_k=4 --hybrid=true --rerank=cross_encoder"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductScreens/RagScreen.jsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductScreens/RagScreen.jsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                color: '#34d399',
                                fontSize: '0.84rem',
                                marginTop: '6px',
                                fontWeight: 600
                            },
                            children: [
                                "> Citation Resolved: ",
                                activeQuery
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductScreens/RagScreen.jsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                textAlign: 'right',
                                marginTop: '8px'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: simulateLookup,
                                style: {
                                    padding: '5px 12px',
                                    fontSize: '0.74rem',
                                    background: 'rgba(16, 185, 129, 0.15)',
                                    border: '1px solid rgba(16, 185, 129, 0.35)',
                                    color: '#34d399',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    fontFamily: 'var(--font-mono)',
                                    fontWeight: 600
                                },
                                children: "🔍 Query Next Chunk"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductScreens/RagScreen.jsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductScreens/RagScreen.jsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProductScreens/RagScreen.jsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProductScreens/RagScreen.jsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ProductScreens/RagScreen.jsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(RagScreen, "UE5NfYECOt9D/kXVGkW/Svf5jD8=");
_c = RagScreen;
var _c;
__turbopack_context__.k.register(_c, "RagScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ProductScreens/VideoScreen.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VideoScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function VideoScreen() {
    _s();
    const [activeFrame, setActiveFrame] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(2);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "screen-panel-inner",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: '8px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: '0.74rem',
                            color: '#94a3b8',
                            textTransform: 'uppercase',
                            display: 'block',
                            letterSpacing: '0.04em'
                        },
                        children: "MULTIMODAL GENAI · GOOGLE VEO SCRIPT-TO-SCREEN DAG"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductScreens/VideoScreen.jsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.96rem',
                            color: '#f8fafc',
                            fontWeight: 700
                        },
                        children: "Autonomous 4-Agent Orchestration with Continuous Character Lock"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductScreens/VideoScreen.jsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProductScreens/VideoScreen.jsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "video-studio-container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "video-frame-preview",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "video-scanline"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductScreens/VideoScreen.jsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: 'center',
                                    zIndex: 2
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '1.6rem',
                                            marginBottom: '4px'
                                        },
                                        children: "🎬"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductScreens/VideoScreen.jsx",
                                        lineNumber: 23,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: 'var(--font-mono)',
                                            fontSize: '0.84rem',
                                            color: '#60a5fa',
                                            fontWeight: 700
                                        },
                                        children: "GOOGLE VEO 1080P CINEMATIC FRAME GENERATION"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductScreens/VideoScreen.jsx",
                                        lineNumber: 24,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '0.72rem',
                                            color: '#94a3b8',
                                            marginTop: '2px'
                                        },
                                        children: "Director Agent ➔ Storyboard DAG ➔ Video Synthesizer ➔ Automated QA Pass"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductScreens/VideoScreen.jsx",
                                        lineNumber: 27,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProductScreens/VideoScreen.jsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductScreens/VideoScreen.jsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "video-timeline-reel",
                        children: [
                            'Frame #01 (Scene Set)',
                            'Frame #02 (Actor Lock)',
                            'Frame #03 (Motion)',
                            'Frame #04 (QA Check)'
                        ].map((label, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveFrame(i),
                                className: `video-keyframe ${activeFrame === i ? 'active' : ''}`,
                                style: {
                                    cursor: 'pointer',
                                    border: '1px solid',
                                    flex: 1
                                },
                                children: label
                            }, i, false, {
                                fileName: "[project]/src/components/ProductScreens/VideoScreen.jsx",
                                lineNumber: 36,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductScreens/VideoScreen.jsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "terminal-stream-box",
                        style: {
                            flex: 'none',
                            height: '90px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "terminal-line",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "terminal-prompt",
                                        style: {
                                            color: '#60a5fa'
                                        },
                                        children: "veo://render $"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductScreens/VideoScreen.jsx",
                                        lineNumber: 50,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "pipeline --scene=",
                                            activeFrame + 1,
                                            " --lock=character_mesh --fps=24"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ProductScreens/VideoScreen.jsx",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProductScreens/VideoScreen.jsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    color: '#60a5fa',
                                    fontSize: '0.80rem',
                                    marginTop: '6px'
                                },
                                children: "> Visual Continuity Confidence: 99.4% · Zero character drift detected."
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductScreens/VideoScreen.jsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductScreens/VideoScreen.jsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProductScreens/VideoScreen.jsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProductScreens/VideoScreen.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_s(VideoScreen, "8C/8U6rw1Pg+BSXd4N1ygUszokQ=");
_c = VideoScreen;
var _c;
__turbopack_context__.k.register(_c, "VideoScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ProductScreens/VoiceScreen.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VoiceScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function VoiceScreen() {
    _s();
    const [isSpeaking, setIsSpeaking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [transcript, setTranscript] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Streaming 240ms turnaround... Whisper STT connected on 5 concurrent channels.');
    const toggleVoice = ()=>{
        setIsSpeaking((prev)=>!prev);
        const phrases = [
            'Customer: "Book test drive for Sunday 11 AM in Gurugram." → Scheduled in 380ms.',
            'VAD detected speech end in 120ms. LLM chunk response streamed without lag.',
            'Neural TTS streaming synthesized audio packet #24 over WebSocket.',
            'Zero human handoff achieved across full conversational support flow.'
        ];
        setTranscript(phrases[Math.floor(Math.random() * phrases.length)]);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "screen-panel-inner",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: '8px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: '0.74rem',
                            color: '#94a3b8',
                            textTransform: 'uppercase',
                            display: 'block',
                            letterSpacing: '0.04em'
                        },
                        children: "FULL-DUPLEX WEBSOCKET VOICE AI · REAL-TIME STREAMING"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductScreens/VoiceScreen.jsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.96rem',
                            color: '#f8fafc',
                            fontWeight: 700
                        },
                        children: "Whisper STT + Streaming Neural TTS with Sub-Chunked VAD"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductScreens/VoiceScreen.jsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProductScreens/VoiceScreen.jsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "voice-visualizer-container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "voice-wave-bars",
                        children: [
                            ...Array(11)
                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "voice-bar",
                                style: {
                                    animationPlayState: isSpeaking ? 'running' : 'paused',
                                    opacity: isSpeaking ? 1 : 0.35
                                }
                            }, i, false, {
                                fileName: "[project]/src/components/ProductScreens/VoiceScreen.jsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductScreens/VoiceScreen.jsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "voice-stats-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "⚡ Latency: <400ms"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductScreens/VoiceScreen.jsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "🎙️ 5 Concurrent Streams"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductScreens/VoiceScreen.jsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "✨ 100% Automated Bookings"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductScreens/VoiceScreen.jsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductScreens/VoiceScreen.jsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProductScreens/VoiceScreen.jsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "terminal-stream-box",
                style: {
                    flex: 'none',
                    height: '110px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "terminal-line",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "terminal-prompt",
                                style: {
                                    color: '#fbbf24'
                                },
                                children: "voice://socket $"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductScreens/VoiceScreen.jsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "stream --duplex=true --vad=active --tts=neural"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductScreens/VoiceScreen.jsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductScreens/VoiceScreen.jsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            color: '#fbbf24',
                            fontSize: '0.82rem',
                            marginTop: '6px',
                            fontWeight: 600
                        },
                        children: [
                            '> "',
                            transcript,
                            '"'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductScreens/VoiceScreen.jsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'right',
                            marginTop: '8px'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: toggleVoice,
                            style: {
                                padding: '5px 12px',
                                fontSize: '0.74rem',
                                background: 'rgba(245, 158, 11, 0.15)',
                                border: '1px solid rgba(245, 158, 11, 0.35)',
                                color: '#fbbf24',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontFamily: 'var(--font-mono)',
                                fontWeight: 600
                            },
                            children: isSpeaking ? '⏸ Pause Stream' : '▶ Resume Voice Stream'
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductScreens/VoiceScreen.jsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductScreens/VoiceScreen.jsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProductScreens/VoiceScreen.jsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProductScreens/VoiceScreen.jsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(VoiceScreen, "u7pwBk/9KixLjbr+ddPaCpvADt0=");
_c = VoiceScreen;
var _c;
__turbopack_context__.k.register(_c, "VoiceScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ProductStage.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductStage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductScreens$2f$HeroScreen$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProductScreens/HeroScreen.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductScreens$2f$RagScreen$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProductScreens/RagScreen.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductScreens$2f$AgenticScreen$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProductScreens/AgenticScreen.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductScreens$2f$VoiceScreen$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProductScreens/VoiceScreen.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductScreens$2f$VideoScreen$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProductScreens/VideoScreen.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/sound.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function ProductStage({ activeActIndex = 0, onSelectMode }) {
    _s();
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [internalMode, setInternalMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductStage.useEffect": ()=>{
            setInternalMode(activeActIndex);
        }
    }["ProductStage.useEffect"], [
        activeActIndex
    ]);
    const modes = [
        {
            id: 0,
            label: 'Apex Core Swarm',
            icon: '⚡'
        },
        {
            id: 1,
            label: 'Sub-Minute RAG',
            icon: '🔍'
        },
        {
            id: 2,
            label: 'LangGraph DAG',
            icon: '🤖'
        },
        {
            id: 3,
            label: 'Voice AI Stream',
            icon: '🎙️'
        },
        {
            id: 4,
            label: 'Veo Video Studio',
            icon: '🎬'
        }
    ];
    const handleMouseMove = (e)=>{
        if (!cardRef.current || window.innerWidth < 900) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const tiltX = -(y / (rect.height / 2)) * 4;
        const tiltY = x / (rect.width / 2) * 4;
        cardRef.current.style.transform = `perspective(1400px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    };
    const handleMouseLeave = ()=>{
        if (!cardRef.current) return;
        cardRef.current.style.transform = `perspective(1400px) rotateX(0deg) rotateY(0deg)`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-71fb088c9abecf00" + " " + "product-stage-root",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-71fb088c9abecf00" + " " + "product-aura-glow"
            }, void 0, false, {
                fileName: "[project]/src/components/ProductStage.jsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: cardRef,
                id: "product-card-3d",
                onMouseMove: handleMouseMove,
                onMouseLeave: handleMouseLeave,
                className: "jsx-71fb088c9abecf00" + " " + "product-stage-card-3d",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-71fb088c9abecf00" + " " + "product-chassis",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-71fb088c9abecf00" + " " + "product-top-bezel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-71fb088c9abecf00" + " " + "bezel-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-71fb088c9abecf00" + " " + "bezel-dot red"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductStage.jsx",
                                            lineNumber: 56,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-71fb088c9abecf00" + " " + "bezel-dot yellow"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductStage.jsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-71fb088c9abecf00" + " " + "bezel-dot green"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductStage.jsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-71fb088c9abecf00" + " " + "bezel-title",
                                            children: "APEX-01 // PRODUCTION RUNTIME CONSOLE"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductStage.jsx",
                                            lineNumber: 59,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductStage.jsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-71fb088c9abecf00" + " " + "bezel-badge",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-71fb088c9abecf00" + " " + "pulse-dot"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductStage.jsx",
                                            lineNumber: 64,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-71fb088c9abecf00",
                                            children: "LIVE CLUSTER ONLINE"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductStage.jsx",
                                            lineNumber: 65,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductStage.jsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductStage.jsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-71fb088c9abecf00" + " " + "product-screen",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-71fb088c9abecf00" + " " + "product-reflection"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductStage.jsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-71fb088c9abecf00" + " " + "product-screen-content",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-71fb088c9abecf00" + " " + "device-tabs",
                                            children: modes.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playClick"])();
                                                        setInternalMode(m.id);
                                                        if (onSelectMode) onSelectMode(m.id);
                                                    },
                                                    onMouseEnter: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playHover"])(),
                                                    className: "jsx-71fb088c9abecf00" + " " + `device-tab ${internalMode === m.id ? 'active' : ''}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-71fb088c9abecf00",
                                                            children: m.icon
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ProductStage.jsx",
                                                            lineNumber: 87,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-71fb088c9abecf00",
                                                            children: m.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ProductStage.jsx",
                                                            lineNumber: 88,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, m.id, true, {
                                                    fileName: "[project]/src/components/ProductStage.jsx",
                                                    lineNumber: 77,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductStage.jsx",
                                            lineNumber: 75,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            id: "panel-hero",
                                            className: "jsx-71fb088c9abecf00" + " " + `screen-panel ${internalMode === 0 ? 'active' : ''}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductScreens$2f$HeroScreen$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                fileName: "[project]/src/components/ProductStage.jsx",
                                                lineNumber: 95,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductStage.jsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            id: "panel-rag",
                                            className: "jsx-71fb088c9abecf00" + " " + `screen-panel ${internalMode === 1 ? 'active' : ''}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductScreens$2f$RagScreen$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                fileName: "[project]/src/components/ProductStage.jsx",
                                                lineNumber: 98,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductStage.jsx",
                                            lineNumber: 97,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            id: "panel-agentic",
                                            className: "jsx-71fb088c9abecf00" + " " + `screen-panel ${internalMode === 2 ? 'active' : ''}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductScreens$2f$AgenticScreen$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                fileName: "[project]/src/components/ProductStage.jsx",
                                                lineNumber: 101,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductStage.jsx",
                                            lineNumber: 100,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            id: "panel-voice",
                                            className: "jsx-71fb088c9abecf00" + " " + `screen-panel ${internalMode === 3 ? 'active' : ''}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductScreens$2f$VoiceScreen$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                fileName: "[project]/src/components/ProductStage.jsx",
                                                lineNumber: 104,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductStage.jsx",
                                            lineNumber: 103,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            id: "panel-video",
                                            className: "jsx-71fb088c9abecf00" + " " + `screen-panel ${internalMode >= 4 ? 'active' : ''}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductScreens$2f$VideoScreen$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                fileName: "[project]/src/components/ProductStage.jsx",
                                                lineNumber: 107,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductStage.jsx",
                                            lineNumber: 106,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductStage.jsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductStage.jsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProductStage.jsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ProductStage.jsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "71fb088c9abecf00",
                children: ".product-stage-root.jsx-71fb088c9abecf00{justify-content:center;align-items:center;width:100%;max-width:1040px;display:flex;position:relative}.product-aura-glow.jsx-71fb088c9abecf00{filter:blur(65px);pointer-events:none;z-index:1;background:radial-gradient(circle,#38bdf82e 0%,#a855f71f 45%,#0000 70%);border-radius:50%;width:92%;height:92%;position:absolute}.product-stage-card-3d.jsx-71fb088c9abecf00{z-index:2;width:100%;height:550px;transition:transform .2s ease-out,box-shadow .3s;position:relative}@media (width<=900px){.product-stage-card-3d.jsx-71fb088c9abecf00{height:500px}}@media (width<=600px){.product-stage-card-3d.jsx-71fb088c9abecf00{height:530px}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProductStage.jsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(ProductStage, "2hRnXa7z6ihgDfqwCw1bzWSUY6w=");
_c = ProductStage;
var _c;
__turbopack_context__.k.register(_c, "ProductStage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/QuantumFluxBackground.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuantumFluxBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function QuantumFluxBackground() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuantumFluxBackground.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            let animId;
            let width = window.innerWidth;
            let height = window.innerHeight;
            let dpr = Math.min(window.devicePixelRatio || 1, 2);
            const resize = {
                "QuantumFluxBackground.useEffect.resize": ()=>{
                    width = window.innerWidth;
                    height = window.innerHeight;
                    canvas.width = width * dpr;
                    canvas.height = height * dpr;
                    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
                }
            }["QuantumFluxBackground.useEffect.resize"];
            resize();
            window.addEventListener('resize', resize);
            // Mouse coordinates with luxury damping
            const mouse = {
                x: width / 2,
                y: height / 2,
                targetX: width / 2,
                targetY: height / 2,
                active: false
            };
            const handleMouseMove = {
                "QuantumFluxBackground.useEffect.handleMouseMove": (e)=>{
                    mouse.targetX = e.clientX;
                    mouse.targetY = e.clientY;
                    mouse.active = true;
                }
            }["QuantumFluxBackground.useEffect.handleMouseMove"];
            const handleMouseLeave = {
                "QuantumFluxBackground.useEffect.handleMouseLeave": ()=>{
                    mouse.active = false;
                }
            }["QuantumFluxBackground.useEffect.handleMouseLeave"];
            window.addEventListener('mousemove', handleMouseMove, {
                passive: true
            });
            window.addEventListener('mouseleave', handleMouseLeave);
            // Scroll inertia tracking
            let scrollSpeed = 0;
            let lastScrollY = window.scrollY;
            let scrollPhase = 0;
            const handleScroll = {
                "QuantumFluxBackground.useEffect.handleScroll": ()=>{
                    const currentY = window.scrollY;
                    const delta = currentY - lastScrollY;
                    lastScrollY = currentY;
                    scrollSpeed += delta * 0.12;
                    scrollPhase += delta * 0.0015;
                }
            }["QuantumFluxBackground.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll, {
                passive: true
            });
            // Floating 24K Gold Leaf Motes (Old Money library dust caught in sunlight)
            const isMobile = width < 768;
            const moteCount = isMobile ? 35 : 75;
            const motes = [];
            // Curated Old Money Gold & Champagne Palette
            const goldPalette = [
                {
                    r: 212,
                    g: 175,
                    b: 55,
                    hex: '#d4af37'
                },
                {
                    r: 243,
                    g: 229,
                    b: 171,
                    hex: '#f3e5ab'
                },
                {
                    r: 184,
                    g: 134,
                    b: 11,
                    hex: '#b8860b'
                },
                {
                    r: 205,
                    g: 164,
                    b: 94,
                    hex: '#cda45e'
                },
                {
                    r: 232,
                    g: 215,
                    b: 175,
                    hex: '#e8d7af'
                }
            ];
            for(let i = 0; i < moteCount; i++){
                motes.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.18,
                    vy: -0.15 - Math.random() * 0.25,
                    size: 0.8 + Math.random() * 1.8,
                    color: goldPalette[i % goldPalette.length],
                    alpha: 0.2 + Math.random() * 0.6,
                    phase: Math.random() * Math.PI * 2
                });
            }
            let time = 0;
            const render = {
                "QuantumFluxBackground.useEffect.render": ()=>{
                    time += 0.006;
                    // Silky luxury mouse ease
                    mouse.x += (mouse.targetX - mouse.x) * 0.05;
                    mouse.y += (mouse.targetY - mouse.y) * 0.05;
                    // Scroll physics damping
                    scrollSpeed *= 0.92;
                    if (Math.abs(scrollSpeed) < 0.02) scrollSpeed = 0;
                    // Deep obsidian clear
                    ctx.clearRect(0, 0, width, height);
                    // =========================================================================
                    // LAYER 1: Velvet Obsidian Radiance with Warm Champagne Ambient Vignette
                    // =========================================================================
                    const cx = width * 0.5 + Math.sin(time * 0.6 + scrollPhase) * 60;
                    const cy = height * 0.45 + Math.cos(time * 0.5) * 40;
                    const rad = Math.max(width * 0.55, 420);
                    const luxuryAura = ctx.createRadialGradient(cx, cy, 0, cx, cy, rad);
                    luxuryAura.addColorStop(0, 'rgba(212, 175, 55, 0.065)'); // Antique Gold Glow
                    luxuryAura.addColorStop(0.45, 'rgba(184, 134, 11, 0.025)'); // Warm Brass
                    luxuryAura.addColorStop(0.85, 'rgba(10, 12, 16, 0.01)');
                    luxuryAura.addColorStop(1, 'rgba(7, 9, 14, 0)');
                    ctx.fillStyle = luxuryAura;
                    ctx.fillRect(0, 0, width, height);
                    // Corner vintage vignette
                    const cornerAura = ctx.createRadialGradient(width * 0.85, height * 0.8, 0, width * 0.85, height * 0.8, rad * 0.8);
                    cornerAura.addColorStop(0, 'rgba(205, 164, 94, 0.04)');
                    cornerAura.addColorStop(1, 'rgba(7, 9, 14, 0)');
                    ctx.fillStyle = cornerAura;
                    ctx.fillRect(0, 0, width, height);
                    // =========================================================================
                    // LAYER 2: Celestial Guilloché Astrolabe Engravings
                    // Intricate watchmaker engine-turned rosettes that breathe and rotate
                    // =========================================================================
                    ctx.save();
                    const numRings = isMobile ? 3 : 5;
                    const baseCenterRingX = width * 0.5 + (mouse.x - width / 2) * 0.04;
                    const baseCenterRingY = height * 0.48 + (mouse.y - height / 2) * 0.04 + scrollSpeed * 0.2;
                    for(let r = 0; r < numRings; r++){
                        const ringRadius = 140 + r * 110;
                        const ringAlpha = (0.055 - r * 0.008) * (mouse.active ? 1.25 : 1.0);
                        const petals = 12 + r * 4;
                        const step = Math.PI * 2 / (petals * 18);
                        const rotOffset = (r % 2 === 0 ? 1 : -1) * (time * 0.4 + scrollPhase * 0.3) + r * 0.5;
                        ctx.beginPath();
                        for(let a = 0; a <= Math.PI * 2 + step; a += step){
                            // Guilloché harmonic formulation: Rose curve modulated with second octave
                            const modulation = Math.sin(a * petals + rotOffset) * (14 + r * 6) + Math.cos(a * 3 - rotOffset * 0.5) * 6;
                            const currentR = ringRadius + modulation;
                            const px = baseCenterRingX + Math.cos(a) * currentR;
                            const py = baseCenterRingY + Math.sin(a) * currentR;
                            if (a === 0) ctx.moveTo(px, py);
                            else ctx.lineTo(px, py);
                        }
                        ctx.strokeStyle = `rgba(212, 175, 55, ${Math.max(ringAlpha, 0.015)})`;
                        ctx.lineWidth = 0.75;
                        ctx.stroke();
                    }
                    // Fine concentric calibration ticks (like an antique marine chronometer)
                    const tickCount = 48;
                    const dialRadius = 290;
                    for(let i = 0; i < tickCount; i++){
                        const ang = i / tickCount * Math.PI * 2 + time * 0.15;
                        const x1 = baseCenterRingX + Math.cos(ang) * (dialRadius - (i % 4 === 0 ? 9 : 4));
                        const y1 = baseCenterRingY + Math.sin(ang) * (dialRadius - (i % 4 === 0 ? 9 : 4));
                        const x2 = baseCenterRingX + Math.cos(ang) * dialRadius;
                        const y2 = baseCenterRingY + Math.sin(ang) * dialRadius;
                        ctx.beginPath();
                        ctx.moveTo(x1, y1);
                        ctx.lineTo(x2, y2);
                        ctx.strokeStyle = i % 4 === 0 ? 'rgba(243, 229, 171, 0.12)' : 'rgba(212, 175, 55, 0.04)';
                        ctx.lineWidth = i % 4 === 0 ? 1.0 : 0.6;
                        ctx.stroke();
                    }
                    ctx.restore();
                    // =========================================================================
                    // LAYER 3: Interactive Golden Constellation Filaments & Mouse Loom
                    // When mouse moves, fine brass threads arch gracefully towards the cursor
                    // =========================================================================
                    ctx.save();
                    if (mouse.active) {
                        const loomRays = 8;
                        for(let i = 0; i < loomRays; i++){
                            const rayAngle = i / loomRays * Math.PI * 2 + time * 0.5;
                            const originX = baseCenterRingX + Math.cos(rayAngle) * 380;
                            const originY = baseCenterRingY + Math.sin(rayAngle) * 380;
                            // Bezier curve flowing smoothly into cursor
                            const cpX = (originX + mouse.x) / 2 + Math.sin(time * 2 + i) * 35;
                            const cpY = (originY + mouse.y) / 2 + Math.cos(time * 2 + i) * 35;
                            ctx.beginPath();
                            ctx.moveTo(originX, originY);
                            ctx.quadraticCurveTo(cpX, cpY, mouse.x, mouse.y);
                            ctx.strokeStyle = 'rgba(212, 175, 55, 0.035)';
                            ctx.lineWidth = 0.6;
                            ctx.stroke();
                        }
                        // Concentric brass halo around cursor
                        ctx.beginPath();
                        ctx.arc(mouse.x, mouse.y, 16, 0, Math.PI * 2);
                        ctx.strokeStyle = 'rgba(243, 229, 171, 0.22)';
                        ctx.lineWidth = 0.8;
                        ctx.stroke();
                        ctx.beginPath();
                        ctx.arc(mouse.x, mouse.y, 4, 0, Math.PI * 2);
                        ctx.fillStyle = '#d4af37';
                        ctx.shadowColor = '#d4af37';
                        ctx.shadowBlur = 8;
                        ctx.fill();
                        ctx.shadowBlur = 0;
                    }
                    ctx.restore();
                    // =========================================================================
                    // LAYER 4: 24K Gold Leaf Motes (Quiet Luxury Dusting)
                    // Drift lazily upwards with subtle sine swaying
                    // =========================================================================
                    ctx.save();
                    for(let i = 0; i < motes.length; i++){
                        const m = motes[i];
                        m.x += m.vx + Math.sin(time * 2 + m.phase) * 0.25;
                        m.y += m.vy - scrollSpeed * 0.08;
                        // Wrap around viewport edges
                        if (m.y < -20) {
                            m.y = height + 20;
                            m.x = Math.random() * width;
                        }
                        if (m.y > height + 20) {
                            m.y = -20;
                            m.x = Math.random() * width;
                        }
                        if (m.x < -20) m.x = width + 20;
                        if (m.x > width + 20) m.x = -20;
                        // Draw soft radiant gold mote
                        const pulse = (Math.sin(time * 3 + m.phase) + 1) * 0.5;
                        const currentAlpha = m.alpha * (0.5 + pulse * 0.5);
                        ctx.beginPath();
                        ctx.arc(m.x, m.y, m.size, 0, Math.PI * 2);
                        ctx.fillStyle = `rgba(${m.color.r}, ${m.color.g}, ${m.color.b}, ${currentAlpha})`;
                        ctx.shadowColor = m.color.hex;
                        ctx.shadowBlur = 6;
                        ctx.fill();
                        ctx.shadowBlur = 0;
                    }
                    ctx.restore();
                    animId = requestAnimationFrame(render);
                }
            }["QuantumFluxBackground.useEffect.render"];
            render();
            return ({
                "QuantumFluxBackground.useEffect": ()=>{
                    window.removeEventListener('resize', resize);
                    window.removeEventListener('mousemove', handleMouseMove);
                    window.removeEventListener('mouseleave', handleMouseLeave);
                    window.removeEventListener('scroll', handleScroll);
                    cancelAnimationFrame(animId);
                }
            })["QuantumFluxBackground.useEffect"];
        }
    }["QuantumFluxBackground.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            pointerEvents: 'none',
            zIndex: 1,
            overflow: 'hidden',
            background: '#07090e'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                style: {
                    width: '100%',
                    height: '100%',
                    display: 'block'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/QuantumFluxBackground.jsx",
                lineNumber: 300,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.02) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    opacity: 0.8,
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/QuantumFluxBackground.jsx",
                lineNumber: 309,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/QuantumFluxBackground.jsx",
        lineNumber: 287,
        columnNumber: 5
    }, this);
}
_s(QuantumFluxBackground, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = QuantumFluxBackground;
var _c;
__turbopack_context__.k.register(_c, "QuantumFluxBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SafetyDashboard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SafetyDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
;
function SafetyDashboard() {
    const benchmarks = [
        {
            label: 'RAG Groundedness & Faithfulness (Enterprise Docs)',
            score: '98.4%',
            width: '98.4%',
            color: '#10b981',
            framework: 'DeepEval RAG Triad'
        },
        {
            label: 'Tool Calling Argument Precision (LoRA Mistral 7B)',
            score: '97.1% (+30% Lift)',
            width: '97.1%',
            color: '#38bdf8',
            framework: 'AST Schema Evaluator'
        },
        {
            label: 'Zero Hallucination Guardrail Interception Rate',
            score: '99.6%',
            width: '99.6%',
            color: '#c084fc',
            framework: 'Guardrails-AI'
        },
        {
            label: 'Voice AI Full-Duplex Audio Turnaround SLA',
            score: '<400ms',
            width: '92%',
            color: '#f59e0b',
            framework: 'WebSocket VAD Engine'
        }
    ];
    const certs = [
        {
            title: 'Develop GenAI Apps with Gemini and Streamlit',
            badge: 'Google Cloud'
        },
        {
            title: 'Intermediate GCP: AI/ML Services in Google Cloud',
            badge: 'Google Cloud'
        },
        {
            title: 'Prompt Design in Vertex AI Skill Badge',
            badge: 'Vertex AI'
        },
        {
            title: 'Build Real World AI Applications with Gemini & Imagen',
            badge: 'Gemini'
        },
        {
            title: 'Explore Generative AI with Gemini API in Vertex AI',
            badge: 'Vertex AI'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "act-safety",
        style: {
            paddingTop: '90px',
            paddingBottom: '100px'
        },
        className: "jsx-8eaa7d4daca8d7aa" + " " + "container-custom",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-8eaa7d4daca8d7aa" + " " + "section-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: '14px'
                        },
                        className: "jsx-8eaa7d4daca8d7aa" + " " + "glass-pill",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-8eaa7d4daca8d7aa" + " " + "pulse-dot"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SafetyDashboard.jsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-8eaa7d4daca8d7aa",
                                children: "ENTERPRISE TRUST · OBSERVABILITY & GUARDRAILS"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SafetyDashboard.jsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SafetyDashboard.jsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "jsx-8eaa7d4daca8d7aa",
                        children: [
                            "Safe in Production Execution.",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                className: "jsx-8eaa7d4daca8d7aa"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SafetyDashboard.jsx",
                                lineNumber: 29,
                                columnNumber: 40
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-8eaa7d4daca8d7aa" + " " + "text-glow-emerald",
                                children: "Validated by Google Cloud & DeepEval."
                            }, void 0, false, {
                                fileName: "[project]/src/components/SafetyDashboard.jsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SafetyDashboard.jsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "jsx-8eaa7d4daca8d7aa",
                        children: "Mission-critical AI requires synthetic evaluation, deterministic guardrails, and strict zero-hallucination compliance before deployment."
                    }, void 0, false, {
                        fileName: "[project]/src/components/SafetyDashboard.jsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SafetyDashboard.jsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-8eaa7d4daca8d7aa" + " " + "safety-dashboard-card glass-panel",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-8eaa7d4daca8d7aa" + " " + "dashboard-summary-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-8eaa7d4daca8d7aa" + " " + "summary-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "jsx-8eaa7d4daca8d7aa" + " " + "summary-title",
                                        children: "Continuous Synthetic Telemetry & Verification"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SafetyDashboard.jsx",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-8eaa7d4daca8d7aa" + " " + "summary-desc",
                                        children: "Automated unit and regression evaluation pipelines measuring semantic faithfulness, SQL injection immunity, and PII redaction across every pull request."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SafetyDashboard.jsx",
                                        lineNumber: 42,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SafetyDashboard.jsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-8eaa7d4daca8d7aa" + " " + "summary-stat-badge",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-8eaa7d4daca8d7aa" + " " + "stat-large text-glow-emerald",
                                        children: "-40%"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SafetyDashboard.jsx",
                                        lineNumber: 48,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-8eaa7d4daca8d7aa" + " " + "stat-subtitle",
                                        children: "Production Execution Faults"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SafetyDashboard.jsx",
                                        lineNumber: 49,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SafetyDashboard.jsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SafetyDashboard.jsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-8eaa7d4daca8d7aa" + " " + "benchmarks-container",
                        children: benchmarks.map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-8eaa7d4daca8d7aa" + " " + "benchmark-item",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-8eaa7d4daca8d7aa" + " " + "benchmark-meta-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-8eaa7d4daca8d7aa" + " " + "benchmark-name-group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-8eaa7d4daca8d7aa" + " " + "benchmark-name",
                                                        children: b.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SafetyDashboard.jsx",
                                                        lineNumber: 59,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-8eaa7d4daca8d7aa" + " " + "benchmark-framework-tag",
                                                        children: b.framework
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SafetyDashboard.jsx",
                                                        lineNumber: 60,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SafetyDashboard.jsx",
                                                lineNumber: 58,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: b.color
                                                },
                                                className: "jsx-8eaa7d4daca8d7aa" + " " + "benchmark-score",
                                                children: b.score
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SafetyDashboard.jsx",
                                                lineNumber: 62,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SafetyDashboard.jsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-8eaa7d4daca8d7aa" + " " + "progress-track",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                '--target-width': b.width,
                                                background: b.color,
                                                boxShadow: `0 0 14px ${b.color}80`
                                            },
                                            className: "jsx-8eaa7d4daca8d7aa" + " " + "progress-fill"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SafetyDashboard.jsx",
                                            lineNumber: 67,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SafetyDashboard.jsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/src/components/SafetyDashboard.jsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/SafetyDashboard.jsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-8eaa7d4daca8d7aa" + " " + "certs-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-8eaa7d4daca8d7aa" + " " + "certs-header",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-8eaa7d4daca8d7aa" + " " + "certs-icon",
                                        children: "✦"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SafetyDashboard.jsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-8eaa7d4daca8d7aa",
                                        children: "GOOGLE CLOUD & VERTEX AI SKILL ACCREDITATIONS"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SafetyDashboard.jsx",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SafetyDashboard.jsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-8eaa7d4daca8d7aa" + " " + "certs-grid",
                                children: certs.map((c, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-8eaa7d4daca8d7aa" + " " + "cert-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-8eaa7d4daca8d7aa" + " " + "cert-badge",
                                                children: c.badge
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SafetyDashboard.jsx",
                                                lineNumber: 89,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-8eaa7d4daca8d7aa" + " " + "cert-title",
                                                children: c.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SafetyDashboard.jsx",
                                                lineNumber: 90,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/src/components/SafetyDashboard.jsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/SafetyDashboard.jsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SafetyDashboard.jsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SafetyDashboard.jsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "8eaa7d4daca8d7aa",
                children: ".safety-dashboard-card.jsx-8eaa7d4daca8d7aa{opacity:0;background:#0d111ad9;border:1px solid #ffffff1a;border-radius:24px;padding:38px 32px;transition:opacity .75s cubic-bezier(.16,1,.3,1),transform .75s cubic-bezier(.175,.885,.32,1.25),box-shadow .3s;transform:perspective(1000px)translateY(55px)scale(.94)}.safety-dashboard-card.is-scrolled-in.jsx-8eaa7d4daca8d7aa{opacity:1;transform:perspective(1000px)translateY(0)scale(1);box-shadow:0 28px 65px -15px #000000d9,0 0 38px #10b98124}.safety-dashboard-card.jsx-8eaa7d4daca8d7aa .progress-fill.jsx-8eaa7d4daca8d7aa{width:0;transition:width 1.4s cubic-bezier(.16,1,.3,1) .2s}.safety-dashboard-card.is-scrolled-in.jsx-8eaa7d4daca8d7aa .progress-fill.jsx-8eaa7d4daca8d7aa{width:var(--target-width)}.dashboard-summary-row.jsx-8eaa7d4daca8d7aa{border-bottom:1px solid #ffffff14;flex-wrap:wrap;justify-content:space-between;align-items:flex-start;gap:20px;margin-bottom:34px;padding-bottom:26px;display:flex}.summary-left.jsx-8eaa7d4daca8d7aa{max-width:720px}.summary-title.jsx-8eaa7d4daca8d7aa{color:#fff;margin-bottom:10px;font-size:1.85rem;font-weight:750}.summary-desc.jsx-8eaa7d4daca8d7aa{color:var(--text-secondary);margin:0;font-size:1.08rem;line-height:1.68}.summary-stat-badge.jsx-8eaa7d4daca8d7aa{text-align:center;background:#10b98114;border:1px solid #10b98159;border-radius:18px;min-width:180px;padding:18px 28px}.stat-large.jsx-8eaa7d4daca8d7aa{font-family:var(--font-mono);font-size:2.6rem;font-weight:850;display:block}.stat-subtitle.jsx-8eaa7d4daca8d7aa{color:var(--text-muted);text-transform:uppercase;letter-spacing:.05em;font-size:.8rem;font-weight:600}.benchmarks-container.jsx-8eaa7d4daca8d7aa{flex-direction:column;gap:26px;margin-bottom:42px;display:flex}.benchmark-item.jsx-8eaa7d4daca8d7aa{flex-direction:column;gap:12px;display:flex}.benchmark-meta-row.jsx-8eaa7d4daca8d7aa{flex-wrap:wrap;justify-content:space-between;align-items:center;gap:10px;display:flex}.benchmark-name-group.jsx-8eaa7d4daca8d7aa{flex-wrap:wrap;align-items:center;gap:14px;display:flex}.benchmark-name.jsx-8eaa7d4daca8d7aa{color:#f1f5f9;font-size:1.15rem;font-weight:650}.benchmark-framework-tag.jsx-8eaa7d4daca8d7aa{font-family:var(--font-mono);color:var(--text-muted);background:#ffffff0d;border:1px solid #ffffff1f;border-radius:6px;padding:4px 10px;font-size:.78rem}.benchmark-score.jsx-8eaa7d4daca8d7aa{font-family:var(--font-mono);font-size:1.25rem;font-weight:850}.progress-track.jsx-8eaa7d4daca8d7aa{background:#ffffff12;border-radius:9999px;height:11px;overflow:hidden}.progress-fill.jsx-8eaa7d4daca8d7aa{height:100%;transition:width .8s var(--ease-spring);border-radius:9999px}.certs-section.jsx-8eaa7d4daca8d7aa{border-top:1px solid #ffffff14;padding-top:28px}.certs-header.jsx-8eaa7d4daca8d7aa{font-family:var(--font-mono);color:var(--text-muted);letter-spacing:.06em;align-items:center;gap:8px;margin-bottom:18px;font-size:.78rem;display:flex}.certs-icon.jsx-8eaa7d4daca8d7aa{color:var(--accent-cyan)}.certs-grid.jsx-8eaa7d4daca8d7aa{grid-template-columns:repeat(auto-fit,minmax(290px,1fr));gap:14px;display:grid}.cert-card.jsx-8eaa7d4daca8d7aa{background:#ffffff08;border:1px solid #ffffff12;border-radius:12px;flex-direction:column;gap:5px;padding:14px 18px;transition:transform .2s,border-color .2s;display:flex}.cert-card.jsx-8eaa7d4daca8d7aa:hover{border-color:#38bdf84d;transform:translateY(-2px)}.cert-badge.jsx-8eaa7d4daca8d7aa{font-family:var(--font-mono);color:var(--accent-cyan);text-transform:uppercase;font-size:.68rem}.cert-title.jsx-8eaa7d4daca8d7aa{color:#cbd5e1;font-size:.9rem;font-weight:500;line-height:1.45}@media (width<=768px){.safety-dashboard-card.jsx-8eaa7d4daca8d7aa{padding:24px 18px}.summary-stat-badge.jsx-8eaa7d4daca8d7aa{width:100%}.summary-title.jsx-8eaa7d4daca8d7aa{font-size:1.3rem}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SafetyDashboard.jsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = SafetyDashboard;
var _c;
__turbopack_context__.k.register(_c, "SafetyDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ScrollAnimationEngine.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollAnimationEngine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function ScrollAnimationEngine() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollAnimationEngine.useEffect": ()=>{
            // ─────────────────────────────────────────────────────────
            // 1. INTERSECTION OBSERVER — Scroll Reveal (staggered)
            // ─────────────────────────────────────────────────────────
            const revealSelector = [
                '.section-header',
                '.system-card',
                '.velocity-box',
                '.odyssey-stage',
                '.hero-metric-item',
                '.benchmark-item',
                '.cert-card',
                '.contact-card',
                '.glass-panel',
                '.hero-editorial-center',
                '.hero-stage-wrapper',
                '[data-scroll-animate]'
            ].join(', ');
            const revealObserver = new IntersectionObserver({
                "ScrollAnimationEngine.useEffect": (entries)=>{
                    entries.forEach({
                        "ScrollAnimationEngine.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                entry.target.classList.add('is-scrolled-in');
                                revealObserver.unobserve(entry.target);
                            }
                        }
                    }["ScrollAnimationEngine.useEffect"]);
                }
            }["ScrollAnimationEngine.useEffect"], {
                root: null,
                rootMargin: '0px 0px -50px 0px',
                threshold: 0.08
            });
            // ─────────────────────────────────────────────────────────
            // 2. NUMBER COUNTER ANIMATION — run-up on enter
            // ─────────────────────────────────────────────────────────
            const counterObserver = new IntersectionObserver({
                "ScrollAnimationEngine.useEffect": (entries)=>{
                    entries.forEach({
                        "ScrollAnimationEngine.useEffect": (entry)=>{
                            if (!entry.isIntersecting) return;
                            const el = entry.target;
                            const rawText = el.textContent.trim();
                            const numMatch = rawText.match(/([\d.]+)/);
                            if (!numMatch) return;
                            const endVal = parseFloat(numMatch[1]);
                            if (isNaN(endVal) || endVal === 0) return;
                            const prefix = rawText.slice(0, numMatch.index);
                            const suffix = rawText.slice(numMatch.index + numMatch[0].length);
                            const duration = 1600;
                            const startTime = performance.now();
                            const isDecimal = rawText.includes('.');
                            const tick = {
                                "ScrollAnimationEngine.useEffect.tick": (now)=>{
                                    const progress = Math.min((now - startTime) / duration, 1);
                                    const ease = 1 - Math.pow(1 - progress, 3);
                                    const current = endVal * ease;
                                    el.textContent = prefix + (isDecimal ? current.toFixed(1) : Math.round(current).toString()) + suffix;
                                    if (progress < 1) requestAnimationFrame(tick);
                                }
                            }["ScrollAnimationEngine.useEffect.tick"];
                            requestAnimationFrame(tick);
                            counterObserver.unobserve(el);
                        }
                    }["ScrollAnimationEngine.useEffect"]);
                }
            }["ScrollAnimationEngine.useEffect"], {
                threshold: 0.5
            });
            const attachObservers = {
                "ScrollAnimationEngine.useEffect.attachObservers": ()=>{
                    // Reveal observer
                    document.querySelectorAll(revealSelector).forEach({
                        "ScrollAnimationEngine.useEffect.attachObservers": (el, index)=>{
                            if (!el.classList.contains('scroll-element')) {
                                el.classList.add('scroll-element');
                                const groupIndex = index % 6;
                                if (!el.style.transitionDelay) {
                                    el.style.transitionDelay = `${groupIndex * 0.08}s`;
                                }
                            }
                            revealObserver.observe(el);
                        }
                    }["ScrollAnimationEngine.useEffect.attachObservers"]);
                    // Counter observer on stat values
                    document.querySelectorAll('.card-stat-val, .metric-box-val, .velocity-val').forEach({
                        "ScrollAnimationEngine.useEffect.attachObservers": (el)=>{
                            if (!el.dataset.counterAttached) {
                                el.dataset.counterAttached = 'true';
                                counterObserver.observe(el);
                            }
                        }
                    }["ScrollAnimationEngine.useEffect.attachObservers"]);
                }
            }["ScrollAnimationEngine.useEffect.attachObservers"];
            attachObservers();
            const timeoutId = setTimeout(attachObservers, 400);
            const mutationObserver = new MutationObserver({
                "ScrollAnimationEngine.useEffect": ()=>attachObservers()
            }["ScrollAnimationEngine.useEffect"]);
            mutationObserver.observe(document.body, {
                childList: true,
                subtree: true
            });
            // ─────────────────────────────────────────────────────────
            // 3. SCROLL PROGRESS BAR — top of viewport
            // ─────────────────────────────────────────────────────────
            const progressBar = document.createElement('div');
            progressBar.id = 'scroll-progress-bar';
            progressBar.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      height: 2px;
      width: 0%;
      background: linear-gradient(90deg, #d4af37 0%, #f3e5ab 45%, #d4af37 100%);
      background-size: 200% 100%;
      z-index: 9999;
      pointer-events: none;
      box-shadow: 0 0 8px rgba(212, 175, 55, 0.8);
      animation: progressShimmer 2s ease infinite;
      transition: width 0.08s linear;
    `;
            document.body.appendChild(progressBar);
            // ─────────────────────────────────────────────────────────
            // 4. SCROLL-LINKED: Parallax + Velocity Skew + Section Progress
            // ─────────────────────────────────────────────────────────
            let lastScrollY = window.scrollY;
            let ticking = false;
            let velocityTimer = null;
            let currentVelocity = 0;
            const onScroll = {
                "ScrollAnimationEngine.useEffect.onScroll": ()=>{
                    if (!ticking) {
                        requestAnimationFrame({
                            "ScrollAnimationEngine.useEffect.onScroll": ()=>{
                                const scrollY = window.scrollY;
                                const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                                const progress = docHeight > 0 ? scrollY / docHeight * 100 : 0;
                                // Update progress bar
                                progressBar.style.width = `${progress}%`;
                                // Velocity for skew effect
                                const delta = scrollY - lastScrollY;
                                currentVelocity = delta;
                                lastScrollY = scrollY;
                                // Scroll velocity class for CSS effects
                                document.body.classList.add('is-actively-scrolling');
                                if (velocityTimer) clearTimeout(velocityTimer);
                                velocityTimer = setTimeout({
                                    "ScrollAnimationEngine.useEffect.onScroll": ()=>{
                                        document.body.classList.remove('is-actively-scrolling');
                                        currentVelocity = 0;
                                    }
                                }["ScrollAnimationEngine.useEffect.onScroll"], 150);
                                // ── Subtle skew on cards during fast scroll ──
                                const skew = Math.max(Math.min(delta * 0.06, 1.8), -1.8);
                                document.querySelectorAll('.system-card').forEach({
                                    "ScrollAnimationEngine.useEffect.onScroll": (card)=>{
                                        card.style.transform = card.matches(':hover') ? `translateY(-4px) skewY(${skew * 0.3}deg)` : `skewY(${skew * 0.3}deg)`;
                                    }
                                }["ScrollAnimationEngine.useEffect.onScroll"]);
                                // ── Parallax layers ──
                                const heroSection = document.querySelector('#hero');
                                if (heroSection) {
                                    const heroHeight = heroSection.offsetHeight;
                                    const heroProgress = Math.min(scrollY / heroHeight, 1);
                                    const heroTitle = heroSection.querySelector('.hero-title');
                                    const heroTagline = heroSection.querySelector('.hero-tagline');
                                    const heroGlowCyan = heroSection.querySelector('.glow-cyan');
                                    const heroGlowPurple = heroSection.querySelector('.glow-purple');
                                    if (heroTitle) {
                                        heroTitle.style.transform = `translateY(${heroProgress * -45}px)`;
                                        heroTitle.style.opacity = `${1 - heroProgress * 1.5}`;
                                    }
                                    if (heroTagline) {
                                        heroTagline.style.transform = `translateY(${heroProgress * -28}px)`;
                                        heroTagline.style.opacity = `${1 - heroProgress * 1.8}`;
                                    }
                                    if (heroGlowCyan) {
                                        heroGlowCyan.style.transform = `translateY(${heroProgress * -60}px) scale(${1 + heroProgress * 0.3})`;
                                    }
                                    if (heroGlowPurple) {
                                        heroGlowPurple.style.transform = `translateY(${heroProgress * -40}px) scale(${1 + heroProgress * 0.2})`;
                                    }
                                }
                                // ── Section entry spotlight ──
                                document.querySelectorAll('section').forEach({
                                    "ScrollAnimationEngine.useEffect.onScroll": (sec)=>{
                                        const rect = sec.getBoundingClientRect();
                                        const viewH = window.innerHeight;
                                        if (rect.top < viewH * 0.85 && rect.bottom > viewH * 0.15) {
                                            sec.classList.add('section-in-view');
                                        } else {
                                            sec.classList.remove('section-in-view');
                                        }
                                    }
                                }["ScrollAnimationEngine.useEffect.onScroll"]);
                                ticking = false;
                            }
                        }["ScrollAnimationEngine.useEffect.onScroll"]);
                        ticking = true;
                    }
                }
            }["ScrollAnimationEngine.useEffect.onScroll"];
            window.addEventListener('scroll', onScroll, {
                passive: true
            });
            // ─────────────────────────────────────────────────────────
            // 5. SCROLLYTELLING — Systems section pinned progress
            // ─────────────────────────────────────────────────────────
            const systemsSection = document.querySelector('#act-systems');
            let pinObserver = null;
            if (systemsSection) {
                // Create section progress strip
                const sectionProgress = document.createElement('div');
                sectionProgress.className = 'section-scroll-progress';
                sectionProgress.innerHTML = `
        <div class="ssp-inner">
          <span class="ssp-label">SYSTEMS PORTFOLIO</span>
          <div class="ssp-bar-track"><div class="ssp-bar-fill"></div></div>
          <span class="ssp-pct">0%</span>
        </div>
      `;
                systemsSection.insertBefore(sectionProgress, systemsSection.firstChild);
                const sectionProgressObserver = new IntersectionObserver({
                    "ScrollAnimationEngine.useEffect": ([entry])=>{
                        sectionProgress.style.opacity = entry.isIntersecting ? '1' : '0';
                    }
                }["ScrollAnimationEngine.useEffect"], {
                    threshold: 0
                });
                sectionProgressObserver.observe(systemsSection);
                const updateSectionProgress = {
                    "ScrollAnimationEngine.useEffect.updateSectionProgress": ()=>{
                        const rect = systemsSection.getBoundingClientRect();
                        const total = systemsSection.offsetHeight - window.innerHeight;
                        if (total <= 0) return;
                        const scrolled = Math.max(0, -rect.top);
                        const pct = Math.min(scrolled / total * 100, 100);
                        const fill = sectionProgress.querySelector('.ssp-bar-fill');
                        const label = sectionProgress.querySelector('.ssp-pct');
                        if (fill) fill.style.width = `${pct}%`;
                        if (label) label.textContent = `${Math.round(pct)}%`;
                    }
                }["ScrollAnimationEngine.useEffect.updateSectionProgress"];
                window.addEventListener('scroll', updateSectionProgress, {
                    passive: true
                });
            }
            // ─────────────────────────────────────────────────────────
            // 6. CSS INJECTION — All global animation styles
            // ─────────────────────────────────────────────────────────
            const styleTag = document.createElement('style');
            styleTag.id = 'scroll-animation-engine-styles';
            styleTag.textContent = `
      @keyframes progressShimmer {
        0% { background-position: 0% 50%; }
        100% { background-position: 200% 50%; }
      }

      /* ── Base scroll-element states ── */
      .scroll-element {
        opacity: 0;
        transform: translateY(36px) scale(0.97);
        transition:
          opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
          transform 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.22);
        will-change: transform, opacity;
      }

      .scroll-element.is-scrolled-in {
        opacity: 1 !important;
        transform: translateY(0) scale(1) !important;
      }

      /* Override for elements with their own animation */
      .velocity-box.scroll-element,
      .odyssey-stage.scroll-element {
        transform: perspective(800px) translateY(45px) scale(0.93);
      }
      .velocity-box.is-scrolled-in,
      .odyssey-stage.is-scrolled-in {
        transform: perspective(800px) translateY(0) scale(1) !important;
      }

      /* ── Section in-view spotlight ── */
      section {
        transition: filter 0.6s ease;
      }

      /* ── Card hover lift with gold shimmer border ── */
      .system-card {
        transition:
          transform 0.28s cubic-bezier(0.16, 1, 0.3, 1),
          border-color 0.28s ease,
          box-shadow 0.28s ease,
          skewY 0.12s ease;
        will-change: transform;
      }

      .system-card::before {
        content: '';
        position: absolute;
        inset: -1px;
        border-radius: 21px;
        background: linear-gradient(
          135deg,
          transparent 40%,
          rgba(212, 175, 55, 0.0) 50%,
          transparent 60%
        );
        background-size: 300% 300%;
        opacity: 0;
        transition: opacity 0.4s ease;
        pointer-events: none;
        z-index: 0;
      }

      .system-card:hover::before {
        opacity: 1;
        animation: shimmerPass 1.4s ease forwards;
      }

      @keyframes shimmerPass {
        0% { background-position: 100% 0%; opacity: 0; }
        20% { opacity: 1; }
        100% { background-position: 0% 100%; opacity: 0; }
      }

      /* ── Scrollytelling Section Progress ── */
      .section-scroll-progress {
        position: sticky;
        top: 60px;
        z-index: 100;
        margin-bottom: 32px;
        opacity: 0;
        transition: opacity 0.4s ease;
      }

      .ssp-inner {
        display: inline-flex;
        align-items: center;
        gap: 14px;
        padding: 8px 20px;
        background: rgba(7, 9, 14, 0.92);
        border: 1px solid rgba(212, 175, 55, 0.25);
        border-radius: 9999px;
        backdrop-filter: blur(20px);
      }

      .ssp-label {
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        color: rgba(212, 175, 55, 0.85);
        white-space: nowrap;
      }

      .ssp-bar-track {
        width: 120px;
        height: 3px;
        border-radius: 9999px;
        background: rgba(212, 175, 55, 0.15);
        overflow: hidden;
      }

      .ssp-bar-fill {
        height: 100%;
        width: 0%;
        border-radius: 9999px;
        background: linear-gradient(90deg, #b8860b, #f3e5ab, #d4af37);
        box-shadow: 0 0 8px rgba(212, 175, 55, 0.7);
        transition: width 0.1s linear;
      }

      .ssp-pct {
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.72rem;
        font-weight: 700;
        color: #f3e5ab;
        min-width: 28px;
      }

      /* ── Scroll velocity skew on cards ── */
      body.is-actively-scrolling .system-card:not(:hover) {
        transition: transform 0.08s ease, border-color 0.3s ease;
      }

      /* ── Milestone list item animation ── */
      .milestone-list-item {
        opacity: 0;
        transform: translateX(-18px);
        transition: opacity 0.45s ease, transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
      }

      .odyssey-stage.is-scrolled-in .milestone-list-item {
        opacity: 1;
        transform: translateX(0);
      }

      .odyssey-stage.is-scrolled-in .milestone-list-item:nth-child(1) { transition-delay: 0.12s; }
      .odyssey-stage.is-scrolled-in .milestone-list-item:nth-child(2) { transition-delay: 0.22s; }
      .odyssey-stage.is-scrolled-in .milestone-list-item:nth-child(3) { transition-delay: 0.32s; }
      .odyssey-stage.is-scrolled-in .milestone-list-item:nth-child(4) { transition-delay: 0.42s; }
      .odyssey-stage.is-scrolled-in .milestone-list-item:nth-child(5) { transition-delay: 0.52s; }

      /* ── Hero title word reveal ── */
      .hero-title {
        transition: transform 0.1s linear, opacity 0.1s linear;
        will-change: transform, opacity;
      }

      /* ── Tech badge hover wave ── */
      .tech-badge {
        transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
      }
      .tech-badge:hover {
        transform: translateY(-3px) scale(1.06);
        background: rgba(212, 175, 55, 0.12) !important;
        border-color: rgba(212, 175, 55, 0.4) !important;
        color: #f3e5ab !important;
        box-shadow: 0 8px 20px -6px rgba(212, 175, 55, 0.25);
      }

      /* ── Filter button hover press ── */
      .filter-btn {
        transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
      }
      .filter-btn:active {
        transform: scale(0.95);
      }

      /* ── Transit station node hover ── */
      .transit-station-node {
        transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
      }
      .transit-station-node:hover {
        transform: translateY(-5px) scale(1.06);
      }
      .transit-station-node:active {
        transform: scale(0.94);
      }

      /* ── Milestone metric box counter animation ── */
      .metric-box-val {
        transition: color 0.3s ease;
      }

      /* ── velocity-box hover ── */
      .velocity-box {
        transition:
          opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1),
          transform 0.65s cubic-bezier(0.175, 0.885, 0.32, 1.25),
          border-color 0.25s ease,
          box-shadow 0.25s ease;
      }
      .velocity-box.is-scrolled-in:hover {
        border-color: rgba(212, 175, 55, 0.4);
        box-shadow: 0 20px 45px -10px rgba(0,0,0,0.8), 0 0 30px rgba(212, 175, 55, 0.1);
        transform: translateY(-5px) scale(1.025) !important;
      }

      /* ── Staggered card grid entrance ── */
      .systems-grid .system-card.scroll-element:nth-child(1) { transition-delay: 0s; }
      .systems-grid .system-card.scroll-element:nth-child(2) { transition-delay: 0.1s; }
      .systems-grid .system-card.scroll-element:nth-child(3) { transition-delay: 0.2s; }
      .systems-grid .system-card.scroll-element:nth-child(4) { transition-delay: 0.3s; }
      .systems-grid .system-card.scroll-element:nth-child(5) { transition-delay: 0.4s; }
      .systems-grid .system-card.scroll-element:nth-child(6) { transition-delay: 0.5s; }

      /* ── Pulse animation for live dots ── */
      @keyframes pulseGlow {
        0%, 100% { box-shadow: 0 0 6px currentColor; transform: scale(1); }
        50% { box-shadow: 0 0 18px currentColor; transform: scale(1.22); }
      }

      @keyframes waypointRipple {
        0% { transform: scale(0.85); opacity: 0.9; }
        100% { transform: scale(2.2); opacity: 0; }
      }

      @keyframes float-anim {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-8px); }
      }

      .float-anim {
        animation: float-anim 4s ease-in-out infinite;
      }

      /* ── Hero section fade exit on scroll ── */
      #hero .hero-title,
      #hero .hero-tagline {
        will-change: transform, opacity;
      }
    `;
            document.head.appendChild(styleTag);
            return ({
                "ScrollAnimationEngine.useEffect": ()=>{
                    revealObserver.disconnect();
                    counterObserver.disconnect();
                    mutationObserver.disconnect();
                    clearTimeout(timeoutId);
                    if (velocityTimer) clearTimeout(velocityTimer);
                    window.removeEventListener('scroll', onScroll);
                    const bar = document.getElementById('scroll-progress-bar');
                    if (bar) bar.remove();
                    const style = document.getElementById('scroll-animation-engine-styles');
                    if (style) style.remove();
                }
            })["ScrollAnimationEngine.useEffect"];
        }
    }["ScrollAnimationEngine.useEffect"], []);
    return null;
}
_s(ScrollAnimationEngine, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = ScrollAnimationEngine;
var _c;
__turbopack_context__.k.register(_c, "ScrollAnimationEngine");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ScrollStorySection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollStorySection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductStage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProductStage.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/sound.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function ScrollStorySection() {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [autoPlay, setAutoPlay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Auto-play through architectures if user hasn't clicked
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollStorySection.useEffect": ()=>{
            if (!autoPlay) return;
            const interval = setInterval({
                "ScrollStorySection.useEffect.interval": ()=>{
                    setActiveTab({
                        "ScrollStorySection.useEffect.interval": (prev)=>(prev + 1) % 5
                    }["ScrollStorySection.useEffect.interval"]);
                }
            }["ScrollStorySection.useEffect.interval"], 5500);
            return ({
                "ScrollStorySection.useEffect": ()=>clearInterval(interval)
            })["ScrollStorySection.useEffect"];
        }
    }["ScrollStorySection.useEffect"], [
        autoPlay
    ]);
    const highlights = [
        {
            label: 'RAG Groundedness',
            val: '98.4%',
            sub: 'Enterprise Docs'
        },
        {
            label: 'Self-Healing SQL',
            val: '<2% Error Loop',
            sub: 'Multi-Agent Swarm'
        },
        {
            label: 'Voice AI Latency',
            val: '<400ms',
            sub: 'Full-Duplex Audio'
        },
        {
            label: 'Multimodal Cycle Cut',
            val: '80%',
            sub: 'Google Veo Studio'
        }
    ];
    const handleSelectTab = (idx)=>{
        setAutoPlay(false);
        setActiveTab(idx);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "hero",
        className: "jsx-3085e191874a23bb" + " " + "hero-modern-section",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-3085e191874a23bb" + " " + "hero-bg-glow glow-cyan"
            }, void 0, false, {
                fileName: "[project]/src/components/ScrollStorySection.jsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-3085e191874a23bb" + " " + "hero-bg-glow glow-purple"
            }, void 0, false, {
                fileName: "[project]/src/components/ScrollStorySection.jsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-3085e191874a23bb" + " " + "container-custom",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-3085e191874a23bb" + " " + "hero-editorial-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-3085e191874a23bb" + " " + "glass-pill hero-badge float-anim",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-3085e191874a23bb" + " " + "pulse-dot"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ScrollStorySection.jsx",
                                        lineNumber: 42,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-3085e191874a23bb",
                                        children: "APPLIED AI & AGENTIC SYSTEMS ARCHITECT · DENTSU"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ScrollStorySection.jsx",
                                        lineNumber: 43,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ScrollStorySection.jsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "jsx-3085e191874a23bb" + " " + "hero-title",
                                children: [
                                    "Architecting ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-3085e191874a23bb" + " " + "text-glow-gradient",
                                        children: "Autonomous"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ScrollStorySection.jsx",
                                        lineNumber: 47,
                                        columnNumber: 26
                                    }, this),
                                    " Intelligence"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ScrollStorySection.jsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-3085e191874a23bb" + " " + "hero-tagline",
                                children: "Engineering self-healing multi-agent swarms, sub-minute enterprise RAG pipelines, and low-latency voice AI in production."
                            }, void 0, false, {
                                fileName: "[project]/src/components/ScrollStorySection.jsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-3085e191874a23bb" + " " + "hero-action-group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#act-systems",
                                        onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playClick"])(),
                                        className: "jsx-3085e191874a23bb" + " " + "btn-primary hero-btn",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-3085e191874a23bb",
                                            children: "⚡ Explore Shipped Systems ↓"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ScrollStorySection.jsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ScrollStorySection.jsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://github.com/Shreyyyyy?tab=repositories",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playClick"])(),
                                        className: "jsx-3085e191874a23bb" + " " + "btn-secondary hero-btn",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-3085e191874a23bb",
                                            children: "🐙 GitHub Repositories ↗"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ScrollStorySection.jsx",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ScrollStorySection.jsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#act-journey",
                                        onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playClick"])(),
                                        className: "jsx-3085e191874a23bb" + " " + "btn-secondary hero-btn",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-3085e191874a23bb",
                                            children: "💼 Career Trajectory ↓"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ScrollStorySection.jsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ScrollStorySection.jsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ScrollStorySection.jsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-3085e191874a23bb" + " " + "hero-metrics-strip",
                                children: highlights.map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-3085e191874a23bb" + " " + "hero-metric-item",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-3085e191874a23bb" + " " + "hero-metric-val",
                                                children: h.val
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ScrollStorySection.jsx",
                                                lineNumber: 77,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-3085e191874a23bb" + " " + "hero-metric-label",
                                                children: h.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ScrollStorySection.jsx",
                                                lineNumber: 78,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-3085e191874a23bb" + " " + "hero-metric-sub",
                                                children: h.sub
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ScrollStorySection.jsx",
                                                lineNumber: 79,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/components/ScrollStorySection.jsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ScrollStorySection.jsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ScrollStorySection.jsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-3085e191874a23bb" + " " + "hero-stage-wrapper",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-3085e191874a23bb" + " " + "stage-controls-bar",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-3085e191874a23bb" + " " + "stage-status-indicator",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-3085e191874a23bb" + " " + "status-live-beacon"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ScrollStorySection.jsx",
                                                lineNumber: 89,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-3085e191874a23bb",
                                                children: "LIVE CLUSTER RUNTIME TELEMETRY"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ScrollStorySection.jsx",
                                                lineNumber: 90,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ScrollStorySection.jsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playClick"])();
                                            setAutoPlay((p)=>!p);
                                        },
                                        title: autoPlay ? 'Pause automatic stage rotation' : 'Resume automatic stage rotation',
                                        className: "jsx-3085e191874a23bb" + " " + "btn-auto-simulate",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-3085e191874a23bb",
                                            children: autoPlay ? '⏸ Pause Auto-Rotation' : '▶ Auto-Rotate Architectures'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ScrollStorySection.jsx",
                                            lineNumber: 100,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ScrollStorySection.jsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ScrollStorySection.jsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductStage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                activeActIndex: activeTab,
                                onSelectMode: handleSelectTab
                            }, void 0, false, {
                                fileName: "[project]/src/components/ScrollStorySection.jsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ScrollStorySection.jsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ScrollStorySection.jsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "3085e191874a23bb",
                children: ".hero-modern-section.jsx-3085e191874a23bb{width:100%;padding-top:140px;padding-bottom:100px;position:relative;overflow:hidden}.hero-bg-glow.jsx-3085e191874a23bb{filter:blur(90px);pointer-events:none;opacity:.15;z-index:1;border-radius:50%;width:650px;height:650px;position:absolute}.glow-cyan.jsx-3085e191874a23bb{background:radial-gradient(circle,#38bdf8 0%,#0000 70%);top:10%;left:15%}.glow-purple.jsx-3085e191874a23bb{background:radial-gradient(circle,#a855f7 0%,#0000 70%);top:30%;right:15%}.hero-editorial-center.jsx-3085e191874a23bb{text-align:center;z-index:10;max-width:1040px;margin:0 auto 56px;position:relative}.hero-badge.jsx-3085e191874a23bb{color:#7dd3fc;background:#38bdf81a;border-color:#38bdf866;margin-bottom:24px;padding:8px 22px;font-size:.88rem}.hero-title.jsx-3085e191874a23bb{letter-spacing:-.035em;color:#fff;margin-bottom:24px;font-size:max(3.2rem,min(5.8vw,5.2rem));font-weight:850;line-height:1.08}.hero-tagline.jsx-3085e191874a23bb{color:var(--text-secondary);max-width:840px;margin:0 auto 40px;font-size:max(1.22rem,min(2vw,1.48rem));line-height:1.68}.hero-action-group.jsx-3085e191874a23bb{flex-wrap:wrap;justify-content:center;align-items:center;gap:16px;margin-bottom:48px;display:flex}.hero-btn.jsx-3085e191874a23bb{padding:15px 30px;font-size:1.05rem}.hero-metrics-strip.jsx-3085e191874a23bb{-webkit-backdrop-filter:blur(24px);backdrop-filter:blur(24px);background:#0e121bd9;border:1px solid #ffffff1f;border-radius:22px;grid-template-columns:repeat(4,1fr);gap:16px;max-width:1040px;margin:0 auto;padding:24px 30px;display:grid;box-shadow:0 18px 40px -10px #000000b3}.hero-metric-item.jsx-3085e191874a23bb{text-align:center;opacity:0;flex-direction:column;align-items:center;padding:6px 14px;transition:opacity .6s cubic-bezier(.16,1,.3,1),transform .6s cubic-bezier(.175,.885,.32,1.25);display:flex;transform:translateY(24px)scale(.92)}.hero-metric-item.is-scrolled-in.jsx-3085e191874a23bb{opacity:1;transform:translateY(0)scale(1)}.hero-metric-item.jsx-3085e191874a23bb:not(:last-child){border-right:1px solid #ffffff1a}.hero-metric-val.jsx-3085e191874a23bb{font-family:var(--font-mono);color:#fff;font-size:2.1rem;font-weight:850;line-height:1.15}.hero-metric-label.jsx-3085e191874a23bb{color:var(--accent-cyan);text-transform:uppercase;letter-spacing:.05em;margin-top:6px;font-size:.88rem;font-weight:750}.hero-metric-sub.jsx-3085e191874a23bb{color:var(--text-muted);margin-top:3px;font-size:.78rem}.hero-stage-wrapper.jsx-3085e191874a23bb{z-index:10;flex-direction:column;align-items:center;width:100%;display:flex;position:relative}.stage-controls-bar.jsx-3085e191874a23bb{justify-content:space-between;align-items:center;width:100%;max-width:1040px;margin-bottom:14px;padding:0 10px;display:flex}.stage-status-indicator.jsx-3085e191874a23bb{font-family:var(--font-mono);color:var(--text-muted);letter-spacing:.05em;align-items:center;gap:8px;font-size:.78rem;display:flex}.status-live-beacon.jsx-3085e191874a23bb{background:#10b981;border-radius:50%;width:9px;height:9px;animation:1.8s infinite pulseGlow;box-shadow:0 0 10px #10b981}.btn-auto-simulate.jsx-3085e191874a23bb{color:var(--text-secondary);font-family:var(--font-mono);cursor:pointer;background:#ffffff0d;border:1px solid #ffffff24;border-radius:9999px;padding:7px 16px;font-size:.8rem;font-weight:600;transition:all .2s}.btn-auto-simulate.jsx-3085e191874a23bb:hover{color:#fff;background:#ffffff1f}@media (width<=900px){.hero-modern-section.jsx-3085e191874a23bb{padding-top:110px}.hero-metrics-strip.jsx-3085e191874a23bb{grid-template-columns:repeat(2,1fr);gap:18px}.hero-metric-item.jsx-3085e191874a23bb:nth-child(2){border-right:none}.stage-controls-bar.jsx-3085e191874a23bb{flex-direction:column;align-items:flex-start;gap:10px}}@media (width<=600px){.hero-title.jsx-3085e191874a23bb{font-size:2.35rem}.hero-tagline.jsx-3085e191874a23bb{font-size:1.1rem}.hero-metrics-strip.jsx-3085e191874a23bb{grid-template-columns:repeat(2,1fr);gap:12px;padding:18px 14px}.hero-metric-val.jsx-3085e191874a23bb{font-size:1.65rem}.hero-metric-label.jsx-3085e191874a23bb{font-size:.76rem}.hero-metric-sub.jsx-3085e191874a23bb{font-size:.7rem}.hero-metric-item.jsx-3085e191874a23bb:nth-child(2n){border-right:none!important}.hero-metric-item.jsx-3085e191874a23bb:nth-child(odd){border-right:1px solid #ffffff14!important}.hero-btn.jsx-3085e191874a23bb{width:100%}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ScrollStorySection.jsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(ScrollStorySection, "TNbWtuJU73YfUG7/oAIgDWoLwa0=");
_c = ScrollStorySection;
var _c;
__turbopack_context__.k.register(_c, "ScrollStorySection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SynapticScrollNavigator.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SynapticScrollNavigator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/sound.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function SynapticScrollNavigator() {
    _s();
    const [scrollProgress, setScrollProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isScrolling, setIsScrolling] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrollDirection, setScrollDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('down'); // 'down' | 'up'
    const [isWaving, setIsWaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showSpeechBubble, setShowSpeechBubble] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [speechText, setSpeechText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Hi! I'm Shreyans 🚀");
    const lastScrollYRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const scrollTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sections = [
        {
            id: 'hero',
            name: 'Neural Core',
            label: 'Architect',
            color: '#38bdf8',
            speech: "Welcome! I'm Shreyans 👋"
        },
        {
            id: 'act-systems',
            name: 'Production Systems',
            label: 'Systems',
            color: '#10b981',
            speech: 'Architecting Swarms & RAG ⚡'
        },
        {
            id: 'act-journey',
            name: 'Career Odyssey',
            label: 'Odyssey',
            color: '#c084fc',
            speech: '4+ Years Engineering Experience 💼'
        },
        {
            id: 'act-safety',
            name: 'Safety & Trust',
            label: 'Trust',
            color: '#f59e0b',
            speech: '98.4% DeepEval Groundedness 🛡️'
        },
        {
            id: 'act-contact',
            name: 'Executive Contact',
            label: 'Contact',
            color: '#f43f5e',
            speech: "Let's build something epic! ☕"
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SynapticScrollNavigator.useEffect": ()=>{
            const handleScroll = {
                "SynapticScrollNavigator.useEffect.handleScroll": ()=>{
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
                    scrollTimeoutRef.current = setTimeout({
                        "SynapticScrollNavigator.useEffect.handleScroll": ()=>{
                            setIsScrolling(false);
                        }
                    }["SynapticScrollNavigator.useEffect.handleScroll"], 220);
                    // Determine active section based on waypoint offsets
                    const viewportMid = scrollY + window.innerHeight * 0.4;
                    let currentIdx = 0;
                    for(let i = sections.length - 1; i >= 0; i--){
                        const el = document.getElementById(sections[i].id);
                        if (el && el.offsetTop <= viewportMid) {
                            currentIdx = i;
                            break;
                        }
                    }
                    setActiveSection(currentIdx);
                }
            }["SynapticScrollNavigator.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll, {
                passive: true
            });
            handleScroll();
            return ({
                "SynapticScrollNavigator.useEffect": ()=>{
                    window.removeEventListener('scroll', handleScroll);
                    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
                }
            })["SynapticScrollNavigator.useEffect"];
        }
    }["SynapticScrollNavigator.useEffect"], []);
    const scrollToSection = (id, idx)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playClick"])();
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({
                behavior: 'smooth'
            });
            setActiveSection(idx);
        }
    };
    const handleStickmanClick = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playClick"])();
        setIsWaving(true);
        setShowSpeechBubble(true);
        setSpeechText(sections[activeSection]?.speech || "Hi, I'm Shreyans! 🚀");
        setTimeout(()=>{
            setIsWaving(false);
        }, 1800);
        setTimeout(()=>{
            setShowSpeechBubble(false);
        }, 4000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        "aria-label": "Vertical Navigation Spine",
        className: "jsx-bb4f512aaf09aa77" + " " + "vertical-scroll-spine-root",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-bb4f512aaf09aa77" + " " + "spine-track-container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-bb4f512aaf09aa77" + " " + "spine-rail-bg"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SynapticScrollNavigator.jsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            height: `${Math.min(Math.max(scrollProgress * 100, 0), 100)}%`
                        },
                        className: "jsx-bb4f512aaf09aa77" + " " + "spine-rail-fill"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SynapticScrollNavigator.jsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    sections.map((sec, idx)=>{
                        const waypointPercent = idx / (sections.length - 1) * 100;
                        const isPassed = scrollProgress * 100 >= waypointPercent - 2;
                        const isCurrent = activeSection === idx;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                top: `${waypointPercent}%`
                            },
                            onClick: ()=>scrollToSection(sec.id, idx),
                            title: `${sec.name} (Click to jump)`,
                            className: "jsx-bb4f512aaf09aa77" + " " + `spine-waypoint-node ${isPassed ? 'passed' : ''} ${isCurrent ? 'current' : ''}`,
                            children: [
                                isCurrent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        borderColor: sec.color
                                    },
                                    className: "jsx-bb4f512aaf09aa77" + " " + "waypoint-pulse-ring"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SynapticScrollNavigator.jsx",
                                    lineNumber: 118,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        backgroundColor: isCurrent ? sec.color : isPassed ? '#38bdf8' : 'rgba(255, 255, 255, 0.25)',
                                        boxShadow: isCurrent ? `0 0 14px ${sec.color}` : isPassed ? '0 0 8px rgba(56, 189, 248, 0.6)' : 'none'
                                    },
                                    className: "jsx-bb4f512aaf09aa77" + " " + "waypoint-dot"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SynapticScrollNavigator.jsx",
                                    lineNumber: 125,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-bb4f512aaf09aa77" + " " + "waypoint-label-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-bb4f512aaf09aa77" + " " + "waypoint-index",
                                            children: [
                                                "0",
                                                idx + 1
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SynapticScrollNavigator.jsx",
                                            lineNumber: 135,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-bb4f512aaf09aa77" + " " + "waypoint-text",
                                            children: sec.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SynapticScrollNavigator.jsx",
                                            lineNumber: 136,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SynapticScrollNavigator.jsx",
                                    lineNumber: 134,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, sec.id, true, {
                            fileName: "[project]/src/components/SynapticScrollNavigator.jsx",
                            lineNumber: 109,
                            columnNumber: 13
                        }, this);
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            top: `${Math.min(Math.max(scrollProgress * 100, 0), 100)}%`
                        },
                        onClick: handleStickmanClick,
                        title: "Shreyans — AI Systems Architect (Click me!)",
                        className: "jsx-bb4f512aaf09aa77" + " " + `spine-stickman-capsule ${isScrolling ? 'is-walking' : 'is-idle'} ${isWaving ? 'is-waving' : ''} direction-${scrollDirection}`,
                        children: [
                            isScrolling && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-bb4f512aaf09aa77" + " " + `stickman-thrust-glow ${scrollDirection === 'down' ? 'thrust-up' : 'thrust-down'}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/SynapticScrollNavigator.jsx",
                                lineNumber: 153,
                                columnNumber: 13
                            }, this),
                            (showSpeechBubble || isScrolling) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-bb4f512aaf09aa77" + " " + "stickman-speech-bubble",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-bb4f512aaf09aa77" + " " + "bubble-text",
                                        children: showSpeechBubble ? speechText : sections[activeSection]?.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SynapticScrollNavigator.jsx",
                                        lineNumber: 159,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-bb4f512aaf09aa77" + " " + "bubble-pointer"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SynapticScrollNavigator.jsx",
                                        lineNumber: 162,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SynapticScrollNavigator.jsx",
                                lineNumber: 158,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-bb4f512aaf09aa77" + " " + "stickman-svg-wrap",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 44 64",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "jsx-bb4f512aaf09aa77" + " " + "stickman-svg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "22",
                                            cy: "12",
                                            r: "7.5",
                                            stroke: "#38bdf8",
                                            strokeWidth: "2.5",
                                            fill: "#0b0f19",
                                            className: "jsx-bb4f512aaf09aa77"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SynapticScrollNavigator.jsx",
                                            lineNumber: 175,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M17 11.5 H27",
                                            stroke: "#10b981",
                                            strokeWidth: "2.2",
                                            strokeLinecap: "round",
                                            className: "jsx-bb4f512aaf09aa77"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SynapticScrollNavigator.jsx",
                                            lineNumber: 184,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M14 12 C14 7 30 7 30 12",
                                            stroke: "#c084fc",
                                            strokeWidth: "1.5",
                                            strokeLinecap: "round",
                                            className: "jsx-bb4f512aaf09aa77"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SynapticScrollNavigator.jsx",
                                            lineNumber: 191,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "22",
                                            y1: "19.5",
                                            x2: "22",
                                            y2: "38",
                                            stroke: "#38bdf8",
                                            strokeWidth: "3",
                                            strokeLinecap: "round",
                                            className: "jsx-bb4f512aaf09aa77"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SynapticScrollNavigator.jsx",
                                            lineNumber: 199,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "22",
                                            cy: "27",
                                            r: "2.2",
                                            fill: "#10b981",
                                            className: "jsx-bb4f512aaf09aa77"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SynapticScrollNavigator.jsx",
                                            lineNumber: 209,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M22 22 L11 31",
                                            stroke: "#38bdf8",
                                            strokeWidth: "2.5",
                                            strokeLinecap: "round",
                                            className: "jsx-bb4f512aaf09aa77" + " " + "stickman-left-arm"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SynapticScrollNavigator.jsx",
                                            lineNumber: 212,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M22 22 L33 31",
                                            stroke: "#38bdf8",
                                            strokeWidth: "2.5",
                                            strokeLinecap: "round",
                                            className: "jsx-bb4f512aaf09aa77" + " " + "stickman-right-arm"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SynapticScrollNavigator.jsx",
                                            lineNumber: 221,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M22 38 L12 56",
                                            stroke: "#38bdf8",
                                            strokeWidth: "2.5",
                                            strokeLinecap: "round",
                                            className: "jsx-bb4f512aaf09aa77" + " " + "stickman-left-leg"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SynapticScrollNavigator.jsx",
                                            lineNumber: 230,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M22 38 L32 56",
                                            stroke: "#38bdf8",
                                            strokeWidth: "2.5",
                                            strokeLinecap: "round",
                                            className: "jsx-bb4f512aaf09aa77" + " " + "stickman-right-leg"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SynapticScrollNavigator.jsx",
                                            lineNumber: 239,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "12",
                                            cy: "57",
                                            r: "1.5",
                                            fill: "#f59e0b",
                                            className: "jsx-bb4f512aaf09aa77" + " " + "boot-glow-l"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SynapticScrollNavigator.jsx",
                                            lineNumber: 248,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "32",
                                            cy: "57",
                                            r: "1.5",
                                            fill: "#f59e0b",
                                            className: "jsx-bb4f512aaf09aa77" + " " + "boot-glow-r"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SynapticScrollNavigator.jsx",
                                            lineNumber: 249,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SynapticScrollNavigator.jsx",
                                    lineNumber: 168,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/SynapticScrollNavigator.jsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SynapticScrollNavigator.jsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SynapticScrollNavigator.jsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "bb4f512aaf09aa77",
                children: '.vertical-scroll-spine-root.jsx-bb4f512aaf09aa77{z-index:150;pointer-events:none;-webkit-user-select:none;user-select:none;justify-content:center;align-items:center;width:38px;display:flex;position:fixed;top:110px;bottom:110px;left:32px}.spine-track-container.jsx-bb4f512aaf09aa77{justify-content:center;align-items:center;width:100%;height:100%;display:flex;position:relative}.spine-rail-bg.jsx-bb4f512aaf09aa77{background:#ffffff1f;border-radius:9999px;width:3px;position:absolute;top:0;bottom:0;left:50%;transform:translate(-50%)}.spine-rail-fill.jsx-bb4f512aaf09aa77{background:linear-gradient(#38bdf8 0%,#10b981 35%,#c084fc 70%,#f59e0b 100%);border-radius:9999px;width:3px;transition:height 80ms linear;position:absolute;top:0;left:50%;transform:translate(-50%);box-shadow:0 0 10px #38bdf8b3}.spine-waypoint-node.jsx-bb4f512aaf09aa77{cursor:pointer;pointer-events:auto;justify-content:center;align-items:center;width:26px;height:26px;transition:transform .2s cubic-bezier(.16,1,.3,1);display:flex;position:absolute;left:50%;transform:translate(-50%,-50%)}.spine-waypoint-node.jsx-bb4f512aaf09aa77:hover{transform:translate(-50%,-50%)scale(1.3)}.waypoint-dot.jsx-bb4f512aaf09aa77{z-index:2;border:2px solid #07090e;border-radius:50%;width:10px;height:10px;transition:all .25s}.spine-waypoint-node.passed.jsx-bb4f512aaf09aa77 .waypoint-dot.jsx-bb4f512aaf09aa77{transform:scale(1.1)}.waypoint-pulse-ring.jsx-bb4f512aaf09aa77{pointer-events:none;border:1.5px solid #38bdf8;border-radius:50%;width:22px;height:22px;animation:2s infinite waypointRipple;position:absolute}@keyframes waypointRipple{0%{opacity:.9;transform:scale(.6)}to{opacity:0;transform:scale(1.8)}}.waypoint-label-card.jsx-bb4f512aaf09aa77{white-space:nowrap;opacity:0;pointer-events:none;-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);background:#0b0f19f2;border:1px solid #ffffff26;border-radius:8px;align-items:center;gap:7px;padding:5px 12px;transition:all .2s cubic-bezier(.16,1,.3,1);display:flex;position:absolute;left:32px;transform:translate(-8px);box-shadow:0 8px 24px #0009}.spine-waypoint-node.jsx-bb4f512aaf09aa77:hover .waypoint-label-card.jsx-bb4f512aaf09aa77,.spine-waypoint-node.current.jsx-bb4f512aaf09aa77:hover .waypoint-label-card.jsx-bb4f512aaf09aa77{opacity:1;transform:translate(0)}.waypoint-index.jsx-bb4f512aaf09aa77{font-family:var(--font-mono);color:var(--accent-cyan);font-size:.72rem;font-weight:700}.waypoint-text.jsx-bb4f512aaf09aa77{color:#f8fafc;letter-spacing:.02em;font-size:.8rem;font-weight:700}.spine-stickman-capsule.jsx-bb4f512aaf09aa77{pointer-events:auto;cursor:pointer;z-index:10;width:44px;height:64px;transition:top 60ms linear;position:absolute;left:50%;transform:translate(-50%,-50%)}.stickman-svg-wrap.jsx-bb4f512aaf09aa77{filter:drop-shadow(0 0 10px #38bdf8a6);width:100%;height:100%;transition:transform .2s}.spine-stickman-capsule.jsx-bb4f512aaf09aa77:hover .stickman-svg-wrap.jsx-bb4f512aaf09aa77{filter:drop-shadow(0 0 16px #38bdf8f2);transform:scale(1.18)}.spine-stickman-capsule.is-idle.jsx-bb4f512aaf09aa77 .stickman-svg-wrap.jsx-bb4f512aaf09aa77{animation:3.6s ease-in-out infinite stickmanFloat}@keyframes stickmanFloat{0%,to{transform:translateY(0)}50%{transform:translateY(-5px)}}.spine-stickman-capsule.is-walking.jsx-bb4f512aaf09aa77 .stickman-left-leg.jsx-bb4f512aaf09aa77{animation:.35s ease-in-out infinite alternate legStrideLeft}.spine-stickman-capsule.is-walking.jsx-bb4f512aaf09aa77 .stickman-right-leg.jsx-bb4f512aaf09aa77{animation:.35s ease-in-out infinite alternate legStrideRight}.spine-stickman-capsule.is-walking.jsx-bb4f512aaf09aa77 .stickman-left-arm.jsx-bb4f512aaf09aa77{animation:.35s ease-in-out infinite alternate armSwingLeft}.spine-stickman-capsule.is-walking.jsx-bb4f512aaf09aa77 .stickman-right-arm.jsx-bb4f512aaf09aa77{animation:.35s ease-in-out infinite alternate armSwingRight}@keyframes legStrideLeft{0%{d:path("M22 38 L12 56")}to{d:path("M22 38 L16 48")}}@keyframes legStrideRight{0%{d:path("M22 38 L28 48")}to{d:path("M22 38 L34 56")}}@keyframes armSwingLeft{0%{d:path("M22 22 L10 32")}to{d:path("M22 22 L14 18")}}@keyframes armSwingRight{0%{d:path("M22 22 L30 18")}to{d:path("M22 22 L34 32")}}.spine-stickman-capsule.is-waving.jsx-bb4f512aaf09aa77 .stickman-right-arm.jsx-bb4f512aaf09aa77{animation:.3s ease-in-out infinite alternate armWave!important}@keyframes armWave{0%{d:path("M22 22 L34 12")}to{d:path("M22 22 L38 20")}}.stickman-thrust-glow.jsx-bb4f512aaf09aa77{filter:blur(2px);background:radial-gradient(#f59e0bcc 0%,#f43f5e66 60%,#0000 80%);width:22px;height:10px;animation:.15s infinite thrustFlicker;position:absolute;bottom:2px;left:50%;transform:translate(-50%)}@keyframes thrustFlicker{0%,to{opacity:.9;transform:translate(-50%)scale(1)}50%{opacity:.5;transform:translate(-50%)scale(.85)}}.stickman-speech-bubble.jsx-bb4f512aaf09aa77{white-space:nowrap;pointer-events:none;z-index:20;background:#0e121bf5;border:1px solid #38bdf880;border-radius:10px;padding:6px 14px;animation:.2s cubic-bezier(.16,1,.3,1) bubblePop;position:absolute;top:8px;left:48px;box-shadow:0 8px 24px #000000a6,0 0 16px #38bdf840}.bubble-text.jsx-bb4f512aaf09aa77{font-family:var(--font-mono);color:#f8fafc;letter-spacing:.02em;font-size:.76rem;font-weight:700}.bubble-pointer.jsx-bb4f512aaf09aa77{background:#0e121bf5;border-bottom:1px solid #38bdf880;border-left:1px solid #38bdf880;width:10px;height:10px;position:absolute;top:50%;left:-6px;transform:translateY(-50%)rotate(45deg)}@keyframes bubblePop{0%{opacity:0;transform:scale(.8)translate(-10px)}to{opacity:1;transform:scale(1)translate(0)}}@media (width<=900px){.vertical-scroll-spine-root.jsx-bb4f512aaf09aa77{width:32px;top:80px;bottom:80px;left:14px}.waypoint-label-card.jsx-bb4f512aaf09aa77{display:none}.stickman-speech-bubble.jsx-bb4f512aaf09aa77{padding:4px 10px;font-size:.7rem;left:36px}}@media (width<=600px){.vertical-scroll-spine-root.jsx-bb4f512aaf09aa77{width:28px;inset:75px 8px 75px auto}.stickman-speech-bubble.jsx-bb4f512aaf09aa77{left:auto;right:34px}.bubble-pointer.jsx-bb4f512aaf09aa77{border-bottom:1px solid #38bdf880;border-left:none;border-right:1px solid #38bdf880;left:auto;right:-6px}.spine-stickman-capsule.jsx-bb4f512aaf09aa77{width:34px;height:48px}.spine-waypoint-node.jsx-bb4f512aaf09aa77{width:20px;height:20px}.waypoint-dot.jsx-bb4f512aaf09aa77{width:7px;height:7px}}'
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SynapticScrollNavigator.jsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
_s(SynapticScrollNavigator, "dBvyUJO+GNVoXpmDGwEzx+mLmKM=");
_c = SynapticScrollNavigator;
var _c;
__turbopack_context__.k.register(_c, "SynapticScrollNavigator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SystemsPortfolio.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SystemsPortfolio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/sound.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function SystemsPortfolio() {
    _s();
    const [activeFilter, setActiveFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const systems = [
        {
            id: 'proj-flipkart',
            category: 'swarms',
            domain: 'ENTERPRISE ANALYTICS · FLIPKART',
            client: 'Flipkart',
            nodeColor: '#38bdf8',
            impact: '⚡ <2% Error Loop',
            title: 'Flipkart Talk2Data',
            subtitle: 'Self-Healing Multi-Agent SQL Synthesis',
            problemTopic: '4–6 Hour BI Bottlenecks Blocking Pricing & Inventory Decisions',
            problemDesc: 'Category leads faced multi-hour query queues for complex warehouse analytics, slowing competitive pricing and supply chain interventions.',
            solutionDesc: 'Engineered an autonomous LangGraph agent swarm with dynamic schema reflection, automated AST syntax guards, and self-correcting query retry loops.',
            stats: [
                {
                    val: 'Zero-Shot',
                    lbl: 'SQL Accuracy',
                    color: '#38bdf8'
                },
                {
                    val: '<45ms',
                    lbl: 'AST Validation',
                    color: '#fbbf24'
                },
                {
                    val: '<2%',
                    lbl: 'Error Loop',
                    color: '#34d399'
                }
            ],
            tech: [
                'LangGraph',
                'Google ADK',
                'Gemini 1.5 Pro',
                'Mistral FT',
                'AST Parser',
                'SQL Tool Calling'
            ]
        },
        {
            id: 'proj-rag',
            category: 'rag',
            domain: 'KNOWLEDGE SYSTEMS · ENTERPRISE RAG',
            client: 'dentsu',
            nodeColor: '#10b981',
            impact: '⚡ 98.4% Groundedness',
            title: 'Enterprise Technical Manuals RAG',
            subtitle: 'Sub-Minute Multimodal Document Search Engine',
            problemTopic: '60+ Minute Manual Document Scans Across 100+ Page Technical Manuals',
            problemDesc: 'Field engineers and compliance auditors lost hours manually tracking SLA terms and hardware specs across fragmented multi-hundred page documents.',
            solutionDesc: 'Deployed a hybrid retrieval engine (Dense + BM25) with cross-encoder re-ranking and DeepEval verification, dropping lookup latency to sub-minute SLA.',
            stats: [
                {
                    val: '<60s',
                    lbl: 'Search Time (was 60m+)',
                    color: '#34d399'
                },
                {
                    val: '98.4%',
                    lbl: 'Faithfulness Rate',
                    color: '#38bdf8'
                },
                {
                    val: '0 Rate',
                    lbl: 'Hallucination SLA',
                    color: '#fbbf24'
                }
            ],
            tech: [
                'Hybrid Search (Dense+BM25)',
                'Semantic Re-ranking',
                'DeepEval',
                'Vector DB',
                'FastAPI'
            ]
        },
        {
            id: 'proj-voice',
            category: 'voice',
            domain: 'CONVERSATIONAL AI · VOICE STREAMING',
            client: 'Automotive & Support',
            nodeColor: '#f59e0b',
            impact: '⚡ <400ms Latency',
            title: 'Multilingual Real-Time Voice AI Agent',
            subtitle: 'Full-Duplex Sub-Second Voice Pipeline',
            problemTopic: '35%+ Inbound Call Drop-Off & Escalating 24/7 Staffing Overhead',
            problemDesc: 'High inbound volume created peak wait times and costly operations for standard booking and service triage calls.',
            solutionDesc: 'Built full-duplex WebSocket voice pipeline linking Whisper STT, streaming LLMs, Neural TTS, and VAD chunking for 100% automated appointment workflows.',
            stats: [
                {
                    val: '<400ms',
                    lbl: 'Turnaround Latency',
                    color: '#34d399'
                },
                {
                    val: '5 Streams',
                    lbl: 'Concurrent / Node',
                    color: '#c084fc'
                },
                {
                    val: '100%',
                    lbl: 'Auto Scheduled',
                    color: '#fbbf24'
                }
            ],
            tech: [
                'Whisper STT',
                'FastAPI WebSockets',
                'Neural TTS',
                'VAD Audio Streaming',
                'Tool Calling'
            ]
        },
        {
            id: 'proj-video',
            category: 'genai',
            domain: 'MULTIMODAL GENAI · GOOGLE VEO',
            client: 'dentsu Creative',
            nodeColor: '#3b82f6',
            impact: '⚡ 80% Cycle Cut',
            title: 'Agentic Script-to-Screen Film Pipeline',
            subtitle: '4-Agent Cinematic Video Orchestration DAG',
            problemTopic: 'Multi-Week Production Timelines & Visual Drift Between AI Keyframes',
            problemDesc: 'Commercial video delivery required weeks of manual asset turnaround, plagued by character and style inconsistencies across generative frames.',
            solutionDesc: 'Architected a 4-agent LangGraph pipeline linking Director, Storyboard, Veo, and QA agents with visual memory anchors, slashing turnaround by 80%.',
            stats: [
                {
                    val: '80%',
                    lbl: 'Cycle Cut (Weeks to Hrs)',
                    color: '#60a5fa'
                },
                {
                    val: '4 Agents',
                    lbl: 'LangGraph Swarm',
                    color: '#34d399'
                },
                {
                    val: '100%',
                    lbl: 'Style & Character Lock',
                    color: '#fbbf24'
                }
            ],
            tech: [
                'Google Veo',
                'LangGraph DAG',
                'Storyboard Agent',
                'Visual Memory QA',
                'Gemini Vision'
            ]
        },
        {
            id: 'proj-creativium',
            category: 'genai',
            domain: 'GENERATIVE WORKFLOWS · BRAND SUITE',
            client: 'Marketing Ops',
            nodeColor: '#ec4899',
            impact: '⚡ Multi-Aspect Ratio',
            title: 'Creativium Automated Banner Studio',
            subtitle: 'Brand-Compliant Dynamic Marketing Asset Engine',
            problemTopic: 'Dozens of Hours Lost Manually Adapting Creative Across 12+ Channels',
            problemDesc: 'Manual resizing and typography adjustment created delivery bottlenecks and compliance risks across localized ad variants.',
            solutionDesc: 'Developed automated marketing asset generator with Imagen 3 generative outpainting, automated safe-zone detectors, and 10x production velocity.',
            stats: [
                {
                    val: '10x',
                    lbl: 'Asset Velocity',
                    color: '#f472b6'
                },
                {
                    val: '100%',
                    lbl: 'Brand Compliance',
                    color: '#34d399'
                },
                {
                    val: 'Instant',
                    lbl: '12+ Format Renders',
                    color: '#38bdf8'
                }
            ],
            tech: [
                'Imagen 3',
                'Generative Fill',
                'Dynamic Compositing',
                'Canvas API',
                'Visual QA'
            ]
        },
        {
            id: 'proj-rfp',
            category: 'rag',
            domain: 'ENTERPRISE RAG · COMPLIANCE AUDIT',
            client: 'Bid Operations',
            nodeColor: '#8b5cf6',
            impact: '⚡ 0 Hallucinations',
            title: 'Autonomous RFP Intelligence & Tender Auditor',
            subtitle: '200+ Page Proposal Analyzer & SLA Extraction Engine',
            problemTopic: 'Commercial Risk & Penalties Hidden in Massive 200+ Page Tender RFPs',
            problemDesc: 'Enterprise bids suffered compliance risks and lost days manually extracting indemnities, SLAs, and cloud cost specifications.',
            solutionDesc: 'Built hierarchical RAG engine using Gemini 1.5 Pro to synthesize contractual obligations, verify line citations, and accelerate bid turnarounds by 75%.',
            stats: [
                {
                    val: '75%',
                    lbl: 'Turnaround Faster',
                    color: '#a78bfa'
                },
                {
                    val: '200+ Pgs',
                    lbl: 'Doc Ingestion',
                    color: '#34d399'
                },
                {
                    val: '0 Risk',
                    lbl: 'Zero Hallucinations',
                    color: '#fbbf24'
                }
            ],
            tech: [
                'Hierarchical RAG',
                'Gemini 1.5 Pro',
                'DeepEval Guard',
                'Risk Scoring',
                'FastAPI'
            ]
        }
    ];
    const filterOptions = [
        {
            id: 'all',
            label: 'All Architectures',
            count: 6
        },
        {
            id: 'swarms',
            label: 'Agentic Swarms',
            count: 1
        },
        {
            id: 'rag',
            label: 'Enterprise RAG',
            count: 2
        },
        {
            id: 'voice',
            label: 'Voice AI',
            count: 1
        },
        {
            id: 'genai',
            label: 'Multimodal GenAI',
            count: 2
        }
    ];
    const filteredSystems = systems.filter((s)=>activeFilter === 'all' || s.category === activeFilter);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "act-systems",
        style: {
            paddingTop: '100px',
            paddingBottom: '120px'
        },
        className: "jsx-65cb150c6b87831c" + " " + "container-custom",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-65cb150c6b87831c" + " " + "section-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: '16px'
                        },
                        className: "jsx-65cb150c6b87831c" + " " + "glass-pill",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-65cb150c6b87831c" + " " + "pulse-dot"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SystemsPortfolio.jsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-65cb150c6b87831c",
                                children: "ENTERPRISE PRODUCTION ARCHITECTURES · HIGH IMPACT"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SystemsPortfolio.jsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SystemsPortfolio.jsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "jsx-65cb150c6b87831c",
                        children: [
                            "High-Stakes Business Problems.",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                className: "jsx-65cb150c6b87831c"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SystemsPortfolio.jsx",
                                lineNumber: 157,
                                columnNumber: 41
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-65cb150c6b87831c" + " " + "text-glow-gradient",
                                children: "Engineered Production Solutions."
                            }, void 0, false, {
                                fileName: "[project]/src/components/SystemsPortfolio.jsx",
                                lineNumber: 158,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SystemsPortfolio.jsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "jsx-65cb150c6b87831c",
                        children: [
                            "Each architecture below was shipped to resolve critical commercial bottlenecks at dentsu and BUSINESSNEXT. Framed as the ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "jsx-65cb150c6b87831c",
                                children: "Business Problem"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SystemsPortfolio.jsx",
                                lineNumber: 162,
                                columnNumber: 25
                            }, this),
                            ", the ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "jsx-65cb150c6b87831c",
                                children: "Engineered Architecture"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SystemsPortfolio.jsx",
                                lineNumber: 162,
                                columnNumber: 64
                            }, this),
                            ", and the ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "jsx-65cb150c6b87831c",
                                children: "Verified ROI"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SystemsPortfolio.jsx",
                                lineNumber: 162,
                                columnNumber: 114
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SystemsPortfolio.jsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SystemsPortfolio.jsx",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-65cb150c6b87831c" + " " + "systems-filter-bar",
                children: filterOptions.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playClick"])();
                            setActiveFilter(f.id);
                        },
                        onMouseEnter: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playHover"])(),
                        className: "jsx-65cb150c6b87831c" + " " + `filter-btn ${activeFilter === f.id ? 'active' : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-65cb150c6b87831c",
                                children: f.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/SystemsPortfolio.jsx",
                                lineNumber: 178,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-65cb150c6b87831c" + " " + "filter-count",
                                children: f.count
                            }, void 0, false, {
                                fileName: "[project]/src/components/SystemsPortfolio.jsx",
                                lineNumber: 179,
                                columnNumber: 13
                            }, this)
                        ]
                    }, f.id, true, {
                        fileName: "[project]/src/components/SystemsPortfolio.jsx",
                        lineNumber: 169,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/SystemsPortfolio.jsx",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-65cb150c6b87831c" + " " + "systems-grid",
                children: filteredSystems.map((sys, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        style: {
                            '--proj-color': sys.nodeColor,
                            animationDelay: `${idx * 0.08}s`
                        },
                        className: "jsx-65cb150c6b87831c" + " " + "system-card glass-panel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-65cb150c6b87831c" + " " + "card-top-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            color: sys.nodeColor,
                                            borderColor: `${sys.nodeColor}40`
                                        },
                                        className: "jsx-65cb150c6b87831c" + " " + "client-pill",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    backgroundColor: sys.nodeColor
                                                },
                                                className: "jsx-65cb150c6b87831c" + " " + "client-dot"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SystemsPortfolio.jsx",
                                                lineNumber: 198,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-65cb150c6b87831c",
                                                children: sys.client
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SystemsPortfolio.jsx",
                                                lineNumber: 199,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SystemsPortfolio.jsx",
                                        lineNumber: 197,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: sys.nodeColor,
                                            borderColor: `${sys.nodeColor}35`
                                        },
                                        className: "jsx-65cb150c6b87831c" + " " + "impact-pill",
                                        children: sys.impact
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SystemsPortfolio.jsx",
                                        lineNumber: 201,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SystemsPortfolio.jsx",
                                lineNumber: 196,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-65cb150c6b87831c" + " " + "card-problem-section",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-65cb150c6b87831c" + " " + "problem-kicker",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-65cb150c6b87831c" + " " + "warning-dot",
                                                children: "●"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SystemsPortfolio.jsx",
                                                lineNumber: 209,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-65cb150c6b87831c",
                                                children: "BUSINESS PROBLEM"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SystemsPortfolio.jsx",
                                                lineNumber: 210,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SystemsPortfolio.jsx",
                                        lineNumber: 208,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "jsx-65cb150c6b87831c" + " " + "problem-headline",
                                        children: sys.problemTopic
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SystemsPortfolio.jsx",
                                        lineNumber: 212,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-65cb150c6b87831c" + " " + "problem-summary",
                                        children: sys.problemDesc
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SystemsPortfolio.jsx",
                                        lineNumber: 213,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SystemsPortfolio.jsx",
                                lineNumber: 207,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-65cb150c6b87831c" + " " + "card-solution-section",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-65cb150c6b87831c" + " " + "solution-kicker",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    backgroundColor: sys.nodeColor
                                                },
                                                className: "jsx-65cb150c6b87831c" + " " + "solution-dot"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SystemsPortfolio.jsx",
                                                lineNumber: 219,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-65cb150c6b87831c",
                                                children: [
                                                    "ENGINEERED SOLUTION · ",
                                                    sys.title
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SystemsPortfolio.jsx",
                                                lineNumber: 220,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SystemsPortfolio.jsx",
                                        lineNumber: 218,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-65cb150c6b87831c" + " " + "smart-synopsis",
                                        children: sys.solutionDesc
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SystemsPortfolio.jsx",
                                        lineNumber: 222,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SystemsPortfolio.jsx",
                                lineNumber: 217,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-65cb150c6b87831c" + " " + "card-stats-grid",
                                children: sys.stats.map((st, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-65cb150c6b87831c" + " " + "card-stat-item",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: st.color
                                                },
                                                className: "jsx-65cb150c6b87831c" + " " + "card-stat-val",
                                                children: st.val
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SystemsPortfolio.jsx",
                                                lineNumber: 229,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-65cb150c6b87831c" + " " + "card-stat-lbl",
                                                children: st.lbl
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SystemsPortfolio.jsx",
                                                lineNumber: 232,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/components/SystemsPortfolio.jsx",
                                        lineNumber: 228,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/SystemsPortfolio.jsx",
                                lineNumber: 226,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-65cb150c6b87831c" + " " + "card-tech-row",
                                children: [
                                    sys.tech.slice(0, 4).map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-65cb150c6b87831c" + " " + "tech-tag",
                                            children: t
                                        }, i, false, {
                                            fileName: "[project]/src/components/SystemsPortfolio.jsx",
                                            lineNumber: 240,
                                            columnNumber: 17
                                        }, this)),
                                    sys.tech.length > 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-65cb150c6b87831c" + " " + "tech-tag plus-more",
                                        children: [
                                            "+",
                                            sys.tech.length - 4
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SystemsPortfolio.jsx",
                                        lineNumber: 245,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SystemsPortfolio.jsx",
                                lineNumber: 238,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                className: "jsx-65cb150c6b87831c" + " " + "card-deep-dive",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                        className: "jsx-65cb150c6b87831c" + " " + "deep-dive-trigger",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-65cb150c6b87831c",
                                                children: "View Full Architecture & Stack Specs"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SystemsPortfolio.jsx",
                                                lineNumber: 252,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-65cb150c6b87831c" + " " + "chevron",
                                                children: "▾"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SystemsPortfolio.jsx",
                                                lineNumber: 253,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SystemsPortfolio.jsx",
                                        lineNumber: 251,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-65cb150c6b87831c" + " " + "deep-dive-body",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-65cb150c6b87831c" + " " + "dd-row",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-65cb150c6b87831c" + " " + "dd-tag gold",
                                                        children: "Enterprise Domain"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SystemsPortfolio.jsx",
                                                        lineNumber: 257,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-65cb150c6b87831c",
                                                        children: sys.domain
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SystemsPortfolio.jsx",
                                                        lineNumber: 258,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SystemsPortfolio.jsx",
                                                lineNumber: 256,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-65cb150c6b87831c" + " " + "dd-row",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-65cb150c6b87831c" + " " + "dd-tag cyan",
                                                        children: "Complete Production Stack"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SystemsPortfolio.jsx",
                                                        lineNumber: 261,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-65cb150c6b87831c",
                                                        children: sys.tech.join(' · ')
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SystemsPortfolio.jsx",
                                                        lineNumber: 262,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SystemsPortfolio.jsx",
                                                lineNumber: 260,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SystemsPortfolio.jsx",
                                        lineNumber: 255,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SystemsPortfolio.jsx",
                                lineNumber: 250,
                                columnNumber: 13
                            }, this)
                        ]
                    }, sys.id, true, {
                        fileName: "[project]/src/components/SystemsPortfolio.jsx",
                        lineNumber: 187,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/SystemsPortfolio.jsx",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "65cb150c6b87831c",
                children: ".systems-filter-bar.jsx-65cb150c6b87831c{scrollbar-width:none;-webkit-overflow-scrolling:touch;align-items:center;gap:12px;margin-bottom:40px;padding-bottom:10px;display:flex;overflow-x:auto}.filter-btn.jsx-65cb150c6b87831c{min-height:48px;color:var(--text-secondary);font-family:var(--font-mono);cursor:pointer;white-space:nowrap;background:#ffffff0d;border:1px solid #ffffff1a;border-radius:9999px;align-items:center;gap:9px;padding:11px 22px;font-size:.9rem;font-weight:650;transition:all .22s;display:inline-flex}.filter-btn.jsx-65cb150c6b87831c:hover{color:#fff;background:#ffffff1a}.filter-btn.active.jsx-65cb150c6b87831c{color:#38bdf8;background:#38bdf82e;border-color:#38bdf873;box-shadow:0 0 18px #38bdf840}.filter-count.jsx-65cb150c6b87831c{color:#cbd5e1;background:#ffffff1a;border-radius:9999px;padding:2px 8px;font-size:.76rem}.projects-pipeline-wrapper.jsx-65cb150c6b87831c{width:100%;position:relative}.guided-spine-track.jsx-65cb150c6b87831c{pointer-events:none;z-index:5;width:4px;position:absolute;top:20px;bottom:40px;left:50%;transform:translate(-50%)}.guided-rail-base.jsx-65cb150c6b87831c{background:#ffffff1f;border-radius:9999px;width:100%;position:absolute;top:0;bottom:0;left:0}.guided-rail-glow.jsx-65cb150c6b87831c{opacity:.85;background:linear-gradient(#38bdf8 0%,#10b981 22%,#f59e0b 45%,#3b82f6 68%,#ec4899 85%,#8b5cf6 100%);border-radius:9999px;width:100%;position:absolute;top:0;bottom:0;left:0;box-shadow:0 0 16px #38bdf8bf}.guided-travel-dot.jsx-65cb150c6b87831c{pointer-events:none;border-radius:50%;width:12px;height:12px;position:absolute;left:50%;transform:translate(-50%,-50%)}.dot-stream-1.jsx-65cb150c6b87831c{background:#38bdf8;animation:5.5s cubic-bezier(.4,0,.2,1) infinite travelDownSpine;box-shadow:0 0 16px #38bdf8,0 0 30px #38bdf8}.dot-stream-2.jsx-65cb150c6b87831c{background:#10b981;animation:5.5s cubic-bezier(.4,0,.2,1) 1.8s infinite travelDownSpine;box-shadow:0 0 16px #10b981,0 0 30px #10b981}.dot-stream-3.jsx-65cb150c6b87831c{background:#ec4899;animation:5.5s cubic-bezier(.4,0,.2,1) 3.6s infinite travelDownSpine;box-shadow:0 0 16px #ec4899,0 0 30px #ec4899}@keyframes travelDownSpine{0%{opacity:0;top:0%;transform:translate(-50%,-50%)scale(.6)}8%{opacity:1;transform:translate(-50%,-50%)scale(1.3)}92%{opacity:1;transform:translate(-50%,-50%)scale(1.3)}to{opacity:0;top:100%;transform:translate(-50%,-50%)scale(.6)}}.systems-grid.jsx-65cb150c6b87831c{z-index:10;grid-template-columns:repeat(2,1fr);gap:28px;display:grid;position:relative}.system-card.jsx-65cb150c6b87831c{-webkit-backdrop-filter:blur(20px);transition:transform .25s var(--ease-spring), border-color .25s ease, box-shadow .25s ease;background:#0e121bb8;border:1px solid #ffffff17;border-radius:20px;flex-direction:column;padding:28px 26px;display:flex;position:relative}.system-card.jsx-65cb150c6b87831c:hover{border-color:#d4af3759;transform:translateY(-4px);box-shadow:0 20px 45px -12px #000c,0 0 25px #d4af3714}.card-top-row.jsx-65cb150c6b87831c{justify-content:space-between;align-items:center;margin-bottom:14px;display:flex}.client-pill.jsx-65cb150c6b87831c{font-family:var(--font-mono);letter-spacing:.06em;text-transform:uppercase;background:#ffffff05;border:1px solid;border-radius:9999px;align-items:center;gap:7px;padding:4px 12px;font-size:.76rem;font-weight:700;display:inline-flex}.client-dot.jsx-65cb150c6b87831c{border-radius:50%;width:6px;height:6px}.impact-pill.jsx-65cb150c6b87831c{font-family:var(--font-mono);background:#ffffff08;border:1px solid;border-radius:9999px;padding:4px 12px;font-size:.76rem;font-weight:700}.card-problem-section.jsx-65cb150c6b87831c{background:#ef44440a;border:1px solid #ef444424;border-radius:12px;margin-bottom:14px;padding:12px 14px}.problem-kicker.jsx-65cb150c6b87831c{font-family:var(--font-mono);color:#f87171;letter-spacing:.08em;align-items:center;gap:6px;margin-bottom:6px;font-size:.7rem;font-weight:750;display:flex}.warning-dot.jsx-65cb150c6b87831c{color:#ef4444;font-size:.65rem}.problem-headline.jsx-65cb150c6b87831c{color:#fff;margin-bottom:5px;font-size:1.12rem;font-weight:750;line-height:1.3}.problem-summary.jsx-65cb150c6b87831c{color:#cbd5e1;margin:0;font-size:.88rem;line-height:1.5}.card-solution-section.jsx-65cb150c6b87831c{background:#38bdf80a;border:1px solid #38bdf824;border-radius:12px;margin-bottom:16px;padding:12px 14px}.solution-kicker.jsx-65cb150c6b87831c{font-family:var(--font-mono);color:#38bdf8;letter-spacing:.06em;align-items:center;gap:7px;margin-bottom:6px;font-size:.72rem;font-weight:750;display:flex}.solution-dot.jsx-65cb150c6b87831c{border-radius:50%;width:7px;height:7px}.smart-synopsis.jsx-65cb150c6b87831c{color:#e2e8f0;margin:0;font-size:.9rem;line-height:1.52}.card-stats-grid.jsx-65cb150c6b87831c{text-align:center;background:#00000059;border:1px solid #ffffff0f;border-radius:12px;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:18px;padding:12px;display:grid}.card-stat-val.jsx-65cb150c6b87831c{font-family:var(--font-mono);font-size:1.25rem;font-weight:800;display:block}.card-stat-lbl.jsx-65cb150c6b87831c{font-family:var(--font-mono);color:var(--text-muted);text-transform:uppercase;margin-top:2px;font-size:.68rem;display:block}.card-tech-row.jsx-65cb150c6b87831c{flex-wrap:wrap;gap:6px;margin-bottom:16px;display:flex}.tech-tag.jsx-65cb150c6b87831c{font-family:var(--font-mono);color:#cbd5e1;background:#ffffff0a;border:1px solid #ffffff14;border-radius:6px;padding:3px 10px;font-size:.74rem}.tech-tag.plus-more.jsx-65cb150c6b87831c{color:#f3e5ab;background:#d4af371a;border-color:#d4af3740}.card-deep-dive.jsx-65cb150c6b87831c{border-top:1px solid #ffffff12;padding-top:12px}.deep-dive-trigger.jsx-65cb150c6b87831c{font-family:var(--font-mono);color:var(--text-muted);cursor:pointer;-webkit-user-select:none;user-select:none;justify-content:space-between;align-items:center;font-size:.76rem;list-style:none;transition:color .15s;display:flex}.deep-dive-trigger.jsx-65cb150c6b87831c::-webkit-details-marker{display:none}.deep-dive-trigger.jsx-65cb150c6b87831c:hover{color:#fff}.chevron.jsx-65cb150c6b87831c{transition:transform .2s}.card-deep-dive[open].jsx-65cb150c6b87831c .chevron.jsx-65cb150c6b87831c{transform:rotate(180deg)}.deep-dive-body.jsx-65cb150c6b87831c{color:var(--text-secondary);background:#00000073;border:1px solid #ffffff0f;border-radius:10px;flex-direction:column;gap:10px;margin-top:12px;padding:12px 14px;font-size:.88rem;line-height:1.5;display:flex}.dd-row.jsx-65cb150c6b87831c{flex-direction:column;gap:3px;display:flex}.dd-tag.jsx-65cb150c6b87831c{font-family:var(--font-mono);letter-spacing:.06em;text-transform:uppercase;font-size:.68rem;font-weight:750}.dd-tag.red.jsx-65cb150c6b87831c{color:#f87171}.dd-tag.cyan.jsx-65cb150c6b87831c{color:#38bdf8}@media (width<=960px){.systems-grid.jsx-65cb150c6b87831c{grid-template-columns:1fr;gap:20px}}@media (width<=600px){.system-card.jsx-65cb150c6b87831c{padding:20px 16px}.card-title.jsx-65cb150c6b87831c{font-size:1.25rem}.smart-synopsis.jsx-65cb150c6b87831c{font-size:.9rem}.card-stat-val.jsx-65cb150c6b87831c{font-size:1.1rem}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SystemsPortfolio.jsx",
        lineNumber: 149,
        columnNumber: 5
    }, this);
}
_s(SystemsPortfolio, "gNzIthHI4DLHoF6cKDvm8g5+wmk=");
_c = SystemsPortfolio;
var _c;
__turbopack_context__.k.register(_c, "SystemsPortfolio");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/sound.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSoundEnabled",
    ()=>getSoundEnabled,
    "initAudio",
    ()=>initAudio,
    "playClick",
    ()=>playClick,
    "playHover",
    ()=>playHover,
    "playNodeActivate",
    ()=>playNodeActivate,
    "setSoundEnabled",
    ()=>setSoundEnabled
]);
// Lightweight Web Audio API synthesizer for high-tech UI feedback
// Zero external assets required — synthesized in real-time
let audioCtx = null;
let soundEnabled = false;
const initAudio = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (!audioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
            audioCtx = new AudioContextClass();
        }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
};
const setSoundEnabled = (enabled)=>{
    soundEnabled = enabled;
    if ("TURBOPACK compile-time truthy", 1) {
        localStorage.setItem('portfolio_sfx_enabled', enabled ? 'true' : 'false');
    }
};
const getSoundEnabled = ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        const stored = localStorage.getItem('portfolio_sfx_enabled');
        if (stored !== null) return stored === 'true';
    }
    return false; // Muted by default for respectful UX
};
const playClick = ()=>{
    if (!soundEnabled || !audioCtx) return;
    try {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + 0.04);
        gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.04);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.04);
    } catch (e) {
    // Gracefully handle audio errors
    }
};
const playHover = ()=>{
    if (!soundEnabled || !audioCtx) return;
    try {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(440, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(560, audioCtx.currentTime + 0.03);
        gain.gain.setValueAtTime(0.015, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.03);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.03);
    } catch (e) {
    // Ignore
    }
};
const playNodeActivate = ()=>{
    if (!soundEnabled || !audioCtx) return;
    try {
        const now = audioCtx.currentTime;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.08); // G5
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(now + 0.14);
    } catch (e) {
    // Ignore
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1mydyr1._.js.map