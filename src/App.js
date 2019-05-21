import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";
class App extends Component {
  state = {
    persons: [
      {
        name: "Issam",
        age: 25
      }
    ]
  };
  swicthNameHandler = () => {
    this.setState({
      persons: [
        {
          name: "Abdelkrim",
          age: 24
        }
      ]
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Hello , I'm react application</h1>

        <button onClick={this.swicthNameHandler}>Switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >
          My hobbies is developping
        </Person>
      </div>
    );
  }
}

export default App;
