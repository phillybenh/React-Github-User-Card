import React from "react";


export default function UserCard(props) {
      {
        console.log("Card Data", props.data);
      }

  return (
    <div>
      <h3>{props.data.name}</h3>
      <h4>{props.data.login}</h4>
      <p>Location: {props.data.location}</p>
      <p>Profile: <a href={props.data.html_url}>{props.data.html_url}</a></p>
      Followers: 13 Following: 19 Bio: null
    </div>
  );
}
