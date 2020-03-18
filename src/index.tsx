import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import ToDoList from './components/ToDoList';

ReactDOM.render(
    <ToDoList />,
    document.getElementById('root') as HTMLElement
);
