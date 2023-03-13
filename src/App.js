import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [describe, setDescribe] = useState("");
  const [date, setDate] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <main>
      <div>
        <input value={task} onChange={(event) => setTask(event.target.value)} />

        <input
          value={describe}
          onChange={(event) => setDescribe(event.target.value)}
        />

        <input value={date} onChange={(event) => setDate(event.target.value)} />
      </div>
    </main>
  );
}

export default App;
