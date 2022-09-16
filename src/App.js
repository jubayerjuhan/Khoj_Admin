import logo from "./logo.svg";
import "./App.css";
import Users from "./Pages/Users.js";
import Posts from "./Pages/Post/Posts.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
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
          <Route path="/" element={<Users />} />
          <Route path="/foundPerson" element={<Posts name="foundPerson" />} />
          <Route path="/lostPerson" element={<Posts name="lostPerson" />} />
          <Route
            path="/foundDocument"
            element={<Posts name="foundDocument" />}
          />
          <Route path="/lostDocument" element={<Posts name="lostDocument" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
