// 14.create a component that displays a list of tasks.
// Each task has a "Complete" button.
// Implement a feature where clicking the "Complete" button marks the task as completed.
// Use the useCallback hook to create dynamic callback functions for each task.
// Ensure that clicking the "Complete" button for one task doesn't trigger unnecessary re-renders for other tasks.
import React, { useCallback, useState } from "react";

const tasklist = [
  { id: 1, title: "title 1" },
  { id: 2, title: "title 2" },
  { id: 3, title: "title 3" },
  { id: 4, title: "title 4" },
  { id: 5, title: "title 5" }
];
export function TaskListUseCallback() {
  return (
    <div>
      <h1>Question-14: TaskList with UseCallback</h1>
      <TaskList  tasks={tasklist}/>
    </div>
  );
}

function TaskList({tasks}){

    const [completedtasks, setCompletedTasks] = useState([]);

    const onCompleted = useCallback((taskId)=>setCompletedTasks(prev => [...prev, taskId]), [])

    return (
      <div>
        <h2>Task List: </h2>
        <ul>
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onComplete={onCompleted}
              isCompleted={completedtasks.includes(task.id)}
            />
          ))}
        </ul>
      </div>
    );
}

const Task = React.memo(({task, onComplete, isCompleted})=>{

  console.log(`Rendering Task: ${task.title}`);

  return (
    <li>
      {`--- ${task.title} ---`}
      {!isCompleted && (
        <button onClick={()=> onComplete(task.id)}>Complete</button>
      )}
    </li>
  );
})