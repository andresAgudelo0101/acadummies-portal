import Home from "./components/Home"
import Menu from "./components/Menu"
import Acerca from "./components/Acerca"
import PlanEstudios from "./components/PlanEstudios"
import Contacto from "./components/Contacto"
import Footer from "./components/Footer"


function App() {


  return (
    <div className=" h-screen bg-slate-500 ">
      <Menu/>
      <Home/>
      <Acerca/>
      <PlanEstudios/>
      <Contacto/>
      <Footer/>
    </div>
  )
}

export default App
