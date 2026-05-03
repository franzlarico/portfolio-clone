import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import SideLeft from './components/SideLeft';
import SideRight from './components/SideRight';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Spotlight from './components/Spotlight';
import './index.css';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Spotlight />
        <Header />
        <SideLeft />
        <SideRight />
        <div className="content-wrapper">
          <main>
            <Hero />
            <About />
            <Experience />
            <Work />
            <Contact />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
