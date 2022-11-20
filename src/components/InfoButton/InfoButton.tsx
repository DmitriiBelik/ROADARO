import { Button, styled } from "@mui/material";

const InfoButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.info.main,
    maxHeight:'40px',
    width: '100%',
    padding: '0px 30px',
    height:'55px',
    borderRadius: '16px',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
}));

export default InfoButton