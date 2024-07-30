"use client"

import { useState } from "react";

import UserTimeLine from "./UserTimeLine";
import Login from "./Login";
import { UserType } from "./usertype";
import Header from "./Header";

function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<null | UserType>(null)
  return (
    <>
    <Header authStatus={isAuthenticated} userData={user} checkAuth={setIsAuthenticated}/>

    {
      isAuthenticated?
      <UserTimeLine 
      userData={user}
      />:
      <Login 
      changeAuthStatus={setIsAuthenticated}
      setUser={setUser}
      />
    }

    </>
  )
     
     

}

export default Home;
