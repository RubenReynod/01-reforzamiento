// import TiposBasicos from "./typescript/TiposBasicos"
// import OnjetosLiterales from "./typescript/OnjetosLiterales"
// import Funciones from "./typescript/Funciones"
// import Contador from "./components/Contador"
import ContadorConHook from "./components/ContadorConHook"


const App = () => {
  return (
    <div className='mt-2'>
      <h1>Introducción a TS con React</h1>
      <hr />
      { /*<TiposBasicos />*/ }
      { /*<OnjetosLiterales />*/ }
      { /*<Funciones />*/ }
      { /*<Contador />*/ }
      <ContadorConHook />
    </div>
  )
}

export default App