// 1.Create a React component that fetches data from a public API (e.g., JSONPlaceholder) and displays it on the page. Use the fetch function to make the request.

// 2.Implement error handling for the fetch request. Display an error message if the request fails and provide a way for the user to retry the request.

// 3.Add a loading indicator (e.g., a spinner) to the component. Display it while the data is being fetched and hide it once the data is loaded.

import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

import {
  BrowserRouter,
  Link,
  Routes,
  Route,
  useParams,
} from "react-router-dom";

export function Q1_Q2_Q3() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FetchAllList />} />
        <Route path="/posts/:id" element={<FetchSingleItem />} />
      </Routes>
    </BrowserRouter>
  );
}

function FetchAllList() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
        .then((data) => {
          if (!data.ok) throw new Error(`Http error: ${data.status}`);
          return data.json();
        })
        .then((data) => {
          setData(data);
          setError(null);
        })
        .catch((error) => {
          setData(null);
          setError(error.message);
        })
        .finally(() => setIsLoading(false));
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Datalist data={data} isLoading={isLoading} error={error} />
    </>
  );
}

function Datalist({ data, isLoading, error }) {
  return (
    <>
      <div>
        <h1>Question 1: fetch api in React</h1>
        {isLoading && (
          <div>
            <h2>Loading....</h2>
            <Spinner />
          </div>
        )}
        {error && (
          <div>
            <h2>{error}</h2>
            <Link to="/posts/2">Reload</Link>
          </div>
        )}
        <ul>
          {data?.map(({ id, title }) => (
            <li key={id}>
              <nav>
                <Link to={`/posts/${id}`}>{title}</Link>
              </nav>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function FetchSingleItem() {
  const [item, setItem] = useState(null);
  const [isItemLoading, setIsItemLoading] = useState(true);
  const [err, setErr] = useState(null);

  const { id } = useParams();
  console.log("inside FetchSingleItem");

  useEffect(() => {
    const controller = new AbortController();
    const fetchsinglepost = async () => {
      try {
        let response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`,
          { signal: controller.signal }
        );
        if (!response.ok)
          throw new Error(`Error fetch single post: ${response.status}`);
        response = await response.json();
        setItem(response);
        setErr(null);
      } catch (error) {
        setErr(error.message);
        setItem(null);
      } finally {
        setIsItemLoading(false);
      }
    };
    fetchsinglepost();
    return () => controller.abort();
  }, [id]);

  return (
    <div>
      <DatalistItem item={item} isItemLoading={isItemLoading} err={err} />
    </div>
  );
}

function DatalistItem({ item, isItemLoading, err }) {
  return (
    <div>
      {isItemLoading && (
        <div>
          <h2>Wait a moment....</h2>
          <Spinner />
        </div>
      )}
      {err && <h2>Error is : {err}</h2>}
      <article>
        <h1>{item?.title}</h1>
        <p>{item?.body}</p>
      </article>
      <Link to="/">Go back to Home Page</Link>
    </div>
  );
}

function Spinner() {
  return (
    <div style={{ width: "100px", margin: "auto", display: "block" }}>
      <ClipLoader color="#52bfd9" size={100} />
    </div>
  );
}
