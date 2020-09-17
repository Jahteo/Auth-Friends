import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import AddFriend from "./AddFriend";

export default function FriendsList () {

  const [friends, setFriends] = useState([])

  const getFriends = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then(res => {
        console.log("getFriends res.data:", res.data)
        setFriends(res.data)
      })
      .catch(err => {
        console.log("getFriends err:", err)
      })
  }

  useEffect(() => {
    getFriends()
  }, [])

  const formatData = () => {
    //Needed???
  }

  return (
    <div>FriendsList component says hi
      <AddFriend setFriends={setFriends} />
      {friends.map(friend => {
        return (
          <div>
            <h2>{friend.name}</h2>
            {/* this would be a cool spot to hover/flip */}
            {friend.age} <br />
            {friend.email}

          </div>
        )
      })}

    </div>
  )
}