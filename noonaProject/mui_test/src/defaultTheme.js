import { createTheme } from "@mui/material";

export let theme = createTheme({

    palette:{
        primary:{
            main:"#7de37f",
            light:"#B5EEB5",
            dark:"#31bf49",
            contrastText:"#fff"
        }
    },
    components: {
        MuiButton: {
            defaultProps: {
                variant: "contained",
                size: "large",
                color: "primary",
                disableRipple: false,
            },
            styleOverrides: {
                root: {
                    fontSize: '2rem',
                    mt: "20px",
                }
            }
        }
    }
})