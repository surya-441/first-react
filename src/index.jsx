import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root'))

function MainContent() {
  return <h1>React is great</h1>
}
root.render(
  <div>
    <MainContent />
  </div>
)
