import { Route, Routes } from "react-router-dom";
import Address from "./Address";
import { CartPage } from "./CartPage";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import SingleProduct from "./SingleProduct";
import Products from "./Products";
import Payment from "./Payment";

function MainRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cartpage" element={<CartPage />} />
        <Route path="/address" element={<Address />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
      </Routes>
    </div>
  );
}
export default MainRoutes;
