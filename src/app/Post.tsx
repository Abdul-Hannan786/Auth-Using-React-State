"use client";

import { PostType } from "./usertype";

type PostLikeType = {
  posts?: PostType[];
};

const Post = ({ posts }: PostLikeType) => {
  return (
    <div style={{
      // padding: "15px",
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <h1 style={{fontFamily: "sans-serif", margin: "10px 0"}}>Posts</h1>
    {
        posts?.map(({ content, likes }, i) => (
            <div style={{
              fontFamily: "sans-serif", 
              boxShadow: "0 0 5px lightgray", 
              padding: "10px", 
              borderRadius: "20px", 
              width: "90%",
              marginBottom: "15px"
              }} 
              key={content + i}
            >
              <p>
                <strong>Content: </strong> {content}
              </p>
              <p>
                <strong>Likes: </strong> {likes}
              </p>
            </div>
          ))
    }
    </div>
        
      
    
  );
};

export default Post;
