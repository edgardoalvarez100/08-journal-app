import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Google } from '@mui/icons-material'

import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { startGoogleSignIn, checkingAuthetication } from '../../store/auth';
import { useMemo } from "react";

export const LoginPage = () => {

    const { status } = useSelector(state => state.auth)

    const isAuthenticated = useMemo(() => status === 'checking', [status])

    const dispatch = useDispatch();
    const { email, password, onInputChange } = useForm({
        email: '',
        password: ''
    });

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(checkingAuthetication())
    }

    const onGoogleSignIn = () => {
        console.log("onGoogleSignIn")
        dispatch(startGoogleSignIn())
    }

    return (
        <>
            <AuthLayout title='Login'>
                <form onSubmit={onSubmit}>
                    <Grid container>
                        <Grid item xs={12} sx={{ mt: 2 }}>
                            <TextField label="Correo" type="email" placeholder="correo@gmail.com"
                                name='email' onChange={onInputChange} fullWidth />
                        </Grid>
                        <Grid item xs={12} sx={{ mt: 2 }}>
                            <TextField label="Contraseña" type="password"
                                name='password' onChange={onInputChange}
                                placeholder="Contraseña" fullWidth />
                        </Grid>

                        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }} >
                            <Grid item xs={12} sm={6}>
                                <Button disabled={isAuthenticated} variant="contained" fullWidth type='submit'>
                                    Login
                                </Button>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Button disabled={isAuthenticated} onClick={onGoogleSignIn} variant="contained" fullWidth>
                                    <Google />
                                    <Typography sx={{ ml: 1 }}>Google</Typography>
                                </Button>
                            </Grid>
                        </Grid>

                        <Grid container direction="row" justifyContent="end">
                            <Link component={RouterLink} color="inherit" to="/auth/register">
                                Crear una cuenta
                            </Link>

                        </Grid>
                    </Grid>
                </form>
            </AuthLayout>
        </>
    )
}
