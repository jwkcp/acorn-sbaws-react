import "./App.css";
import Todo from "./Todo";
import AddTodo from "./AppTodo";
import React from "react";
import { Paper, List, Container, Grid, Button, AppBar, Toolbar, Typography, CircularProgress } from "@material-ui/core";
import { call, signout } from "./service/ApiService";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            loading: true,
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
            this.setState({ items: response.data, loading: false })
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

        // nav 추가
        var navigationBar = (
            <AppBar position="static">
                <Toolbar>
                    <Grid Justify="space-between" container>
                        <Grid item>
                            <Typography variant="h6">Today's todo</Typography>
                        </Grid>
                    </Grid>
                    <Grid>
                        <Button color="inherit" onClick={signout}>Logout</Button>
                    </Grid>
                </Toolbar>
            </AppBar>
        );

        var todoListPage = (
            <div>
                {navigationBar}
                <Container maxWidth="md">
                    <AddTodo add={this.add} />
                    <div className="TodoList">{todoItems}</div>
                </Container>
            </div>
        );

        // var loadingPage = <h1>Loading...</h1>
        var loadingPage = (
            <Container component="main" maxWidth="xs" style={{ marginTop: "10%" }}>
                <CircularProgress />
            </Container>
        );
        var content = loadingPage;

        if (!this.state.loading) {
            content = todoListPage;
        }

        return <div className="App">{content}</div>

        // return (
        //     <div className="App">
        //         {navigationBar}
        //         <Container maxWidth="md">
        //             <AddTodo add={this.add} />
        //             <div className="TodoList">{todoItems}</div>
        //         </Container>
        //     </div>
        // );
    }
}

export default App;
