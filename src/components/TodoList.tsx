import { ITask } from "../models/todo";

interface ITaskProps {
  task: ITask;
  onCompleteTask(taskname: string): void;
}

const Todolist = ({ task, onCompleteTask }: ITaskProps) => {
  return (
    <div className="todo">
      <span className="todo-name">{task.taskName}</span>
      <span className="todo-deadline">{task.deadline}</span>
      <button
        className="todo-finish"
        type="button"
        onClick={() => onCompleteTask(task.taskName)}
      >
        <i className="icon far fa-trash-alt"></i>
      </button>
    </div>
  );
};

export default Todolist;
