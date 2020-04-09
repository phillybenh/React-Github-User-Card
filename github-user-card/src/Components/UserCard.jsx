import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background: darkgray;
  width: 1005;
  max-width: 850px;
  padding: 25px;
  border-radius: 5px;
  box-shadow: 0 1px 6px -2px #000;
  display: grid;
  grid-gap: 10px;
  grid-template: 2fr 1fr / repeat(5, 1fr);
  align-items: center;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 3px;
  margin-right: 20px;
  grid-column: 1 / span 1;
  align-self: start;
`;
const UserData = styled.div`
padding: 0 10px;
grid-column: 2 / -1
`;

const Graph = styled.img`
    grid-row: 2 / span 1;
    grid-column: 1 / -1;
    justify-self: center;
    max-width: 100%;
`;

const H3 = styled.h3`
  margin: 0;
  font-size: 2.8rem;
`;
const H4 = styled.h4`
  margin: 0;
  font-size: 2rem;
  font-style: italic;
`;

export default function UserCard(props) {
  
    // console.log("Card Data", props.data);
  
  const chartURL = `http://ghchart.rshah.org/${props.data.login}`;


  return (
    <CardContainer>
      <Image src={props.data.avatar_url} alt="User profile picture" />
      <UserData>
      <H3>{props.data.name}</H3>
      <H4>{props.data.login}</H4>
      <p>Location: {props.data.location}</p>
      <p>
        Profile: <a href={props.data.html_url}>{props.data.html_url}</a>
      </p>
      <p>Followers: {props.data.followers} </p>
      <p>Following: {props.data.following} </p>
      <p>Bio: {props.data.bio}</p>
      </UserData>
      <Graph src={chartURL} alt="User's Github chart" />
    </CardContainer>
  );
}
