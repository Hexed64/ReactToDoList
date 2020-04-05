import * as React from 'react';
import './ToDoItem.css';
import {ITask, IToDoItemProps, IToDoListProps, IToDoListState} from "../interfaces/interfaces";

class TodoListItem extends React.Component<IToDoItemProps, {}> {
    constructor(props: IToDoItemProps) {
        super(props);
    }

    handleInputTaskName = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.props.onEdit(event.target.value);
    };

    render() {
        return (
            <li className={this.props.value.isDone? "done" : null}>
                <input
                    type="checkbox"
                    name="isCompleted"
                    checked={this.props.value.isDone}
                    onChange={this.props.onDone}
                />
                <input
                    type="text"
                    name="todo"
                    value={this.props.value.name}
                    onChange={this.handleInputTaskName}
                />
                <button
                    className="del-btn"
                    onClick={this.props.onDelete}
                >
                    x
                </button>
            </li>
        );
    }
}

export default TodoListItem;
