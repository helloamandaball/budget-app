import React, { useContext } from "react"
import { BudgetListTabs } from "../budgets/BudgetListTabs"
import { BudgetDetails } from "../budgets/BudgetDetails"
import { BudgetContext } from "../budgets/BudgetDataProvider"
import "./Dashboard.css"

export const Dashboard = () => {
    // set state in parent component, pass setter to BudgetListTabs in order to change state, pass state into the BudgetDetails so we can get the associated bill with the budget the user has chosen.
    const { selectedBudget, setSelectedBudget } = useContext(BudgetContext)

    return (
        <>
            <section>
                <BudgetListTabs setSelectedBudget={setSelectedBudget} selectedBudget={selectedBudget}/>
            </section>

            {/*<div className={selectedBudget === 0 ? "hide" : "show"}>
                <section className="main">
                        <BudgetDetails key={selectedBudget.id} selectedBudget={selectedBudget} />
                </section>
            </div> */}

            <section className="main"> 
                {selectedBudget === 0 
                    ? 
                        <div className="welcome">
                            <h2>Welcome to Budget Tracker!</h2>
                            <h4>To start, click on the NEW BUDGET+ button to create a budget, <br/>
                            or click on an existing budget tab to view content.</h4>
                            <h4>Thanks for using my app!</h4>
                        </div>
                    : 
                        <>
                            <BudgetDetails key={selectedBudget.id} selectedBudget={selectedBudget} />
                        </>
                }
            </section>

            <section className="footerSpacing">
                &nbsp;
            </section>
        </>
    )
}