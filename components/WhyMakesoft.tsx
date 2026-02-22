"use client";

import { Activity, ShieldCheck, Maximize, Handshake } from "lucide-react";
import { motion } from "framer-motion";

export function WhyMakesoft() {
    const blocks = [
        {
            title: "Performance",
            description: "Your website will load instantly, keeping your customers engaged and improving your search rankings.",
            icon: <Activity className="size-8 text-cyan-400" />
        },
        {
            title: "Security",
            description: "We keep your data safe and your site online, protecting your business and your customers' trust.",
            icon: <ShieldCheck className="size-8 text-indigo-400" />
        },
        {
            title: "Scalability",
            description: "Whether you have ten customers or ten thousand, our solutions grow effortlessly with your success.",
            icon: <Maximize className="size-8 text-purple-400" />
        },
        {
            title: "True Partnership",
            description: "We're not just a vendor; we're your dedicated team, invested in your long-term growth.",
            icon: <Handshake className="size-8 text-cyan-400" />
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="why-makesoft" className="py-32 bg-navy-950 overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

                <div className="grid lg:grid-cols-3 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-1"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-medium mb-6">
                            Your Growth Partner
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight leading-[1.15]">
                            A Partner You Can <span className="text-gradient">Count On.</span>
                        </h2>
                        <p className="text-lg text-slate-400 mb-10 font-light leading-relaxed">
                            We understand the challenges of running a small business. That's why we deliver straightforward, reliable solutions that help you grow with confidence, without the technical jargon.
                        </p>
                        <div className="hidden lg:block w-24 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full" />
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="lg:col-span-2 grid sm:grid-cols-2 gap-6 lg:gap-8"
                    >
                        {blocks.map((block, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                className="group bg-white/[0.03] p-8 rounded-3xl border border-white/5 backdrop-blur-sm transition-all duration-400 hover:bg-white/[0.05] hover:border-white/10 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
                            >
                                <div className="size-14 rounded-2xl mb-6 flex items-center justify-center bg-white/5 border border-white/10 group-hover:bg-gradient-to-br group-hover:from-white/10 group-hover:to-transparent transition-all duration-400 shadow-inner">
                                    {block.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{block.title}</h3>
                                <p className="text-slate-400 text-base leading-relaxed font-light">
                                    {block.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
