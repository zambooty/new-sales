"use client";

import Link from "next/link";
import { Button } from "./ui/Button";
import { motion } from "framer-motion";

export function CtaSection() {
    return (
        <section className="py-32 bg-navy-950 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />

            {/* Animated background glow */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.4, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 rounded-full blur-[100px] pointer-events-none"
            />

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
                        Ready to strengthen your <span className="text-gradient">online presence?</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                        Partner with Makesoft and secure the digital infrastructure your growing business needs to succeed—without the technical headache.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
                        <Link href="/contact" tabIndex={-1}>
                            <Button size="lg" className="px-10 h-16 text-lg font-bold bg-white text-navy-950 hover:bg-slate-100 transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)]">
                                Book a Discovery Call
                            </Button>
                        </Link>
                        <Link href="/services" tabIndex={-1}>
                            <Button size="lg" variant="outline" className="px-10 h-16 text-lg font-medium text-white border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all">
                                View Pricing
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Decorative bottom border */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        </section>
    );
}
