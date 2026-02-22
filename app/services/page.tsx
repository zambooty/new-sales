"use client";

import { NavBar } from "@/components/NavBar";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { MonitorSmartphone, Server, Settings, Wrench, CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
    const serviceDetails = [
        {
            id: "website-development",
            title: "Website Development",
            description: "We don't just build websites; we engineer digital platforms. Our development process focuses on clean architecture, lightning-fast load times, and scalable frameworks that grow with your business.",
            features: [
                "Headless CMS integration",
                "React/Next.js frameworks",
                "SEO and Accessibility prioritized",
                "Conversion-optimized layouts"
            ],
            icon: <MonitorSmartphone className="size-16 text-cyan-400" />
        },
        {
            id: "managed-hosting",
            title: "Managed Hosting",
            description: "Your digital operations require a bedrock of stability. Our managed hosting solutions ensure maximum uptime with proactive security monitoring and auto-scaling infrastructure.",
            features: [
                "99.9% Uptime Guarantee",
                "Global CDN Edge Caching",
                "Automated Daily Backups",
                "DDoS Protection built-in"
            ],
            icon: <Server className="size-16 text-cyan-400" />
        },
        {
            id: "maintenance-support",
            title: "Maintenance & Support",
            description: "Software decays without oversight. We act as your outsourced technical team, providing continuous updates, framework patches, and emergency support to prevent critical failures.",
            features: [
                "Priority emergency response",
                "Monthly library dependency updates",
                "Uptime and performance monitoring",
                "Direct developer access"
            ],
            icon: <Settings className="size-16 text-cyan-400" />
        },
        {
            id: "automation-systems",
            title: "Automation Systems",
            description: "Stop wasting hours on repetitive manual work. We integrate your disparate software tools into clean, automated digital workflows to drastically reduce operational overhead.",
            features: [
                "CRM to Payment gateways",
                "Custom API integrations",
                "Automated reporting scripts",
                "Reduced manual entry errors"
            ],
            icon: <Wrench className="size-16 text-cyan-400" />
        }
    ];

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <NavBar />

            <main className="flex-1">

                {/* Services Hero */}
                <section className="pt-32 pb-24 bg-navy-950 relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6"
                        >
                            Engineered Digital Solutions
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-xl text-slate-300 font-normal leading-relaxed"
                        >
                            Comprehensive technical services designed to build, secure, and scale your online presence over the long term.
                        </motion.p>
                    </div>
                </section>

                {/* Deep Dive Services Layout */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                        <div className="space-y-32">
                            {serviceDetails.map((service, idx) => (
                                <motion.div
                                    key={service.id}
                                    id={service.id}
                                    variants={itemVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-100px" }}
                                    className={`flex flex-col gap-12 lg:gap-20 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
                                >

                                    {/* Service Text Detail */}
                                    <div className="flex-1 w-full relative z-10">
                                        <h2 className="text-3xl lg:text-4xl font-bold text-navy-950 mb-6">{service.title}</h2>
                                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                            {service.description}
                                        </p>

                                        <ul className="space-y-4">
                                            {service.features.map((feature, fIdx) => (
                                                <li key={fIdx} className="flex items-start gap-3">
                                                    <CheckCircle2 className="size-6 text-cyan-500 shrink-0" />
                                                    <span className="text-slate-700 font-medium">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Abstract Visual Box Placeholders */}
                                    <div className="flex-1 w-full lg:w-auto">
                                        <div className="relative w-full aspect-square max-w-md mx-auto rounded-3xl bg-slate-50 border border-slate-200 overflow-hidden flex items-center justify-center group hover:border-cyan-200 transition-colors duration-500">

                                            {/* Decorative Background Glows */}
                                            <div className="absolute top-0 right-0 size-64 bg-cyan-400/5 rounded-full blur-3xl group-hover:bg-cyan-400/10 transition-colors duration-500" />
                                            <div className="absolute bottom-0 left-0 size-64 bg-navy-950/5 rounded-full blur-3xl group-hover:bg-navy-950/10 transition-colors duration-500" />

                                            {/* Icon Container */}
                                            <div className="relative z-10 size-32 rounded-2xl bg-white shadow-xl shadow-cyan-900/5 flex items-center justify-center border border-slate-100 transform group-hover:scale-105 transition-transform duration-500">
                                                {service.icon}
                                            </div>

                                        </div>
                                    </div>

                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <CtaSection />
            </main>

            <Footer />
        </div>
    );
}
