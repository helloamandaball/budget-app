import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { BudgetContext } from "../budgets/BudgetDataProvider"
import { TotalsList } from "../totals/TotalsList"
import { BillsList } from "../bills/BillsList"
import { PaidList } from "../paid/PaidList"
import "./Budget.css"

export const BudgetDetails = () => {

    return (
        <>
            <div className="flex-row-reverse">
                <div className="rightColumn">
                    <TotalsList />
                </div>
                <div className="leftColumn">
                    <BillsList />
                    <PaidList />
                </div>
            </div>
            <div className="">
                NOTES GO HERE.
            </div>
    </>
    )
}