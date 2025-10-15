import { createBrowserRouter} from "react-router-dom"
import App from "./App"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Dashboard from "./pages/Dashboard"
import ProtectedRoute from "./pages/ProtectedRoute"

const router = createBrowserRouter([
  // {path: "/", element: <App/>  },
  {path: "/signup", element: <Signup/>  },
  {path: "/signin", element: <Signin/>  },
  {path: "/", element: <ProtectedRoute> <Dashboard/> </ProtectedRoute>   },
])

export default router;