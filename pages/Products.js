function Products() {
    try {
        const products = [
            { id: 1, name: 'Fresh Tomato', price: 100, farmer: 'Ramesh Kumar', location: 'Coimbatore, Tamil Nadu', quantity: '100 kg', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=400&q=80', rating: 4.8 },
            { id: 2, name: 'Fresh Onion', price: 120, farmer: 'Suresh Singh', location: 'Nashik, Maharashtra', quantity: '500 kg', image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=400&q=80', rating: 4.5 },
            { id: 3, name: 'Fresh Potato', price: 300, farmer: 'Amit Patel', location: 'Agra, UP', quantity: '300 kg', image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=400&q=80', rating: 4.7 },
            { id: 4, name: 'Fresh Carrot', price: 350, farmer: 'Ramesh Kumar', location: 'Ooty, Tamil Nadu', quantity: '50 kg', image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=400&q=80', rating: 4.9 },
            { id: 5, name: 'Green Chilli', price: 15, farmer: 'Rajesh', location: 'Guntur, Tamil Nadu', quantity: '40 kg', image: 'https://images.unsplash.com/photo-1588144605658-00d9841f3d4b?auto=format&fit=crop&w=400&q=80', rating: 4.6 },
            { id: 6, name: 'Fresh Cabbage', price: 55, farmer: 'Vijay', location: 'Hosur, Tamil Nadu', quantity: '80 kg', image: 'https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?auto=format&fit=crop&w=400&q=80', rating: 4.4 },
            { id: 7, name: 'Fresh Banana', price: 45, farmer: 'Murugan', location: 'Trichy, Tamil Nadu', quantity: '150 kg', image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=400&q=80', rating: 4.8 },
            { id: 8, name: 'Brinjal / Eggplant', price: 100, farmer: 'Kannan', location: 'Madurai, Tamil Nadu', quantity: '60 kg', image: 'https://images.unsplash.com/photo-1615486171448-4fd1331f421f?auto=format&fit=crop&w=400&q=80', rating: 4.3 },
            { id: 9, name: 'Lady\'s Finger / Okra', price: 120, farmer: 'Sundar', location: 'Salem, Tamil Nadu', quantity: '70 kg', image: 'https://images.unsplash.com/photo-1425543103986-22abb7d7e8d2?auto=format&fit=crop&w=400&q=80', rating: 4.5 },
            { id: 10, name: 'Cauliflower', price: 300, farmer: 'Velu', location: 'Ooty, Tamil Nadu', quantity: '45 kg', image: 'https://images.unsplash.com/photo-1568584716965-063fb5583b27?auto=format&fit=crop&w=400&q=80', rating: 4.7 },
            { id: 11, name: 'Spinach', price: 350, farmer: 'Arun', location: 'Coimbatore, Tamil Nadu', quantity: '25 kg', image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=400&q=80', rating: 4.9 },
            { id: 12, name: 'Drumstick', price: 15, farmer: 'Prakash', location: 'Theni, Tamil Nadu', quantity: '90 kg', image: 'https://images.unsplash.com/photo-1627914041180-2a81878b30d3?auto=format&fit=crop&w=400&q=80', rating: 4.2 },
            { id: 13, name: 'Beetroot', price: 55, farmer: 'Ganesh', location: 'Nilgiris, Tamil Nadu', quantity: '65 kg', image: 'https://images.unsplash.com/photo-1593006526733-40aaf17ea87f?auto=format&fit=crop&w=400&q=80', rating: 4.6 },
            { id: 14, name: 'Radish', price: 45, farmer: 'Karthik', location: 'Erode, Tamil Nadu', quantity: '100 kg', image: 'https://images.unsplash.com/photo-1582294576856-11f2a36b33b7?auto=format&fit=crop&w=400&q=80', rating: 4.4 },
            { id: 15, name: 'Cucumber', price: 100, farmer: 'Dinesh', location: 'Karur, Tamil Nadu', quantity: '120 kg', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=400&q=80', rating: 4.7 },
            { id: 16, name: 'Capsicum', price: 120, farmer: 'Surya', location: 'Krishnagiri, Tamil Nadu', quantity: '40 kg', image: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=400&q=80', rating: 4.8 },
            { id: 17, name: 'Pumpkin', price: 300, farmer: 'Babu', location: 'Tirunelveli, Tamil Nadu', quantity: '200 kg', image: 'https://images.unsplash.com/photo-1570586437263-ab629fccc818?auto=format&fit=crop&w=400&q=80', rating: 4.5 },
            { id: 18, name: 'Beans', price: 350, farmer: 'Mani', location: 'Dindigul, Tamil Nadu', quantity: '55 kg', image: 'https://images.unsplash.com/photo-1581454044949-0c3132e01dfb?auto=format&fit=crop&w=400&q=80', rating: 4.6 },
            { id: 19, name: 'Bitter Gourd', price: 15, farmer: 'Prabhu', location: 'Virudhunagar, Tamil Nadu', quantity: '30 kg', image: 'https://images.unsplash.com/photo-1628773950293-8da44c1143a4?auto=format&fit=crop&w=400&q=80', rating: 4.1 },
            { id: 20, name: 'Bottle Gourd', price: 55, farmer: 'Chandran', location: 'Thanjavur, Tamil Nadu', quantity: '75 kg', image: 'https://images.unsplash.com/photo-1601646194729-ecfb0df75a3a?auto=format&fit=crop&w=400&q=80', rating: 4.3 },
            { id: 21, name: 'Green Peas', price: 45, farmer: 'Siva', location: 'Pudukkottai, Tamil Nadu', quantity: '45 kg', image: 'https://images.unsplash.com/photo-1595858632662-790184478149?auto=format&fit=crop&w=400&q=80', rating: 4.7 },
            { id: 22, name: 'Coriander', price: 100, farmer: 'Kumar', location: 'Cuddalore, Tamil Nadu', quantity: '20 kg', image: 'https://images.unsplash.com/photo-1584347715086-4e5b30612985?auto=format&fit=crop&w=400&q=80', rating: 4.9 },
            { id: 23, name: 'Mint', price: 120, farmer: 'Bala', location: 'Kanyakumari, Tamil Nadu', quantity: '15 kg', image: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=400&q=80', rating: 4.8 },
            { id: 24, name: 'Sweet Corn', price: 300, farmer: 'Anand', location: 'Vellore, Tamil Nadu', quantity: '110 kg', image: 'https://images.unsplash.com/photo-1550828520-4cb496926fc9?auto=format&fit=crop&w=400&q=80', rating: 4.7 },
        ];

        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-name="products-page" data-file="pages/Products.js">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">Fresh Products</h1>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <input type="text" placeholder="Search products..." className="border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" />
                        <select className="border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]">
                            <option>All Categories</option>
                            <option>Vegetables</option>
                            <option>Fruits</option>
                            <option>Grains</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map(product => (
                        <div key={product.id} className="card group hover:shadow-md transition-shadow flex flex-col">
                            <ProductImage 
                                src={product.image} 
                                alt={product.name} 
                                className="h-48 group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="p-4 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-bold line-clamp-1">{product.name}</h3>
                                    <p className="font-bold text-[var(--primary)] shrink-0 ml-2">₹{product.price}<span className="text-xs text-slate-500 font-normal">/kg</span></p>
                                </div>
                                <div className="space-y-1 mb-4 text-sm text-slate-600">
                                    <div className="flex items-center gap-2">
                                        <div className="icon-user text-slate-400"></div>
                                        <span className="truncate">{product.farmer}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="icon-map-pin text-slate-400"></div>
                                        <span className="truncate">{product.location}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-1 text-yellow-500">
                                            <div className="icon-star fill-current text-sm"></div>
                                            <span className="text-slate-700 font-medium">{product.rating}</span>
                                        </div>
                                        <span className="text-xs font-medium text-slate-500">{product.quantity} avail</span>
                                    </div>
                                </div>
                                <div className="mt-auto grid grid-cols-2 gap-2">
                                    <button 
                                        className="btn-secondary py-2 px-2 text-sm w-full"
                                        onClick={() => window.location.hash = `#product/${product.id}`}
                                    >
                                        <div className="icon-eye"></div>
                                        View
                                    </button>
                                    <button 
                                        className="btn-primary py-2 px-2 text-sm w-full" 
                                        onClick={() => window.location.hash = '#cart'}
                                    >
                                        <div className="icon-shopping-cart"></div>
                                        Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    } catch (error) {
        console.error('Products page error:', error);
        return null;
    }
}