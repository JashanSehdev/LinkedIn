'use client'

import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Divider,
  FormHelperText,
  Input,
  Paper,
  Typography,
} from "@mui/material";
import styles from "./signup-card.module.css";
import {
  GoogleAuthButton,
  MicrosoftAuthButton,
} from "@/app/ui/auth/auth-buttons";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import Link from "next/link";
import { useAppDispatch } from "@/features/store";
import { getUserAsync, signupUserAsync } from "@/features/auth/handle-auth/auth.action";
import { redirect } from "next/navigation";



const signupSchema = z.object({
  email : z.email({message:'Invalid email'}),
  password : z.string().min(6, 'password should not be less than 6 letters').max(12, 'password should be less than 12 letters')
})

type FormData = z.infer<typeof signupSchema>

export default function SignupCard() {
  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver : zodResolver(signupSchema)
  });
  const onSubmit: SubmitHandler<FormData> = async(data)=>{
    setLoading(true)
    await dispatch(signupUserAsync(data))
    await dispatch(getUserAsync())
    setLoading(false)
    redirect("/feed")
    
  }
  return (
    <Paper className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <p className={styles.label}>Email or Phone number</p>
          <Box className={styles.inputField}>
            <input type="text" 
              {...register("email")}
            />
            {errors.email && <FormHelperText error>{errors.email.message}</FormHelperText>}
          </Box>
        </Box>
        <Box>
          <p className={styles.label}>Password</p>
          <Box className={styles.inputField}>
            <input type="password" 
               {...register("password")}
               
            />
            {errors.password && <FormHelperText error>{errors.password.message}</FormHelperText>}
          </Box>
        </Box>
        <Box className={styles.checkBoxDiv}>
          <Checkbox color="success" size="large" className={styles.checkbox} />
          <Typography>Remember me</Typography>
        </Box>

        <Box className={styles.subtitle}>
          <span>
            By clicking Agree & Join or Continue, you agree to the LinkedIn{" "}
          </span>
          <span className={styles.blue}>
            User Agreement, Privacy Policy, and Cookie Policy.
          </span>
        </Box>

        <button className={styles.submit} type="submit">{loading ? <CircularProgress/> : 'Agree & Join' }</button>
      </form>
      <Box className={styles.divider}>
        <Divider /> or <Divider />
      </Box>
      <GoogleAuthButton />
      <MicrosoftAuthButton />
      <Box className={styles.footer}>
        <p>Already on LinkedIn?</p>
        <Link href={"/login"} className={styles.blue}>Sign In</Link>
      </Box>
    </Paper>
  );
}
