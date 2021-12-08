import React from 'react';
import { ListItem, ListItemText, InputBase, Checkbox, ListItemSecondaryAction, IconButton } from "@material-ui/core";
import DeleteOutlined from '@material-ui/icons/DeleteOutlined'

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: props.item,
            readOnly: true,
        };
        this.delete = props.delete;
    }

    deleteEventHandler = () => {
        this.delete(this.state.item)
    }

    offReadOnlyMode = () => {
        console.log("Event!", this.state.readOnly);
        this.setState({ readOnly: false }, () => {
            console.log("ReadOnly? ", this.state.readOnly)
        });
    }

    enterKeyEventHandler = e => {
        console.log("Key Pressed: ", e.key);

        if (e.key === "Enter") {
            console.log("Enter key pressed");
            this.setState({
                readOnly: true
            });
        }
    }

    render() {
        const item = this.state.item;

        return (
            <ListItem>
                <Checkbox checked={item.done} disableRipple/>
                <ListItemText>
                    <InputBase 
                        inputProps={{
                            "aria-label": "naked",
                            readOnly: this.state.readOnly
                        }}
                        onClick={this.offReadOnlyMode}
                        onKeyPress={this.enterKeyEventHandler}
                        type="text"
                        id={item.id}
                        name={item.id}
                        value={item.title}
                        multiline={true}
                        fullWidth={true}
                    />
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton aria-label="Delete Todo" onClick={this.deleteEventHandler}>
                        <DeleteOutlined />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            // <div className="Todo">
            //     <input type="checkbox" id={this.state.item.id} name={this.state.item.id} checked={this.state.item.done} />
            //     <label for={this.state.item.id}>{this.state.item.title}</label>
            // </div>
        );
    }
}

export default Todo;