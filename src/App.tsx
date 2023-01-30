import React, { lazy, Suspense } from 'react'
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Outlet,
} from 'react-router-dom'

const LoginPage = lazy(() =>
  import('./components/auth').then(module => ({ default: module.LoginPage })),
)
const ProductsPage = lazy(() =>
  import('./components/products').then(module => ({
    default: module.ProductsList,
  })),
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
            <Route
              path='/secure/*'
              element={
                <div>
                  {' '}
                  <Outlet />
                </div>
              }
            >
              <Route path='hi' element={<ProductsPage />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </div>
  )
}

export default App
