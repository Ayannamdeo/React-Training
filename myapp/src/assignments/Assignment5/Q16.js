// 16.Develop an HOC named withDataFetching that fetches data from an API and passes it as props to a component.
//  Use this HOC to retrieve and display data in a component.

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

function withDataFetching(WrappedComponent, DataFetcher) {
  return function EnhancedComponent(props) {
    const { data, error, isLoading } = useQuery({
      queryKey: ["posts", parseInt(props.postId)],
      queryFn: () =>
        DataFetcher(
          `https://jsonplaceholder.typicode.com/posts/${props.postId}`
        ),
      staleTime: 5000,
    });

    return <WrappedComponent data={data} error={error} isLoading={isLoading} />;
  };
}

async function DataFetcher(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP status error: ${response.status}`);
  return response.json();
}

function DisplayData({ data, error, isLoading }) {
  if (isLoading) return <p>Loading post....</p>;
  if (error) return <p>error occurred: {error.message}</p>;
  return (
    <div>
      <p>Title: {data.title}</p>
      <p>Body: {data.body}</p>
    </div>
  );
}

const DataFetching = withDataFetching(DisplayData, DataFetcher);

export function Q16() {
  const [postId, setPostId] = useState(null);
  function handleClick(Id) {
    setPostId(Id);
  }
  return (
    <div>
      <h1>Q16: HOC withDataFetching</h1>
      <button onClick={() => handleClick(1)}>Fetch post No. 1</button>
      <button onClick={() => handleClick(2)}>Fetch post No. 2</button>
      <button onClick={() => handleClick(3)}>Fetch post No. 3</button>
      <br />
      {postId && (
        <div>
          <h2>Displaying post no: {postId}</h2>
          <DataFetching postId={postId}/>
        </div>
      )}
    </div>
  );
}
