"use client";

import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <NavBar />

            <main className="flex-1 pt-32 pb-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                    <div className="bg-white p-8 md:p-12 rounded-2xl border border-slate-200 shadow-sm">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-navy-950 tracking-tight mb-8">
                            Privacy Policy
                        </h1>

                        <div className="prose prose-slate prose-cyan max-w-none text-slate-600">
                            <p className="lead text-lg mb-8">
                                Last updated: {new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}
                            </p>

                            <p className="mb-6">
                                At Makesoft, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                            </p>

                            <h2 className="text-xl font-bold text-navy-950 mt-8 mb-4">1. Information We Collect</h2>
                            <p className="mb-6">
                                We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us. This includes names, email addresses, phone numbers, and company details.
                            </p>

                            <h2 className="text-xl font-bold text-navy-950 mt-8 mb-4">2. How We Use Your Information</h2>
                            <p className="mb-6">
                                We use the information we collect or receive to facilitate account creation, send administrative information, fulfill and manage your orders, respond to user inquiries, and strictly for internal analytics to improve our digital infrastructure.
                            </p>

                            <h2 className="text-xl font-bold text-navy-950 mt-8 mb-4">3. Data Security</h2>
                            <p className="mb-6">
                                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
                            </p>

                            <h2 className="text-xl font-bold text-navy-950 mt-8 mb-4">4. Contact Us</h2>
                            <p>
                                If you have questions or comments about this Privacy Policy, please contact us at: <br />
                                <a href="mailto:privacy@makesoft.io" className="text-cyan-500 hover:text-cyan-600 font-medium tracking-wide">privacy@makesoft.io</a>
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
