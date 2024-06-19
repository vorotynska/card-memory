
import './App.css'
//import data from '../App/data';
import Salad from '../context/Salad-Context/Salad-Context'
import Product from '../Product/Product';
import Game from '../game/Game';
import FileNamer from '../events/FileNamer/FileNamer';
import Form from '../form/Form';


function App() {


  return (
    <>
      <Product />
      <hr></hr>
      <Salad />
      <hr></hr>
      <Game />
      <hr></hr>
      <FileNamer />
      <hr></hr>
      <Form />
      <hr></hr>
    </>
  )
}

export default App

