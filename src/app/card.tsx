'use client';

import {Paper, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)({
  padding: '20px',
  marginTop: '20px',
  marginBottom: '20px',
  width: '300px', // Narrow width
  minHeight: '400px', // Taller length
  backgroundColor: '#FCE7C8', // Added light peach/cream color
  borderRadius: '16px', // Added more curved edges
});

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px', // Curved edges for the text field
    '&.Mui-focused fieldset': {
      borderColor: '#F0A04B', // Custom border color when focused
    },
  },
});

export default function TextCard() {
  return (
    <StyledPaper elevation={5}>
      <StyledTextField
        fullWidth
        multiline
        minRows={15}
        placeholder="Enter your text here..."
        variant="outlined"
      />
    </StyledPaper>
  );
}
