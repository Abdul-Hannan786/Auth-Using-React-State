"use client";

import { UserType } from "./usertype";

type HeaderType = {
  authStatus: boolean;
  userData: UserType | null;
  checkAuth: (status: boolean) => void;
};

const Header = ({ 
    authStatus, 
    userData, 
    checkAuth 
    }: HeaderType) => {

  const loginPageHandler = () => {
    checkAuth(false);
  };

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#1976d2",
        padding: "17px",
        color: "white",
        alignItems: "center",
      }}
    >
      <h3 style={{ margin: "0" }}>MyApp</h3>

      {
      authStatus ? (
        <>
          <h4
            style={{ margin: "0", cursor: "pointer" }}
            onClick={loginPageHandler}>
            Log Out
          </h4>
          <h3 style={{ margin: "0" }}>{userData?.username}</h3>
        </>
      ) : (
        <h3 style={{ margin: "0", cursor:"pointer" }}>Login</h3>
      )
      }

    </div>
  );
};

export default Header;
