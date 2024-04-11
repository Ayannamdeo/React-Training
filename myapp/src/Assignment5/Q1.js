// 1.Create a React component that fetches data from a public API (e.g., JSONPlaceholder) and displays it on the page. Use the fetch function to make the request.
// https://jsonplaceholder.typicode.com/posts/1

import { useState } from "react";

export function Q1(){
    const [data, setData] = useState();

    
    return (
        <div>
            <h1>Question 1: fetch api in React</h1>
        </div>
    );
}