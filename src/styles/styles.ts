import { Grid } from '@mui/material';
import { styled, Box } from '@mui/system';

const commonStyles = {
  fontFamily: 'monospace',
  
};
const padding={
    padding:"0 10%",
}

const Flex={
    display: 'flex',
  alignItems: 'center',
}

export const StyledFlex = (styled(Box)(({ theme }) => ({
  ...commonStyles,
  ...Flex,
  justifyContent: 'space-between',
  height: '60px',
  backgroundColor: 'goldenrod',
  padding: '0 1rem',
  [theme.breakpoints.down('sm')]: {
    // Apply styles for screens with a maximum width of 600px (sm breakpoint)
    height:"auto",
   flexDirection:'column',
   alignItems:"center",
   justifyContent:"start",
   padding:"20px 0"
  },
})));

export const StyledButton = styled('a')({
  ...commonStyles,
  color: 'green',
  padding: '8px',
  borderRadius: '8px',
  cursor: 'pointer',
  fontWeight: '500',
  fontSize: '2rem',
});

export const StyledNav = styled('ul')({
  ...commonStyles,
  display: 'flex',
  alignItems: 'baseline',
  '& li a': {
    color: 'black',
    fontSize: '1.2rem',
    marginRight: '2rem',
  },
});

export const HeroSection = styled(Box)({
  ...commonStyles,
  width: '100%',
  height: '80vh',
  overflow: 'hidden',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: '#040805a1',
    
  },
  '& img': {
    width: '100%',
    height:"100%",
    objectFit: 'cover',
  },
  '& section': {
    position: 'absolute',
    maxWidth: '500px',
    top: '50%',
    ...padding,
    transform: 'translateY(-50%)',
    color: 'white',
    '& h2, & p': {
      fontSize: '3rem',
    },
    '& p': {
      fontSize: '1.6rem',
    },
  },
});


export const StyledGrid= styled(Grid)({
    ...commonStyles,
    backgroundColor:"white",
    padding:"10%",
    "& h2":{
        fontSize:"3rem"
    }
})

export const StyledLoader= styled('div')({
    
   
    position:"absolute",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    top:"0",
   
    left:"0",
   
    height:"100%",
    width:"100%",
    backgroundColor:"black",
    color:"white",
  zIndex:"10"
})