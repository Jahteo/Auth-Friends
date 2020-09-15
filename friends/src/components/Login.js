import React, { useState } from "react";

export default function Login () {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  })
  const [error, setError] = useState("")

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
    setError("");
  };

  const login = (e) => {
    e.preventDefault();
    //AXIOS HERE
  }

  return (
    <div>Login component says hi
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <input
        //need to find the magical list of all the diff input types....
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button>Log in</button>
      </form>
    </div>
  )
}