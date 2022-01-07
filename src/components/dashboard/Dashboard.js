import React, { useState, useContext } from "react"
import { BudgetContext } from "../budgets/BudgetDataProvider"
import { BudgetListTabs } from "../budgets/BudgetListTabs"
import { BudgetDetails } from "../budgets/BudgetDetails"
import { TotalsList } from "../totals/TotalsList"
import { BillsList } from "../bills/BillsList"
import { PaidList } from "../paid/PaidList"
import { NoteList } from "../notes/NoteList"
import "./Dashboard.css"

export const Dashboard = () => {
    // set state in parent component, pass setter to BudgetListTabs in order to change state, pass state into the BudgetDetails so we can get the associated bill with the budget the user has chosen.
    const [selectedBudget, setSelectedBudget] = useState({});
    const {budgets} = useContext(BudgetContext)

    return (
        <>
            <section>
                <BudgetListTabs setSelectedBudget={setSelectedBudget}/>
            </section>

            <section className="main">
                 {/* <BudgetDetails key={selectedBudget.id}  /> */}
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
                <div className="fullWidth">
                    {/* <NoteList /> */}
                </div>
            </section>
        </>
    )
}