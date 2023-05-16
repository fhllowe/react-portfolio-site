import Header from './components/Header'
import About from './components/About';
import Gallery from './components/Gallery'
import Language from './components/Language';
import Skills from './components/Skills'
import HBackground from './components/HBackground';
import Footer from './components/Footer';
import ContactForm from './components/Contact'

function App() {
  return (
    <div className="App">
     <Header />
     <About />
     <Language />
     <Skills />
     <Gallery />
     <ContactForm />
     <Footer />
    </div>
  );
}

export default App;
