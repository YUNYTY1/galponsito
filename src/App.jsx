import NavBar from "./components/NavBar";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Embers from "./components/Embers";
import Hero from "./sections/Hero";
import Nosotros from "./sections/Nosotros";
import Especialidad from "./sections/Especialidad";
import Porciones from "./sections/Porciones";
import Delivery from "./sections/Delivery";
import Sucursales from "./sections/Sucursales";
import Contacto from "./sections/Contacto";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <>
      <Embers />
      <NavBar />
      <main>
        <Hero />
        <Nosotros />
        <Especialidad />
        <Porciones />
        <Delivery />
        <Sucursales />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}