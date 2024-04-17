// 7.Design a search filter component that consists of an input field. As the user types into the input, use controlled components to filter a list of items displayed below. The list should dynamically update to show only items matching the search query.

import React, { useState } from "react";

export function Q7() {
  const [name, setname] = useState("");
  const list = [
    { itemname: "mobile1", category: "mobile" },
    { itemname: "mobile2", category: "mobile" },
    { itemname: "tv1", category: "Tv" },
    { itemname: "tv2", category: "Tv" },
  ];
  return (
    <>
      <div>Q7: Search filter component</div>
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

function Filtered(props) {
  return (
    <>
        {
          props.name===""?<div><span>{props.item.itemname}</span> <span>{props.item.category}</span></div>:(
            props.name===props.item.category ?
            <div>
            <span>{props.item.itemname}</span> <span>{props.item.category}</span>
           </div>:""
          )
        }
    </>
  );
}