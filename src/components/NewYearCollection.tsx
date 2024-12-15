import { Box, Container, IconButton, Typography, useTheme } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useCallback } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { alpha } from '@mui/material/styles';

// Importando as imagens
import col1 from '../assets/colecao/col1.jpeg';
import col2 from '../assets/colecao/col2.jpeg';
import col3 from '../assets/colecao/col3.jpeg';
import col4 from '../assets/colecao/col4.jpeg';
import col5 from '../assets/colecao/col5.jpeg';
import col6 from '../assets/colecao/col6.jpeg';
import col7 from '../assets/colecao/col7.jpeg';
import col8 from '../assets/colecao/col8.jpeg';
import col9 from '../assets/colecao/col9.jpeg';

const collectionItems = [
  {
    image: col1,
    title: 'Anel Solitário Glamour',
    description: 'Coleção Fim de ano 2024',
  },
  {
    image: col2,
    title: 'Colar Cascata de Luz',
    description: 'Coleção Fim de ano 2024',
  },
  {
    image: col3,
    title: 'Brincos Estrela Cadente',
    description: 'Coleção Fim de ano 2024',
  },
  {
    image: col4,
    title: 'Pulseira Riviera',
    description: 'Coleção Fim de ano 2024',
  },
  {
    image: col5,
    title: 'Conjunto Celestial',
    description: 'Coleção Fim de ano 2024',
  },
  {
    image: col6,
    title: 'Anel Eternity',
    description: 'Coleção Fim de ano 2024',
  },
  {
    image: col7,
    title: 'Colar Gota Dourada',
    description: 'Coleção Fim de ano 2024',
  },
  {
    image: col8,
    title: 'Brincos Cascata',
    description: 'Coleção Fim de ano 2024',
  },
  {
    image: col9,
    title: 'Conjunto Real',
    description: 'Coleção Fim de ano 2024',
  },
] as const;

function CollectionItem({ 
  item, 
  isActive, 
  isHovered 
}: { 
  item: typeof collectionItems[number];
  isActive: boolean;
  isHovered: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{
        opacity: isActive ? 1 : 0,
        scale: isActive ? (isHovered ? 1.05 : 1) : 1.1,
        x: 0,
      }}
      transition={{
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 },
      }}
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: isActive ? 'block' : 'none',
      }}
    >
      <Box
        component="img"
        src={item.image}
        alt={`Ibrahim Jóias - ${item.title} - Coleção Fim de ano 2024 - Joalheria em Guaíra, SP`}
        loading="lazy"
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.5s ease',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
          color: 'white',
          padding: 0,
          transform: 'none',
          opacity: 1,
          transition: 'none',
        }}
      >
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: 'Playfair Display',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              transform: 'none',
              transition: 'none',
              textAlign: 'left',
              pl: 4,
              pb: 3,
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              fontWeight: 400,
              letterSpacing: 1,
            }}
          >
            {item.description}
          </Typography>
        </motion.div>
      </Box>
    </motion.div>
  );
}

function NewYearCollection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const theme = useTheme();

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? collectionItems.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === collectionItems.length - 1 ? 0 : prev + 1));
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <Box
      component="section"
      id="collection"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(248,248,248,0.98) 100%)',
        position: 'relative',
        overflow: 'hidden',
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
            Coleção Fim de Ano
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
            Celebre os momentos especiais com peças que iluminam o seu fim de ano
          </Typography>
        </Box>

        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: { xs: 400, md: 600 },
            overflow: 'hidden',
            borderRadius: 2,
            boxShadow: `0 8px 40px ${alpha(theme.palette.primary.main, 0.15)}`,
            cursor: 'pointer',
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <AnimatePresence mode="wait">
            {collectionItems.map((item, index) => (
              <CollectionItem
                key={item.image}
                item={item}
                isActive={currentIndex === index}
                isHovered={isHovered}
              />
            ))}
          </AnimatePresence>

          <IconButton
            onClick={handlePrevious}
            sx={{
              position: 'absolute',
              left: 20,
              top: '50%',
              transform: 'translateY(-50%) scale(0.9)',
              bgcolor: 'rgba(255, 255, 255, 0.9)',
              opacity: isHovered ? 1 : 0,
              '&:hover': {
                bgcolor: 'white',
                transform: 'translateY(-50%) scale(1)',
              },
              boxShadow: `0 4px 12px ${alpha(theme.palette.primary.main, 0.2)}`,
              transition: 'all 0.3s ease',
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: 20,
              top: '50%',
              transform: 'translateY(-50%) scale(0.9)',
              bgcolor: 'rgba(255, 255, 255, 0.9)',
              opacity: isHovered ? 1 : 0,
              '&:hover': {
                bgcolor: 'white',
                transform: 'translateY(-50%) scale(1)',
              },
              boxShadow: `0 4px 12px ${alpha(theme.palette.primary.main, 0.2)}`,
              transition: 'all 0.3s ease',
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>

          <Box
            sx={{
              position: 'absolute',
              bottom: 20,
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: 1,
              zIndex: 2,
            }}
          >
            {collectionItems.map((_, index) => (
              <Box
                key={index}
                component={motion.button}
                whileHover={{ scale: 1.2 }}
                onClick={() => setCurrentIndex(index)}
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  border: 'none',
                  bgcolor: currentIndex === index ? 'primary.main' : 'rgba(255, 255, 255, 0.9)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  opacity: isHovered ? 1 : 0.7,
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default NewYearCollection; 