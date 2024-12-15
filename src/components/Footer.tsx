import { Box, Container, Grid, Typography, IconButton, Stack, Link } from '@mui/material';
import { motion } from 'framer-motion';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import { alpha } from '@mui/material/styles';

const socialLinks = [
  {
    icon: <InstagramIcon />,
    url: 'https://instagram.com/ibrahim.joias',
    label: 'Instagram',
  },
  {
    icon: <WhatsAppIcon />,
    url: 'https://wa.me/5517999754390',
    label: 'WhatsApp',
  },
  {
    icon: <EmailIcon />,
    url: 'mailto:ibrahim.joias@gmail.com',
    label: 'Email',
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        background: (theme) => `linear-gradient(180deg, 
          ${alpha(theme.palette.primary.main, 0.03)} 0%, 
          ${alpha(theme.palette.primary.main, 0.08)} 100%)`,
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Typography 
                variant="h5" 
                color="primary" 
                gutterBottom
                sx={{
                  fontWeight: 600,
                  position: 'relative',
                  display: 'inline-block',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -4,
                    left: 0,
                    width: 40,
                    height: 2,
                    background: (theme) => theme.palette.primary.main,
                  },
                }}
              >
                Ibrahim Jóias
              </Typography>
              <Typography 
                variant="body1" 
                color="text.secondary" 
                sx={{ 
                  maxWidth: 400,
                  mb: 3,
                  lineHeight: 1.8
                }}
              >
                Há mais de uma década trazendo elegância e sofisticação para nossos clientes. 
                Especialistas em joias finas, semi joias e relógios de luxo.
              </Typography>
              <Stack direction="row" spacing={2}>
                {socialLinks.map((social, index) => (
                  <IconButton
                    key={index}
                    component={motion.a}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                    sx={{
                      color: 'text.secondary',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: 'primary.main',
                        bgcolor: (theme) => alpha(theme.palette.primary.main, 0.1),
                      },
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Stack>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Typography 
                variant="h6" 
                color="primary" 
                gutterBottom
                sx={{
                  fontWeight: 600,
                  position: 'relative',
                  display: 'inline-block',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -4,
                    left: 0,
                    width: 40,
                    height: 2,
                    background: (theme) => theme.palette.primary.main,
                  },
                }}
              >
                Visite Nossa Loja
              </Typography>
              <Typography 
                variant="body1" 
                color="text.secondary"
                sx={{ 
                  maxWidth: 400,
                  lineHeight: 1.8
                }}
              >
                Venha conhecer nossa coleção exclusiva de joias e receba um atendimento personalizado 
                em nossa loja física. Estamos localizados em um ambiente sofisticado e acolhedor no 
                coração de Guaíra.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>

        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          sx={{
            mt: 6,
            pt: 3,
            borderTop: '1px solid',
            borderColor: 'divider',
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {currentYear} Ibrahim Jóias. Todos os direitos reservados.
          </Typography>
          <Typography 
            variant="caption" 
            color="text.secondary" 
            sx={{ 
              mt: 1, 
              display: 'block',
              a: {
                transition: 'all 0.3s ease',
              }
            }}
          >
            Desenvolvido com ❤️ por{' '}
            <Link
              href="https://wa.me/5517999754390"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              sx={{ 
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                }
              }}
            >
              DGSolutionWEB
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer; 