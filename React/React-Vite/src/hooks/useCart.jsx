import { useContext } from "react";
import { CartContext } from "../store/CartStore";

const useCart = () => {
  return useContext(CartContext);
};

export default useCart;
