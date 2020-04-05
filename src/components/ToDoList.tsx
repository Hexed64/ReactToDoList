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

    edit = (taskId: number, name: string) => (newValue: string) => {
        let state: IToDoListState = this.getState();
        let task: ITask = state.tasks.get(taskId);
        task.name = newValue;
        state.tasks.set(task.taskId, task);

        this.setState(state);
    };

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
        state.newTaskName = "";

        this.setState(state);
    }

    delete(taskId: number): void {
        let state: IToDoListState = this.getState();
        state.tasks.delete(taskId);

        this.setState(state);
    };

    done = (taskId: number) => () => {
        let state: IToDoListState = this.getState();
        let task: ITask = state.tasks.get(taskId);
        task.isDone = !task.isDone;
        state.tasks.set(task.taskId, task);

        this.setState(state);
    };

    renderToDoItem(item: ITask) {
        return (
            <ToDoItem
                value={item}
                onDelete={() => this.delete(item.taskId)}
                onDone={this.done(item.taskId)}
                onEdit={this.edit(item.taskId, item.name)}
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
                <h1 style={{textAlign: "center"}}>ToDoList</h1>
                <form style={{textAlign:"center"}} id="todoList-form" onSubmit={this.onSubmitAdd}>
                    <input type="text"
                           placeholder="Введите название"
                           autoComplete={"off"}
                           value={this.state.newTaskName}
                           onChange={this.handleInputNewTaskName}
                           required />
                    <button>Добавить</button>
                </form>
                <ul>
                    {
                        Array.from(this.state.tasks.values()).map((item: ITask) => {
                            return this.renderToDoItem(item);
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default ToDoList;
