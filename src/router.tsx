import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import { Home } from './pages'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Link to="/404" />} />
      </Routes>
    </BrowserRouter>
  )
}
