import React, { useState, useEffect } from 'react';

// form for adding and editing task
function TaskForm ({ addTask, editingTask, updateTask}) {
    const [text, setText] = useState("");

    useEffect(() => {
        if(editingTask) {
            setText(editingTask.text);
        }
    }, [editingTask]);

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent page reload
        if(!text.trim()) return;    // ignores empty inputs

        if (editingTask) {
            updateTask(editingTask.id, text);
        }
        else{
            addTask(text);
        }

        setText("");    // cleares input after submit
    };

    return (
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter task" value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit">{editingTask ? "Update Task": "Add Task"}</button>
        </form>
    )

}

export default TaskForm;