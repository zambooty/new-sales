"use client";

import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

export default function TermsPage() {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <NavBar />

            <main className="flex-1 pt-32 pb-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                    <div className="bg-white p-8 md:p-12 rounded-2xl border border-slate-200 shadow-sm">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-navy-950 tracking-tight mb-8">
                            Terms of Service
                        </h1>

                        <div className="prose prose-slate prose-cyan max-w-none text-slate-600">
                            <p className="lead text-lg mb-8">
                                Last updated: {new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}
                            </p>

                            <p className="mb-6">
                                Please read these Terms of Service completely before using Makesoft.io which is operated by Makesoft. This Agreement documents the legally binding terms and conditions attached to the use of the Site.
                            </p>

                            <h2 className="text-xl font-bold text-navy-950 mt-8 mb-4">1. Intellectual Property</h2>
                            <p className="mb-6">
                                The Site and all of its original content are the sole property of Makesoft and are, as such, fully protected by the appropriate international copyright and other intellectual property rights laws.
                            </p>

                            <h2 className="text-xl font-bold text-navy-950 mt-8 mb-4">2. Managed Services & Uptime</h2>
                            <p className="mb-6">
                                For clients utilizing our Managed Hosting services, service level agreements (SLAs) regarding 99.9% uptime are bound by specific negotiated contracts and are subject to fair use limits and force majeure exclusions.
                            </p>

                            <h2 className="text-xl font-bold text-navy-950 mt-8 mb-4">3. Limitation of Liability</h2>
                            <p className="mb-6">
                                In no event shall Makesoft, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
                            </p>

                            <h2 className="text-xl font-bold text-navy-950 mt-8 mb-4">4. Governing Law</h2>
                            <p>
                                This Agreement is governed in accordance with the laws of the State of California, United States.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
