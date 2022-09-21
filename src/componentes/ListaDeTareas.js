import React, {useState} from 'react';
import TareaFormulario from './TareaFormulario';
import '../hojas-de-estilo/ListaDeTareas.css';
import Tarea from './Tarea';

function ListaDeTareas(){

  const[tareas, setTareas] = useState([]);

  const agregarTarea = tarea =>{
    if(tarea.texto.trim()){    //comprobamos que este vacia la cadena
      tarea.texto= tarea.texto.trim();// quitando espacios innecesarios
      const tareasActualizadas = [tarea, ...tareas]; //generamos arreglos con los anteriores y nuevas tareas
      setTareas(tareasActualizadas); //actualizamos el estado
    }
  }

  return ( 
    <>  
      <TareaFormulario onSubmit={agregarTarea} />
      <div className='tareas-lista-contenedor'>
        {
          tareas.map((tarea) =>  
            <Tarea
              texto={tarea.texto}
              completada={tarea.completada}
            />
          )
        }
      </div>
    </>
  );
}

export default ListaDeTareas;