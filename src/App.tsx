import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme/theme';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import NewYearCollection from './components/NewYearCollection';
import { Box } from '@mui/material';
import SplineBackground from './components/SplineBackground';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ position: 'relative', minHeight: '100vh', background: '#FFFFFF' }}>
          <SplineBackground />
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Navbar />
            <Hero />
            <NewYearCollection />
            <Gallery />
            <Contact />
            <Footer />
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
