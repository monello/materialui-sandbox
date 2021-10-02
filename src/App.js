// import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';

import { CssBaseline, Box, Container } from '@mui/material'

function App(props) {
  const { maxWidth } = props;
  return (
    <>
      <CssBaseline />
      <Container maxWidth={maxWidth}>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      </Container>
    </>
  );
}

export default App;
