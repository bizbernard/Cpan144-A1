// Child component: receives the task and handler functions as props
export default function TodoItem({ task, onToggle, onDelete }) {
  return (
    <li className={task.done ? 'task done' : 'task'}>
      <label>
        <input type="checkbox" checked={task.done} onChange={() => onToggle(task.id)} />
        <span>{task.text}</span>
      </label>
      <button className="ghost" onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
}
