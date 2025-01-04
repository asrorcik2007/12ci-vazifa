import "./App.css";
import Hero from "./components/hero/Hero";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/pages/layout/Layout";
import Home from "./components/pages/home/Home";
import NotFound from "./components/notFound/NotFound";
import Products from "./components/products/Products";
import Users from "./components/users/Users";
import Orders from "./components/orders/Orders";
import Comments from "./components/comments/Comments";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/products" element={<Products />} />
          <Route path="/users" element={<Users />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
