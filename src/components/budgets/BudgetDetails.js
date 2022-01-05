import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { BudgetContext } from "../budgets/BudgetDataProvider"
import { TotalsList } from "../totals/TotalsList"
import { BillsList } from "../bills/BillsList"
import { PaidList } from "../paid/PaidList"
import "./Budget.css"

export const BudgetDetails = ({budget}) => {
// run useEffect?
    return (
        <>
            <div className="flex-row-reverse">
                <div className="rightColumn">
                    <TotalsList key={budget.id}/>
                </div>
                <div className="leftColumn">
                    <BillsList key={budget.id}/>
                    <PaidList key={budget.id}/>
                </div>
            </div>
            <div className="">
                NOTES GO HERE.
            </div>
        </>
    )
}
