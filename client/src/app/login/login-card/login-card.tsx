'use client'

import {
  Box,
  Checkbox,
  CircularProgress,
  Divider,
  FormHelperText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import styles from "./login-card.module.css";
import { GoogleAuthButton, AppleAuthButton } from "@/app/ui/auth/auth-buttons";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { handleEmailLogin } from "@/actions/auth-actions";
import Link from "next/link";

import { getUserAsync, loginUserAsync } from "@/features/auth/handle-auth/auth.action";
import { useAppDispatch } from "@/features/store";
import { redirect } from "next/navigation";



const loginSchema = z.object({
  email : z.email(),
  password : z.string().min(6, 'password should not be less than 6 letters').max(12, 'password should be less than 12 letters')
})

type FormData = z.infer<typeof loginSchema>

export default function LoginCard() {
  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver : zodResolver(loginSchema)
  });
  const onSubmit: SubmitHandler<FormData> = async(data) => {

    await dispatch(loginUserAsync(data))
    await dispatch(getUserAsync())
    redirect("/feed")
  }

  return (
    <Paper className={styles.container} elevation={2}>
      <h3 className={styles.title}>Sign In</h3>
      <Box className={styles.subtitle}>
        <Typography variant="h6" sx={{ fontSize: "1.2rem" }}>
          New to LinkedIn?
        </Typography>{" "}
        <Link
        href={'/signup'}
        className={styles.link}
        >
          Join Now
        </Link>
      </Box>

      <GoogleAuthButton />
      <AppleAuthButton />

      <Typography sx={{ color: "#a1978e" }}>
        By continuing, you agree to LinkedIn’s{" "}
        <span style={{ color: "#0a66c2", fontWeight: "540" }}>
          User Agreement, Privacy Policy,
        </span>{" "}
        and{" "}
        <span style={{ color: "#0a66c2", fontWeight: "540" }}>
          {" "}
          Cookie Policy.
        </span>
      </Typography>
      <Box className={styles.divider}>
        <Divider sx={{ display: "inline" }} /> or{" "}
        <Divider sx={{ display: "inline" }} />
      </Box>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className={styles.input}>
          <Typography className={styles.label}>Email or Phone</Typography>
          <TextField fullWidth variant="outlined" 
            {...register('email')}
          />
          {errors.email && <FormHelperText error>{errors.email.message}</FormHelperText>}
        </Box>
        <Box className={styles.input}>
          <Typography className={styles.label}>Password</Typography>
          <TextField type="password" fullWidth variant="outlined" 
            {...register('password')}
          />
          {errors.password && <FormHelperText error>{errors.password.message}</FormHelperText>}
        </Box>
        <Typography className={`${styles.blue}`}>Forget password?</Typography>
        <Box className={styles.checkbox}>
          <Checkbox
            className={styles.check_button}
            size="large"
            color="success"
          />
          <Typography className={styles.Checkbox_text}>
            Keep me signed in
          </Typography>
        </Box>
        <button className={styles.submit}>{loading ? <CircularProgress/>: 'Sign in'}</button>
      </form>
    </Paper>
  );
}
