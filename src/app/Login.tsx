"use client";

import { useState } from "react";
import { UserType } from "./usertype";

const users = [
  {
    email: "hannan@gmail.com",
    password: "123456",
    username: "Abdul Hannan",
    hobbies: ["Swimming", "cricket", "Traveling", "Programming", "Football", "Gym"],
    post: [
      {
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptates nulla commodi, magni repudiandae debitis, minus quis nihil vero assumenda similique ullam nisi ducimus ut voluptas laborum atque dignissimos est voluptatum odio repellendus impedit nostrum. Vero veniam facilis nemo quae, omnis, aliquam sapiente et aperiam tenetur ut cupiditate, nihil rem?ipsum Lorem sit special main amet consectetur adipisicing elit. Omnis voluptates nulla commodi, magni repudiandae debitis, minus quis nihil vero assumenda similique ullam nisi ducimus ut voluptas laborum atque dignissimos est voluptatum odio repellendus impedit nostrum. Vero veniam facilis nemo quae, omnis, aliquam sapiente et aperiam tenetur ut cupiditate, nihil rem?",
        likes: 100,
      },
      {
        content:
          "ipsum Lorem sit special main amet consectetur adipisicing elit. Omnis voluptates nulla commodi, magni repudiandae debitis, minus quis nihil vero assumenda similique ullam nisi ducimus ut voluptas laborum atque dignissimos est voluptatum odio repellendus impedit nostrum. Vero veniam facilis nemo quae, omnis, aliquam sapiente et aperiam tenetur ut cupiditate, nihil rem?ipsum Lorem sit special main amet consectetur adipisicing elit. Omnis voluptates nulla commodi, magni repudiandae debitis, minus quis nihil vero assumenda similique ullam nisi ducimus ut voluptas laborum atque dignissimos est voluptatum odio repellendus impedit nostrum. Vero veniam facilis nemo quae, omnis, aliquam sapiente et aperiam tenetur ut cupiditate, nihil rem?",
        likes: 1000,
      },
    ],
  },

  {
    email: "abdullah@gmail.com",
    password: "123456",
    username: "Abdullah",
    hobbies: ["Swimming", "cricket", "Traveling", "Teaching", "Business"],
    post: [
      {
        content:
          " Container Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptates nulla commodi, magni repudiandae debitis, minus quis nihil vero assumenda similique ullam nisi ducimus ut voluptas laborum atque dignissimos est voluptatum odio repellendus impedit nostrum. Vero veniam facilis nemo quae, omnis, aliquam sapiente et aperiam tenetur ut cupiditate, nihil rem? Container Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptates nulla commodi, magni repudiandae debitis, minus quis nihil vero assumenda similique ullam nisi ducimus ut voluptas laborum atque dignissimos est voluptatum odio repellendus impedit nostrum. Vero veniam facilis nemo quae, omnis, aliquam sapiente et aperiam tenetur ut cupiditate, nihil rem?",
        likes: 1500,
      },
      {
        content:
          "Meeting Lorem sit special main amet consectetur adipisicing elit. Omnis voluptates nulla commodi, magni repudiandae debitis, minus quis nihil vero assumenda similique ullam nisi ducimus ut voluptas laborum atque dignissimos est voluptatum odio repellendus impedit nostrum. Vero veniam facilis nemo quae, omnis, aliquam sapiente et aperiam tenetur ut cupiditate, nihil rem? Container Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptates nulla commodi, magni repudiandae debitis, minus quis nihil vero assumenda similique ullam nisi ducimus ut voluptas laborum atque dignissimos est voluptatum odio repellendus impedit nostrum. Vero veniam facilis nemo quae, omnis, aliquam sapiente et aperiam tenetur ut cupiditate, nihil rem?",
        likes: 2010,
      },
    ],
  },
];

type LoginType = {
  changeAuthStatus: (status: boolean) => void;
  setUser: (user: UserType) => void;
};

const Login = ({ changeAuthStatus, setUser }: LoginType) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  type LoginType = {
    changeAuthStatus: (status: boolean) => void;
  };

  const loginHandler = () => {
    let [userFound] = users.filter(
      (user) => user.email === email && user.password === password
    );

    if (userFound) {
      changeAuthStatus(true);
      setUser(userFound);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "88vh",
        width: "100%",
        fontFamily: "sans-serif",
        flexDirection: "column",
        rowGap: "15px"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 0 5px gray",
          borderRadius: "20px",
          padding: "4%"
        }}
      >
        <input
          type="email"
          id="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          style={{
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid lightgray",
          }}
        />

        <br />

        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          style={{
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid lightgray",
          }}
        />

        <br />

        <button
          style={{
            padding: "9px",
            width: "100%",
            borderRadius: "6px",
            border: "0",
            backgroundColor: "#1976d2",
            color: "white"
          }}
          onClick={loginHandler}
        >
          Login
        </button>
      </div>
      <div style={{
        padding: "1%",
        boxShadow: "0 0 5px gray",
        borderRadius: "20px",
      }}>
        <p><b>Email: </b>hannan@gmail.com</p>
        <p><b>Password: </b>123456</p>
      </div>
    </div>
  );
};

export default Login;
