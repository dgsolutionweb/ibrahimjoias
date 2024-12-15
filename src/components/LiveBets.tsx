import { Box, Container, Typography, Paper, Grid, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

const liveMatches = [
  {
    id: 1,
    league: 'Premier League',
    team1: 'Manchester City',
    team2: 'Liverpool',
    odds1: '2.10',
    oddsX: '3.40',
    odds2: '3.20',
    time: '65:00',
    score: '2-1',
  },
  {
    id: 2,
    league: 'La Liga',
    team1: 'Real Madrid',
    team2: 'Barcelona',
    odds1: '1.95',
    oddsX: '3.50',
    odds2: '3.60',
    time: '32:00',
    score: '0-0',
  },
  {
    id: 3,
    league: 'Serie A',
    team1: 'Juventus',
    team2: 'Inter Milan',
    odds1: '2.40',
    oddsX: '3.20',
    odds2: '2.80',
    time: '78:00',
    score: '1-2',
  },
];

function LiveBets() {
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
          background: 'rgba(18, 18, 18, 0.7)',
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
          Apostas ao Vivo
        </Typography>
        <Grid container spacing={3}>
          {liveMatches.map((match, index) => (
            <Grid item xs={12} md={4} key={match.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Paper
                  sx={{
                    p: 3,
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
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Chip
                      icon={<SportsSoccerIcon />}
                      label={match.league}
                      color="primary"
                      size="small"
                      sx={{
                        backdropFilter: 'blur(5px)',
                        background: 'rgba(0, 255, 135, 0.1)',
                      }}
                    />
                    <Chip
                      label={`${match.time}'`}
                      color="error"
                      size="small"
                      sx={{
                        animation: 'pulse 2s infinite',
                        backdropFilter: 'blur(5px)',
                        background: 'rgba(255, 50, 50, 0.1)',
                      }}
                    />
                  </Box>
                  <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <Typography variant="h6" color="white" sx={{ textShadow: '0 0 10px rgba(255,255,255,0.3)' }}>
                      {match.team1} vs {match.team2}
                    </Typography>
                    <Typography
                      variant="h4"
                      color="primary.main"
                      sx={{
                        mt: 1,
                        fontWeight: 'bold',
                        textShadow: '0 0 20px rgba(0,255,135,0.4)',
                      }}
                    >
                      {match.score}
                    </Typography>
                  </Box>
                  <Grid container spacing={1}>
                    <Grid item xs={4}>
                      <Button
                        fullWidth
                        variant="outlined"
                        color="primary"
                        sx={{
                          borderRadius: 2,
                          backdropFilter: 'blur(5px)',
                          borderWidth: 2,
                          '&:hover': {
                            borderWidth: 2,
                            background: 'rgba(0, 255, 135, 0.1)',
                          },
                        }}
                      >
                        1 ({match.odds1})
                      </Button>
                    </Grid>
                    <Grid item xs={4}>
                      <Button
                        fullWidth
                        variant="outlined"
                        color="primary"
                        sx={{
                          borderRadius: 2,
                          backdropFilter: 'blur(5px)',
                          borderWidth: 2,
                          '&:hover': {
                            borderWidth: 2,
                            background: 'rgba(0, 255, 135, 0.1)',
                          },
                        }}
                      >
                        X ({match.oddsX})
                      </Button>
                    </Grid>
                    <Grid item xs={4}>
                      <Button
                        fullWidth
                        variant="outlined"
                        color="primary"
                        sx={{
                          borderRadius: 2,
                          backdropFilter: 'blur(5px)',
                          borderWidth: 2,
                          '&:hover': {
                            borderWidth: 2,
                            background: 'rgba(0, 255, 135, 0.1)',
                          },
                        }}
                      >
                        2 ({match.odds2})
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              py: 2,
              px: 6,
              fontSize: '1.1rem',
              boxShadow: '0 0 20px rgba(0,255,135,0.3)',
              backdropFilter: 'blur(5px)',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 0 30px rgba(0,255,135,0.5)',
              },
            }}
          >
            Ver Todos os Jogos ao Vivo
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default LiveBets; 