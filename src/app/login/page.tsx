'use client';
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import Copyright from '../Copyright/Copyright';
import { grey } from '@mui/material/colors';

const color = grey[800];

export default function Page ()  {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Card sx={{ minWidth: 345, mb: 2 }}>
          <CardMedia sx={{ height: 240 }} image='./assets/logo_prova-6.png' title='iprova' />
        </Card>
        <Typography component='h1' variant='h5' color={color}>
          Iniciar Sesion
        </Typography>
        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField margin='normal' required fullWidth id='email' label='Correo Electronico' name='email' autoComplete='email' autoFocus />
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Contraseña'
            type='password'
            id='password'
            autoComplete='current-password'
          />
          <FormControlLabel control={<Checkbox value='remember' color='primary' />} label='Recordarme' />
          <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
            Ingresar
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href='#' variant='body2'>
                Olvisdaste la Contraseña?
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};
