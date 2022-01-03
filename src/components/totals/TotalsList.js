import React, { useContext, useEffect } from "react"
// import { useNavigate } from "react-router"
// import { BillsContext } from "../bills/BillsDataProvider"
// import { BudgetContext } from "../budgets/BudgetDataProvider"
import { TotalsCard } from "./TotalsCard"
import "./Totals.css"

export const TotalsList = () => {
    // const { getBills } = useContext(BillsContext)
    // const { getBudgets } = useContext(BudgetContext)

    // // const navigate = useNavigate()

    // useEffect(() => {
    //     // console.log("Totals: useEffect - getBudgets")
    //     getBudgets()
    //     .then(getBills)
    //   }, [])

    return (
        <TotalsCard />
    )
}