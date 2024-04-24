// 5.Create a React component that fetches data from a public API
// (e.g., JSONPlaceholder) using Axios
// and displays it on the page.

// 6.Modify the previous assignment to implement error handling using Axios.
//  Display an error message if the request fails and provide a way for the user to retry the request.

import { useEffect, useState } from "react";
import axios from "axios";

export function Q5_Q6() {
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);

  const fetchData = async () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
        setErr(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  function handleRetry() {
    setIsLoading(true);
    setErr(null);
    fetchData();
  }
  return (
    <div>
      <h1>Q5 and Q6: fetching using Axios.</h1>
      {isLoading && <h1>Loading....</h1>}
      {err && (
        <div>
          <h1>Error is: {err}</h1>
          <button onClick={handleRetry}>Reload</button>
        </div>
      )}
      <ul>
        {posts?.map((post) => (
          <li>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
