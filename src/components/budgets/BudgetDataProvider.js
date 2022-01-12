import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const BudgetContext = createContext()

// This component establishes what data can be used.
export const BudgetsProvider = (props) => {
    const [budgets, setBudgets] = useState([])
    const [selectedBudget, setSelectedBudget] = useState(0);
    const [searchTerms, setSearchTerms] = useState("")

    const getBudgets = () => {
        return fetch("http://localhost:8088/budgets")
            .then(res => res.json())
            .then(setBudgets)
    }

    const addBudget = budgetObj => {
        return fetch("http://localhost:8088/budgets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(budgetObj)
        })
            .then(response => response.json())
    }

    const getBudgetById = (id) => {
        return fetch(`http://localhost:8088/budgets/${id}`)
            .then(res => res.json())
    }

    const deleteBudget = budgetId => {
        return fetch(`http://localhost:8088/budgets/${budgetId}`, {
            method: "DELETE"
        })
            .then(getBudgets)
    }

    const updateBudget = budget => {
        return fetch(`http://localhost:8088/budgets/${budget.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(budget)
        })
            .then(getBudgets)
    }

    return (
        <BudgetContext.Provider value={
            {
                budgets, addBudget, getBudgets, getBudgetById, deleteBudget, updateBudget, searchTerms, setSearchTerms, setSelectedBudget, selectedBudget
            }
        }>
            {props.children}
        </BudgetContext.Provider>
    )

}
