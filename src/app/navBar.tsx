'use client';

import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const TransparentAppBar = styled(AppBar)({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  color: '#B17457',  
});

export default function NavBar() {
  return (
    <TransparentAppBar position="static">
      <StyledToolbar>
        <Typography variant="subtitle2">
          SYP
        </Typography>
        <Button color="inherit">
          Login
        </Button>
      </StyledToolbar>
    </TransparentAppBar>
  );
}
