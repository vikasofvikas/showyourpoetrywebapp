'use client';

import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import ShareDialog from './shareDialog';
import { useState } from 'react';
const StyledShareButton = styled(Button)({
  backgroundColor: '#FCE7C8',
  color: '#B17457',
  borderRadius: '12px',
  marginBottom: '10px',
  padding: '8px 16px',
  '&:hover': {
    backgroundColor: '#F0D4B4'  ,
  },
});

export default function ShareButton() {
  const [open, setOpen] = useState(false);
  const [shareUrl, setShareUrl] = useState('');

  return (  
    <>
    <StyledShareButton 
      variant="contained"
        onClick={() => {
        setShareUrl(window.location.href);
        setOpen(true);
      }}
    >
      Share
    </StyledShareButton>
    <ShareDialog 
      open={open} 
      onClose={() => setOpen(false)} 
      shareUrl={shareUrl} 
    />  
    </>
  );
}
