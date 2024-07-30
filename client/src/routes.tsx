import { createBrowserRouter } from 'react-router-dom'
import HomePage from "./pages/home"
import LoginPage from './pages/login'
import RegisterPage from './pages/register'
import ProfilePage from './pages/userProfile'

const basePath = import.meta.env.VITE_BASE_URI
const route = createBrowserRouter([
  {
    path: `${basePath}/`,
    element: <HomePage />,
    children: [
      {
        path: `${basePath}/login`,
        element: <LoginPage />
      }, {
        path: `${basePath}/register`,
        element: <RegisterPage />
      }, {
        path: `${basePath}/profile`,
        element: <ProfilePage />
      }]
  }
])

export default route
