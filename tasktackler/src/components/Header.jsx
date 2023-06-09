import React from 'react'
import TaskList from './TaskList'


function Header({tasks, onTaskDelete}) {
    const renderTasksListAll = tasks.map(task => <TaskList task={task} key={task.id} onTaskDelete={onTaskDelete}/>)


    return (
        <div className='actual_header'>
            <h1 className='header'>Task List</h1>
            <div className='todo-titles'>
                <h2 className='all-todos-title'>All Tasks</h2>
                {renderTasksListAll}
                <br/>
            </div>
        </div>
    )
}

export default Header