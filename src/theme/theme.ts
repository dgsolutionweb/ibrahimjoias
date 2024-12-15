import { createTheme, alpha, ThemeOptions } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#D4AF37',
      light: '#FFD700',
      dark: '#B8860B',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#1A1A1A',
      light: '#2C2C2C',
      dark: '#000000',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F8F8F8',
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#4A4A4A',
    },
    divider: alpha('#D4AF37', 0.1),
  },
  typography: {
    fontFamily: '"Lato", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontSize: '3.5rem',
      fontWeight: 700,
      letterSpacing: '-0.02em',
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontSize: '2.75rem',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontSize: '2.25rem',
      fontWeight: 600,
    },
    h4: {
      fontFamily: '"Playfair Display", serif',
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    h5: {
      fontFamily: '"Lato", sans-serif',
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    h6: {
      fontFamily: '"Lato", sans-serif',
      fontSize: '1rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
      letterSpacing: '0.02em',
    },
    overline: {
      letterSpacing: '0.1em',
      fontWeight: 500,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        html {
          scroll-behavior: smooth;
        }
        ::selection {
          background-color: ${alpha('#D4AF37', 0.2)};
          color: #1A1A1A;
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: '12px 24px',
          fontSize: '0.875rem',
          fontWeight: 500,
          textTransform: 'none',
          transition: 'all 0.3s ease',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'currentColor',
            opacity: 0,
            transition: 'opacity 0.3s ease',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
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
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(212, 175, 55, 0.2)',
            transform: 'translateY(-2px)',
          },
        },
        outlined: {
          borderWidth: '1px',
          '&:hover': {
            borderWidth: '1px',
            background: alpha('#D4AF37', 0.05),
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 0,
            transition: 'all 0.3s ease',
            '& fieldset': {
              borderWidth: '1px',
              transition: 'border-color 0.3s ease',
            },
            '&:hover fieldset': {
              borderColor: '#D4AF37',
            },
            '&.Mui-focused fieldset': {
              borderWidth: '1px',
              borderColor: '#D4AF37',
              boxShadow: `0 0 0 3px ${alpha('#D4AF37', 0.1)}`,
            },
          },
          '& .MuiInputLabel-root': {
            transition: 'all 0.3s ease',
            '&.Mui-focused': {
              color: '#D4AF37',
            },
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(8px)',
          boxShadow: 'none',
          borderBottom: '1px solid rgba(212, 175, 55, 0.1)',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: 'all 0.3s ease',
          '&:hover': {
            background: alpha('#D4AF37', 0.05),
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: alpha('#D4AF37', 0.1),
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
        standardSuccess: {
          backgroundColor: alpha('#4CAF50', 0.9),
          color: '#FFFFFF',
        },
      },
    },
  },
  shape: {
    borderRadius: 0,
  },
  shadows: [
    'none',
    '0 2px 4px rgba(0,0,0,0.05)',
    '0 4px 8px rgba(0,0,0,0.05)',
    '0 8px 16px rgba(0,0,0,0.05)',
    '0 12px 24px rgba(0,0,0,0.05)',
    '0 16px 32px rgba(0,0,0,0.05)',
    '0 20px 40px rgba(0,0,0,0.05)',
    '0 24px 48px rgba(0,0,0,0.05)',
    '0 28px 56px rgba(0,0,0,0.05)',
    '0 32px 64px rgba(0,0,0,0.05)',
    '0 36px 72px rgba(0,0,0,0.05)',
    '0 40px 80px rgba(0,0,0,0.05)',
    '0 44px 88px rgba(0,0,0,0.05)',
    '0 48px 96px rgba(0,0,0,0.05)',
    '0 52px 104px rgba(0,0,0,0.05)',
    '0 56px 112px rgba(0,0,0,0.05)',
    '0 60px 120px rgba(0,0,0,0.05)',
    '0 64px 128px rgba(0,0,0,0.05)',
    '0 68px 136px rgba(0,0,0,0.05)',
    '0 72px 144px rgba(0,0,0,0.05)',
    '0 76px 152px rgba(0,0,0,0.05)',
    '0 80px 160px rgba(0,0,0,0.05)',
    '0 84px 168px rgba(0,0,0,0.05)',
    '0 88px 176px rgba(0,0,0,0.05)',
    '0 92px 184px rgba(0,0,0,0.05)',
  ],
} as const;

export const theme = createTheme(themeOptions); 