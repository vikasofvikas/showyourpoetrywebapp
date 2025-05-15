'use client';

import { Dialog, DialogTitle, DialogContent, TextField, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

const StyledDialog = styled(Dialog)({
  '& .MuiPaper-root': {
    borderRadius: '16px',
    padding: '10px',
  },
});

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    '&.Mui-focused fieldset': {
      borderColor: '#F0A04B',
    },
  },
});

const CopyButton = styled(Button)({
  backgroundColor: '#FCE7C8',
  color: '#B17457',
  borderRadius: '12px',
  padding: '8px 16px',
  '&:hover': {
    backgroundColor: '#F0D4B4',
  },
});

export default function ShareDialog({ 
  open, 
  onClose, 
  shareUrl 
}: { 
  open: boolean; 
  onClose: () => void; 
  shareUrl: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <StyledDialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ color: '#B17457' }}>Share this note</DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
          <StyledTextField
            fullWidth
            value={shareUrl}
            variant="outlined"
            InputProps={{
              readOnly: true,
            }}
          />
          <CopyButton 
            variant="contained" 
            onClick={handleCopy}
          >
            {copied ? 'Copied!' : 'Copy'}
          </CopyButton>
        </Box>
      </DialogContent>
    </StyledDialog>
  );
}
