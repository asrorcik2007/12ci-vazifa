import React from "react";
import Hero from "../../hero/Hero";
import Products from "../../products/Products";
import Users from "../../users/Users";
import Orders from "../../orders/Orders";
import Comments from "../../comments/Comments";

const Home = () => {
  return (
    <div className="h-screen flex justify-evenly flex-wrap">
      <Hero />
      <Products />
      <Users />
      <Orders />
      <Comments />
    </div>
  );
};

export default Home;
