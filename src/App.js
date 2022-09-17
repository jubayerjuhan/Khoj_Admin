import logo from "./logo.svg";
import "./App.css";
import Users from "./Pages/Users.js";
import Posts from "./Pages/Post/Posts.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./Pages/SignIn.js";
import { useState } from "react";
function App() {
  const [user, setUser] = useState(false);
  // return <Posts name="lostDocument" />;
  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          padding: "10px 20px",
          backgroundColor: "beige",
        }}
      >
        <li>
          {" "}
          <a href="/">Users</a>
        </li>
        <li>
          {" "}
          <a href="/foundPerson">Found Person</a>
        </li>
        <li>
          {" "}
          <a href="/lostPerson">Lost Person</a>
        </li>
        <li>
          {" "}
          <a href="/lostDocument">Lost Document</a>
        </li>
        <li>
          {" "}
          <a href="/foundDocument">Found Document</a>
        </li>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users user={user} />} />
          <Route
            path="/foundPerson"
            element={<Posts user={user} name="foundPerson" />}
          />
          <Route
            path="/lostPerson"
            element={<Posts user={user} name="lostPerson" />}
          />
          <Route
            path="/foundDocument"
            element={<Posts user={user} name="foundDocument" />}
          />
          <Route
            path="/lostDocument"
            element={<Posts user={user} name="lostDocument" />}
          />
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
