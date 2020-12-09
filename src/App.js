//Imports General

//Import CSS
import './stylesheet/App.css';

//Import Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Premios from "./components/Premios";
import Quienes from "./components/Quienes";
import Formulario from "./components/Formulario";
import Bases from "./components/Bases";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Quienes/>
      <div className="bk-color">
      <Premios/>
      </div>
      <Formulario/>
      <Bases/>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
