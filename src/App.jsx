import Home from "./components/Home"
import Menu from "./components/Menu"
import Tematica from "./components/Tematica"


function App() {


  return (
    <div className=" h-screen bg-slate-500 ">
      <Menu/>
      <Home/>
      <Tematica/>
      <Tematica/>
    </div>
  )
}

export default App
