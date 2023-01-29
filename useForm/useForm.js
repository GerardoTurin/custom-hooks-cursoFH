import { useState } from "react";


const useForm = ( initialForm = {} ) => {

    const [formState, setFormState] = useState( initialForm )


    // Hacer cambios en el input
    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value
        })
    }


    const onResetForm = () => {
        setFormState( initialForm )
    }

    return{
        ...formState,   //^ ...formState = name, email, password
        formState,
        onInputChange,
        onResetForm
    }
}

export default useForm