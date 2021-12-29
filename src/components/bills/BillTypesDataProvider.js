import React, { useState, createContext } from "react"

export const BillTypesContext = createContext()

export const BillTypesProvider = (props) => {
    const [billTypes, setBillTypes] = useState([])

    const getBillTypes = () => {
        return fetch("http://localhost:8088/billTypes")
            .then(res => res.json())
            .then(setBillTypes)
    }

    return (
        <BillTypesContext.Provider value={
            {
                billTypes, getBillTypes
            }
        }>
            {props.children}
        </BillTypesContext.Provider>
    )
}
