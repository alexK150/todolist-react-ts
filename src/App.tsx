import React, {useState} from 'react';
import {TodoList} from './TodoList';
import './App.css';

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export type FilterValueType = 'all' | 'active' | 'completed'

export const App = () => {
    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: 'Apples', isDone: false},
        {id: 2, title: 'Pineapples', isDone: false},
        {id: 3, title: 'Carrots', isDone: true},
        {id: 4, title: 'Candies', isDone: true},
    ])

    const [filter, setFilter] = useState<FilterValueType>('all')

    const removeTask = (taskId: number) => {
        const filteredTasks = tasks.filter(task => taskId !== task.id)
        setTasks(filteredTasks);
    }

    const changeFilter = (newFilter: FilterValueType) => {
        setFilter(newFilter);
    }

    let tasksForTodoList = tasks;
    if (filter === 'active') {
        tasksForTodoList = tasks.filter((task:TaskType) => !task.isDone)
    }
    if (filter === 'completed') {
        tasksForTodoList = tasks.filter((task:TaskType) => task.isDone)
    }

    return (
        <div className="App">
            <TodoList tasks={tasksForTodoList} title={'What to buy'} removeTask={removeTask} changeFilter={changeFilter}/>
        </div>
    )
}
