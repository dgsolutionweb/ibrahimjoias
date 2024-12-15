import { Box } from '@mui/material';

export default function SplineBackground() {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        background: 'linear-gradient(45deg, rgba(212,175,55,0.1) 0%, rgba(255,255,255,0.1) 100%)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("/sparkles.svg")',
          opacity: 0.1,
          animation: 'sparkle 20s linear infinite',
        },
        '@keyframes sparkle': {
          '0%': {
            transform: 'translateY(0) rotate(0deg)',
            opacity: 0.1,
          },
          '50%': {
            opacity: 0.2,
          },
          '100%': {
            transform: 'translateY(-100%) rotate(360deg)',
            opacity: 0.1,
          },
        },
      }}
    />
  );
} 