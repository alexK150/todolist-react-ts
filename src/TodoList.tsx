import React, {useState, KeyboardEvent, ChangeEvent} from 'react';
import {FilterValueType, TaskType} from "./App";

type PropType = {
    title: string
    tasks: Array<TaskType>
    addTask: (newTitle: string) => void
    removeTask: (taskId: string) => void
    changeFilter: (newFilter: FilterValueType) => void
}

export const TodoList = ({title, tasks, removeTask, changeFilter, addTask}: PropType) => {
    const [localTitle, setLocalTitle] = useState<string>('');

    const mappedTasks = tasks.map(task =>
        <li key={task.id}><input type="checkbox" checked={task.isDone}/>
            <span>{task.title}</span>
            <button onClick={() => {removeTask(task.id)}}>x</button>
        </li>)

    const localAddTask = () => {
        addTask(localTitle);
        setLocalTitle('');
    }

    const filterButtonsHandler = (param: string) => {
        if (param === 'all') {
            changeFilter('all')
        } else if (param === 'active') {
            changeFilter('active')
        } else if (param === 'completed') {
            changeFilter('completed')
        } else {
            console.error('No such param for filter!')
        }
    }

    const addTaskByEnter = (e:KeyboardEvent<HTMLInputElement>) =>{ if (e.key === 'Enter') localAddTask()}
    const onLocalTitleChangeHandler = (e:ChangeEvent<HTMLInputElement>) => { setLocalTitle(e.target.value)}

    return <div>
        <h3>{title}</h3>
        <div>
            <input
                value={localTitle}
                onChange={onLocalTitleChangeHandler}
                onKeyPress={addTaskByEnter}
            />
            <button onClick={localAddTask}>+</button>
        </div>
        <ul>
            {mappedTasks}
        </ul>
        <div>
            <button onClick={() => filterButtonsHandler('all')}>All</button>
            <button onClick={() => filterButtonsHandler('active')}>Active</button>
            <button onClick={() => filterButtonsHandler('completed')}>Completed</button>
        </div>
    </div>
}