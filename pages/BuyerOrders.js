function BuyerOrders() {
    try {
        const orders = [
            {
                id: 'ORD-1001',
                date: '2026-08-25',
                productName: 'Tomato',
                quantity: '2 kg',
                amount: 40,
                status: 'SHIPPED',
                paymentStatus: 'PAID',
                image: 'https://images.pexels.com/photos/1327430/pexels-photo-1327430.jpeg?auto=compress&cs=tinysrgb&w=400'
            },
            {
                id: 'ORD-1002',
                date: '2026-08-20',
                productName: 'Potato',
                quantity: '5 kg',
                amount: 110,
                status: 'DELIVERED',
                paymentStatus: 'PAID',
                image: 'https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=400'
            }
        ];

        return (
            <div className="max-w-6xl mx-auto px-4 py-8" data-name="buyer-orders" data-file="pages/BuyerOrders.js">
                <h1 className="text-2xl font-bold mb-6">My Orders</h1>
                <div className="space-y-4">
                    {orders.map(order => (
                        <div key={order.id} className="card p-6 flex flex-col md:flex-row items-center gap-6">
                            <img src={order.image} alt={order.productName} className="w-24 h-24 rounded-lg object-cover" />
                            <div className="flex-grow">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-lg">{order.id}</h3>
                                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">{order.status}</span>
                                </div>
                                <p className="font-medium text-slate-800">{order.productName} ({order.quantity})</p>
                                <div className="text-sm text-slate-500 flex gap-4 mt-2">
                                    <span>Date: {order.date}</span>
                                    <span>Total: ₹{order.amount}</span>
                                </div>
                            </div>
                            <div className="flex-shrink-0">
                                <button 
                                    onClick={() => window.location.hash = `#orders/${order.id}`}
                                    className="btn-primary"
                                >
                                    Track Order
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    } catch (error) {
        console.error('BuyerOrders error:', error);
        return null;
    }
}