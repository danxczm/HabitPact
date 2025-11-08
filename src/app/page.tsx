import DaysList from '@/components/Days/DaysList/DaysList';

export default function Home() {
  return (
    <div className="container" style={{ marginTop: '2rem' }}>
      <h1>Challenge App</h1>
      <p>Welcome to your challenge app!</p>
      <div style={{ marginTop: '4rem' }}>
        <DaysList />
      </div>
    </div>
  );
}
