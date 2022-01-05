import React, { useContext, useEffect, useState } from "react"
// import { Link } from "react-router-dom"
import { BudgetContext } from "../budgets/BudgetDataProvider"
import { BudgetList } from "../budgets/BudgetList"
import { BudgetDetails } from "../budgets/BudgetDetails"
import "./Dashboard.css"

export const Dashboard = () => {
    const { budgets, getBudgets } = useContext(BudgetContext)
    // set state in parent component, pass setter to budgetlist in order to change state, pass state into the details so we can get the associated bill with the budget the user has chosen
    const [budget, setBudget] = useState({});

    useEffect(() => {
        getBudgets()
      }, [])


    return (
        <>
            <section>
                <BudgetList 
                    key={budget.id}
                />
            </section>
            <section className="main">
                {budgets.map(budget => {
                    return <BudgetDetails key={budget.id} />
                })}
            </section>
        </>
    )
}