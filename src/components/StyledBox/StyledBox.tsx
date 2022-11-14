import { styled, Box } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    width: '100%',
    borderRadius: '16px',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
}));

export default StyledBox