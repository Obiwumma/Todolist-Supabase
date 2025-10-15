import { useState } from "react"
import {useNavigate, Link} from "react-router-dom"
import { userAuth } from "../context/AuthContext"

function Signup() {

  const [email, setEmail] = useState("")
  const [fullName, setFullName] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState("")

  const {session, signUpNewUser} = userAuth()
  const navigate = useNavigate()
  // console.log(session);

  const handleSignup = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const result = await signUpNewUser(e, email, password, fullName)
      if (result?.success) {
        navigate("/signin")
        console.log("Gooood");
      } else {
        console.log("badddd");
        
      }
    } catch (error) {
      console.log("error", error);
    }
    finally {
      setLoading(false)
    }
  }
  
  return (
    <div className='flex items-center justify-center h-[100vh] '>
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create Account</h2>
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="John Doe"
              value={fullName}
              required
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="you@example.com"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="••••••••"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200"
            onClick={(e) =>handleSignup(e)}
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?
          <Link  className="text-indigo-600 font-medium hover:underline" to={"/signin"}>Sign In</Link>
        </p>
      </div>
    </div>
  )
}

export default Signup
