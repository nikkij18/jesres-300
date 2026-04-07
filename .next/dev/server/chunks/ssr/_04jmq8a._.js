module.exports = [
"[project]/lib/supabase.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-ssr] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://dylgawidxrgptktapsem.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "sb_publishable_RRE1hHXcsWa0hGb9IgCCcQ_dCzls_Rz");
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
}),
"[project]/components/PaperUnravel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PaperUnravel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.ts [app-ssr] (ecmascript)");
'use client';
;
;
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
].map((n)=>`${BASE}/${n}.png`);
const VH_PER_FRAME = 15;
const TOTAL_SCROLL_VH = VH_PER_FRAME * FRAMES.length;
function PaperUnravel() {
    const [frameIdx, setFrameIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showInvite, setShowInvite] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [invitation, setInvitation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [rsvpName, setRsvpName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [rsvpNote, setRsvpNote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [saved, setSaved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // preload frames
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        FRAMES.forEach((src)=>{
            const img = new Image();
            img.src = src;
        });
    }, []);
    // fetch invitation from Supabase
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('invitations').select('*').limit(1).then(({ data, error })=>{
            console.log('supabase result:', JSON.stringify(data), 'error:', error?.message);
            const row = data?.[0];
            if (row) {
                const d = row;
                setInvitation({
                    Title: d.Title || d.title || '',
                    Body: d.Body || d.body || '',
                    Date: d.Date || d.date || '',
                    'Signed By': d['Signed By'] || d['signed_by'] || d['signed by'] || ''
                });
            } else {
                setInvitation({
                    Title: 'You\'re invited',
                    Body: 'Join us for an evening together.',
                    Date: new Date().toISOString(),
                    'Signed By': 'the host'
                });
            }
        });
    }, []);
    // scroll → frame
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        window.scrollTo(0, 0);
        const onScroll = ()=>{
            const container = containerRef.current;
            if (!container) return;
            const { top, height } = container.getBoundingClientRect();
            const progress = Math.min(1, Math.max(0, -top / (height - window.innerHeight)));
            const idx = Math.min(Math.floor(progress * FRAMES.length), FRAMES.length - 1);
            setFrameIdx(idx);
            setShowInvite(progress >= 1);
        };
        window.addEventListener('scroll', onScroll, {
            passive: true
        });
        return ()=>window.removeEventListener('scroll', onScroll);
    }, []);
    const handleRsvp = ()=>{
        if (!rsvpName.trim()) return;
        setSaved(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "bg-black",
        style: {
            height: `${100 + TOTAL_SCROLL_VH}vh`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full max-w-[90vw]",
                    style: {
                        aspectRatio: '4/3',
                        display: frameIdx === FRAMES.length - 1 ? 'none' : 'block'
                    },
                    children: FRAMES.slice(0, -1).map((src, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].img, {
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
                            lineNumber: 95,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/PaperUnravel.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this),
                frameIdx === FRAMES.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        duration: 0.4
                    },
                    style: {
                        position: 'relative',
                        width: '70vw',
                        maxWidth: '700px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: FRAMES[FRAMES.length - 1],
                            alt: "flat paper",
                            style: {
                                width: '100%',
                                display: 'block'
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/PaperUnravel.tsx",
                            lineNumber: 122,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: `${BASE}/Doodle2.png`,
                            alt: "",
                            style: {
                                position: 'absolute',
                                width: '16%',
                                top: '8%',
                                left: '50%',
                                transform: 'translateX(-50%)'
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/PaperUnravel.tsx",
                            lineNumber: 131,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: `${BASE}/Doodle1.png`,
                            alt: "",
                            style: {
                                position: 'absolute',
                                width: '14%',
                                top: '8%',
                                left: '17%'
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/PaperUnravel.tsx",
                            lineNumber: 133,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: `${BASE}/Doodle3.png`,
                            alt: "",
                            style: {
                                position: 'absolute',
                                width: '14%',
                                top: '8%',
                                right: '17%'
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/PaperUnravel.tsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: `${BASE}/Doodle4.png`,
                            alt: "",
                            style: {
                                position: 'absolute',
                                width: '14%',
                                bottom: '10%',
                                right: '17%'
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/PaperUnravel.tsx",
                            lineNumber: 137,
                            columnNumber: 13
                        }, this),
                        invitation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                duration: 1,
                                delay: 0.4
                            },
                            style: {
                                position: 'absolute',
                                top: '45%',
                                left: '50%',
                                transform: 'translateX(-50%) rotate(-1deg)',
                                width: '55%',
                                color: '#2C2C2C',
                                fontFamily: 'var(--font-typewriter), "Courier New", monospace',
                                textAlign: 'center',
                                overflowWrap: 'break-word',
                                pointerEvents: 'none'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: 'clamp(7px, 0.8vw, 12px)',
                                        letterSpacing: '0.18em',
                                        marginBottom: '0.8em',
                                        opacity: 0.4,
                                        textTransform: 'uppercase'
                                    },
                                    children: invitation.Date ? new Date(invitation.Date.replace(' ', 'T')).toLocaleDateString('en-US', {
                                        weekday: 'long',
                                        month: 'long',
                                        day: 'numeric'
                                    }) : ''
                                }, void 0, false, {
                                    fileName: "[project]/components/PaperUnravel.tsx",
                                    lineNumber: 158,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: 'clamp(14px, 2.2vw, 32px)',
                                        fontWeight: 'bold',
                                        marginBottom: '0.8em',
                                        lineHeight: 1.15
                                    },
                                    children: invitation.Title
                                }, void 0, false, {
                                    fileName: "[project]/components/PaperUnravel.tsx",
                                    lineNumber: 163,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: 'clamp(9px, 0.85vw, 14px)',
                                        marginBottom: '1.2em',
                                        opacity: 0.8,
                                        lineHeight: 1.8
                                    },
                                    children: invitation.Body
                                }, void 0, false, {
                                    fileName: "[project]/components/PaperUnravel.tsx",
                                    lineNumber: 166,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: 'clamp(7px, 0.8vw, 12px)',
                                        opacity: 0.45,
                                        fontStyle: 'italic'
                                    },
                                    children: [
                                        "— ",
                                        invitation['Signed By']
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/PaperUnravel.tsx",
                                    lineNumber: 169,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/PaperUnravel.tsx",
                            lineNumber: 141,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/PaperUnravel.tsx",
                    lineNumber: 115,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    children: frameIdx === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: [
                                0.3,
                                0.8,
                                0.3
                            ]
                        },
                        exit: {
                            opacity: 0,
                            transition: {
                                duration: 0.4
                            }
                        },
                        transition: {
                            duration: 2.5,
                            repeat: Infinity,
                            ease: 'easeInOut'
                        },
                        className: "fixed bottom-8 left-0 right-0 text-center text-white/50 text-xs tracking-[0.25em] uppercase",
                        children: "scroll to open"
                    }, void 0, false, {
                        fileName: "[project]/components/PaperUnravel.tsx",
                        lineNumber: 180,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/PaperUnravel.tsx",
                    lineNumber: 178,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    children: showInvite && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 10
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.7,
                            delay: 0.5,
                            ease: 'easeOut'
                        },
                        className: "flex flex-col items-center text-center mt-5 w-full max-w-xs",
                        children: !saved ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3 w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs tracking-[0.15em] uppercase",
                                    style: {
                                        color: '#666',
                                        fontFamily: 'Georgia, serif'
                                    },
                                    children: "save me a seat"
                                }, void 0, false, {
                                    fileName: "[project]/components/PaperUnravel.tsx",
                                    lineNumber: 204,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                    lineNumber: 207,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                    lineNumber: 215,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                    lineNumber: 223,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/PaperUnravel.tsx",
                            lineNumber: 203,
                            columnNumber: 17
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                            lineNumber: 232,
                            columnNumber: 17
                        }, this)
                    }, "rsvp", false, {
                        fileName: "[project]/components/PaperUnravel.tsx",
                        lineNumber: 195,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/PaperUnravel.tsx",
                    lineNumber: 193,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/PaperUnravel.tsx",
            lineNumber: 90,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/PaperUnravel.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PaperUnravel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/PaperUnravel.tsx [app-ssr] (ecmascript)");
'use client';
;
;
function HomePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PaperUnravel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=_04jmq8a._.js.map