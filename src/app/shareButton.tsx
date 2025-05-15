'use client';

import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledShareButton = styled(Button)({
  backgroundColor: '#FCE7C8',
  color: '#B17457',
  borderRadius: '12px',
  marginBottom: '10px',
  padding: '8px 16px',
  '&:hover': {
    backgroundColor: '#F0D4B4',
  },
});

export default function ShareButton() {
  return (
    <StyledShareButton 
      variant="contained"
    >
      Share
    </StyledShareButton>
  );
}
