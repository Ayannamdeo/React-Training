// 14.Create an HOC named withAuth that restricts access to a specific component to authenticated users only.
//  Implement this HOC on a sample component and demonstrate how it protects routes.

import { useEffect, useState } from "react";


function HigherOrderAuth(WrappedComponent, checkAccess){
    return function EnhancedComponent(props){
        const [isLoading, setIsLoading] = useState(true);
        const [access, setaccess] = useState(false);

        useEffect(()=>{
            setIsLoading(true);
            const bool = checkAccess(props);
            setaccess(bool);
            setIsLoading(false);
        }, [props]);

        if(isLoading) return <p>Loading....</p>;

        return ( access ? ( <WrappedComponent />) : ( <p>Access denied - Only Admins allowed</p>));
    }
}

function RestrictedContent(){
    return(
        <h1>This is a Classified Content : Only visible to Admin </h1>
    );
}

function checkAccess(props){
    return props.user === "admin";
}

const RetrictedComponentWithAuth = HigherOrderAuth(RestrictedContent, checkAccess);

export function Q14(){
    return(
        <div>
            <h1>Question-14: HOC useAuthentication</h1>
            <br />
            <RetrictedComponentWithAuth user="admin"/>
            <br />
            <RetrictedComponentWithAuth user="guest"/>
        </div>
    );
}