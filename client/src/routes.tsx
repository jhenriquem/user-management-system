import { createBrowserRouter } from 'react-router-dom'
import HomePage from "./pages/home"
import LoginPage from './pages/login'
import RegisterPage from './pages/register'
import ProfilePage from './pages/profile'

const route = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  }, {
    path: "/login",
    element: <LoginPage />
  }, {
    path: "/register",
    element: <RegisterPage />
  }, {
    path: "/profile",
    element: <ProfilePage />
  }
])

export default route
