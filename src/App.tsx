import React from 'react'
import { Container, Button } from '@mui/material';
import { MdOutlineDarkMode, MdLightMode } from 'react-icons/md';

interface Props {
    darkmode: boolean;
    setDarkmode: React.Dispatch<React.SetStateAction<boolean>>;
}

const App = ({darkmode, setDarkmode} : Props) => {

    const handleDarkmode = (props: Props) => {
        darkmode ? setDarkmode(false) : setDarkmode(true);
        // if (darkmode === 'true') {
        //     console.log('darkmode is true');
        //     setDarkmode('false');
        // } else {
        //     console.log('darkmode is false');
        //     setDarkmode('true');
        // }
    }
    
  return (
    
      <Container maxWidth='xl' >
      <Button fullWidth variant="contained" onClick={
        () => handleDarkmode({darkmode, setDarkmode}) //handleDarkmode må ha med props for å kunne endre på darkmode
        }>
        {darkmode ? <MdOutlineDarkMode/> : <MdLightMode/>}
      </Button>

    </Container>
  )
}

export default App
