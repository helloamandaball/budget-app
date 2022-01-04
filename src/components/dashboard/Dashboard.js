import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { BudgetContext } from "../budgets/BudgetDataProvider"
import { BudgetList } from "../budgets/BudgetList"
import { BudgetDetails } from "../budgets/BudgetDetails"
import "./Dashboard.css"

export const Dashboard = () => {
    const { budgets, getBudgets } = useContext(BudgetContext)
    
    useEffect(() => {
        getBudgets()
      }, [])


    return (
        <>
            <section>
                <BudgetList />
            </section>
            <section className="main">
                <BudgetDetails 
                    key={budgets.id}
                />
            </section>
        </>
    )
}