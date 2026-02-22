"use client";

import Link from "next/link";
import { Button } from "./ui/Button";
import { ArrowRight, Server, Shield, Zap, CircleDashed } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Hero() {
    return (
        <section className="relative w-full min-h-screen bg-navy-950 overflow-hidden flex items-center pt-20 pb-32">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-indigo-500/20 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.5, 1],
                        rotate: [0, -90, 0],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[40%] -left-[10%] w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[100px]"
                />
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
            </div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-2xl text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-medium mb-8 backdrop-blur-md">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                            </span>
                            Your Growth Partner
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-8">
                            <span className="text-white drop-shadow-lg">Elevate Your</span>
                            <br />
                            <span className="text-gradient">Online Business.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl font-light leading-relaxed">
                            We build stunning websites and manage the technical details so you can focus entirely on growing your startup and serving your customers.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5">
                            <Link href="/contact" tabIndex={-1}>
                                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base bg-white text-navy-950 hover:bg-slate-100 hover:scale-[1.02] transition-transform shadow-[0_0_30px_-10px_rgba(255,255,255,0.4)]">
                                    Start Building
                                    <ArrowRight className="ml-2 size-5" />
                                </Button>
                            </Link>
                            <Link href="/services" tabIndex={-1}>
                                <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base text-white border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-md">
                                    Explore Solutions
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Visual Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="hidden lg:flex justify-end relative perspective-[1000px]"
                    >
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-full max-w-lg aspect-[4/3] rounded-3xl glass-panel p-8 shadow-2xl flex flex-col justify-between overflow-hidden border-t-white/20 border-l-white/20"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/30 rounded-full blur-[80px] -mr-20 -mt-20" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px] -ml-20 -mb-20" />

                            <div className="relative z-10 flex justify-between items-start mb-8">
                                <div className="flex items-center gap-4">
                                    <div className="size-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center shadow-inner">
                                        <Server className="size-6 text-cyan-400" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-slate-400 font-medium">Site Performance</div>
                                        <div className="text-lg font-bold text-white flex items-center gap-2">
                                            Excellent <div className="size-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <div className="size-3 rounded-full bg-red-400/80 shadow-[0_0_8px_rgba(248,113,113,0.5)]" />
                                    <div className="size-3 rounded-full bg-yellow-400/80 shadow-[0_0_8px_rgba(250,204,21,0.5)]" />
                                    <div className="size-3 rounded-full bg-green-400/80 shadow-[0_0_8px_rgba(74,222,128,0.5)]" />
                                </div>
                            </div>

                            <div className="relative z-10 space-y-5 mb-8">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <CircleDashed className="size-5 text-indigo-400 animate-[spin_4s_linear_infinite]" />
                                        <div className="h-2 w-32 bg-white/10 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full"
                                                initial={{ width: "0%" }}
                                                animate={{ width: "85%" }}
                                                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                                            />
                                        </div>
                                    </div>
                                    <span className="text-xs text-cyan-400 font-mono">+125% TRAFFIC</span>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Zap className="size-5 text-yellow-400" />
                                        <div className="h-2 w-48 bg-white/10 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                                                initial={{ width: "0%" }}
                                                animate={{ width: "99.9%" }}
                                                transition={{ duration: 1.5, delay: 0.7, ease: "easeOut" }}
                                            />
                                        </div>
                                    </div>
                                    <span className="text-xs text-yellow-400 font-mono">ALWAYS ONLINE</span>
                                </div>
                            </div>

                            <div className="relative z-10 grid grid-cols-2 gap-4 mt-auto">
                                <div className="rounded-xl bg-white/5 border border-white/10 p-4 transition-colors hover:bg-white/10 backdrop-blur-md">
                                    <Shield className="size-6 text-indigo-400 mb-3" />
                                    <div className="font-semibold text-white">Secure & Safe</div>
                                    <p className="text-xs text-slate-400 mt-1">For Your Business</p>
                                </div>
                                <div className="rounded-xl bg-white/5 border border-white/10 p-4 transition-colors hover:bg-white/10 backdrop-blur-md">
                                    <Zap className="size-6 text-cyan-400 mb-3" />
                                    <div className="font-semibold text-white">Global Reach</div>
                                    <p className="text-xs text-slate-400 mt-1">Fast Everywhere</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

