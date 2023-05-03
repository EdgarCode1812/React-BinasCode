
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
