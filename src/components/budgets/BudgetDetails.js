import React, { useContext, useEffect } from "react"
// import { Link } from "react-router-dom"
import { TotalsList } from "../totals/TotalsList"
import { BillsList } from "../bills/BillsList"
import { PaidList } from "../paid/PaidList"
import { NoteList } from "../notes/NoteList"
import { NotesContext } from "../notes/NoteDataProvider"
import { BudgetContext } from "./BudgetDataProvider"
import "./Budget.css"

export const BudgetDetails = ({selectedBudget}) => {
// pass state from dashboard into BudgetDetails, then from there into BillsList (the component in the div below, not the JS file), then filter BillsList by selected budgetId
const {budgets} = useContext(BudgetContext)

    return (
        <>
            <div className="flex-row-reverse">
                <div className="rightColumn">
                    <TotalsList selectedBudget={selectedBudget} />
                    <NoteList selectedBudget={selectedBudget} />
                </div>
                <div className="leftColumn">
                    <BillsList selectedBudget={selectedBudget} />
                    <PaidList selectedBudget={selectedBudget} />
                </div>
            </div>
            {/* <div className="">
                <NoteList selectedBudget={selectedBudget} />
            </div> */}
        </>
    )
}
