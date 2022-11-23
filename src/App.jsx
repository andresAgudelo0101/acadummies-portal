import Home from "./components/Home"
import Menu from "./components/Menu"
import Acerca from "./components/Acerca"
import PlanEstudios from "./components/PlanEstudios"


function App() {


  return (
    <div className=" h-screen bg-slate-500 ">
      <Menu/>
      <Home/>
      <Acerca/>
      <PlanEstudios/>
    </div>
  )
}

export default App
