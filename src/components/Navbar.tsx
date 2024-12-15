import {
  AppBar,
  Box,
  Container,
  IconButton,
  Link,
  Stack,
  Typography,
  useScrollTrigger,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const navItems = [
  { label: 'Início', href: '#' },
  { label: 'Coleção', href: '#gallery' },
  { label: 'Contato', href: '#contact' },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{
        width: 280,
        height: '100%',
        background: 'rgba(255,255,255,0.98)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ p: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: '"Playfair Display", serif',
            color: 'primary.main',
            fontWeight: 600,
          }}
        >
          Menu
        </Typography>
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'text.primary' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider sx={{ borderColor: 'rgba(212, 175, 55, 0.1)' }} />
      <List sx={{ flexGrow: 1, pt: 2 }}>
        {navItems.map((item) => (
          <ListItem
            key={item.label}
            component={Link}
            href={item.href}
            onClick={handleDrawerToggle}
            sx={{
              py: 2,
              color: 'text.primary',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              '&:hover': {
                color: 'primary.main',
                bgcolor: 'rgba(212, 175, 55, 0.05)',
              },
            }}
          >
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                sx: {
                  fontFamily: '"Playfair Display", serif',
                  fontSize: '1.2rem',
                  fontWeight: 500,
                },
              }}
            />
          </ListItem>
        ))}
      </List>
      <Box sx={{ p: 3 }}>
        <Stack direction="row" spacing={2} justifyContent="center">
          <IconButton
            component={Link}
            href="https://instagram.com/ibrahim.joias"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: 'text.primary',
              transition: 'all 0.3s ease',
              '&:hover': {
                color: 'primary.main',
                transform: 'translateY(-2px)',
              },
            }}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            component={Link}
            href="https://wa.me/5517999755233"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: 'text.primary',
              transition: 'all 0.3s ease',
              '&:hover': {
                color: 'primary.main',
                transform: 'translateY(-2px)',
              },
            }}
          >
            <WhatsAppIcon />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );

  return (
    <AppBar
      component={motion.header}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      position="fixed"
      sx={{
        transition: 'all 0.3s ease',
        ...(trigger && {
          backgroundColor: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        }),
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ height: { xs: 64, md: 80 }, px: { xs: 2, md: 4 } }}
        >
          <Typography
            variant="h4"
            component={Link}
            href="#"
            sx={{
              fontFamily: '"Playfair Display", serif',
              color: 'primary.main',
              textDecoration: 'none',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              fontSize: { xs: '1.5rem', md: '2rem' },
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -2,
                left: 0,
                width: '100%',
                height: '2px',
                background: 'currentColor',
                transform: 'scaleX(0)',
                transformOrigin: 'right',
                transition: 'transform 0.3s ease',
              },
              '&:hover::after': {
                transform: 'scaleX(1)',
                transformOrigin: 'left',
              },
            }}
          >
            IBRAHIM JOIAS
          </Typography>

          <Stack
            direction="row"
            spacing={4}
            alignItems="center"
            sx={{ display: { xs: 'none', md: 'flex' } }}
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                underline="none"
                sx={{
                  color: 'text.primary',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  letterSpacing: '0.02em',
                  position: 'relative',
                  py: 1,
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '2px',
                    background: (theme) => theme.palette.primary.main,
                    transform: 'scaleX(0)',
                    transformOrigin: 'right',
                    transition: 'transform 0.3s ease',
                  },
                  '&:hover': {
                    color: 'primary.main',
                    '&::after': {
                      transform: 'scaleX(1)',
                      transformOrigin: 'left',
                    },
                  },
                }}
              >
                {item.label}
              </Link>
            ))}
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton
                component={Link}
                href="https://instagram.com/ibrahim.joias"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'text.primary',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: 'primary.main',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                component={Link}
                href="https://wa.me/5517999755233"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'text.primary',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: 'primary.main',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <WhatsAppIcon />
              </IconButton>
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' }, color: 'text.primary' }}
            >
              <MenuIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <Drawer
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: 280,
                border: 'none',
                boxShadow: '0 0 40px rgba(0,0,0,0.1)',
              },
            }}
          >
            {drawer}
          </Drawer>
        )}
      </AnimatePresence>
    </AppBar>
  );
}

export default Navbar; 