import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { appRoutes } from './routes'
import { MainLayout } from './MainLayout'

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        {appRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<Suspense fallback={<PageFallback />}>{route.element}</Suspense>}
          />
        ))}
      </Route>
    </Routes>
  </BrowserRouter>
)

const PageFallback = () => (
  <div className="flex min-h-[40vh] items-center justify-center text-muted">
    Loading...
  </div>
)

export default App
