const imageUrl = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=85`;
const AGRI_PRODUCTS = [
  ['Tomatoes', 'Vegetables', 48, 'Ramesh Kumar', 'Coimbatore, Tamil Nadu', 'photo-1592924357228-91a4daadcfea'], ['Potatoes', 'Vegetables', 42, 'Amit Patel', 'Agra, Uttar Pradesh', 'photo-1518977676601-b53f82aba655'], ['Red Onions', 'Vegetables', 36, 'Suresh Singh', 'Nashik, Maharashtra', 'photo-1618512496248-a07fe83aa8cb'], ['Carrots', 'Vegetables', 55, 'Ramesh Kumar', 'Ooty, Tamil Nadu', 'photo-1598170845058-32b9d6a5da37'], ['Brinjal', 'Vegetables', 65, 'Kannan Farms', 'Madurai, Tamil Nadu', 'photo-1615486171448-4fd1331f421f'], ['Cabbage', 'Vegetables', 38, 'Vijay Farms', 'Hosur, Tamil Nadu', 'photo-1594282486552-05b4d80fbb9f'], ['Cauliflower', 'Vegetables', 70, 'Velu Organics', 'Ooty, Tamil Nadu', 'photo-1568584716965-063fb5583b27'], ['Green Chilli', 'Vegetables', 85, 'Rajesh Farm', 'Guntur, Andhra Pradesh', 'photo-1588144605658-00d9841f3d4b'], ['Lady’s Finger', 'Vegetables', 60, 'Sundar Farm', 'Salem, Tamil Nadu', 'photo-1425543103986-22abb7d7e8d2'], ['Baby Spinach', 'Vegetables', 45, 'Arun Greens', 'Coimbatore, Tamil Nadu', 'photo-1576045057995-568f588f82fb'],
  ['Alphonso Mangoes', 'Fruits', 180, 'Meera Farms', 'Ratnagiri, Maharashtra', 'photo-1553279768-865429fa0078'], ['Bananas', 'Fruits', 55, 'Murugan Orchards', 'Trichy, Tamil Nadu', 'photo-1571771894821-ce9b6c11b08e'], ['Himalayan Apples', 'Fruits', 160, 'Himachal Harvest', 'Shimla, Himachal Pradesh', 'photo-1560806887-1e4cd0b6cbd6'], ['Nagpur Oranges', 'Fruits', 90, 'Vidarbha Growers', 'Nagpur, Maharashtra', 'photo-1547514701-42782101795e'], ['Papaya', 'Fruits', 65, 'Kaveri Farms', 'Mysuru, Karnataka', 'photo-1526318472351-c75fcf070305'], ['Watermelon', 'Fruits', 35, 'Ravi Farms', 'Kurnool, Andhra Pradesh', 'photo-1563114773-84221bd62daa'], ['Pomegranates', 'Fruits', 210, 'Anar Valley', 'Solapur, Maharashtra', 'photo-1541344999736-83eca272f6fc'], ['Thompson Grapes', 'Fruits', 130, 'Nashik Vineyards', 'Nashik, Maharashtra', 'photo-1537640538966-79f369143f8f'], ['Guava', 'Fruits', 75, 'Green Valley', 'Allahabad, Uttar Pradesh', 'photo-1536511132770-e5058c7e8c46'], ['Pineapple', 'Fruits', 85, 'Kerala Growers', 'Kochi, Kerala', 'photo-1550258987-190a2d41a8ba'],
  ['Basmati Rice', 'Grains', 95, 'Punjab Collective', 'Amritsar, Punjab', 'photo-1586201375761-83865001e31c'], ['Whole Wheat', 'Grains', 52, 'Indore Fields', 'Indore, Madhya Pradesh', 'photo-1500382017468-9049fed747ef'], ['Sweet Maize', 'Grains', 42, 'Anand Farms', 'Vellore, Tamil Nadu', 'photo-1551754655-cd27e38d2076'], ['Pearl Millet', 'Grains', 78, 'Desert Grain Co.', 'Jodhpur, Rajasthan', 'photo-1500595046743-cd271d694d30'], ['Ragi', 'Grains', 88, 'Deccan Grains', 'Bengaluru, Karnataka', 'photo-1536633792012-4f42b9d3e2a2'], ['Barley', 'Grains', 70, 'Golden Fields', 'Ludhiana, Punjab', 'photo-1473445361085-b9a07f55608b'], ['Rolled Oats', 'Grains', 145, 'Hillside Foods', 'Kodaikanal, Tamil Nadu', 'photo-1517093157656-b9eccef91cb1'],
  ['Toor Dal', 'Pulses', 145, 'Deccan Pulses', 'Latur, Maharashtra', 'photo-1603046891744-76e6300f9c13'], ['Moong Dal', 'Pulses', 135, 'Green Gram Collective', 'Jaipur, Rajasthan', 'photo-1604908176997-125f25cc6f3d'], ['Urad Dal', 'Pulses', 155, 'Kaveri Pulses', 'Thanjavur, Tamil Nadu', 'photo-1590080875515-8a3a8dc5735e'], ['Chickpeas', 'Pulses', 110, 'Chana Fields', 'Bikaner, Rajasthan', 'photo-1515543904379-3d757afe72e4'], ['Masoor Dal', 'Pulses', 125, 'Central Pulses', 'Bhopal, Madhya Pradesh', 'photo-1515003197210-e0cd71810b5f'], ['Green Gram', 'Pulses', 130, 'Green Gram Collective', 'Jaipur, Rajasthan', 'photo-1585999228072-3b7e1e3f4f2f'], ['Black Gram', 'Pulses', 150, 'Southern Harvest', 'Madurai, Tamil Nadu', 'photo-1574323347407-f5e1ad6d020b'],
  ['Organic Vegetable Basket', 'Organic Products', 320, 'Ananya Organics', 'Jaipur, Rajasthan', 'photo-1464226184884-fa280b87c399'], ['Organic Fruit Box', 'Organic Products', 450, 'Sattva Farms', 'Pune, Maharashtra', 'photo-1542838132-92c53300491e'], ['Organic Brown Rice', 'Organic Products', 165, 'Earth Grain Co.', 'Wayanad, Kerala', 'photo-1536304993881-ff6e9eefa2a6'], ['Organic Spices', 'Organic Products', 280, 'Malabar Naturals', 'Kozhikode, Kerala', 'photo-1596040033229-a9821ebd058d'], ['Raw Forest Honey', 'Organic Products', 390, 'Himalayan Hive', 'Dehradun, Uttarakhand', 'photo-1587049352846-4a222e784d38'], ['Stoneground Flour', 'Organic Products', 120, 'Millstone Farms', 'Nashik, Maharashtra', 'photo-1509440159596-0249088772ff'], ['Natural Farm Starter Kit', 'Organic Products', 550, 'Soil First Collective', 'Pune, Maharashtra', 'photo-1492496913980-501348b61469'],
  ['Fresh Cow Milk', 'Dairy', 68, 'Nandi Dairy', 'Mysuru, Karnataka', 'photo-1550583724-b2692b85b150'], ['Farm Curd', 'Dairy', 80, 'Nandi Dairy', 'Mysuru, Karnataka', 'photo-1488477181946-6428a0291777'], ['Fresh Paneer', 'Dairy', 320, 'Gokul Farms', 'Kolhapur, Maharashtra', 'photo-1631452180519-c014fe946bc7'], ['Cultured Butter', 'Dairy', 260, 'Gokul Farms', 'Kolhapur, Maharashtra', 'photo-1589985270826-4b7bb135bc9d'], ['A2 Cow Ghee', 'Dairy', 780, 'Sahyadri Dairy', 'Satara, Maharashtra', 'photo-1632759145351-1d592919f522'], ['Farmhouse Cheese', 'Dairy', 480, 'Hill Dairy', 'Ooty, Tamil Nadu', 'photo-1486297678162-eb2a19b0a32d'],
  ['Vegetable Seed Kit', 'Seeds', 180, 'Seedwise Farms', 'Hyderabad, Telangana', 'photo-1416879595882-3373a0480b5b'], ['Fruit Seed Collection', 'Seeds', 220, 'Garden Roots', 'Pune, Maharashtra', 'photo-1497250681960-ef046c08a56e'], ['Paddy Seeds', 'Seeds', 145, 'Delta Seeds', 'Thanjavur, Tamil Nadu', 'photo-1530507629858-e4977d30e9e0'], ['Wheat Seeds', 'Seeds', 130, 'Golden Fields', 'Ludhiana, Punjab', 'photo-1500382017468-9049fed747ef'], ['Millet Seeds', 'Seeds', 160, 'Deccan Seeds', 'Bengaluru, Karnataka', 'photo-1472141521881-95d0e87e2e39'], ['Organic Seed Packets', 'Seeds', 250, 'Open Pollinated Co.', 'Bengaluru, Karnataka', 'photo-1591857177580-dc82b9ac4e1e'], ['Flower Seed Box', 'Seeds', 190, 'Bloom Farms', 'Ooty, Tamil Nadu', 'photo-1490750967868-88aa4486c946'],
].map((item, index) => ({ id: index + 1, name: item[0], category: item[1], price: item[2], unit: item[1] === 'Dairy' && item[0].includes('Milk') ? 'litre' : 'kg', farmer: item[3], location: item[4], quantity: `${40 + (index % 8) * 20} ${item[1] === 'Dairy' && item[0].includes('Milk') ? 'litres' : 'kg'}`, freshness: index % 3 === 0 ? 'Harvested today' : index % 3 === 1 ? 'Harvested yesterday' : 'Packed this week', rating: 4.5 + (index % 5) / 10, image: imageUrl(item[5]) }))

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