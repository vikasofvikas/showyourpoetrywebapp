
import { Container, Typography} from '@mui/material';

import NavBar from "./navBar";
import TextCard from "./card";
import ShareButton from "./shareButton";



export default function Home() {
 

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <NavBar />
      <Container 
        maxWidth="sm" 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center', 
          mt: 4 
        }}
      >
        <TextCard />
        <ShareButton/>
       
      </Container>
      <Typography 
        variant="h6" 
        sx={{ ml: 2, mt: 2 }}
      >
        Popular
      </Typography>
    </div>
  );
}
