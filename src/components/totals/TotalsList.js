import React, { useContext } from "react"
import { TotalsCard } from "./TotalsCard"
import "./Totals.css"
// import { BudgetContext } from "../budgets/BudgetDataProvider"

export const TotalsList = ({selectedBudget}) => {
    // const { budgets, getBudgets} = useContext(BudgetContext)

    return (
         <TotalsCard selectedBudget={selectedBudget} />

    )
}