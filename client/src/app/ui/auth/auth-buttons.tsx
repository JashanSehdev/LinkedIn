import { Box } from "@mui/material";
import Image from "next/image";
import googleLogo from '@/../public/google.png'
import styles from './auth-button.module.css'
import appleLogo from '@/../public/apple-logo.png'
import microsoftLogo from '@/../public/microsoft.png'
import { handleGoogleLogin } from "@/actions/auth-actions";

export function GoogleAuthButton() {
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