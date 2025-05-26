import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { auth } from '../../firebase/firebase.init'

const AuthProvider = ({children}) => {
    const [loading, setLoading] =useState(true)
    const [user, setUser] = useState(null)


    const googleProvider = new GoogleAuthProvider()

    // create user with email and password
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in with email and password 
    const signInUser = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
    }

    // signin with google
    const signInWithGoogle = () => {
            setLoading(true)
            return signInWithPopup(auth, googleProvider)
    }

    // sign out user
    const signOutUser = () => {
      setLoading(true)
      return signOut(auth)
    }




    // Set an authentication state observer and get user data
    useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
        setLoading(false)
      })
      return unSubscribe
    },[])

     const authInfo={
          loading,
          setLoading,
          user,
          setUser,
          createUser,
          signInUser,
          signOutUser,
          signInWithGoogle,
     }
  return (
    <AuthContext value={authInfo}>
        {children}
    </AuthContext>
  )
}

export default AuthProvider