import FeatureCard from '../components/FeatureCard';

// Home page: welcome message + cards that receive their data through props
export default function Home() {
  return (
    <>
      <h1>Welcome to Study Desk</h1>
      <p className="lead">A tiny workspace for tracking study sessions and tasks. Pick a tool to get started.</p>
      <div className="grid">
        <FeatureCard title="Study sessions" text="Count each focused session and see when you hit today's goal." href="/counter" />
        <FeatureCard title="Task list" text="Add tasks, tick them off, and remove the ones you no longer need." href="/tasks" />
      </div>
    </>
  );
}
