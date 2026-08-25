function Checkout() {
    try {
        const [isSuccess, setIsSuccess] = React.useState(false);
        const cartTotal = window.AgriDirect.cart.reduce((total, item) => total + item.price * item.quantity, 0) + (window.AgriDirect.cart.length ? 30 : 0);

        const handlePayment = (e) => {
            e.preventDefault();
            setIsSuccess(true);
        };

        if (isSuccess) {
            return (
                <div className="max-w-2xl mx-auto px-4 py-16 text-center" data-name="checkout-success" data-file="pages/Checkout.js">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <div className="icon-check text-4xl text-[var(--primary)]"></div>
                    </div>
                    <h1 className="text-3xl font-bold mb-4">Order Placed Successfully!</h1>
                    <p className="text-slate-600 mb-2">Thank you for supporting direct farming.</p>
                    <p className="font-semibold text-lg mb-8">Order ID: ORD-1004</p>
                    
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button onClick={() => window.location.hash = '#orders/ORD-1004'} className="btn-primary">
                            Track Order
                        </button>
                        <button onClick={() => window.location.hash = '#products'} className="btn-secondary">
                            Continue Shopping
                        </button>
                    </div>
                </div>
            );
        }

        return (
            <div className="max-w-4xl mx-auto px-4 py-8" data-name="checkout-page" data-file="pages/Checkout.js">
                <h1 className="text-2xl font-bold mb-6">Checkout</h1>
                
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <div className="card p-6 mb-6">
                            <h3 className="font-bold text-lg mb-4">Delivery Address</h3>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                                    <input type="text" defaultValue="Amit Sharma" className="w-full border border-slate-300 rounded-lg px-3 py-2" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Address</label>
                                    <textarea rows="3" defaultValue="123 Main St, Tech Park Phase 1" className="w-full border border-slate-300 rounded-lg px-3 py-2"></textarea>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">City</label>
                                        <input type="text" defaultValue="Chennai" className="w-full border border-slate-300 rounded-lg px-3 py-2" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Pincode</label>
                                        <input type="text" defaultValue="600001" className="w-full border border-slate-300 rounded-lg px-3 py-2" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                    <div>
                        <div className="card p-6 mb-6">
                            <h3 className="font-bold text-lg mb-4">Payment Method (Mock)</h3>
                            <div className="space-y-3 mb-6">
                                <label className="flex items-center gap-3 p-3 border border-[var(--primary)] bg-green-50 rounded-lg cursor-pointer">
                                    <input type="radio" name="payment" defaultChecked className="text-[var(--primary)] focus:ring-[var(--primary)]" />
                                    <span className="font-medium text-[var(--primary)]">UPI / QR Code</span>
                                </label>
                                <label className="flex items-center gap-3 p-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50">
                                    <input type="radio" name="payment" className="text-[var(--primary)] focus:ring-[var(--primary)]" />
                                    <span className="font-medium">Credit / Debit Card</span>
                                </label>
                                <label className="flex items-center gap-3 p-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50">
                                    <input type="radio" name="payment" className="text-[var(--primary)] focus:ring-[var(--primary)]" />
                                    <span className="font-medium">Cash on Delivery</span>
                                </label>
                            </div>
                            
                            <div className="border-t border-slate-200 pt-4 mb-6">
                                <div className="flex justify-between font-bold text-xl">
                                    <span>Amount to Pay</span>
                                    <span className="text-[var(--primary)]">₹{cartTotal}</span>
                                </div>
                            </div>
                            
                            <button onClick={handlePayment} className="w-full btn-primary text-lg">
                                Pay ₹{cartTotal}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Checkout page error:', error);
        return null;
    }
}