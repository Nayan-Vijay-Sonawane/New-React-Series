import React from "react";

function TaskList({ tasks, deleteTask, setEditingTask }) {
    if(tasks.length === 0){
        return <p>No Tasks available</p>;
    }

    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    <span>{task.text}</span>
                    <div>
                        <button onClick={() => setEditingTask(task)}>Edit</button>
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default TaskList;