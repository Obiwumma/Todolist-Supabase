import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../supabaseClient";

const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
  const [session, setSession] = useState(undefined)

  //sign up
  const signUpNewUser = async (e, email, password, username) => {  
    e.preventDefault()
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
                data: {
                    username,
                }
            }
    })

    if (error) {
      console.log("Error Adding user:", error);
    } else {
      console.log("Added succesfully:", data);

      
      return { success: true, data };
    }
  }
// console.log(session?.user?.user_metadata?.username);
const userName = session?.user?.user_metadata?.username


  useEffect(() => {
  const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
    setSession(session);
  });

  return () => subscription.unsubscribe();
}, []);
 

// signin
const userSignin = async (email, password) => {
  
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })
  if (error) {
      console.log("Error Logging user:", error);
    } else {
      console.log("Logged In succesfully:", data);
    }

  return { success: true, data };
}


// signout
const userSignout = async () => {
  
const { error } = await supabase.auth.signOut()

if (error) {
      console.log("Error Logging OUT:", error);
    } else {
      console.log("Logged OUT succesfully:");
    }

}


  return (
    <AuthContext.Provider value={{session, signUpNewUser, userSignin, userSignout, userName}}>
      {children}
    </AuthContext.Provider>
  )
}

export const userAuth = () => {
  return useContext(AuthContext)
}