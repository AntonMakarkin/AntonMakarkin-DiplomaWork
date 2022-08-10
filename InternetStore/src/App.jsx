import { Route, Routes, Navigate as Redirect } from 'react-router-dom';
import Cart from "./pages/Cart/Cart";
import Order from './pages/Order/Order';
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Product from "./pages/Product/Product";
import ProductList from "./pages/ProductList/ProductList";
import Register from "./pages/Register/Register";


const App = () => {
    const user = JSON.parse(localStorage.getItem('profile'));

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/order" element={<Order/>}/>
            <Route path="/products/:category" element={<ProductList/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/product/:id" element={<Product/>}/>
        </Routes>
    )
};

export default App;