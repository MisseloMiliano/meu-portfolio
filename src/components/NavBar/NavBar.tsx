import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"


const NavBar =() => {
    const StyledToobar = styled(Toolbar)(({}) => ({
   display:"flex",
   justifyContent:"space-between",    
   
      }))

    return (
      <>
         
         <AppBar position="relative" >
         <StyledToobar>   
        <MenuItem>About</MenuItem>
        <MenuItem>Skills</MenuItem>
        <MenuItem>Projects</MenuItem>
        </StyledToobar>
      </AppBar>
      </>
    )
  }
  
  export default NavBar