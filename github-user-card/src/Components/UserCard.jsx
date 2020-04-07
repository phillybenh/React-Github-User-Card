import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background: darkgray;
  max-width: 100%;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  border-radius: 5px;
  box-shadow: 0 1px 6px -2px #000;
  margin-bottom: 30px;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 3px;
  margin-right: 20px;
`;



export default function UserCard(props) {
  {
    console.log("Card Data", props.data);
  }
  const chartURL = `http://ghchart.rshah.org/${props.data.login}`;

  return (
    <CardContainer>
      <Image src={props.data.avatar_url} alt="User profile picture" />
      <div>
      <h3>{props.data.name}</h3>
      <h4>{props.data.login}</h4>
      <p>Location: {props.data.location}</p>
      <p>
        Profile: <a href={props.data.html_url}>{props.data.html_url}</a>
      </p>
      <p>Followers: {props.data.followers} </p>
      <p>Following: {props.data.following} </p>
      <p>Bio: {props.data.bio}</p>
      </div>
      <img src={chartURL} alt="User's Github chart" />
    </CardContainer>
  );
}
