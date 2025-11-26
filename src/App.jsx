import { useState } from 'react'
import { INITIAL_STATE } from './data/initialState'

function App() {
  const [exams, setExams] = useState(INITIAL_STATE)
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>ExamFlow</h1>
      <pre style={{ textAlign: 'left' }}>
        {JSON.stringify(exams, null, 2)}
      </pre>
    </div>
  )
}

export default App