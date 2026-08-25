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

    React.useEffect(() => {
      const handleHashChange = () => {
        setCurrentRoute(window.location.hash || '#home');
      };
      window.addEventListener('hashchange', handleHashChange);
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
        // Additional routes like products, login, dashboard will be added here
        default:
          return <Home />;
      }
    };

    return (
      <div className="flex flex-col min-h-screen" data-name="app" data-file="app.js">
        <Header currentRoute={currentRoute} />
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