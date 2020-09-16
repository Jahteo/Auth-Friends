import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export default function AddFriend ({ setFriends }) {
  const [friend, setFriend] = useState({
    id: undefined,
    name: "",
    age: undefined,
    email: ""
  })
  // const [error, setError] = useState("")
  //TODO: ISLOADING SPINNER STATE.
  // const history = useHistory();

  const handleChange = (e) => {
    setFriend({
      ...friend,
      [e.target.name]: e.target.value
    });
    // setError("");
  };

  const addIdToFriend = (friendSansId) => {
    return {...friendSansId, id: Math.random()}
  }

  const postFriend = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/friends", addIdToFriend(friend))
      .then(res => {
        console.log("new Friend Posted!!!", res.data);
        setFriends(res.data)

      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <div>
      <h2>Add a friend here:</h2>
      <form onSubmit={postFriend}>
        <input
          type="text"
          name="name"
          value={friend.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="age"
          value={friend.age}
          onChange={handleChange}
          placeholder="age"
        />
        <input
          type="text"
          name="email"
          value={friend.email}
          onChange={handleChange}
          placeholder="email"
        />
        <button>Add 'em</button>
      </form>
    </div>
  )
}