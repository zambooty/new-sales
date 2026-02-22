"use client";

import { MonitorSmartphone, Server, Settings, Wrench } from "lucide-react";
import { motion } from "framer-motion";

export function Services() {
    const services = [
        {
            title: "Website Development",
            description: "Beautiful, high-converting websites designed to turn your visitors into loyal customers.",
            icon: <MonitorSmartphone className="size-8 text-cyan-400" />
        },
        {
            title: "Managed Hosting",
            description: "Worry-free, reliable hosting that keeps your website fast and accessible around the clock.",
            icon: <Server className="size-8 text-indigo-400" />
        },
        {
            title: "Maintenance & Support",
            description: "A dedicated team ready to help you with updates, fixes, and support whenever you need it.",
            icon: <Settings className="size-8 text-purple-400" />
        },
        {
            title: "Automation Systems",
            description: "Smart tools that connect your apps and automate repetitive tasks, saving you hours every week.",
            icon: <Wrench className="size-8 text-cyan-400" />
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section id="services" className="py-32 bg-navy-950 relative overflow-hidden text-white">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
            <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-6">
                        Our Expertise
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
                        Everything You Need to <span className="text-gradient">Succeed</span>
                    </h2>
                    <p className="text-xl text-slate-400 font-light">
                        We handle the technical heavy lifting so you don't have to.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-2 gap-8 lg:gap-10"
                >
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            variants={cardVariants}
                            className="group relative bg-white/[0.02] p-8 md:p-10 rounded-3xl border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden backdrop-blur-xl hover:shadow-[0_0_40px_-15px_rgba(34,211,238,0.2)]"
                        >
                            {/* Hover glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-indigo-500/0 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="size-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 shadow-inner">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-cyan-400 transition-colors">{service.title}</h3>
                                <p className="text-lg text-slate-400 leading-relaxed font-light">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
