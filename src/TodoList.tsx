import React from 'react';
import {FilterValueType, TaskType} from "./App";

type PropType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: number) => void
    changeFilter: (newFilter: FilterValueType) => void
}

export const TodoList = ({title, tasks, removeTask, changeFilter}: PropType) => {
    return <div>
        <h3>{title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {
                tasks.map(task => <li key={task.id}><input type="checkbox" checked={task.isDone}/>
                    <span>{task.title}</span>
                    <button onClick={() => {
                        removeTask(task.id)
                    }}>x</button>
                </li>)
            }
        </ul>
        <div>
            <button onClick={()=>{changeFilter('all')}}>All</button>
            <button onClick={()=>{changeFilter('active')}}>Active</button>
            <button onClick={()=>{changeFilter('completed')}}>Completed</button>
        </div>
    </div>
}