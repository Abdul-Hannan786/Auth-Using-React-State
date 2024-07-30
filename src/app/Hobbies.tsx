"use client"

type HobbiesType = {
    hobbies?: string[];
  };

const Hobbies = ({hobbies}: HobbiesType) => {
  return (
    
   <ul style={{fontFamily: "sans-serif"}}>
    {
        hobbies?.map((hobby, i) => (
            <li key={hobby + i}>{hobby}</li>
        ))
    }
   </ul>
  )
}

export default Hobbies
