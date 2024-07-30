"use client"

import { UserType } from "./usertype"

import Greet from "./Greet"
import Hobbies from "./Hobbies"
import Post from "./Post"



type UserTimelineType = {
  userData: (UserType | null)
}

const UserTimeLine = ({userData}: UserTimelineType) => {
  return (
    <>
    
    <Hobbies
    hobbies={userData?.hobbies}
    />

    <Post 
    posts={userData?.post}
    />
    </>
  )
}

export default UserTimeLine