import React from "react";
import axios from "axios";

import UserGrid from "./Components/UserGrid";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      githubData: {},
      followerData: []
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/phillybenh")
      .then((response) => {
        console.log("Axios Data: ", response.data);
        this.setState({
          githubData: response.data,
        })
        axios
        .get(response.data.followers_url)
        .then((response) => {
          console.log("Follower Data: ", response.data);
          this.setState({
            followerData: response.data
          })
        })
      })
      .catch((error) => {
        console.log("The data was not returned", error);
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Github User Card</h1>
        </header>
        <UserGrid 
        githubData={this.state.githubData}
        followerData={this.state.followerData} />
      </div>
    );
  }
}

export default App;
/*
const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell', 'phillybenh'];

followersArray.forEach(user => {
  let followerUrl = `https://api.github.com/users/${user}`;
  // console.log(followerUrl);
  axios
    .get(followerUrl)
    .then(response => {
      console.log(response.data);
      entryPoint.append(gitCard(response.data));
    })
    .catch(error => {
      console.log("The data was not returned", error);
    });
});
 
axios
  .get("https://api.github.com/users/phillybenh")
  .then((response) => {
    entryPoint.prepend(gitCard(response.data));

    axios
      .get(response.data.followers_url)
      .then((response) => {
        console.log(response.data);
        response.data.forEach((user) => {
          axios
            .get(user.url)
            .then((response) => {
              entryPoint.append(gitCard(response.data));
            })
            .catch((error) => {
              console.log("The data was not returned", error);
            });
        });
      })
      .catch((error) => {
        console.log("The data was not returned", error);
      });
  })
  .catch((error) => {
    console.log("The data was not returned", error);
  })
  */
