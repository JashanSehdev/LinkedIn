import { Box } from "@mui/material";
import Image from "next/image";
import googleLogo from '@/../public/google.png'
import styles from './auth-button.module.css'
import appleLogo from '@/../public/apple-logo.png'
import microsoftLogo from '@/../public/microsoft.png'
import { useAppDispatch } from "@/features/store";
import { getUserAsync, googleLoginAsync } from "@/features/auth/handle-auth/auth.action";
import { redirect } from "next/navigation";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/lib/firebase";



export function GoogleAuthButton() {
  const dispatch = useAppDispatch()
  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      // const idToken = await result.user.getIdToken();
  
      // // await createSession(idToken);
      const email = result.user.email
      if (!email) throw new Error('Unable to login')
      await dispatch(googleLoginAsync(email))
      await dispatch(getUserAsync());
      redirect("/feed")
    } catch (error: any) {
      console.error(error);
      throw error;
    }
  };
    return (
        <button className={styles.button1} onClick={handleGoogleLogin}>
        <Image
          style={{ backgroundColor: "white", borderRadius: "100%" }}
          width={40}
          height={40}
          src={googleLogo}
          alt="google logo"
        />
        Continue with Google
      </button>    
    )
}

export function AppleAuthButton() {
    return (
        <button className={styles.button1}>
        <Image
          style={{ backgroundColor: "white"}}
          width={25}
          height={25}
          src={appleLogo}
          alt="apple logo"
        />
        Continue with Apple
      </button>    
    )
}

export function MicrosoftAuthButton() {
    return(
         <button className={styles.button1}>
        <Image
          style={{ backgroundColor: "white"}}
          width={25}
          height={25}
          src={microsoftLogo}
          alt="apple logo"
        />
        Continue with Microsoft
      </button>   
    )
}