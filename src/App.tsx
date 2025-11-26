import { useState } from 'react'
import { INITIAL_STATE, AppState } from './data/initialState'

function App() {
  const [exams /*, setExams */] = useState<AppState>(INITIAL_STATE)
  return (
    <div className="app-container">
      <h1>ExamFlow</h1>
      <pre style={{ textAlign: 'left' }}>
        {JSON.stringify(exams, null, 2)}
      </pre>
    </div>
  )
}

export default App