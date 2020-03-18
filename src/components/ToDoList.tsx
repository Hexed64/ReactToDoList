import * as React from 'react';
import './ToDoList.css';
import './ToDoItem.css';
import ToDoItem from './ToDoItem';
import {IToDoListProps, IToDoListState, ITask} from "../interfaces/interfaces";


class ToDoList extends React.Component<IToDoListProps, IToDoListState> {
    constructor(props: IToDoListProps) {
        super(props);

        this.state = {
            futureTaskId: 0,
            newTaskName: "",
            tasks: new Map<number, ITask>()
        };
    }

    getState(): IToDoListState {
        return Object.assign(this.state, {});
    }

    edit() {
        
    }

    add(taskName: string): void {
        let state: IToDoListState = this.getState();
        let newTask: ITask = {
            name: taskName,
            description: "",
            taskId: state.futureTaskId,
            isDone: false
        };

        state.tasks.set(state.futureTaskId, newTask);
        state.futureTaskId++;

        this.setState(state);
    }

    delete(taskId: number): void {
        let state: IToDoListState = this.getState();
        state.tasks.delete(taskId);

        this.setState(state);
    };

    renderToDoItem(item: ITask) {
        return (
            <ToDoItem
                value={item}
                onDelete={() => this.delete(item.taskId)}
                key={item.taskId}
            />
        );
    };

    onSubmitAdd = (event: React.FormEvent) => {
        event.preventDefault();
        const taskName = this.state.newTaskName;
        
        if(taskName) this.add(taskName)
    };

    handleInputNewTaskName = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState(Object.assign(this.state, {newTaskName: event.target.value}));
    };

    render() {
        return (
            <div className="App">
                <h1>ToDoList</h1>
                <ul>
                    {
                        Array.from(this.state.tasks.values()).map((item: ITask) => {
                            return this.renderToDoItem(item);
                        })
                    }
                </ul>
                <form ref="form" onSubmit={this.onSubmitAdd} className="form-inline">
                    <input type="text" ref="itemName" className="form-control"
                        value={this.state.newTaskName} 
                        onChange={this.handleInputNewTaskName}
                    />
                    <button type="submit" className="btn btn-default">Add</button> 
                </form>
            </div>
        );
    }
}

export default ToDoList;
