import { Link as RouterLink } from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"

import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks';

const formData = {
    email: '',
    password: '',
    displayName: ""
}

const formValidations = {
    email: [(value) => value.includes("@"), 'El correo debe tener un @'],
    password: [(value) => value.length >= 6, 'El password debe tener mas de 6 letras.'],
    displayName: [(value) => value.length >= 1, 'El nombre es obligatorio.'],

}

export const RegisterPage = () => {

    const dispatch = useDispatch();
    const [formSubmitted, setFormSubmitted] = useState(false)

    const { status, errorMessage } = useSelector(state => state.auth)
    const isCheckingAuthentication = useMemo(() => status === 'checking', [status])

    const { displayName, email, password, onInputChange, formState,
        displayNameValid, emailValid, passwordValid, isFormValid } = useForm(formData, formValidations);

    const onSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(true);
        if (!isFormValid) return false;
        dispatch(startCreatingUserWithEmailPassword(formState))
    }

    return (
        <>
            <AuthLayout title="Crear Cuenta">
                <form onSubmit={onSubmit}>
                    {isFormValid ? 'valido' : 'invalido'}
                    <Grid container>
                        <Grid item xs={12} sx={{ mt: 2 }}>
                            <TextField label="Nombre Completo" type="text" placeholder="Tu nombre completo" fullWidth name='displayName' onChange={onInputChange}
                                value={displayName}
                                error={!!displayNameValid && formSubmitted}
                                helperText={displayNameValid}
                            />
                        </Grid>

                        <Grid item xs={12} sx={{ mt: 2 }}>
                            <TextField label="Correo" type="email" placeholder="correo@gmail.com" fullWidth name='email' onChange={onInputChange} value={email}

                                error={!!emailValid && formSubmitted}
                                helperText={emailValid} />
                        </Grid>

                        <Grid item xs={12} sx={{ mt: 2 }}>
                            <TextField label="Contraseña" type="password" placeholder="Contraseña" fullWidth name='password' onChange={onInputChange} value={password}
                                error={!!passwordValid && formSubmitted}
                                helperText={passwordValid} />
                        </Grid>

                        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }} >
                            <Grid item xs={12} display={!!errorMessage ? '' : 'none'}>
                                <Alert severity='error' >{errorMessage}</Alert>
                            </Grid>

                            <Grid item xs={12}>
                                <Button type='submit' variant="contained" fullWidth disabled={isCheckingAuthentication}>
                                    Crear cuenta
                                </Button>
                            </Grid>


                        </Grid>

                        <Grid container direction="row" justifyContent="end">
                            <Link component={RouterLink} color="inherit" to="/auth/login">
                                Ya tengo cuenta
                            </Link>

                        </Grid>
                    </Grid>
                </form>
            </AuthLayout>
        </>
    )
}
