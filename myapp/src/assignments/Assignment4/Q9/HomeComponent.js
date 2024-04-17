import { Outlet } from "react-router-dom";

export function HomeComponent(){
    return(
        <div>
            <Outlet />
        </div>
    );
}