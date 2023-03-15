import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [describe, setDescribe] = useState("");
  const [date, setDate] = useState("");
  const [tasks, setTasks] = useState([]);

  const att = ()=> {
    setTasks([
      {task:task, describe: describe, date: date},
      ...tasks
    ])
    console.log(tasks)
  }
  
  //setTasks(([prevState]) => {
    //return {...prevState, task: task, describe: describe, date: date}
  //})
  //console.log(tasks)

  const clear = () => {
    setTasks([])
  }
  return (
    <main>
      <div>
        <input value={task} onChange={(event) => setTask(event.target.value)} />

        <input
          value={describe}
          onChange={(event) => setDescribe(event.target.value)}
        />

        <input value={date} onChange={(event) => setDate(event.target.value)} />
        <button onClick={att}>add task</button>
        <button onClick={clear}>Clear tasks</button>
      </div>
        {
          tasks.map(task => 
            (
              <div>
                <p>{task.task}</p>
                <p>{task.describe}</p>
                <p>{task.date}</p>
              </div>
              
            ) 
        )
        }
    </main>
  );
}

export default App;
