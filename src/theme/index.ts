import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1505ae',
        },
        secondary: {
            main: '#AE1E05',
        },
        text: {
            primary: 'rgba(0, 0, 0, 0.87)',
            secondary: 'rgba(0, 0, 0, 0.6)',
            disabled: 'rgba(0, 0, 0, 0.38)'
        },
        background: {
            default: '#f7f8fa',
            paper: '#ffffff',
        }
    },
    typography: {
        fontFamily: 'Helvetica, sans-serif',
        fontSize: 14,
        h1: {
            fontSize: "4rem",
            fontWeight: 500,
            lineHeight: 1.167,
            letterSpacing: "0.01rem",
            color: '#1505ae',
        },
        h2: {
            fontSize: "2.8rem",
            fontWeight: 500,
            letterSpacing: ".31px",
            lineHeight: '3.7rem',
            color: '#1505ae',
        },
        h3: {
            fontSize: "2rem",
            fontWeight: 500,
            letterSpacing: ".22px",
        },
        h4: {
            fontSize: "1.8rem",
            letterSpacing: "0.2px",
        },
        h5: {},
        subtitle1: {
            fontSize: "2.2rem",
            fontWeight: 500,
            letterSpacing: "1.24px",
            color: "#4A5767",
        },
        subtitle2: {
            fontSize: '1.4rem',
            letterSpacing: '0.16px',
            color: '#4a5767',
            fontWeight: 500,
        },
        body1: {
            fontSize: "1.6rem",
            lineHeight: 1.59,
            letterSpacing: "0.18px",
            color: '#4A5767',
        },
        body2: {
            fontSize: "1.4rem",
            lineHeight: 1.6,
            letterSpacing: "0.16px",
            color: "#091b32",
        },
        button: {
            fontSize: "1.4rem",
            fontWeight: 500,
            lineHeight: 1,
            letterSpacing: "0.01rem",
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: () => ({
                html: {
                    scrollBehavior: 'smooth',
                    fontSize: 10,
                },
            })
        },
        MuiButton: {
            defaultProps: {
                variant: 'outlined',
            },
            styleOverrides: {
                root: {
                    borderWidth: '1px',
                    boxShadow: 'none',
                    padding: '1rem',
                }
            }
        }
    },
});

export default theme;
