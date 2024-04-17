// Fetch a large dataset from an API and implement pagination. Display a limited number of items per page and provide navigation controls to load more pages of data.
// Tips:
// - Make the function take a promise as a parameter
// - use "catch" method of the promise
// - Call this function "to"

// function to (promise) {
//   return promise.then(data => [null, data]).catch(err => [err, null])
// }
// const [err, data] = await to(fetch(/*thatUrl*/))
// Notes: Dont need to have an async function or to use try-catch; its reusable for any function returning a promise; its a oneliner in a oneliner \o/

// # make CapsLock behave like Ctrl:
// setxkbmap -option ctrl:nocaps
// # make short-pressed Ctrl behave like Escape:
// xcape -e 'Control_L=Escape'

import {useState, useEffect} from 'react';
import { Pagination } from './Pagination';
import { TableItems } from './TableItems';
import './style.css';



function to (promise){
  // console.log("promis: ", promise);
  return promise.then(data => {
    if (!data.ok) throw new Error (`status error: ${data.status}`);
    // console.log("data: ", data);
    return data.json();
  }).then(data => [null, data]).catch(err=>[err, null]);
}

export function Q4() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageItems, setPageItems] = useState([]);
  const [pageLimit] = useState(10);
  // console.log("----------start of q4--------");

  useEffect(() => {
    // console.log("inside useEffect ");
    async function fetchPosts() {
      const [ err, response] = await to(fetch("https://jsonplaceholder.typicode.com/posts?_limit=100"));
      if(err !== null) alert("Error occurred: ", err.message);
      // console.log("err: ", err);
      // console.log("response:", response);
      setItems(response);
      setIsLoading(false);
    }
    // console.log("inside useEffect end");
    fetchPosts();
  }, [])
  
  
  // console.log("-----end-----");
  return (
    <div>
      <h1>Question 4: Pagination. </h1>
      <TableItems pageItems={pageItems} isLoading={isLoading}/>
      <Pagination items={items} pageLimit={pageLimit} setPageItems={setPageItems} />
    </div>
  );
}







// import {useState, useEffect} from 'react';
// import { Pagination } from './Pagination';
// import { TableItems } from './TableItems';

// export function Q4() {
//   const [items, setItems] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [pageItems, setPageItems] = useState([]);
//   const [pageLimit] = useState(10);
//   console.log("----------start of q4--------");

// useEffect(() => {
//   console.log("inside useEffect ");
//   async function fetchPosts() {
//     try {
//       let response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=100");
//       response = await response.json();

//       console.log("response:", response);
//       setItems(response);
//       setIsLoading(false);
//     } catch (err) {
//       console.error("Error occurred: ", err);
//       // Handle error gracefully, e.g., display a message on UI
//     }
//   }
//   console.log("inside useEffect end");
//   fetchPosts();
// }, []);

  
//   console.log(items);
//   console.log("-----end-----");
//   return (
//     <div>
//       <h1>Question 4: Pagination. </h1>
//       <TableItems pageItems={pageItems} isLoading={isLoading}/>
//       <Pagination items={items} pageLimit={pageLimit} setPageItems={setPageItems} />
//     </div>
//   );
// }