import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component.jsx";
import { SearchBox } from "./components/search-box/search-box.component.jsx";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      search_field: "",
    };
  }
  handleChange = (e) => {
    this.setState({ search_field: e.target.value });
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((users_json) => users_json.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, search_field } = this.state;
    const filtered_monsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(search_field.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters</h1>
        <SearchBox
          placeholder="Search for monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filtered_monsters} />
      </div>
    );
  }
}

export default App;
