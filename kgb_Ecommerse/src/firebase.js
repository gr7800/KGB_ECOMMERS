import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "./firebaseConfig"



export const doCreateUserWithEmailIdAndPassword =async (email,password)=>{
  return await createUserWithEmailAndPassword(auth,email,password)
}

export const doSignInWithEmailIdAndPassword = async (email,password)=>{
  return await signInWithEmailAndPassword(auth,email,password)
}


export const doSignOut=()=>{
  return auth.signOut()
}