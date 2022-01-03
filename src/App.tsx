import React, { ChangeEvent, FC, useRef, useState } from "react";
import "./App.css";
import Todolist from "./components/TodoList";
import { ITask } from "./models/todo";

const App: FC = () => {
  const taskRef = useRef<HTMLInputElement>(null);
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);

  const [todos, setTodos] = useState<ITask[]>([]);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    if (name === "task") {
      setTask(value);
    }
    if (name === "deadline") {
      setDeadline(+value);
    }
  };

  const onAddTask = (e: any): void => {
    e.preventDefault();
    setTodos([...todos, { taskName: task, deadline: deadline }]);
    setTask("");
    setDeadline(0);
    taskRef.current?.focus();
  };

  const onDeleteTask = (tasktodelete: string): void => {
    setTodos(todos.filter((item) => item.taskName !== tasktodelete));
  };

  return (
    <div className="app">
      <form onSubmit={onAddTask} autoComplete="off">
        <div className="header">
          <div className="input-container">
            <input
              ref={taskRef}
              type="text"
              placeholder="Task"
              name="task"
              value={task}
              onChange={onInputChange}
            />
            <input
              type="number"
              placeholder="Deadline (in days)"
              name="deadline"
              value={deadline}
              onChange={onInputChange}
            />
          </div>
          <button type="submit">Add</button>
        </div>
      </form>
      <div className="todolist">
        {todos.map((todo: ITask, key: number) => (
          <Todolist key={key} task={todo} onCompleteTask={onDeleteTask} />
        ))}
      </div>
    </div>
  );
};

export default App;
