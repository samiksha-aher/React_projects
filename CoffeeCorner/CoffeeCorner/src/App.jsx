import { useEffect, useState } from "react";
import AppRoutes from "./routes/AppRoutes";
import Loader from "./components/common/Loader";
import { CartProvider } from "./context/CartContext";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <CartProvider>
      {loading ? <Loader /> : <AppRoutes />}
    </CartProvider>
  );
}

export default App;