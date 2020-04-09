import React from "react";
import axios from "axios";
import styled from "styled-components";

import UserGrid from "./Components/UserGrid";

import "./App.css";

const Header = styled.header`
  background-color: #282c34;
  height: 300px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: white;
  margin: 0;
`;

const H1 = styled.h1`
  font-size: 4rem;
  padding: 1rem;
  margin: 0;
`;
const tok = 'phillybenh:bf80e4730eda69219205c406ba487f80e6f0eb29';
const hash = btoa(tok);
const Basic = 'Basic' + hash;
var config = {
  headers: {
    'Authorization': Basic
  }
}
// bf80e4730eda69219205c406ba487f80e6f0eb29


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      githubData: {},
      followerData: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/phillybenh", config)
      .then((response) => {
        // console.log("Axios Data: ", response.data);
        this.setState({
          githubData: response.data,
        });
        axios.get(response.data.followers_url, config).then((response) => {
          // console.log("Follower Data: ", response.data);
          response.data.forEach((user) => {
            axios.get(user.url, config).then((response) => {
              console.log("Follower Data: ", response.data);
              this.setState({
                followerData: [...this.state.followerData, response.data]
              });
            });
          });
        });
      })
      .catch((error) => {
        console.log("The data was not returned", error);
      });
  }

  render() {

    return (
      <div className="App">

        <Header>
          <H1>GitHub User Followers</H1>
        </Header>
        <UserGrid
          githubData={this.state.githubData}
          followerData={this.state.followerData}
        />
      </div>
    );
  }
}

export default App;
