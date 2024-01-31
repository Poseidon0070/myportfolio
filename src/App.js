import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#2196f3', 
      },
      secondary: {
        main: '#f50057', 
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
