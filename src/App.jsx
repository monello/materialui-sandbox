import * as React from 'react';
import AppBar from './components/AppBar/AppBar'
import SpeedDial from './components/SpeedDial/SpeedDial'
import MuiToolbar from "@mui/material/Toolbar";

import { CssBaseline, Box, Container } from '@mui/material'

import { LoremIpsum } from "react-lorem-ipsum";

function App(props) {
  const { maxWidth, disableGutters } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar />
      <MuiToolbar />
      <SpeedDial />
      <Container>
        <Box sx={{ my: 2 }}>
          <LoremIpsum
            p={6}
            avgWordsPerSentence={10}
            avgSentencesPerParagraph={10}
          />
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default App;
