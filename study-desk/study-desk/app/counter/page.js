import Counter from '../../components/Counter';

// Page 2: passes props (title, goal) down to the Counter component
export default function CounterPage() {
  return (
    <>
      <h1>Study sessions</h1>
      <p className="lead">Tap once for every focused session you finish.</p>
      <Counter title="Today" goal={4} />
    </>
  );
}
