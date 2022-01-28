import React, { useContext, useState } from "react";
import Card from "./Card";
import { userContext } from "./UserContext";

const Details = () => {
  const [users, setUsers] = useContext(userContext);
  const [card, setCard] = useState([]);

  const addToCard = (user) => {
    const newCard = [...card, user];
    setCard(newCard);
  };
  return (
    <div className="flex">
      <div className="w-4/5 space-y-3  ">
        {users.map((user) => (
          <div className="flex items-center px-2 shadow">
            <div>
              <img className="w-48 h-40 rounded-2xl" src={user.image} />
            </div>
            <div className="pl-2">
              <h1 className="font-bold text-purple-500 text-2xl ">
                Couse Title : {user.language}
              </h1>
              <h4 className="text-purple-400 text-xl">
                Instructor : {user.instructor}
              </h4>
              <h4 className="text-purple-300 text-md font-medium ">Price : {user.price}</h4>
              <button
                onClick={() => addToCard(user)}
                className="bg-yellow-400 text-yellow-50 text-xl px-2 mt-4 rounded py-1 focus:outline-none hover:bg-yellow-500"
              >
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="w-1/5">
        <Card card={card} />
      </div>
    </div>
  );
};

export default Details;
