export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 py-12">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                    <span className="font-space font-bold tracking-widest text-white text-lg">HEMANTH KUMAR.A</span>
                    <p className="text-gray-500 text-xs font-space mt-2">ADVANCED TACTICAL SYSTEMS</p>
                </div>
                <div className="flex gap-8 text-xs font-space text-gray-400">
                    <a href="#" className="hover:text-white transition">LEGAL</a>
                    <a href="#" className="hover:text-white transition">PRIVACY</a>
                    <a href="#" className="hover:text-white transition">CONTACT</a>
                </div>
                <p className="text-gray-600 text-xs font-rajdhani">© 2026 HEMANTH KUMAR.A. CLASSIFIED.</p>
            </div>
        </footer>
    );
}
