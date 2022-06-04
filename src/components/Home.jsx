import React, { Component } from "react";
import axios from "axios";

export class index extends Component {
  state = {
    username: "",
  };

  componentDidMount() {
    axios
      .get("/user/getDetails")
      .then(({ data: { username} }) => {
        this.setState({ username});
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { username} = this.state;
    return (
      <div>
        <div>username {username}</div>
      </div>
    );
  }
}

export default index;

