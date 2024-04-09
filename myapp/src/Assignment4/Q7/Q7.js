// 7.Design a search filter component that consists of an input field. As the user types into the input, use controlled components to filter a list of items displayed below. The list should dynamically update to show only items matching the search query.

import React, { useState } from "react";
import Filtered from "./Filtered";

function Ques7() {
  const [name, setname] = useState("");
  const list = [
    { itemname: "mobile1", category: "mobile" },
    { itemname: "mobile2", category: "mobile" },
    { itemname: "tv1", category: "Tv" },
    { itemname: "tv2", category: "Tv" },
  ];
  return (
    <>
      <div>Ques7</div>
      <br />
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setname(e.target.value);
        }}
        placeholder="Enter the filtered option"
      ></input>
      <br />
      {list.map((item, index) => (
        <div key={index}>
            <Filtered item={item} name={name} />
        </div>
      ))}
    </>
  );
}

export default Ques7;