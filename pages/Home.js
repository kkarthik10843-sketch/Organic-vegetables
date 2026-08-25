function Home() {
    try {
        return (
            <div data-name="home-page" data-file="pages/Home.js">
                <Hero />
                
                {/* Problem Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">The Problem</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto mb-12">
                            Traditional supply chains involve multiple intermediaries, reducing farmer earnings and increasing consumer prices.
                        </p>
                        
                        <div className="grid md:grid-cols-4 gap-8">
                            <div className="card p-6 flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-4 text-3xl">
                                    <div className="icon-users"></div>
                                </div>
                                <h3 className="font-bold text-lg mb-2">Multiple Intermediaries</h3>
                                <p className="text-sm text-slate-500">Too many middlemen taking a cut from the actual value.</p>
                            </div>
                            <div className="card p-6 flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mb-4 text-3xl">
                                    <div className="icon-trending-up"></div>
                                </div>
                                <h3 className="font-bold text-lg mb-2">Higher Consumer Prices</h3>
                                <p className="text-sm text-slate-500">Consumers pay significantly more than the farm gate price.</p>
                            </div>
                            <div className="card p-6 flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-yellow-50 text-yellow-600 rounded-2xl flex items-center justify-center mb-4 text-3xl">
                                    <div className="icon-trending-down"></div>
                                </div>
                                <h3 className="font-bold text-lg mb-2">Lower Farmer Income</h3>
                                <p className="text-sm text-slate-500">Farmers receive only a fraction of what consumers pay.</p>
                            </div>
                            <div className="card p-6 flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-slate-100 text-slate-600 rounded-2xl flex items-center justify-center mb-4 text-3xl">
                                    <div className="icon-eye-off"></div>
                                </div>
                                <h3 className="font-bold text-lg mb-2">Lack of Transparency</h3>
                                <p className="text-sm text-slate-500">Opaque pricing structures harm both producers and buyers.</p>
                            </div>
                        </div>

                        {/* Flow Diagram */}
                        <div className="mt-16 bg-slate-50 p-8 rounded-2xl border border-slate-200">
                            <h3 className="font-bold text-xl mb-8">Traditional Supply Chain</h3>
                            <div className="flex flex-wrap justify-center items-center gap-4 text-sm font-semibold">
                                <div className="bg-white px-4 py-2 rounded shadow-sm border border-slate-200">Farmer</div>
                                <div className="icon-arrow-right text-slate-400"></div>
                                <div className="bg-red-50 text-red-700 px-4 py-2 rounded shadow-sm border border-red-200">Trader</div>
                                <div className="icon-arrow-right text-slate-400"></div>
                                <div className="bg-red-50 text-red-700 px-4 py-2 rounded shadow-sm border border-red-200">Wholesaler</div>
                                <div className="icon-arrow-right text-slate-400"></div>
                                <div className="bg-red-50 text-red-700 px-4 py-2 rounded shadow-sm border border-red-200">Distributor</div>
                                <div className="icon-arrow-right text-slate-400"></div>
                                <div className="bg-red-50 text-red-700 px-4 py-2 rounded shadow-sm border border-red-200">Retailer</div>
                                <div className="icon-arrow-right text-slate-400"></div>
                                <div className="bg-white px-4 py-2 rounded shadow-sm border border-slate-200">Consumer</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Solution Section */}
                <section className="py-20 bg-[var(--primary)] text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Solution</h2>
                        <p className="text-green-100 max-w-2xl mx-auto mb-16">
                            AgriDirect bridges the gap, creating a transparent, fair, and efficient marketplace.
                        </p>

                        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
                            <div className="bg-white/10 backdrop-blur p-8 rounded-2xl w-full md:w-64 border border-white/20">
                                <div className="icon-tractor text-5xl mb-4"></div>
                                <h3 className="font-bold text-xl">Farmer</h3>
                                <p className="text-green-200 text-sm mt-2">Sets price, earns more</p>
                            </div>
                            
                            <div className="hidden md:flex flex-col items-center">
                                <div className="w-full h-1 bg-white/30 rounded-full w-32 relative">
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 icon-arrow-right text-white/50 text-xl"></div>
                                </div>
                            </div>

                            <div className="bg-white text-[var(--primary)] p-8 rounded-2xl w-full md:w-72 shadow-xl transform scale-110">
                                <div className="icon-leaf text-5xl mb-4 mx-auto"></div>
                                <h3 className="font-bold text-2xl">AgriDirect</h3>
                                <p className="text-slate-600 text-sm mt-2">Direct Marketplace</p>
                            </div>

                            <div className="hidden md:flex flex-col items-center">
                                <div className="w-full h-1 bg-white/30 rounded-full w-32 relative">
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 icon-arrow-right text-white/50 text-xl"></div>
                                </div>
                            </div>

                            <div className="bg-white/10 backdrop-blur p-8 rounded-2xl w-full md:w-64 border border-white/20">
                                <div className="icon-shopping-cart text-5xl mb-4"></div>
                                <h3 className="font-bold text-xl">Consumer</h3>
                                <p className="text-green-200 text-sm mt-2">Pays less, gets fresh</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    } catch (error) {
        console.error('Home page error:', error);
        return null;
    }
}