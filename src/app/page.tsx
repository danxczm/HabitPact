import Button from '@/components/Button/Button'

export default function Home() {
  return (
    <div className="container" style={{ marginTop: '2rem' }}>
      <h1>Challenge App</h1>
      <p>Welcome to your challenge app!</p>

      <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="success">Success Button</Button>
        <Button variant="danger">Danger Button</Button>
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        <Button variant="primary" size="sm">Small</Button>
        <Button variant="primary" size="md">Medium</Button>
        <Button variant="primary" size="lg">Large</Button>
      </div>
    </div>
  )
}
