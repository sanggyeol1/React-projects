import { Button, styled } from '@mui/material';

//css in javascript
export const CustomButton = styled(Button)(({border}) => ({
    fontSize: '2rem',
    backgroundColor: 'red',
    mt: "20px",
    border : `4px solid ${border}`,
    "&:hover": { background: "blue" },
    "@media (max-width:600px)": {
        backgroundColor: "grey"
    },
}))