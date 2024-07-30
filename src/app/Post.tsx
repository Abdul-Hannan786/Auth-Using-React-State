"use client";

import { PostType } from "./usertype";

type PostLikeType = {
  posts?: PostType[];
};

const Post = ({ posts }: PostLikeType) => {
  return (
    <>
    {
        posts?.map(({ content, likes }, i) => (
            <div style={{fontFamily: "sans-serif"}} key={content + i}>
              <p>
                <strong>Content: </strong> {content}
              </p>
              <p>
                <strong>Likes: </strong> {likes}
              </p>
            </div>
          ))
    }
    </>
        
      
    
  );
};

export default Post;
