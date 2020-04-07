import React from "react";
import UserCard from "./UserCard";
import styled from "styled-components";

const GridContainer = styled.div`
width: 100%;
margin: 0;
background: dodgerblue;
padding: 10%;
display: grid;
grid-template-columns: 1fr;
grid-gap: 20px;
`
const H2 = styled.h2`
    margin: 0;
    padding: 20px;
    font-size: 3rem;
`;
export default function UserGrid(props) {
//   {
//     console.log("Grid ghD", props.githubData);
//   }
//   {
//     console.log("Grid fD", props.followerData);
//   }

  return (
    <GridContainer>
      <H2>User: </H2>
      <UserCard data={props.githubData} />
      <H2>Followers:</H2>
      {props.followerData.map((follower) => (
        <UserCard data={follower} />
      ))}
    </GridContainer>
  );
}
