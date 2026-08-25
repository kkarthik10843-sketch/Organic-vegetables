function Header({ currentRoute, cartCount = 0 }) {
    try {
        const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

        const navLinks = [
            { id: '#home', label: 'Home' },
            { id: '#products', label: 'Marketplace' },
            { id: '#market-prices', label: 'Prices' },
            { id: '#ai-tools', label: 'AI Tools' },
        ];

        return (
            <header className="glass-nav" data-name="header" data-file="components/Header.js">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <a href="#home" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                            <div className="w-8 h-8 bg-[var(--primary)] rounded-lg flex items-center justify-center">
                                <div className="icon-leaf text-white"></div>
                            </div>
                            <span className="font-bold text-xl text-slate-900 tracking-tight">AgriDirect</span>
                        </a>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-8">
                            {navLinks.map(link => (
                                <a 
                                    key={link.id}
                                    href={link.id}
                                    className={`text-sm font-medium transition-colors hover:text-[var(--primary)] ${currentRoute === link.id ? 'text-[var(--primary)]' : 'text-slate-600'}`}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>

                        {/* Actions */}
                        <div className="hidden md:flex items-center gap-4">
                            <a href="#cart" className="relative p-2 text-slate-600 hover:text-[var(--primary)] transition-colors">
                                <div className="icon-shopping-cart text-xl"></div>
                                <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full">{cartCount}</span>
                            </a>
                            <a href="#login" className="text-slate-600 hover:text-[var(--primary)] font-medium text-sm transition-colors">Login</a>
                            <a href="#register" className="btn-primary py-2 px-4 text-sm">Join Now</a>
                        </div>

                        {/* Mobile menu button */}
                        <button 
                            className="md:hidden p-2 text-slate-600"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <div className={`text-2xl ${isMobileMenuOpen ? 'icon-x' : 'icon-menu'}`}></div>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden border-t border-slate-100 bg-white absolute w-full shadow-lg">
                        <div className="px-4 py-4 space-y-4 flex flex-col">
                            {navLinks.map(link => (
                                <a 
                                    key={link.id}
                                    href={link.id}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`block text-base font-medium ${currentRoute === link.id ? 'text-[var(--primary)]' : 'text-slate-600'}`}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a href="#cart" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-slate-600">Cart ({cartCount})</a>
                            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                                <a href="#login" onClick={() => setIsMobileMenuOpen(false)} className="btn-secondary w-full">Login</a>
                                <a href="#register" onClick={() => setIsMobileMenuOpen(false)} className="btn-primary w-full">Join Now</a>
                            </div>
                        </div>
                    </div>
                )}
            </header>
        );
    } catch (error) {
        console.error('Header error:', error);
        return null;
    }
}