// 7.Create a form in your React component that allows the user to input data 
// (e.g., a post title and content). Use Axios to send a POST request to an API endpoint, posting the user's data.

// handling large data set
// Profiling and Dev tools
// Internationalization (i18n) and Localization (l10n)
// Authentication and Authorization

import axios from "axios";
import { useEffect, useState } from "react";

export function Q7(){
    const [post, setPost] = useState({});
    const [resData, setResData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState(null);
    const [submit, setSubmit] = useState(false);

    useEffect(()=> {

        async function postsomething(){
            try {
                const response = await axios.post(
                  "https://jsonplaceholder.typicode.com/posts",
                  post
                );
                console.log("response is:", response);
                setResData(response.status);
                setPost({});

            } catch (error) {
                console.log("error occurred", error);
                setErr(error.message);
            } finally{
                setIsLoading(false);
            }
        }
        if (submit){
          setIsLoading(true);
          postsomething();
          setSubmit(false);
        }
    }, [submit]);

    function handleSubmit(e){
            //trigger useEffect somehow?
            e.preventDefault(); 
            setSubmit(true);
    }

    function handleChange(e){
        if(e.target.name === 'title'){
            setPost(prevS => ( {...prevS, title: e.target.value} ));
        } else {
            setPost(prevS => ({...prevS, content: e.target.value}));
        }
    }

    return (
      <div>
        <h1>Q7: POST using Axios.</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" value={post.title} placeholder="Title" onChange={handleChange}/>
          <textarea type="text" name="content" value={post.content} placeholder="Content" onChange={handleChange}/>
          <button type="submit" disabled={isLoading}>{isLoading? "submitting....": "Submit" }</button>
        </form>
        {err && <p>Error occurred: {err}</p>}
        {resData && <h2>response after posting the form: {resData} </h2> }
      </div>
    );

}