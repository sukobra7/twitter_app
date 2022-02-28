import React from 'react'
import { auth } from "../firebase"
const Feed = () => {
  return (
    <div onClick={()=>auth.signOut()}>logout</div>
  )
}

export default Feed;