import './App.css';
import Todo from './Todo';
import AddTodo from './AppTodo';
import React from 'react';
import { Paper, List, Container } from "@material-ui/core";

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
    var todoItems = this.state.items.length > 0 && (
      <Paper style={{ margin: 16 }}>
        <List>
          {this.state.items.map((item, idx) => (
            <Todo item={item} key={item.id} />
          ))}
        </List>
      </Paper>
    );

    return (
    <div className="App">
      <Container maxWidth="md">
        <AddTodo />
        <div className="TodoList">{todoItems}</div>
      </Container>
    </div>
    ) 
    
  }

  // render() {
  //   var todoItems = this.state.items.map((item, idx) => (
  //     <Todo item={item} key={item.id} />
  //   ));

  //   return <div className="App">{todoItems}</div>
  // }

}

export default App;
