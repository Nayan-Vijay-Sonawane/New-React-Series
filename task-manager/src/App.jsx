import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]); // store all tasks

  const [editingTask, setEditingTask] = useState(null); // for currently editing task

  const [search, setSearch] = useState(""); // state for search input

  // add new task
  const addTask = (text) => {
    const newTask = { id: Date.now(), text };
    setTasks([...tasks, newTask]);
  }

  // delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // update the task
  const updateTask = (id, newText) => {
    setTasks(
      tasks.map((task) => (task.id === id ? 
        {...task, text: newText} : task))
    );
    setEditingTask(null);
  };

  // filter tasks
  const filterTasks = tasks.filter((task) => 
  task.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="app">
        <h1>Task Manager</h1>

        <input type="text" placeholder="Search tasks" value ={search} onChange={(e) => setSearch(e.target.value)}/>

        <TaskForm 
        addTask={addTask}
        editingTask={editingTask}
        updateTask={updateTask}
         />

         <TaskList 
        tasks={filterTasks}
        deleteTask={deleteTask}
        setEditingTask={setEditingTask}
         />

      </div>
    </>
  )
}

export default App
