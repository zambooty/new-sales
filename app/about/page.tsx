"use client";

import { NavBar } from "@/components/NavBar";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Zap, Search, Settings } from "lucide-react";

export default function AboutPage() {
    const values = [
        {
            title: "Radical Clarity",
            description: "We don't hide behind confusing jargon. We explain the technology clearly so you can make informed decisions.",
            icon: <Search className="size-6 text-cyan-400" />
        },
        {
            title: "Hardened Reliability",
            description: "Your digital presence is the face of your business. We engineer systems designed for 99.9% uptime, no excuses.",
            icon: <Shield className="size-6 text-cyan-400" />
        },
        {
            title: "High Performance",
            description: "Speed matters. We optimize everything—from server routing to frontend asset delivery—to ensure lightning-fast experiences.",
            icon: <Zap className="size-6 text-cyan-400" />
        },
        {
            title: "Continuous Refinement",
            description: "Technology doesn't stand still, and neither do we. We proactively monitor, maintain, and upgrade your infrastructure.",
            icon: <Settings className="size-6 text-cyan-400" />
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
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <NavBar />

            <main className="flex-1">

                {/* About Hero */}
                <section className="pt-32 pb-24 bg-navy-950 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-900/20 to-transparent pointer-events-none" />
                    <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6"
                        >
                            The Engineering Partner for Growing Businesses.
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-xl text-slate-300 font-normal leading-relaxed"
                        >
                            Makesoft was founded on a simple premise: businesses shouldn't have to fight their technology while trying to grow.
                        </motion.p>
                    </div>
                </section>

                {/* Story Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="prose prose-lg prose-slate max-w-none text-slate-600"
                        >
                            <h2 className="text-3xl font-bold text-navy-950 mb-6">Our Mission</h2>
                            <p className="mb-6">
                                Too many growing businesses are forced to choose between managing overly complex digital infrastructure themselves, or hiring unreliable freelancers for one-off projects that break down six months later.
                            </p>
                            <p className="mb-6">
                                <strong>We believe there is a better way.</strong> Makesoft acts as an ongoing extension of your team. We build modern, stable, and highly-performant digital systems, and then we stick around to manage them.
                            </p>
                            <p>
                                From bespoke website development to managed hosting environments and complex automation workflows, our goal is to eliminate your technical friction—so you can focus entirely on running your business.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Values Grid */}
                <section className="py-24 bg-slate-50 border-t border-slate-200/60">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-navy-950">How We Operate</h2>
                        </div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            className="grid md:grid-cols-2 gap-8"
                        >
                            {values.map((value, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={itemVariants}
                                    className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm"
                                >
                                    <div className="size-12 rounded bg-navy-950 flex items-center justify-center mb-6">
                                        {value.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-navy-950 mb-3">{value.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {value.description}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                <CtaSection />
            </main>

            <Footer />
        </div>
    );
}
