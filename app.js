const AGRI_PRODUCTS = [
  { id: 1, name: 'Vine-ripened Tomatoes', category: 'Vegetables', price: 48, unit: 'kg', farmer: 'Ramesh Kumar', location: 'Coimbatore, Tamil Nadu', quantity: '100 kg', freshness: 'Harvested today', rating: 4.8, image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=85' },
  { id: 2, name: 'Nashik Red Onions', category: 'Vegetables', price: 36, unit: 'kg', farmer: 'Suresh Singh', location: 'Nashik, Maharashtra', quantity: '500 kg', freshness: 'Harvested yesterday', rating: 4.6, image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=800&q=85' },
  { id: 3, name: 'Himalayan Potatoes', category: 'Vegetables', price: 42, unit: 'kg', farmer: 'Amit Patel', location: 'Agra, Uttar Pradesh', quantity: '300 kg', freshness: 'Harvested 2 days ago', rating: 4.7, image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=85' },
  { id: 4, name: 'Organic Alphonso Mangoes', category: 'Fruits', price: 180, unit: 'kg', farmer: 'Meera Farms', location: 'Ratnagiri, Maharashtra', quantity: '80 kg', freshness: 'Harvested today', rating: 4.9, image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=85' },
  { id: 5, name: 'Basmati Rice', category: 'Grains', price: 95, unit: 'kg', farmer: 'Punjab Collective', location: 'Amritsar, Punjab', quantity: '1,200 kg', freshness: 'Milled this week', rating: 4.8, image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=85' },
  { id: 6, name: 'Cold-pressed Mustard Oil', category: 'Organic Products', price: 220, unit: 'litre', farmer: 'Ananya Organics', location: 'Jaipur, Rajasthan', quantity: '60 litres', freshness: 'Pressed 3 days ago', rating: 4.7, image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=85' },
];

window.AgriDirect = { products: AGRI_PRODUCTS, cart: [], listeners: [] };
window.AgriDirect.addToCart = (product) => { const existing = window.AgriDirect.cart.find(item => item.id === product.id); if (existing) existing.quantity += 1; else window.AgriDirect.cart.push({ ...product, quantity: 1 }); window.AgriDirect.listeners.forEach(listener => listener()); };
window.AgriDirect.updateCart = (id, delta) => { const item = window.AgriDirect.cart.find(product => product.id === id); if (!item) return; item.quantity += delta; if (item.quantity < 1) window.AgriDirect.cart = window.AgriDirect.cart.filter(product => product.id !== id); window.AgriDirect.listeners.forEach(listener => listener()); };
window.AgriDirect.removeFromCart = (id) => { window.AgriDirect.cart = window.AgriDirect.cart.filter(product => product.id !== id); window.AgriDirect.listeners.forEach(listener => listener()); };

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center p-8 bg-white rounded-xl shadow-sm max-w-md">
            <div className="icon-circle-alert text-4xl text-red-500 mb-4 mx-auto"></div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-6">We're sorry, but an unexpected error occurred while loading the application.</p>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary w-full"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  try {
    const [currentRoute, setCurrentRoute] = React.useState(window.location.hash || '#home');
    const [, refresh] = React.useState(0);

    React.useEffect(() => {
      const handleHashChange = () => {
        setCurrentRoute(window.location.hash || '#home');
      };
      window.addEventListener('hashchange', handleHashChange);
      window.AgriDirect.listeners.push(() => refresh(value => value + 1));
      return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const renderRoute = () => {
      if (currentRoute.startsWith('#orders/')) {
        const orderId = currentRoute.replace('#orders/', '');
        return <OrderDetails orderId={orderId} />;
      }
      if (currentRoute.startsWith('#product/')) {
        const productId = currentRoute.replace('#product/', '');
        return <ProductDetails productId={productId} />;
      }

      switch (currentRoute) {
        case '#home':
          return <Home />;
        case '#products':
          return <Products />;
        case '#cart':
          return <Cart />;
        case '#checkout':
          return <Checkout />;
        case '#buyer/orders':
          return <BuyerOrders />;
        case '#farmer/orders':
          return <FarmerOrders />;
        case '#login': return <Login />;
        case '#register':
        case '#register-farmer': return <Register />;
        case '#sell': return <SellProduce />;
        case '#market-prices': return <MarketPrices />;
        case '#ai-tools': return <AITools />;
        default:
          return <Home />;
      }
    };

    return (
      <div className="flex flex-col min-h-screen" data-name="app" data-file="app.js">
        <Header currentRoute={currentRoute} cartCount={window.AgriDirect.cart.reduce((total, item) => total + item.quantity, 0)} />
        <main className="flex-grow">
            {renderRoute()}
        </main>
        <footer className="bg-slate-900 text-slate-300 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="flex items-center justify-center gap-2 mb-4 text-white">
                    <div className="icon-leaf text-2xl text-[var(--primary)]"></div>
                    <span className="text-2xl font-bold">AgriDirect</span>
                </div>
                <p className="mb-4">From Farm Directly to You</p>
                <p className="text-sm text-slate-500">&copy; 2026 AgriDirect. Smart India Hackathon Project.</p>
            </div>
        </footer>
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);