import "./App.css"
import "./css/normalize.css"
import "./css/reset.css"
import "./css/index.css"
import Header from './components/Header'
import About from './components/About';
import Gallery from './components/Gallery'
import Language from './components/Language';
import Skills from './components/Skills'
import Footer from './components/Footer';
import ContactForm from './components/Contact'
import HBackground from './components/HBackground';


function App() {
  return (
    <div className="App">
     <Header />
     <About />
     <Language />
     <Skills />
     <Gallery />
     <ContactForm />
     <HBackground />
     <Footer />
    </div>
  );
}

export default App;
