import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import TallCounter from "./pages/TallyCounter"

export const routes = [
    {path: '/tally_counter',element: <TallCounter />},
    {path: '/home',element: <Home />},
    {path: '/login',element: <Login />},
    {path: '/signup',element: <Signup />},
    {path: '*',element: <Login />},
  ]

  