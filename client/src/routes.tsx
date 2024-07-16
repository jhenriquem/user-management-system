import { createBrowserRouter } from 'react-router-dom'
import HomePage from "./pages/home"
import LoginPage from './pages/login'

const route = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  }, {
    path: "/login",
    element: <LoginPage />
  }
])

export default route
