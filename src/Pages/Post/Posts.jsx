import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import client from "../../client.js";
// import "./Users.css";
const Posts = ({ name = "foundPerson" }) => {
  const [posts, setPosts] = useState([]);
  let secName = "";
  if (name === "lostPerson") secName = name + "";
  else secName = name + "s";

  useEffect(() => {
    client.get(`/${name}`).then((user) => {
      console.log(user.data[secName]);
      setPosts(user.data[secName]);
    });
  }, []);
  console.log();
  return (
    <div className="users">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Photo</th>
            {/* <th scope="col">Status</th> */}
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Caption</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, key) => (
            <tr key={key}>
              <th scope="row">{key + 1}</th>
              <td style={{ height: "100px", objectFit: "contain" }}>
                <img
                  src={post.photo}
                  alt=""
                  style={{ height: "100px", objectFit: "contain" }}
                />
              </td>
              {/* <td>{post.found}</td> */}
              {/* <td>{post.}</td> */}
              <td>{post.name}</td>
              <td>{post.address}</td>
              <td>{post.caption}</td>
              <td>{post.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Posts;
