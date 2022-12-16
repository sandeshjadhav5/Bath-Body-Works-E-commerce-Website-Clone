import { Route, Routes } from "react-router-dom";
import Address from "./Address";
import { CartPage } from "./CartPage";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import SingleProduct from "./SingleProduct";
import Products from "./Products";
import Payment from "./Payment";
import AdminLogin from "./AdminLogin";
import Dashboard from "./Dashboard";
import AddProducts from "./AddProducts";
import Categories from "./Categories";
import AllProducts from "./AllProducts";
import AdminPayments from "./AdminPayments";
import AdminOrders from "./AdminOrders";
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
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addproducts" element={<AddProducts />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/adminpayments" element={<AdminPayments />} />
        <Route path="/adminorders" element={<AdminOrders />} />
      </Routes>
    </div>
  );
}
export default MainRoutes;
