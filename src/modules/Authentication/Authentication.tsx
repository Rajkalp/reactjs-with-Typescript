import React, { useEffect, useState } from "react";
import api from "../../utils/axios";
import axios from "axios";

interface payload {
  email: String;
  password: String;
}

const Authentication = () => {
  const [payload, setPayload] = useState<payload>({ email: "", password: "" });
  const onRegister = () => {
    axios
      .post("/register", payload)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post("http://127.0.0.1:8000/login", payload)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("userInfo", JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <div style={{ flex: "50%", backgroundColor: "green" }}>
        <h1 style={{ color: "white" }}>Register</h1>
        <div>
          <input
            type="text"
            onChange={(e) => {
              setPayload({ ...payload, email: e.target.value });
            }}
            name="email"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="password"
            onChange={(e) => {
              setPayload({ ...payload, password: e.target.value });
            }}
            name="password"
            placeholder="Password"
          />
        </div>
        <div>
          <button type="submit" onClick={onRegister}>
            Signin
          </button>
        </div>
      </div>
      <div style={{ flex: "50%", backgroundColor: "gray" }}>
        <h1>SignIn</h1>
        <form action="" method="post" onSubmit={onLogin}>
          <div>
            <input
              type="text"
              onChange={(e) => {
                setPayload({ ...payload, email: e.target.value });
              }}
              name="email"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              type="password"
              onChange={(e) => {
                console.log(e.target.value, payload);
                setPayload({ ...payload, password: e.target.value });
              }}
              name="password"
              placeholder="Password"
            />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Authentication;
