import './App.css';
import { Fragment } from 'react';
import Ejercicio1 from './components/Ejercicio1';
import Ejercicio2 from './components/Ejercicio2';
import Ejercicio3 from './components/Ejercicio3';
import FormTareas from './components/4-Ejercicio/FormTareas';
import FormColores from './components/5-Ejercicio/FormColores';
import "bootstrap/dist/css/bootstrap.min.css";
import WebNoticias from './components/10-WebDeNoticias/WebNoticias';


function App() {
  return (
    <Fragment>
      {/* <Ejercicio1/> */}
      {/* <Ejercicio2 text='my friend'/> */}
      {/* <Ejercicio3 text='my friend'/> */}
      {/* <FormTareas/> */}
      {/* <FormColores></FormColores> */}
      <WebNoticias/>
    </Fragment>
  );
}

export default App;
