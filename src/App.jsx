import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Tracks from './Pages/Tracks';
import FAQ from './Pages/FAQ';
import Prize from './Pages/Prize';
import Gallery from './Pages/Gallery';
import Sponsors from './Pages/Sponsors';
import Team from './Pages/Team';
import Register from './Pages/Register';

function App() {
  return (
    <div className="flex flex-col min-h-screen relative scroll-smooth">
      <div className="stars-container fixed inset-0 -z-10 overflow-hidden">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>

      <Navbar />

      <main className="flex-grow pt-20 z-10">
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        {/* <section id="sponsors"><Sponsors /></section> */}
       <section id="tracks"><Tracks /></section>
       <section id="prize"><Prize /></section>
        <section id="faq"><FAQ /></section>
        <section id="team"><Team /></section>

        {/* <section id="prize"><Prize /></section>
        <section id="gallery"><Gallery /></section>
        <section id="sponsors"><Sponsors /></section>
        <section id="register"><Register /></section> */}
      </main>

      <Footer />
    </div>
  );
}

export default App;
