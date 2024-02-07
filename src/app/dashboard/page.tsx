'use client';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';

export default function Page() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '90vh', justifyContent: 'center' }}>
      <h1 style={{ textAlign: 'center'}}>Henry Zapata ¿Qué quieres hacer?</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
        <Button
          variant='contained'
          color='primary'
          startIcon={<AddIcon />}
          onClick={() => {
            // Lógica para el botón de crear proceso
            console.log('Crear Proceso');
          }}>
          Proceso Cotización
        </Button>
        <Button
          variant='contained'
          color='secondary'
          startIcon={<SearchIcon />}
          onClick={() => {
            // Lógica para el botón de buscar proceso
            console.log('Buscar Proceso');
          }}>
          Buscar Proceso
        </Button>
      </div>
    </div>
  );
}
