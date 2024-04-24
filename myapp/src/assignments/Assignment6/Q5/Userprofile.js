/*
5.Implement a React component (UserProfile) that displays user profile information such as name, email, and phone number. Write tests to ensure that 
the user profile information is correctly displayed when the component receives user data as props
*/
import React from "react";

export function Userprofile (props) {
  return (
    <>
      <ol>
        {props.dataprop.map((user, index) => (
          <li key={index}>
            <div style={{margin:'1rem',wordSpacing:'1rem'}}>
             <span style={{marginRight:'1rem'}}>{user.name}</span> 
             <span style={{marginRight:'1rem'}}>{user.email}</span> 
             <span style={{marginRight:'1rem'}}>{user.phone}</span> 

            </div>
          </li>
        ))}
      </ol>
    </>
  );
};
