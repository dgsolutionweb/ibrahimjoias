import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { alpha } from '@mui/material/styles';
import heroImage from '../assets/hero.jpeg';

function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.8)',
          zIndex: 0,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(45deg, ${alpha('#000', 0.7)} 0%, ${alpha('#000', 0.5)} 100%)`,
          zIndex: 1,
        },
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 2, py: { xs: 8, md: 12 } }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h1"
                sx={{
                  color: 'white',
                  fontWeight: 700,
                  mb: 2,
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                  fontFamily: 'Playfair Display',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -10,
                    left: 0,
                    width: 100,
                    height: 2,
                    background: (theme) => theme.palette.primary.main,
                    boxShadow: '0 0 20px rgba(212,175,55,0.5)',
                  },
                }}
              >
                Elegância em Cada Detalhe
              </Typography>
              <Typography
                variant="h5"
                component={motion.p}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                sx={{
                  color: 'rgba(255,255,255,0.9)',
                  mb: 4,
                  maxWidth: 600,
                  lineHeight: 1.8,
                  textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
                }}
              >
                Descubra peças únicas que contam histórias e eternizam momentos especiais
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  component="a"
                  href="#collection"
                  onClick={handleScroll}
                  sx={{
                    color: 'white',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    boxShadow: '0 4px 20px rgba(212,175,55,0.3)',
                    '&:hover': {
                      boxShadow: '0 6px 25px rgba(212,175,55,0.4)',
                    },
                  }}
                >
                  EXPLORAR COLEÇÃO
                </Button>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -20,
                    left: -20,
                    right: -20,
                    bottom: -20,
                    border: '2px solid',
                    borderColor: 'primary.main',
                    opacity: 0.3,
                    transform: 'rotate(-3deg)',
                  },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    p: 2,
                    background: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(8px)',
                    borderRadius: 2,
                    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      color: 'primary.main',
                      textAlign: 'center',
                      mb: 2,
                      fontFamily: 'Playfair Display',
                    }}
                  >
                    Coleção 2024
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'white',
                      textAlign: 'center',
                      opacity: 0.9,
                      lineHeight: 1.8,
                    }}
                  >
                    Descubra nossas peças exclusivas para o fim de ano. Cada joia é cuidadosamente
                    selecionada para tornar seus momentos ainda mais especiais.
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Hero; 