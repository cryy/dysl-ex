import React from 'react';
import { Box, CssBaseline, ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import Wrapper from './Wrapper';

export const light = createMuiTheme({
    typography: {
        fontFamily: "'OpenDyslexic'",
    },
    palette: {
        primary: {
            main: "#3c62c2",
        },
        secondary: {
            main: "#E91E63",
        },
        background: {
            default: "#edd0b2",
            paper: "#edd0b2",
        },
        mode: "light",
    },
});

export default function App() {
    return (
        <ThemeProvider theme={light}>
            <CssBaseline />

            <Box
                sx={{
                    display: "flex",
                }}
            >
                <Wrapper />
            </Box>
        </ThemeProvider>
    );
}
