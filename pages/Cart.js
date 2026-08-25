function Cart() {
    try {
        const cartItems = [
            { id: 1, name: 'Tomato', price: 20, quantity: 2, image: 'https://images.pexels.com/photos/1327430/pexels-photo-1327430.jpeg?auto=compress&cs=tinysrgb&w=400' },
            { id: 2, name: 'Onion', price: 25, quantity: 5, image: 'https://images.pexels.com/photos/17504008/pexels-photo-17504008.jpeg?auto=compress&cs=tinysrgb&w=400' },
        ];

        const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        const deliveryCharge = 30;
        const total = subtotal + deliveryCharge;

        return (
            <div className="max-w-4xl mx-auto px-4 py-8" data-name="cart-page" data-file="pages/Cart.js">
                <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
                
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-4">
                        {cartItems.map(item => (
                            <div key={item.id} className="card p-4 flex items-center gap-4">
                                <ProductImage src={item.image} alt={item.name} className="w-20 h-20 rounded-lg shrink-0" />
                                <div className="flex-grow">
                                    <h3 className="font-bold text-lg">{item.name}</h3>
                                    <p className="text-[var(--primary)] font-semibold">₹{item.price}/kg</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors">
                                        <div className="icon-minus text-sm"></div>
                                    </button>
                                    <span className="font-medium w-4 text-center">{item.quantity}</span>
                                    <button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors">
                                        <div className="icon-plus text-sm"></div>
                                    </button>
                                </div>
                                <div className="font-bold text-lg w-16 text-right">
                                    ₹{item.price * item.quantity}
                                </div>
                                <button className="text-red-500 hover:text-red-600 p-2">
                                    <div className="icon-trash-2 text-xl"></div>
                                </button>
                            </div>
                        ))}
                    </div>
                    
                    <div className="card p-6 h-fit">
                        <h3 className="font-bold text-lg mb-4">Order Summary</h3>
                        <div className="space-y-3 mb-6 text-slate-600">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>₹{subtotal}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Delivery Charge</span>
                                <span>₹{deliveryCharge}</span>
                            </div>
                            <div className="border-t border-slate-200 pt-3 flex justify-between font-bold text-lg text-slate-900">
                                <span>Total</span>
                                <span className="text-[var(--primary)]">₹{total}</span>
                            </div>
                        </div>
                        <button className="w-full btn-primary" onClick={() => window.location.hash = '#checkout'}>
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Cart page error:', error);
        return null;
    }
}