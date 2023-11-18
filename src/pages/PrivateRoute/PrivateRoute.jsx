import { getTotalCartQuantity } from "../../features/cart/cartSlice";
import { useSelector } from "react-redux";

function PrivateRoute({ children }) {
  const cartItems = useSelector(getTotalCartQuantity());

  if (cartItems.length < 1) return;
  return <>{children}</>;
}

export default PrivateRoute;
