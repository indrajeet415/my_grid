import React from "react";
import UserDeck from "./Components/UserDeck/UserDeck";
import UserCard from "./Components/UserCard/UserCard";

class App extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <h1>User Deck</h1>
        <UserDeck />
      </div>
    );
  }
}

export default App;
