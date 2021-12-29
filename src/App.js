import "./App.css";
import Todo from "./Todo";
import AddTodo from "./AppTodo";
import React from "react";
import { Paper, List, Container } from "@material-ui/core";
import { call } from "./service/ApiService";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            // items: [
            //     {
            //         id: "0",
            //         title: "Hello, world1",
            //         done: true,
            //     },
            //     {
            //         id: "1",
            //         title: "Hello, world2",
            //         done: false,
            //     },
            // ],
        };
    }

    componentDidMount() {
        call("/todo", "GET", null).then((response) =>
            this.setState({ items: response.data })
        );
    }

    add = (item) => {
        call("/todo", "POST", item).then((res) => {
            this.setState({
                items: res.data,
            });
        });
    };

    delete = (item) => {
        call("/todo", "DELETE", item).then((res) => {
            this.setState({
                items: res.data,
            });
        });
    };

    update = (item) => {
        call("/todo", "PUT", item).then((res) => {
            this.setState({
                items: res.data,
            });
        });
    };

    render() {
        var todoItems = this.state.items.length > 0 && (
            <Paper style={{ margin: 16 }}>
                <List>
                    {this.state.items.map((item, idx) => (
                        // <Todo item={item} key={item.id} />
                        <Todo
                            item={item}
                            key={item.id}
                            delete={this.delete}
                            update={this.update}
                        />
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
        );
    }
}

export default App;
