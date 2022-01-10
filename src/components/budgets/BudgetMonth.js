import React, { useContext } from "react"
import { BudgetContext } from "./BudgetDataProvider"
import "./Budget.css"

export const BudgetMonth = ({selectedBudget}) => {
    const {budgets} = useContext(BudgetContext)

    return (
        <>
            {budgets.filter(budget => budget.userId === +localStorage.activeUser).filter(budget => budget.id === selectedBudget).map(budget => {
                return ( 
                    <li>{budget.month} {budget.year}</li>
                )
            })}
        </>
    )
}