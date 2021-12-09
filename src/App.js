import './App.css';
import Todo from './Todo';
import AddTodo from './AppTodo';
import React from 'react';
import { Paper, List, Container } from "@material-ui/core";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
      // items: [
      //   {
      //     id: '0',
      //     title: "Hello, world1",
      //     done: true
      //   },
      //   {
      //     id: '1',
      //     title: "Hello, world2",
      //     done: false
      //   }
      // ]
    };
  }

  componentDidMount() {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };

    fetch('http://localhost:8080/todo', requestOptions)
      .then((response) => response.json())
      .then(
        (response) => {
          this.setState({
            items: response.data,
          });
        },
        (error) => {
          this.setState({
            error,
          });
        }
      );
  }

  add = (item) => {
    const thisItems = this.state.items;
    item.id = "ID-" + thisItems.length;
    item.done = false;
    thisItems.push(item);
    this.setState({
      items: thisItems
    });
    console.log("items: ", this.state.items);
  }

  delete = (item) => {
    const thisItems = this.state.items;
    console.log("Before Update Items: ", this.state.items);
    const newItems = thisItems.filter(e => e.id !== item.id);
    this.setState({
      items: newItems
    }, () => {
      console.log("After Update Items: ", this.state.items);
    });
  }

  render() {
    var todoItems = this.state.items.length > 0 && (
      <Paper style={{ margin: 16 }}>
        <List>
          {this.state.items.map((item, idx) => (
            // <Todo item={item} key={item.id} />
            <Todo item={item} key={item.id} delete={this.delete} />
          ))}
        </List>
      </Paper>
    );

    return (
    <div className="App">
      <Container maxWidth="md">
        <AddTodo add={this.add} />
        <div className="TodoList">{todoItems}</div>
      </Container>
    </div>
    ) 
  }
}

export default App;
