import * as React from 'react';
import './ToDoItem.css';
import {IToDoItemProps} from "../interfaces/interfaces";

function TodoListItem(props: IToDoItemProps) {
    return (
        <li className="list-group-item">
            <div className="list-item">
                {props.value.name} {`done: ${props.value.isDone}`}
                <div className="group-button">
                    <button type="button" className="edit">Edit</button>
                    <button type="button" className="close" onClick={props.onDelete}>&times;</button>
                    <button type="button" onClick={props.onDone}>Done</button>
                </div>
            </div>
        </li>    
    );
}

export default TodoListItem;
