import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import CasinoIcon from '@mui/icons-material/Casino';
import PaymentsIcon from '@mui/icons-material/Payments';
import SecurityIcon from '@mui/icons-material/Security';

const features = [
  {
    icon: <SportsSoccerIcon sx={{ fontSize: 40 }} />,
    title: 'Apostas Esportivas',
    description: 'Ampla variedade de esportes e mercados com as melhores odds do mercado.',
  },
  {
    icon: <CasinoIcon sx={{ fontSize: 40 }} />,
    title: 'Casino ao Vivo',
    description: 'Jogos de casino ao vivo com dealers profissionais 24/7.',
  },
  {
    icon: <PaymentsIcon sx={{ fontSize: 40 }} />,
    title: 'Pagamento Rápido',
    description: 'Depósitos e saques instantâneos com múltiplas opções de pagamento.',
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 40 }} />,
    title: 'Segurança Garantida',
    description: 'Plataforma 100% segura e licenciada para suas apostas.',
  },
];

function Features() {
  return (
    <Box
      sx={{
        py: 8,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(18, 18, 18, 0.6)',
          backdropFilter: 'blur(10px)',
          zIndex: -1,
        },
      }}
    >
      <Container>
        <Typography
          variant="h2"
          textAlign="center"
          sx={{
            mb: 6,
            background: 'linear-gradient(45deg, #00ff87 30%, #60efff 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 30px rgba(0,255,135,0.3)',
          }}
        >
          Por que escolher a DP SPORTS?
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Paper
                  sx={{
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    background: 'rgba(30, 30, 30, 0.4)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(0, 255, 135, 0.1)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      background: 'rgba(30, 30, 30, 0.6)',
                      border: '1px solid rgba(0, 255, 135, 0.3)',
                      boxShadow: '0 0 20px rgba(0,255,135,0.2)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      mb: 2,
                      color: 'primary.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      filter: 'drop-shadow(0 0 10px rgba(0,255,135,0.3))',
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography variant="h5" component="h3" sx={{ mb: 2, color: 'white' }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="grey.300">
                    {feature.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Features; 