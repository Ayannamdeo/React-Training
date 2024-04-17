import { useContext } from "react";
import { LoginContext } from "./LoginContext";
import { Navigate, Outlet } from "react-router-dom";

export function PrivateComponent(){
    const {isAuth} = useContext(LoginContext);
    return (
        <>
            {isAuth ? <Outlet/> : <Navigate to='/Login'/>}
        </>
    );
}