import { Box, Container, Grid, Typography, Card, Stack, Button } from '@mui/material';
import { motion } from 'framer-motion';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneIcon from '@mui/icons-material/Phone';
import { alpha } from '@mui/material/styles';

const contactInfo = [
  {
    icon: <WhatsAppIcon sx={{ fontSize: 32 }} />,
    title: 'WhatsApp',
    content: '(17) 99975-5233',
    link: 'https://wa.me/5517999755233',
  },
  {
    icon: <InstagramIcon sx={{ fontSize: 32 }} />,
    title: 'Instagram',
    content: '@ibrahim.joias',
    link: 'https://instagram.com/ibrahim.joias',
  },
  {
    icon: <EmailIcon sx={{ fontSize: 32 }} />,
    title: 'Email',
    content: 'ibrahim.joias@gmail.com',
    link: 'mailto:ibrahim.joias@gmail.com',
  },
  {
    icon: <LocationOnIcon sx={{ fontSize: 32 }} />,
    title: 'Endereço',
    content: 'Avenida 11, 383 - Centro\nGuaira, São Paulo',
    link: 'https://maps.google.com/?q=Avenida+11,+383+-+Centro+Guaira+São+Paulo',
  },
  {
    icon: <AccessTimeIcon sx={{ fontSize: 32 }} />,
    title: 'Horário de Funcionamento',
    content: 'Segunda a Sexta: 09:00 às 18:00\nSábado: 09:00 às 12:00',
  },
  {
    icon: <PhoneIcon sx={{ fontSize: 32 }} />,
    title: 'Telefones',
    content: '(17) 99979-6174\n(17) 3358-0767',
    link: 'tel:+551733580767',
  },
];

function Contact() {
  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, rgba(248,248,248,0.98) 0%, rgba(255,255,255,0.95) 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            component={motion.h2}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variant="h2"
            color="primary"
            sx={{
              mb: 2,
              position: 'relative',
              display: 'inline-block',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 60,
                height: 2,
                background: (theme) => theme.palette.primary.main,
              },
            }}
          >
            Entre em Contato
          </Typography>
          <Typography
            component={motion.p}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: 'auto', mt: 3 }}
          >
            Estamos à disposição para atendê-lo com exclusividade
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {contactInfo.map((info, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  style={{ height: '100%' }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      p: 3,
                      background: 'rgba(255,255,255,0.8)',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s ease',
                      cursor: info.link ? 'pointer' : 'default',
                      boxShadow: 1,
                      '&:hover': {
                        background: 'rgba(255,255,255,0.95)',
                        boxShadow: 4,
                        '& .icon': {
                          color: 'primary.main',
                          transform: 'scale(1.1)',
                        },
                      },
                    }}
                    onClick={() => info.link && window.open(info.link, '_blank')}
                  >
                    <Stack spacing={2} alignItems="center" textAlign="center">
                      <Box
                        className="icon"
                        sx={{
                          color: 'text.secondary',
                          transition: 'all 0.3s ease',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 64,
                          height: 64,
                          borderRadius: '50%',
                          bgcolor: (theme) => alpha(theme.palette.primary.main, 0.1),
                        }}
                      >
                        {info.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: 'text.primary',
                        }}
                      >
                        {info.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'text.secondary',
                          whiteSpace: 'pre-line',
                          ...(info.link && {
                            color: 'primary.main',
                            '&:hover': {
                              textDecoration: 'underline',
                            },
                          }),
                        }}
                      >
                        {info.content}
                      </Typography>
                    </Stack>
                  </Card>
                </motion.div>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          sx={{ 
            mt: 8,
            textAlign: 'center'
          }}
        >
          <Button
            component={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variant="contained"
            size="large"
            startIcon={<WhatsAppIcon />}
            onClick={() => window.open('http://chat.whatsapp.com/ItYfBE2R3EZ3vd0wVTUkLN', '_blank')}
            sx={{
              py: 2,
              px: 4,
              fontSize: '1.1rem',
              fontWeight: 600,
              borderRadius: 2,
              background: '#25D366',
              '&:hover': {
                background: '#1faa52',
              },
            }}
          >
            Participe do nosso grupo do WhatsApp Ibrahim Jóias
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Contact; 