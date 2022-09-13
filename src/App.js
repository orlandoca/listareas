import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo2.png'

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className= 'freecodecamp-logo-contenedor'>
        <img 
          src={freeCodeCampLogo}
          className='freecodecamp-logo2' 
        />
      </div>
    </div>
  );
}

export default App;
