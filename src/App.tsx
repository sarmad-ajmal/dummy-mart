import React, { lazy, Suspense } from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

const LoginPage = lazy(() =>
  import('./components/auth').then(module => ({ default: module.LoginPage })),
)

function App() {
  return (
    <div className='App'>
      <Router>
        <Suspense
          fallback={() => {
            ;<div>loading</div>
          }}
        >
          <Routes>
            <Route path='*' element={<LoginPage />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  )
}

export default App
