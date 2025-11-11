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
          <Link to="/task-1">MC-2:Todo manager</Link>
        </li>
      </ul>
    </>
  );
}

export default HomePage;
