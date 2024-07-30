"use client"


type GreetType = {
    username?: string
}

const Greet = ({username}: GreetType) => {
  return <h1 style={{fontFamily: "sans-serif"}}>Welcome {username}</h1>
}

export default Greet