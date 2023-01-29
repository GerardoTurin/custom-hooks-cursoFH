const tareaReducer = (initialState, action) => {
    switch ( action.type ) {
        case "agregar":
            return [...initialState, action.payload];   // Agrega un nuevo elemento al arreglo.

        case "eliminar":
            return initialState.filter((tarea) => tarea.id !== action.payload);   // Elimina un elemento del arreglo.

        case "toggle":
            return initialState.map((tarea) => {
                if(tarea.id === action.payload) {
                    return { ...tarea, done: !tarea.done };   // Invierte el estado de un elemento del arreglo.
                }
                return tarea;
        });

        default:
            return initialState;
    }
};

export default tareaReducer;
