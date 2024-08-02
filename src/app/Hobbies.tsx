"use client"

type HobbiesType = {
    hobbies?: string[];
  };

const Hobbies = ({hobbies}: HobbiesType) => {
  return (
    
   <div style={{
    padding: "15px"
   }}>
    <h1 style={{fontFamily: "sans-serif"}}>Hobbies</h1>
    {
        hobbies?.map((hobby, i) => (
            <button
               style={{
                  padding: "7px",
                  borderRadius: "90px",
                  marginRight: "10px",
                  border: "0",
                  marginBottom: "10px"
               }}
               key={hobby + i}>{hobby}</button>
        ))
    }
   </div>
  )
}

export default Hobbies
