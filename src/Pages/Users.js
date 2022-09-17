import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import client from "../client.js";
import "./Users.css";
const Users = ({ user }) => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (!user) navigate("/signin");

    client.get("/users").then((user) => {
      setUsers(user.data.users);
      console.log(user.data.users);
    });
  }, []);
  console.log(users);
  return (
    <div className="users">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Email</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, key) => (
            <tr key={key}>
              <th scope="row">{key + 1}</th>
              <td>{user.email}</td>
              <td>{user.name}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
