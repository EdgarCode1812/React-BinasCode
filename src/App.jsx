
import './App.css'
import Inicio from './components/Inicio/Inicio'
import BinasNavbar from './components/navbar/BinasNavbar'
function App() {
// const vehiclesList = vehicles.map(v => {
//   return <Card title={v.name} description={v.description}></Card>
// })

  return  (
  
  <div className="App">
    <BinasNavbar/> 
    <Inicio/>
  </div>
  );
  
}

export default App
