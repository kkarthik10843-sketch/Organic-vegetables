function Hero() {
    try {
        return (
            <section className="relative overflow-hidden bg-slate-50 pt-16 pb-24 lg:pt-24 lg:pb-32" data-name="hero" data-file="components/Hero.js">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 font-semibold text-sm mb-6">
                                <div className="icon-badge-check"></div>
                                <span>100% Direct from Farmers</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                                From Farm <span className="text-[var(--primary)]">Directly</span> to You
                            </h1>
                            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                                Empowering Farmers. Reducing Intermediaries. Delivering Fresh. Join the revolution in agricultural supply chain and get the freshest produce at the best prices.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="#products" className="btn-primary text-lg px-8 py-4">
                                    <div className="icon-shopping-bag"></div>
                                    Shop Fresh Products
                                </a>
                                <a href="#register-farmer" className="btn-secondary text-lg px-8 py-4">
                                    <div className="icon-tractor"></div>
                                    Sell Your Produce
                                </a>
                            </div>
                            
                            <div className="mt-10 flex items-center gap-6 text-sm text-slate-500 font-medium">
                                <div className="flex items-center gap-2">
                                    <div className="icon-circle-check text-[var(--primary)] text-xl"></div>
                                    <span>Better Income</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="icon-circle-check text-[var(--primary)] text-xl"></div>
                                    <span>Lower Prices</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="icon-circle-check text-[var(--primary)] text-xl"></div>
                                    <span>Fresh Quality</span>
                                </div>
                            </div>
                        </div>

                        {/* Image/Illustration */}
                        <div className="relative lg:ml-auto">
                            <div className="absolute inset-0 bg-green-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                                <img 
                                    src="https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=800" 
                                    alt="Indian farmer in a field" 
                                    className="w-full h-auto object-cover aspect-[4/3]"
                                />
                                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg flex items-center gap-3">
                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                        <div className="icon-trending-up text-green-600"></div>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 font-semibold">Farmers Earn</p>
                                        <p className="text-sm font-bold text-slate-900">+40% More</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Hero error:', error);
        return null;
    }
}