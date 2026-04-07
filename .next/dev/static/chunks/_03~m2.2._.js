(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/PaperUnravel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PaperUnravel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const BASE = 'https://dylgawidxrgptktapsem.supabase.co/storage/v1/object/public/assets';
const FRAMES = [
    7,
    6,
    5,
    4,
    3,
    2
].map(_c = (n)=>`${BASE}/${n}.png`);
_c1 = FRAMES;
// how many vh each frame occupies while scrolling
const VH_PER_FRAME = 15;
const TOTAL_SCROLL_VH = VH_PER_FRAME * FRAMES.length;
function PaperUnravel({ eventName, date, type, hostNote, vibe, onRsvp }) {
    _s();
    const [frameIdx, setFrameIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showInvite, setShowInvite] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [rsvpName, setRsvpName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [rsvpNote, setRsvpNote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [saved, setSaved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const stickyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PaperUnravel.useEffect": ()=>{
            FRAMES.forEach({
                "PaperUnravel.useEffect": (src)=>{
                    const img = new Image();
                    img.src = src;
                }
            }["PaperUnravel.useEffect"]);
        }
    }["PaperUnravel.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PaperUnravel.useEffect": ()=>{
            const onScroll = {
                "PaperUnravel.useEffect.onScroll": ()=>{
                    const container = containerRef.current;
                    if (!container) return;
                    const { top, height } = container.getBoundingClientRect();
                    // how far through the scroll container we are (0–1)
                    const progress = Math.min(1, Math.max(0, -top / (height - window.innerHeight)));
                    const rawIdx = Math.floor(progress * FRAMES.length);
                    const idx = Math.min(rawIdx, FRAMES.length - 1);
                    setFrameIdx(idx);
                    setShowInvite(progress >= 1);
                }
            }["PaperUnravel.useEffect.onScroll"];
            window.addEventListener('scroll', onScroll, {
                passive: true
            });
            return ({
                "PaperUnravel.useEffect": ()=>window.removeEventListener('scroll', onScroll)
            })["PaperUnravel.useEffect"];
        }
    }["PaperUnravel.useEffect"], []);
    const handleRsvp = ()=>{
        if (!rsvpName.trim()) return;
        onRsvp?.(rsvpName.trim());
        setSaved(true);
    };
    const typeLabel = {
        dinner: 'a dinner party',
        wine: 'a wine night',
        'get-together': 'a get-together'
    }[type];
    return(// tall scroll container — frames play as you scroll
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "bg-black",
        style: {
            height: `${100 + TOTAL_SCROLL_VH}vh`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: stickyRef,
            className: "sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full max-w-[90vw]",
                    style: {
                        aspectRatio: '4/3'
                    },
                    children: FRAMES.map((src, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                            src: src,
                            alt: "",
                            className: "absolute inset-0 w-full h-full object-contain",
                            style: {
                                opacity: i === frameIdx ? 1 : 0
                            },
                            animate: i === 0 && frameIdx === 0 ? {
                                rotate: [
                                    0,
                                    -4,
                                    4,
                                    -2,
                                    2,
                                    0
                                ]
                            } : {
                                rotate: 0
                            },
                            transition: i === 0 && frameIdx === 0 ? {
                                duration: 4,
                                repeat: Infinity,
                                ease: 'easeInOut'
                            } : {
                                duration: 0.3
                            }
                        }, src, false, {
                            fileName: "[project]/components/PaperUnravel.tsx",
                            lineNumber: 83,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/PaperUnravel.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    children: frameIdx === 0 && !showInvite && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: [
                                0.4,
                                0.9,
                                0.4
                            ]
                        },
                        exit: {
                            opacity: 0
                        },
                        transition: {
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut'
                        },
                        className: "text-white/50 text-xs tracking-[0.25em] uppercase mt-4",
                        children: "scroll to open"
                    }, void 0, false, {
                        fileName: "[project]/components/PaperUnravel.tsx",
                        lineNumber: 104,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/PaperUnravel.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    children: showInvite && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 16
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.7,
                            ease: 'easeOut'
                        },
                        className: "flex flex-col items-center text-center mt-6 w-full max-w-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs tracking-[0.25em] uppercase mb-3",
                                style: {
                                    color: '#AF4319',
                                    fontFamily: 'Georgia, serif'
                                },
                                children: [
                                    "you're invited to ",
                                    typeLabel
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PaperUnravel.tsx",
                                lineNumber: 126,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl font-bold leading-tight mb-2",
                                style: {
                                    color: '#6A0136',
                                    fontFamily: 'Georgia, serif'
                                },
                                children: eventName
                            }, void 0, false, {
                                fileName: "[project]/components/PaperUnravel.tsx",
                                lineNumber: 133,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm mb-4",
                                style: {
                                    color: '#c8c8b8',
                                    fontFamily: 'Georgia, serif'
                                },
                                children: new Date(date).toLocaleDateString('en-US', {
                                    weekday: 'long',
                                    month: 'long',
                                    day: 'numeric'
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/PaperUnravel.tsx",
                                lineNumber: 140,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm leading-relaxed mb-2",
                                style: {
                                    color: '#c8c8b8',
                                    fontFamily: 'Georgia, serif'
                                },
                                children: hostNote
                            }, void 0, false, {
                                fileName: "[project]/components/PaperUnravel.tsx",
                                lineNumber: 151,
                                columnNumber: 15
                            }, this),
                            vibe && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs italic mb-6",
                                style: {
                                    color: '#AF4319',
                                    fontFamily: 'Georgia, serif'
                                },
                                children: vibe
                            }, void 0, false, {
                                fileName: "[project]/components/PaperUnravel.tsx",
                                lineNumber: 159,
                                columnNumber: 17
                            }, this),
                            !saved ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3 w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs tracking-[0.15em] uppercase",
                                        style: {
                                            color: '#888',
                                            fontFamily: 'Georgia, serif'
                                        },
                                        children: "save me a seat"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PaperUnravel.tsx",
                                        lineNumber: 169,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "your name",
                                        value: rsvpName,
                                        onChange: (e)=>setRsvpName(e.target.value),
                                        className: "w-full border-b bg-transparent text-sm py-1.5 outline-none placeholder:text-white/20",
                                        style: {
                                            borderColor: '#444',
                                            color: '#e8e8d0',
                                            fontFamily: 'Georgia, serif'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/PaperUnravel.tsx",
                                        lineNumber: 172,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "a note (optional)",
                                        value: rsvpNote,
                                        onChange: (e)=>setRsvpNote(e.target.value),
                                        className: "w-full border-b bg-transparent text-sm py-1.5 outline-none placeholder:text-white/20",
                                        style: {
                                            borderColor: '#444',
                                            color: '#e8e8d0',
                                            fontFamily: 'Georgia, serif'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/PaperUnravel.tsx",
                                        lineNumber: 180,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleRsvp,
                                        className: "mt-2 text-sm tracking-widest uppercase py-2 px-6 transition-all hover:opacity-70",
                                        style: {
                                            color: 'white',
                                            backgroundColor: '#6A0136',
                                            fontFamily: 'Georgia, serif',
                                            letterSpacing: '0.15em'
                                        },
                                        children: "I'll be there"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PaperUnravel.tsx",
                                        lineNumber: 188,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PaperUnravel.tsx",
                                lineNumber: 168,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm italic",
                                style: {
                                    color: '#c8c8b8',
                                    fontFamily: 'Georgia, serif'
                                },
                                children: [
                                    "see you there, ",
                                    rsvpName,
                                    ". ✦"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PaperUnravel.tsx",
                                lineNumber: 197,
                                columnNumber: 17
                            }, this)
                        ]
                    }, "invite", true, {
                        fileName: "[project]/components/PaperUnravel.tsx",
                        lineNumber: 119,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/PaperUnravel.tsx",
                    lineNumber: 117,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/PaperUnravel.tsx",
            lineNumber: 78,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/PaperUnravel.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this));
}
_s(PaperUnravel, "/t2mZhlSpBeT8VBHulRlu+msfWg=");
_c2 = PaperUnravel;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "FRAMES$[7, 6, 5, 4, 3, 2].map");
__turbopack_context__.k.register(_c1, "FRAMES");
__turbopack_context__.k.register(_c2, "PaperUnravel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PaperUnravel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/PaperUnravel.tsx [app-client] (ecmascript)");
'use client';
;
;
function HomePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PaperUnravel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        eventName: "Dinner @ 300",
        date: "2026-04-12",
        type: "dinner",
        hostNote: "Come hungry. We're making pasta from scratch, opening something good, and staying at the table until it gets late. You know how it goes.",
        vibe: "dress for a long dinner. bring nothing but yourself."
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_03~m2.2._.js.map