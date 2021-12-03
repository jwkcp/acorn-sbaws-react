import './App.css';
import Todo from './Todo';
import React from 'react';
import { Paper, List } from "@material-ui/core";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Hello, world1",
          done: true
        },
        {
          id: 1,
          title: "Hello, world2",
          done: false
        }
      ]
    };
  }

  render() {
    this.state.items.map((item, idx) => (
      <Todo item={item} key={item.id} />
    ));

    return <div className="App">{todoItems}</div>
  }

}

export default App;
