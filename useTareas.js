import { useEffect, useReducer } from "react";
import tareaReducer from "../08-useReducer/tareaReducer";


const initialState = [
    /* {
        id: new Date().getTime(), // Esto es para que cada tarea tenga un id único.
        desc: 'Aprender React',
        done: false
    }, */

];


//^ INIT: Es una función que se ejecuta cuando se inicializa el reducer.
const init = () => {
    // Aqui se obtiene el estado de las tareas del localStorage.
    return JSON.parse(localStorage.getItem('tareas')) || [];
}



const useTareas = () => {
    const [tareas, dispatchTarea] = useReducer(tareaReducer, initialState, init);


    useEffect(() => {
        // Aqui se guarda el estado de las tareas en el localStorage.
        localStorage.setItem('tareas', JSON.stringify(tareas));

    }, [tareas])



    const handleAgregarTarea = (newTarea) => {
        const action = {
            type: 'agregar',
            payload: newTarea
        }

        dispatchTarea(action)
    }


    const handleEliminarTarea = (id) => {
        const action = {
            type: 'eliminar',
            payload: id
        }

        dispatchTarea(action)
    }


    const handleToogleTarea = (id) => {
        const action = {
            type: 'toggle',
            payload: id
        }

        dispatchTarea(action)
    }




    return{
        tareas,
        AllTareas: tareas.length,
        tareasPendientes: tareas.filter(tarea => !tarea.done).length,
        handleAgregarTarea,
        handleEliminarTarea,
        handleToogleTarea
    }
}

export default useTareas;