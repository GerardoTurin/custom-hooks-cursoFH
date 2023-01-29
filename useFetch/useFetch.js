import { useEffect, useState } from "react"


const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    })

    const getFetch = async () => {

        // Se pone el loading en true para que se muestre el loading.
        setState({
            ...state,
            loading: true
        })


        const resp = await fetch(url);
        const data = await resp.json();

        try {
            setState({
                loading: false,
                error: null,
                data
            })
        } catch (error) {
            setState({
                data: null,
                loading: false,
                error: 'No se pudo cargar la info'
            })
        }
    }

    useEffect(() => {
        getFetch()
    }, [ url ])   //^ Si el url cambia, se ejecuta el useEffect, si no, no se ejecuta.


    return {
        data: state.data,
        loading: state.loading,
        error: state.error
    }
}

export default useFetch