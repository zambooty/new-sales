"use client";

import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function ContactPage() {
    const contactInfo = [
        {
            icon: <Mail className="size-5 text-cyan-500" />,
            label: "Email",
            value: "hello@makesoft.io"
        },
        {
            icon: <Phone className="size-5 text-cyan-500" />,
            label: "Phone",
            value: "+1 (555) 123-4567"
        },
        {
            icon: <MapPin className="size-5 text-cyan-500" />,
            label: "Office",
            value: "100 Tech Hub Blvd, Suite 400\nSan Francisco, CA 94105"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <NavBar />

            <main className="flex-1 pt-32 pb-24">

                {/* Contact Header */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy-950 tracking-tight mb-6">
                            Start Your Digital Transformation.
                        </h1>
                        <p className="text-xl text-slate-600 font-normal leading-relaxed">
                            Whether you need to overhaul your digital infrastructure, build a custom application, or secure reliable hosting, our engineering team is ready to help.
                        </p>
                    </motion.div>
                </div>

                {/* Contact Form & Info Layout */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid lg:grid-cols-5 gap-12 lg:gap-24">

                        {/* Left: Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="lg:col-span-3 bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm"
                        >
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="col-span-2 md:col-span-1 space-y-2">
                                        <label htmlFor="firstName" className="block text-sm font-medium text-navy-950">First Name</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div className="col-span-2 md:col-span-1 space-y-2">
                                        <label htmlFor="lastName" className="block text-sm font-medium text-navy-950">Last Name</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-sm font-medium text-navy-950">Work Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                                        placeholder="john@company.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="company" className="block text-sm font-medium text-navy-950">Company Name</label>
                                    <input
                                        type="text"
                                        id="company"
                                        className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                                        placeholder="Acme Corp"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="service" className="block text-sm font-medium text-navy-950">Primary Interest</label>
                                    <select
                                        id="service"
                                        className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all appearance-none"
                                    >
                                        <option value="" disabled selected>Select a service...</option>
                                        <option value="development">Website Development</option>
                                        <option value="hosting">Managed Hosting</option>
                                        <option value="maintenance">Maintenance & Support</option>
                                        <option value="automation">Automation Systems</option>
                                        <option value="other">Other Inquiry</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="block text-sm font-medium text-navy-950">Project Details</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                                        placeholder="Tell us a bit about your current technical stack and what you're looking to achieve..."
                                    />
                                </div>

                                <Button type="submit" className="w-full h-12 text-base mt-4 shadow-lg shadow-cyan-500/20">
                                    Submit Inquiry
                                    <ArrowRight className="ml-2 size-4" />
                                </Button>
                                <p className="text-xs text-slate-500 text-center mt-4">
                                    By submitting this form, you agree to our privacy policy. We will absolutely never spam your inbox.
                                </p>

                            </form>
                        </motion.div>

                        {/* Right: Direct Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:col-span-2 space-y-10"
                        >
                            <div>
                                <h3 className="text-xl font-bold text-navy-950 mb-6">Direct Channels</h3>
                                <div className="space-y-6">
                                    {contactInfo.map((info, idx) => (
                                        <div key={idx} className="flex items-start gap-4">
                                            <div className="size-10 rounded-lg bg-cyan-50 border border-cyan-100 flex items-center justify-center shrink-0">
                                                {info.icon}
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-navy-950 mb-1">{info.label}</p>
                                                <p className="text-slate-600 whitespace-pre-line">{info.value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-6 rounded-xl bg-navy-950 text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 size-32 bg-cyan-500/20 rounded-full blur-2xl transform translate-x-10 -translate-y-10 pointer-events-none" />
                                <h4 className="font-semibold text-lg mb-2 relative z-10">Looking for Support?</h4>
                                <p className="text-sm text-slate-300 mb-4 relative z-10">
                                    Existing clients with an active Service Level Agreement (SLA) can access the 24/7 priority emergency portal.
                                </p>
                                <Button variant="outline" size="sm" className="w-full border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 relative z-10">
                                    Client Portal Login
                                </Button>
                            </div>

                        </motion.div>

                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
}
