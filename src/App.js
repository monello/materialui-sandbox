import * as React from 'react';
import AppBar from './components/AppBar/AppBar'
import MuiToolbar from "@mui/material/Toolbar";

import { CssBaseline, Box, Container } from '@mui/material'


function App(props) {
  const { maxWidth, disableGutters } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar />
      <MuiToolbar />
      <Container>
        <Box sx={{ my: 2 }}>
          {[...new Array(50)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join("\n")}
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default App;
