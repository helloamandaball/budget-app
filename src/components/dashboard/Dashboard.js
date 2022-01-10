import React, { useContext, useState } from "react"
import { BudgetListTabs } from "../budgets/BudgetListTabs"
import { BudgetDetails } from "../budgets/BudgetDetails"
import { BudgetContext } from "../budgets/BudgetDataProvider"
import "./Dashboard.css"

export const Dashboard = () => {
    // set state in parent component, pass setter to BudgetListTabs in order to change state, pass state into the BudgetDetails so we can get the associated bill with the budget the user has chosen.
    // const [selectedBudget, setSelectedBudget] = useState({});
    const { selectedBudget, setSelectedBudget } = useContext(BudgetContext)

    return (
        <>
            <section>
                <BudgetListTabs setSelectedBudget={setSelectedBudget}/>
            </section>

            <section className="main">
                 <BudgetDetails key={selectedBudget.id} selectedBudget={selectedBudget} />
            </section>

            <section className="footerSpacing">
                &nbsp;
            </section>
        </>
    )
}