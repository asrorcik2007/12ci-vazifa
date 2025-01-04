import React, { useState, useEffect } from "react";
import axios from "axios";
const Orders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/orders")
      .then((response) => {
        setOrders(response.data);
        console.log(orders);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      {orders.map((order) => (
        <div className="flex items-center p-5" key={order.id}>
          <div className="bg-slate-200 rounded-lg p-5">
            <div className="flex gap-2 ">
              <div className="bg-black w-52 h-52"></div>
              <div className="bg-black w-52 h-52"></div>
            </div>
            <h2 className="font-semibold">ProductId: {order.productId}</h2>
            <p>Quantity: {order.quantity}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
