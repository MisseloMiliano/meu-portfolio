import { Container, Grid, styled, Typography } from "@mui/material"
import avatar from "../../../../assets/images/avatar.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";
const Hero = () => {

  const StyledHero = styled("div")(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display:"flex",
    alignItems:"center",
  
  }))

  const Styledimg = styled("img")(({theme}) => ({
   
    width: "100%",
    borderRadius: "50%",
    height:"70%",
    border:`1px solid ${theme.palette.primary.contrastText}`,
  
  }))

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg" >
          <Grid container spacing={2}>

            <Grid item xs={12} md={4}>
              <Styledimg src={avatar} />
            </Grid>

            <Grid item xs={12} md={8}>
              <Typography color="primary.contrastText" variant="h2" textAlign="center" pb={2}>Misselo Miliano</Typography>
              <Typography color="primary.contrastText" variant="h4" textAlign="center">Estudante de Engenharia Informática </Typography>
              <Grid container display="flex" justifyContent="center" spacing={3}>

                <Grid item xs={12} md={4} sx={{ mt: 2 }} display="flex" justifyContent="center"  >
                 

                  <StyledButton>
                
                    <DownloadIcon />
                    <Typography>
                    Download CV
                    </Typography>
                    
                  </StyledButton>

                </Grid>

                <Grid item xs={12} md={4} sx={{ mt: 2 }} display="flex" justifyContent="center">
          
                    <StyledButton>
                
                   <EmailIcon />
                   <Typography>
                   Contacte me
                    </Typography>
                  
                  </StyledButton>
                </Grid>
              </Grid>



            </Grid>

          </Grid>
        </Container>
      </StyledHero>
    </>
  )
}

export default Hero