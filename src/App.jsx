import React, { useState } from "react";

const App = () => {
  let [price, setPrice] = useState(5);
  const update = () => {
    setPrice(price + 1);
  };
  const decrease = () => {
    setPrice(price - 1);
  };

  return (
    <div>
      <h1 className="text-2xl">หมาเสียบไม้ย่าง</h1>
      <div className="text-2xl flex gap-10">
        <h2>ราคาไม้ละ {price} บาท</h2>
        <button onClick={update} className="bg-green-200 w-10">
          +
        </button>
        <button onClick={decrease} className="bg-red-200 w-10">
          -
        </button>
        </div>
        <div className="text-2xl">
          <h1>5 ไม้ {price * 5}</h1>
          <h1>10 ไม้ {price * 10}</h1>
          <h1>20 ไม้ {price * 20}</h1>
          <h1>30 ไม้ {price * 30}</h1>
        </div>
    </div>
  );
};

export default App;
