import React from 'react';
import {TodoList} from './TodoList';
import './App.css';

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

const tasks1: Array<TaskType> = [
    {id: 1, title: 'Apples', isDone: false},
    {id: 2, title: 'Pineapples', isDone: false},
    {id: 3, title: 'Carrots', isDone: true},
]

const tasks2: Array<TaskType> = [
    {id: 1, title: 'TS', isDone: false},
    {id: 2, title: 'HTML', isDone: true},
    {id: 3, title: 'React', isDone: true},
]

const tasks3: Array<TaskType> = [
    {id: 1, title: 'Cinema', isDone: false},
    {id: 2, title: 'Square', isDone: true},
    {id: 3, title: 'Street', isDone: true},
]

export const App = () => (
    <div className="App">
        <TodoList tasks={tasks1} title={'What to buy'}/>
        <TodoList tasks={tasks2} title={'What to learn'}/>
        <TodoList tasks={tasks3} title={'Where to go'}/>
    </div>
);
