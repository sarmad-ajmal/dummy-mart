import React, { lazy, Suspense } from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import { DefaultLayout } from './layouts'

import DefaultRedirectRoute from './routes/default_redirect_route'
import PrivateRoute from './routes/private_route'
import PublicRoute from './routes/public_route'

import { ROUTES } from './routes/routes'

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
            <Route
              path={ROUTES.LOGIN}
              element={<PublicRoute component={() => <LoginPage />} />}
            />
            <Route
              path='/secure/*'
              element={
                <PrivateRoute>
                  <DefaultLayout />
                </PrivateRoute>
              }
            >
              <Route path={ROUTES.PRODUCTS} element={<ProductsPage />} />
              <Route path='*' element={<DefaultRedirectRoute />} />
            </Route>
            <Route path='*' element={<DefaultRedirectRoute />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  )
}

export default App
