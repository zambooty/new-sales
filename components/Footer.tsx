import Link from "next/link";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-navy-950 text-slate-400 py-12 border-t border-white/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div className="md:col-span-2">
                        <Link href="/" className="text-white font-bold text-xl tracking-tight mb-4 inline-block">
                            Makesoft
                        </Link>
                        <p className="max-w-xs text-sm leading-relaxed mb-6">
                            Stable, secure, and scalable digital systems that support sustainable growth. The technical partner for your business.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Services</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/services#website-development" className="hover:text-cyan-400 transition-colors">Website Development</Link></li>
                            <li><Link href="/services#managed-hosting" className="hover:text-cyan-400 transition-colors">Managed Hosting</Link></li>
                            <li><Link href="/services#maintenance-support" className="hover:text-cyan-400 transition-colors">Maintenance</Link></li>
                            <li><Link href="/services#automation-systems" className="hover:text-cyan-400 transition-colors">Automation Systems</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/about" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
                            <li><Link href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 text-sm flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p>&copy; {currentYear} Makesoft. All rights reserved.</p>
                    <div className="flex space-x-4">
                        <a href="https://linkedin.com/company/makesoft" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
                        <a href="https://twitter.com/makesoft" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Twitter</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
