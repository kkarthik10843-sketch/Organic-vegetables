function ProductDetails({ productId }) {
    try {
        // Mock data fetch for the specific product ID
        const product = {
            id: productId,
            name: 'Fresh Tomato',
            price: 100,
            farmer: 'Ramesh Kumar',
            location: 'Coimbatore, Tamil Nadu',
            quantity: '100 kg',
            harvestDate: '2026-08-24',
            image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=80',
            rating: 4.8,
            reviews: 124,
            description: 'Organically grown fresh red tomatoes directly from our farm in Coimbatore. We do not use harmful pesticides. Perfect for daily cooking, salads, and sauces. Handpicked for the best quality and freshness.'
        };

        return (
            <div className="max-w-6xl mx-auto px-4 py-8" data-name="product-details" data-file="pages/ProductDetails.js">
                <button 
                    onClick={() => window.location.hash = '#products'} 
                    className="mb-6 flex items-center gap-2 text-slate-600 hover:text-[var(--primary)] font-medium transition-colors"
                >
                    <div className="icon-arrow-left"></div>
                    Back to Marketplace
                </button>

                <div className="card p-6 md:p-8">
                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Left: Product Image */}
                        <div className="relative">
                            <ProductImage 
                                src={product.image} 
                                alt={product.name} 
                                className="w-full h-[400px] md:h-[500px] rounded-2xl"
                            />
                            <div className="absolute top-4 right-4 bg-[var(--primary)] text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1">
                                <div className="icon-badge-check"></div>
                                DIRECT FROM FARM
                            </div>
                        </div>

                        {/* Right: Product Details */}
                        <div className="flex flex-col">
                            <div className="flex justify-between items-start mb-2">
                                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">{product.name}</h1>
                            </div>
                            
                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex items-center gap-1 text-yellow-500">
                                    <div className="icon-star fill-current"></div>
                                    <span className="text-slate-700 font-bold text-lg">{product.rating}</span>
                                </div>
                                <span className="text-slate-400">|</span>
                                <span className="text-slate-600 hover:text-[var(--primary)] cursor-pointer">{product.reviews} Reviews</span>
                            </div>

                            <div className="mb-8">
                                <span className="text-4xl font-black text-[var(--primary)]">₹{product.price}</span>
                                <span className="text-lg text-slate-500 font-medium"> / kg</span>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-8 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                <div className="flex gap-3">
                                    <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                                        <div className="icon-user"></div>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 font-medium">Farmer Name</p>
                                        <p className="font-bold text-slate-900">{product.farmer}</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                                        <div className="icon-map-pin"></div>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 font-medium">Farm Location</p>
                                        <p className="font-bold text-slate-900 line-clamp-1">{product.location}</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                                        <div className="icon-package"></div>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 font-medium">Available Quantity</p>
                                        <p className="font-bold text-slate-900">{product.quantity}</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                                        <div className="icon-calendar"></div>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 font-medium">Harvest Date</p>
                                        <p className="font-bold text-slate-900">{product.harvestDate}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8 flex-grow">
                                <h3 className="font-bold text-lg mb-2">Description</h3>
                                <p className="text-slate-600 leading-relaxed">{product.description}</p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                                <button 
                                    className="btn-secondary flex-1 py-4 text-lg"
                                    onClick={() => window.location.hash = '#cart'}
                                >
                                    <div className="icon-shopping-cart"></div>
                                    Add to Cart
                                </button>
                                <button 
                                    className="btn-primary flex-1 py-4 text-lg"
                                    onClick={() => window.location.hash = '#checkout'}
                                >
                                    <div className="icon-credit-card"></div>
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('ProductDetails error:', error);
        return null;
    }
}