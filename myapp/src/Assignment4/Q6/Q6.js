// 6.Build a simple todo list component with a text input for adding new tasks and a list to display them. Use controlled components to handle the input and update the list of tasks.

import React, { useState } from 'react';

function TodoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const submithandler = (event) => {
    event.preventDefault();
    if (task!== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const deletehandler = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <div>Ques6</div>
      <h2>Todo List</h2>
      <form onSubmit={submithandler}>
        <input
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="Enter task"
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deletehandler(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
