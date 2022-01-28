import React from "react";

const Card = (props) => {
  const money = props.card.reduce((sum, user) => sum + user.price, 0);
  const tax = money / 10;
  const totalMoney = money + tax;
  return (
    <div className="border p-4 shadow bg-indigo-100 rounded-xl m-1 font-serif text-indigo-800 font-semibold">
      <h1>Order Summary</h1>
      <h4>total Ordar : {props.card.length}</h4>
      <h4>Product Price : {money} </h4>
      <h4>Tax : {tax}</h4>
      <h4>Total Amount : {totalMoney}</h4>
      <button className="bg-yellow-400 font-bold text-yellow-50 px-2 mt-4 rounded-lg py-1 focus:outline-none hover:bg-yellow-500">
        ConFirm Order
      </button>
    </div>
  );
};

export default Card;
