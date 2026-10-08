'use client';
import { useState } from 'react';
import TodoItem from './TodoItem';

// STATE: `tasks` (the list), `text` (input value), `error` (validation message)
export default function TodoList() {
  const [tasks, setTasks] = useState([{ id: 1, text: 'Review Lab 3 notes', done: false }]);
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  // EVENT: form submission adds a task
  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) {
      setError('Type a task before adding it.');
      return;
    }
    setTasks([...tasks, { id: Date.now(), text: text.trim(), done: false }]);
    setText('');
    setError('');
  }

  const toggle = (id) => setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  const remove = (id) => setTasks(tasks.filter((t) => t.id !== id));
  const doneCount = tasks.filter((t) => t.done).length;

  return (
    <section className="panel">
      <form onSubmit={handleSubmit} className="row">
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="New task" aria-label="New task" />
        <button type="submit">Add task</button>
      </form>
      {/* CONDITIONAL RENDERING: error, empty state, or the list */}
      {error && <p className="error">{error}</p>}
      {tasks.length === 0 ? (
        <p className="note">Nothing to do. Add your first task above.</p>
      ) : (
        <>
          <p className="note">{doneCount} of {tasks.length} done</p>
          <ul>
            {tasks.map((t) => (
              <TodoItem key={t.id} task={t} onToggle={toggle} onDelete={remove} />
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
