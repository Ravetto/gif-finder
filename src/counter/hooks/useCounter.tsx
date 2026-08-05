import { useState } from 'react'


export const useCounter = (initialState: number = 10) => {
    const [counter, setcounter] = useState(initialState)

    const handleAdd = () => {
        setcounter(counter + 1)
    }

    const handleSubstract = () => {
        setcounter(counter - 1)
    }

    const handleReset = () => {
        setcounter(initialState)
    }
    return {
        /*Values*/
        counter,
        /*Methods*/
        handleAdd,
        handleSubstract,
        handleReset
    }
}
