import React, {useState} from 'react';
import {TodoList} from './TodoList';
import './App.css';
import {v1} from "uuid";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type FilterValueType = 'all' | 'active' | 'completed'

export const App = () => {
    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: 'Apples', isDone: false},
        {id: v1(), title: 'Pineapples', isDone: false},
        {id: v1(), title: 'Carrots', isDone: true},
        {id: v1(), title: 'Candies', isDone: true},
    ])

    const [filter, setFilter] = useState<FilterValueType>('all')

    // Удаление задач
    const removeTask = (taskId: string) => {
        const filteredTasks = tasks.filter(task => taskId !== task.id)
        setTasks(filteredTasks);
    }

    // Добавление задач
    const addTask = (newTitle: string) => {
        const newTask = {id: v1(), title: newTitle, isDone: false};
        setTasks([newTask, ...tasks])
    }

    // Фильтр для задач по выполненности
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
            <TodoList
                tasks={tasksForTodoList}
                title={'What to buy'}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}/>
        </div>
    )
}
