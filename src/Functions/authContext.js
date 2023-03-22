// authContext for our Sign in / Sign up / forget & reset Password system.

import {createContext,
    useContext,
    useEffect,
    useState,
    } from "react";    

import { auth } from '../Database/firebase'

import { signInWithEmailAndPassword,
         onAuthStateChanged,
        signOut,
        sendPasswordResetEmail,
        confirmPasswordReset,

} from "firebase/auth";

const AuthContext = createContext({
currentUser: null,
signUp: () => Promise,
signIn: () => Promise,
logOut: () => Promise,
googleSignIn: () => Promise,
forgotPassword: () => Promise,
resetPassword: () => Promise

})

export const useAuth = () => useContext(AuthContext)

export default function AuthContextProvider({ children }) {
const [currentUser, setCurrentUser] = useState(null)

useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, user => {
        setCurrentUser(user)
    })
    return() => {
        unsubscribe()
    }
}, [])


const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}

const logOut = () => {
    return signOut(auth)
}

const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email, {
        url: 'http://localhost:3000/signin'
    })

}

const resetPassword = (oobCode, newPassword) => {
    return confirmPasswordReset(auth, oobCode, newPassword)
}


const value = {
    currentUser,
    signIn,
    logOut,
    forgotPassword,
    resetPassword,
}

return <AuthContext.Provider value={value}>
             {children}
        </AuthContext.Provider>
}


