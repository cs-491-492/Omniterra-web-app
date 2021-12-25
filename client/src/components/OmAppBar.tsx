import React from 'react';
import AppBar  from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import TextButton from '@mui/material/Button'
import * as Colors from '@mui/material/colors';
import Button from '@mui/material/Button';
import { Grid, Typography, Container, Box } from '@mui/material';
import Item from '@mui/material/Grid'

const OmAppBar =  () => {
    return (
        <AppBar position='static'>
            <Container maxWidth="xl">
              <Toolbar disableGutters>
              <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            OmniTerra
          </Typography>
          
          <Box>

              
          </Box>
              </Toolbar>
            </Container>

        </AppBar>
    );
}

export default OmAppBar