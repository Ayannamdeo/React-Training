import { useContext, useEffect } from "react";
import { LoginContext } from "./LoginContext";
import { useNavigate } from "react-router-dom";

export function Login(){

    const {user, setUser, isAuth, setIsAuth} = useContext(LoginContext);
    const navigate = useNavigate();

    useEffect(()=> {
        if (isAuth) navigate('/about')
    }, [isAuth, navigate])

    function handleChange(e){
        if(e.target.name === "username"){
            setUser(prevS => ({...prevS, name:e.target.value}));
        } else {
            setUser(prevS => ({...prevS, password: e.target.value}));
        }
    }
    function handleSubmit(e){
        e.preventDefault();
        if (user.name === "ayan" && user.password === "1234"){
            setIsAuth(true);
        } else {
            setIsAuth(false);
            alert("Invalid Username or Password")
        }
        isAuth ? navigate('/about') : navigate('/login');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" value={user.name} placeholder="UserName" onChange={handleChange}/>
                <br />
                <input type="password" name="userpassword" value={user.password} placeholder="UserPassword" onChange={handleChange}/>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}