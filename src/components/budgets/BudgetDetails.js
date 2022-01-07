import React, { useContext, useEffect } from "react"
// import { Link } from "react-router-dom"
import { TotalsList } from "../totals/TotalsList"
import { BillsList } from "../bills/BillsList"
import { PaidList } from "../paid/PaidList"
import { NoteList } from "../notes/NoteList"
import { BudgetContext } from "./BudgetDataProvider"
import { NotesContext } from "../notes/NoteDataProvider"
import "./Budget.css"

export const BudgetDetails = ({selectedBudget}) => {
// pass state from dashboard into BudgetDetails, then from there into BillsList (the component in the div below, not the JS file), then filter BillsList by selected budgetId
const {budgets} = useContext(BudgetContext)

    return (
        <>
            <div className="flex-row-reverse">
                <div className="rightColumn">
                    {/* <TotalsList /> */}
                </div>
                <div className="leftColumn">
                    {budgets.filter(selectedBudget => selectedBudget.budgetId === selectedBudget.id).map(selectedBudget =>
                        <BillsList selectedBudget={selectedBudget.id} />
                    )}

                    {/* <PaidList /> */}
                </div>
            </div>
        </>
    )
}
