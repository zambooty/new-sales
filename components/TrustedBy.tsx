"use client";

import { motion } from "framer-motion";

export function TrustedBy() {
    const logos = [
        { name: "TechFlow", icon: <div className="size-8 bg-gradient-to-br from-cyan-400 to-indigo-500 rounded-md shadow-[0_0_15px_rgba(34,211,238,0.5)]" /> },
        { name: "Nexus", icon: <div className="size-8 rounded-full border-4 border-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.5)]" /> },
        { name: "Apex", icon: <svg className="size-8 text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2z" /></svg> },
        { name: "SysCore", icon: <div className="size-8 bg-gradient-to-tr from-cyan-400 to-purple-500 rounded-md shadow-[0_0_15px_rgba(168,85,247,0.4)]" /> },
        { name: "Vanguard", icon: <div className="size-8 border-b-[3px] border-r-[3px] border-cyan-400 transform rotate-45 shadow-[3px_3px_10px_rgba(34,211,238,0.4)]" /> }
    ];

    return (
        <section className="py-20 bg-navy-950 border-t border-white/5 relative z-20">
            {/* Soft background line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <p className="text-center text-sm font-semibold text-slate-400 mb-12 uppercase tracking-[0.25em]">
                    Trusted by forward-thinking teams
                </p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 lg:gap-28 opacity-60 hover:opacity-100 transition-opacity duration-700">
                    {logos.map((logo, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.7, ease: "easeOut" }}
                            className="flex items-center gap-4 text-2xl font-bold text-slate-300 hover:text-white transition-all duration-300 cursor-default grayscale hover:grayscale-0 hover:scale-105"
                        >
                            {logo.icon}
                            <span className="tracking-tight">{logo.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
