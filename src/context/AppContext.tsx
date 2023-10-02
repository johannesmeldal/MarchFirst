import React, { useEffect } from "react";
import { useState } from "react";
// import { ThemeConfig } from './context/theme.config';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import App from '../App';
import CssBaseline from '@mui/material/CssBaseline';

const LOCAL_STORAGE_KEY = 'drkmode'

export enum ThemePalette { //definerer farger og fonter som kan brukes i temaet
  DARKBG =  '#024262',
  DARKBUTTON = "#011a27",
    LIGHTBG = "#ffffff",
  LIME = "#C8FA5F",
  
//   FONT_GLOBAL = "'JetBrains Mono', monospace",
}

const darkTheme = createTheme( {
    palette: {
        mode: 'dark',
        background: {
            default: ThemePalette.DARKBG,
        },
        primary: {
            main: ThemePalette.DARKBUTTON,
        },
    },
    typography: {
        // fontFamily: ThemePalette.FONT_GLOBAL,
        fontSize: 46,
    },
    components: {
        MuiButton: {
            defaultProps: {
                style: {
                    textTransform: 'none',
                    boxShadow: 'none',
                    borderRadius: '0.5em',
                },
            },
        },
    },
});

const lightTheme = createTheme( {
    palette: {
        mode: 'light',
        background: {
            default: ThemePalette.LIGHTBG,
        },
        primary: {
            main: ThemePalette.LIME,
        },
        
    },
    typography: {
        // fontFamily: ThemePalette.FONT_GLOBAL,
        fontSize: 46,
    },
    components: {
        MuiButton: {
            defaultProps: {
                style: {
                    textTransform: 'none',
                    boxShadow: 'none',
                    borderRadius: '0.5em',
                },
            },
        },
    },
});

function AppContext() {
  
  const [darkmode,setDarkmode]= useState<boolean>(localStorage.getItem(LOCAL_STORAGE_KEY) === 'true' ? true : false);

  useEffect(() => {
    darkmode ? localStorage.setItem(LOCAL_STORAGE_KEY, 'true') : localStorage.setItem(LOCAL_STORAGE_KEY, 'false');
    }, [darkmode]);


  return (
    <ThemeProvider theme={darkmode ? darkTheme : lightTheme}> 
        <CssBaseline />
          <App darkmode = {darkmode} setDarkmode = {setDarkmode} />
    </ThemeProvider>
  );
}

export default AppContext;