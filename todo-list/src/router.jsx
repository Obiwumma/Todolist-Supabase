import { createBrowserRouter, routerProvider} from "react-router-dom"
import App from "./App"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Dashboard from "./pages/Dashboard"

const router = createBrowserRouter([
  {path: "/", element: <App/>  },
  {path: "/signup", element: <Signup/>  },
  {path: "/Signin", element: <Signin/>  },
  {path: "/Dashboard", element: <Dashboard/>  },
])

export default router;