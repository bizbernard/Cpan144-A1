import TodoList from '../../components/TodoList';

// Page 3: the task list manages its own state
export default function TasksPage() {
  return (
    <>
      <h1>Tasks</h1>
      <p className="lead">Keep track of what is left to do.</p>
      <TodoList />
    </>
  );
}
