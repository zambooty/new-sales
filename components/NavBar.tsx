"use client";

import Link from "next/link";
import { Button } from "./ui/Button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={cn(
            "fixed top-0 z-50 w-full transition-all duration-300",
            isScrolled ? "bg-navy-950/70 backdrop-blur-xl shadow-lg border-b border-white/5 py-3" : "bg-transparent py-5"
        )}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    {/* Glowing tech logo representation */}
                    <div className="size-10 rounded-lg flex items-center justify-center bg-gradient-to-tr from-cyan-400 to-indigo-500 shadow-[0_0_20px_rgba(34,211,238,0.4)] relative overflow-hidden group">
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        <div className="size-5 bg-navy-950 rounded-sm relative z-10" />
                    </div>
                    <Link href="/" className="text-white font-extrabold text-2xl tracking-tight hover:text-cyan-400 transition-colors">
                        Makesoft
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-10 text-sm font-semibold">
                    <Link href="/services" className="text-slate-300 hover:text-white transition-colors relative group">
                        Services
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full" />
                    </Link>
                    <Link href="/about" className="text-slate-300 hover:text-white transition-colors relative group">
                        About Us
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full" />
                    </Link>
                    <Link href="/contact" tabIndex={-1}>
                        <Button className="bg-white/10 text-white border border-white/20 hover:bg-white hover:text-navy-950 transition-all duration-300 shadow-[0_0_15px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.8)] backdrop-blur-md px-6 py-2 rounded-full">
                            Get Started
                        </Button>
                    </Link>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden flex items-center">
                    <button
                        type="button"
                        className="text-white hover:text-cyan-400 transition-colors focus:outline-none"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        {mobileMenuOpen ? <X className="size-7" /> : <Menu className="size-7" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden bg-navy-950/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden absolute top-full left-0 w-full"
                    >
                        <div className="px-6 py-8 space-y-6 flex flex-col">
                            <Link
                                href="/services"
                                className="block text-xl font-medium text-slate-300 hover:text-white hover:pl-4 transition-all duration-300"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Services
                            </Link>
                            <Link
                                href="/about"
                                className="block text-xl font-medium text-slate-300 hover:text-white hover:pl-4 transition-all duration-300"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                About Us
                            </Link>
                            <div className="pt-6 border-t border-white/10">
                                <Link href="/contact" tabIndex={-1}>
                                    <Button className="w-full text-lg h-14 bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-400 hover:to-indigo-400 text-white border-0 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                                        Get Started
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
