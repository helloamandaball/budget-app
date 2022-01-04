import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { BudgetContext } from "../budgets/BudgetDataProvider"
// import { TotalsList } from "../totals/TotalsList"
// import { BillsList } from "../bills/BillsList"
// import { PaidList } from "../paid/PaidList"
import { BudgetDetails } from "../budgets/BudgetDetails"
import "./Dashboard.css"

export const Dashboard = () => {
    const { budgets, getBudgets } = useContext(BudgetContext)
    
    useEffect(() => {
        getBudgets()
      }, [])

    const handleControlledInputChange = (event) => {

    }

    return (
        <>
            <section className="startBudget">
                <ul className="startBudgetList">
                    <li className="newBudgetBtn">
                        <Link className="addBudget" to="/budgets/create/">
                            <button className="addBudgetBtn">NEW BUDGET+</button>
                        </Link>
                    </li>
                </ul>
                <fieldset>
                    <div className="selectBudget">
                        {/* <label htmlFor="selectBudget">Select Existing Budget</label> */}
                        <select defaultValue={1} name="selectBudget" id="selectBudget" className="selectBudgetDropdown"
                        onChange={handleControlledInputChange} >
                            <option value="0" className="bold">View An Existing Budget</option>
                            {budgets.map(b => (
                                <option key={b.id} value={b.id}>
                                    {b.month}&nbsp;{b.year}
                                </option>
                            ))}
                        </select>
                    </div>
                </fieldset>
            </section>

            <section className="tabs">
                {/* month tab list goes here */}
            </section>
            <section className="main">
                <BudgetDetails 
                    key={budgets.id}
                />
            </section>
        </>
    )
}