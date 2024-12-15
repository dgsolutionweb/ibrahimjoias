import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Modal,
  Fade,
} from '@mui/material';
import { motion } from 'framer-motion';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

// Importando as imagens
import anelNoivado from '../assets/nossacolecao/anelnoivado.jpeg';
import brincoOuro from '../assets/nossacolecao/brincoouro.jpeg';
import colar from '../assets/nossacolecao/colar.jpeg';
import pulseira from '../assets/nossacolecao/pulseira.jpeg';

const galleryItems = [
  {
    id: 1,
    title: 'Anéis de Noivado',
    description: 'Eternize seu amor com nossas peças exclusivas',
    image: anelNoivado,
    category: 'Anéis',
  },
  {
    id: 2,
    title: 'Colares Sofisticados',
    description: 'Elegância e brilho para todas as ocasiões',
    image: colar,
    category: 'Colares',
  },
  {
    id: 3,
    title: 'Brincos em Ouro',
    description: 'Delicadeza e sofisticação em cada detalhe',
    image: brincoOuro,
    category: 'Brincos',
  },
  {
    id: 4,
    title: 'Pulseiras Exclusivas',
    description: 'Design único para momentos especiais',
    image: pulseira,
    category: 'Pulseiras',
  },
] as const;

function Gallery() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[number] | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handleOpenModal = (item: typeof galleryItems[number]) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <Box
      id="gallery"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(248,248,248,0.98) 100%)',
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
            Nossa Coleção
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
            Descubra peças únicas que combinam tradição artesanal com design contemporâneo
          </Typography>
        </Box>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={4}>
            {galleryItems.map((item) => (
              <Grid item xs={12} sm={6} md={6} key={item.id}>
                <motion.div variants={itemVariants}>
                  <Card
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    sx={{
                      position: 'relative',
                      overflow: 'hidden',
                      height: '100%',
                      cursor: 'pointer',
                    }}
                  >
                    <Box sx={{ position: 'relative' }}>
                      <CardMedia
                        component="img"
                        height="400"
                        image={item.image}
                        alt={item.title}
                        sx={{
                          transition: 'transform 0.6s ease',
                          ...(hoveredItem === item.id && {
                            transform: 'scale(1.05)',
                          }),
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          bgcolor: 'rgba(0,0,0,0.3)',
                          opacity: hoveredItem === item.id ? 1 : 0,
                          transition: 'opacity 0.3s ease',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <IconButton
                          onClick={() => handleOpenModal(item)}
                          sx={{
                            color: 'white',
                            transform: hoveredItem === item.id ? 'scale(1)' : 'scale(0.5)',
                            opacity: hoveredItem === item.id ? 1 : 0,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              transform: 'scale(1.1)',
                            },
                          }}
                        >
                          <ZoomInIcon sx={{ fontSize: 40 }} />
                        </IconButton>
                      </Box>
                    </Box>
                    <CardContent
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                        color: 'white',
                        transform: hoveredItem === item.id ? 'translateY(0)' : 'translateY(20%)',
                        opacity: hoveredItem === item.id ? 1 : 0.8,
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <Typography
                        variant="overline"
                        component="div"
                        sx={{ color: 'primary.light', letterSpacing: 2 }}
                      >
                        {item.category}
                      </Typography>
                      <Typography variant="h5" component="div" sx={{ fontFamily: 'Playfair Display' }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" sx={{ mt: 1, opacity: 0.9 }}>
                        {item.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      <Modal
        open={Boolean(selectedItem)}
        onClose={handleCloseModal}
        closeAfterTransition
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2,
        }}
      >
        <Fade in={Boolean(selectedItem)}>
          <Box
            sx={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '90vh',
              bgcolor: 'background.paper',
              borderRadius: 2,
              boxShadow: 24,
              overflow: 'hidden',
            }}
          >
            {selectedItem && (
              <>
                <IconButton
                  onClick={handleCloseModal}
                  sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: 'white',
                    bgcolor: 'rgba(0,0,0,0.5)',
                    '&:hover': {
                      bgcolor: 'rgba(0,0,0,0.7)',
                    },
                    zIndex: 1,
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <Box
                  component="img"
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '80vh',
                    objectFit: 'contain',
                  }}
                />
                <Box
                  sx={{
                    p: 3,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.6))',
                    color: 'white',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                  }}
                >
                  <Typography variant="h4" sx={{ mb: 1, fontFamily: 'Playfair Display' }}>
                    {selectedItem.title}
                  </Typography>
                  <Typography variant="body1" sx={{ opacity: 0.9 }}>
                    {selectedItem.description}
                  </Typography>
                </Box>
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}

export default Gallery; 