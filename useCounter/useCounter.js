import { useState } from "react";


const useCounter = ( valorInicial = 10 ) => {
    const [counter, setCounter] = useState( valorInicial )

    const increment = (value = 1) => {
        setCounter( (valorActual) => valorActual + value )
    }

    const decrement = ( value = 1) => {
        if (counter === 0) return;
        setCounter( (valorActual) => valorActual - value )
    }

    const reset = () => {
        setCounter( valorInicial )
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}

export default useCounter;