'use client';
import { useState } from 'react';

// STATE: `count`. PROPS: `title` and `goal` come from the page.
export default function Counter({ title, goal }) {
  const [count, setCount] = useState(0);
  const reached = count >= goal;

  return (
    <section className={reached ? 'panel done' : 'panel'}>
      <h2>{title}</h2>
      <p className="big">{count}</p>
      {/* CONDITIONAL RENDERING: message changes with the state */}
      <p className="note">
        {count === 0 && `No sessions yet. Goal: ${goal}.`}
        {count > 0 && !reached && `${goal - count} more to reach your goal.`}
        {reached && 'Goal reached. Nice work!'}
      </p>
      {/* EVENTS: three click handlers update state */}
      <div className="row">
        <button onClick={() => setCount(count + 1)}>Add session</button>
        <button className="ghost" onClick={() => setCount(count - 1)} disabled={count === 0}>Remove</button>
        <button className="ghost" onClick={() => setCount(0)}>Reset</button>
      </div>
    </section>
  );
}
