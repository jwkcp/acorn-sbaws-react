import logo from './logo.svg';
import './App.css';
import Todo from './Todo';
import React from 'react';

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
    }
  }

  render() {
  return (
    <div className="App">
      // 아래 수정 필요
      var todoItems = this.state.items.map(item, dix) => (
        <Todo item={item} key={item.id} />
      );

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  }

}

export default App;
