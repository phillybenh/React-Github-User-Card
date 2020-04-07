import React from "react";
import UserCard from "./UserCard";

export default function UserGrid(props) {
  {
    console.log("Grid ghD", props.githubData);
  }
  {
    console.log("Grid fD", props.followerData);
  }

  return (
    <div>
      <h2>User</h2>
      <UserCard data={props.githubData}/>
      <h2>Followers:</h2>
    </div>
  );
}
