import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const BillsContext = createContext()

// This component establishes what data can be used.
export const BillsProvider = (props) => {
    const [bills, setBills] = useState([])
    const [searchTerms, setSearchTerms] = useState("")

    const getBills = () => {
        return fetch("http://localhost:8088/bills")
            .then(res => res.json())
            .then(setBills)
    }

    const addBill = billObj => {
        return fetch("http://localhost:8088/bills", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(billObj)
        })
            .then(response => response.json())
    }

    const getBillById = (id) => {
        return fetch(`http://localhost:8088/bills/${id}`)
            .then(res => res.json())
    }

    //boolean is assigned a variable that can then be told its true or false elsewhere (true in BillCard for incomplete bill list, false in BillList for the paid bills list)
    const paidBill = (billId, isPaid) => {
        return fetch(`http://localhost:8088/bills/${billId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ paid: isPaid })
        })
            .then(getBills)
    }

    // boolean is set to true in this version:
    // const paidBill = (billId) => {
    //     return fetch(`http://localhost:8088/bills/${billId}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({paid: true}) 
    //     })
    //     .then(getBills)
    // }

    const deleteBill = billId => {
        return fetch(`http://localhost:8088/bills/${billId}`, {
            method: "DELETE"
        })
            .then(getBills)
    }

    const updateBill = bill => {
        return fetch(`http://localhost:8088/bills/${bill.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bill)
        })
            .then(getBills)
    }

    return (
        <BillsContext.Provider value={
            {
                bills, addBill, getBills, getBillById, deleteBill, updateBill, paidBill, searchTerms, setSearchTerms
            }
        }>
            {props.children}
        </BillsContext.Provider>
    )

}
