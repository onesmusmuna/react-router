import React from "react";
import { Link } from "react-router-dom";

export default function sidebar() {
  return (
    <ul>
      <li>
        <Link to="/admin/posts">posts</Link>
      </li>

      <li>
        <Link to="/admin/users">users</Link>
      </li>
    </ul>
  );
}
