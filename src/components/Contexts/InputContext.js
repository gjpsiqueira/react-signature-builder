import React, { useState, createContext, useContext } from 'react'

export const InputContext = createContext()

export const InputProvider = ({ children }) => {

    const [state, setState] = useState({
        name: '',
        email: '',
        telefone: '',
        setor: ''
    })

    const onUpdate = (e) => {
        setState({
            ...state,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    return (
        <InputContext.Provider 
            value={{
                data: state,
                updateData: onUpdate
            }}>
            {children}
        </InputContext.Provider>

    )
}


export const useInputValue = () => useContext(InputContext)