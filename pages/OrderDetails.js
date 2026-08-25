function OrderDetails({ orderId }) {
    try {
        const order = {
            id: orderId || 'ORD-1001',
            date: '2026-08-25',
            status: 'SHIPPED',
            paymentStatus: 'PAID',
            amount: 40,
            product: {
                name: 'Fresh Tomato',
                quantity: '2 kg',
                price: 20,
                image: 'https://images.pexels.com/photos/1327430/pexels-photo-1327430.jpeg?auto=compress&cs=tinysrgb&w=400'
            },
            farmer: {
                name: 'Ramesh Kumar',
                location: 'Coimbatore, Tamil Nadu',
                image: 'https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=400'
            },
            delivery: {
                pickup: 'Farm A, Coimbatore',
                drop: '123 Main St, Chennai',
                estimated: '2026-08-26'
            }
        };

        const timeline = [
            { status: 'PLACED', label: 'Order Placed', done: true },
            { status: 'ACCEPTED', label: 'Accepted by Farmer', done: true },
            { status: 'PACKED', label: 'Packed', done: true },
            { status: 'SHIPPED', label: 'Shipped', done: true },
            { status: 'OUT_FOR_DELIVERY', label: 'Out for Delivery', done: false },
            { status: 'DELIVERED', label: 'Delivered', done: false },
        ];

        return (
            <div className="max-w-4xl mx-auto px-4 py-8" data-name="order-details" data-file="pages/OrderDetails.js">
                <div className="mb-6 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Order Details</h1>
                    <div className="space-x-4">
                        <button onClick={() => window.location.hash = '#buyer/orders'} className="text-slate-600 hover:text-[var(--primary)] font-medium">Back to Orders</button>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 space-y-6">
                        <div className="card p-6">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <p className="text-sm text-slate-500">Order ID</p>
                                    <p className="font-bold text-lg">{order.id}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-slate-500">Order Date</p>
                                    <p className="font-semibold">{order.date}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 mb-6">
                                <ProductImage src={order.product.image} alt={order.product.name} className="w-20 h-20 rounded-lg shrink-0" />
                                <div>
                                    <h3 className="font-bold text-lg">{order.product.name}</h3>
                                    <p className="text-slate-600">{order.product.quantity} x ₹{order.product.price}</p>
                                </div>
                                <div className="ml-auto text-right">
                                    <p className="text-sm text-slate-500">Total Amount</p>
                                    <p className="font-bold text-xl text-[var(--primary)]">₹{order.amount}</p>
                                </div>
                            </div>
                        </div>

                        <div className="card p-6">
                            <h3 className="font-bold text-lg mb-6">Order Timeline</h3>
                            <div className="relative border-l-2 border-green-200 ml-4 space-y-6">
                                {timeline.map((step, idx) => (
                                    <div key={idx} className="relative pl-8">
                                        <div className={`absolute -left-[11px] w-5 h-5 rounded-full flex items-center justify-center ${step.done ? 'bg-[var(--primary)] text-white' : 'bg-slate-200'}`}>
                                            {step.done && <div className="icon-check text-xs"></div>}
                                        </div>
                                        <p className={`font-semibold ${step.done ? 'text-slate-900' : 'text-slate-400'}`}>{step.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="card p-6">
                            <h3 className="font-bold mb-4">Farmer Details</h3>
                            <div className="flex items-center gap-3">
                                <img src={order.farmer.image} alt={order.farmer.name} className="w-12 h-12 rounded-full object-cover" />
                                <div>
                                    <p className="font-semibold">{order.farmer.name}</p>
                                    <p className="text-xs text-slate-500">{order.farmer.location}</p>
                                </div>
                            </div>
                        </div>
                        <div className="card p-6">
                            <h3 className="font-bold mb-4">Delivery Info</h3>
                            <div className="space-y-3 text-sm">
                                <div>
                                    <p className="text-slate-500">Pickup</p>
                                    <p className="font-medium">{order.delivery.pickup}</p>
                                </div>
                                <div>
                                    <p className="text-slate-500">Drop</p>
                                    <p className="font-medium">{order.delivery.drop}</p>
                                </div>
                                <div>
                                    <p className="text-slate-500">Estimated</p>
                                    <p className="font-medium">{order.delivery.estimated}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('OrderDetails error:', error);
        return null;
    }
}