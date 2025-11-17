import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div>HomePage</div>
      <ul>
        <li>
          <Link to="/task-1">MC-1:Todo manager</Link>
        </li>
        <li>
          <Link to="/task-2">MC-2:UserList + Fetch</Link>
        </li>
        <li>
          <Link to="/task-3">MC-2:UserList + Fetch</Link>
        </li>
      </ul>
    </>
  );
}

export default HomePage;
