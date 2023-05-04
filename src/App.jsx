
import './App.css'
import Inicio from './components/Inicio/Inicio'
import LineaWeb from './components/LineaWeb/LineaWeb';
import Clientes from './components/clientes/Clientes';
import Contacto from './components/contacto/Contacto';
import Footer from './components/footer/Footer';
import BinasNavbar from './components/navbar/BinasNavbar'
import Nosotros from './components/nosotros/Nosotros';
import Paquetes from './components/paquetes/Paquetes';
function App() {
// const vehiclesList = vehicles.map(v => {
//   return <Card title={v.name} description={v.description}></Card>
// })

  return  (
  
  <div className="App">
        <a href="https://api.whatsapp.com/send?phone=2711236028&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20paquetes." class="float animated animatedFadeInUp fadeInUp" target="_blank">
     <img src="/img/icons/whatsapp.png" class="img-w" alt=""/>
      </a>
    <BinasNavbar/> 
    <Inicio/>
    <Nosotros/>
    <Paquetes/>
    <LineaWeb/>
    <Clientes/>
    <Contacto/>
    <Footer/>
  </div>
  );
  
}

export default App
