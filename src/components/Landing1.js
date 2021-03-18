import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty';

const Landing1 = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && ( 
     <div>
       
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <JSONPretty data={user} />
        {/* {JSON.stringify(user, null, 2)} */}
      </div>
    )
  )
}
export default Landing1