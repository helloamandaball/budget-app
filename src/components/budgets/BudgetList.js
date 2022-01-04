import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { BudgetContext } from "../budgets/BudgetDataProvider"
import "./Budget.css"

export const BudgetList = () => {
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
                            {/* Sort months alphabetically by name (moA, moB), then sort by year (yr1, yr2) */}
                            {budgets.sort((moA,moB) => {return moA.month.localeCompare(moB.month)}).sort((yr1,yr2) => {return new Date(yr1.year) - new Date (yr2.year)}).map(budgetSelection => (
                                <option key={budgetSelection.id} value={budgetSelection.id}>
                                    {budgetSelection.month}&nbsp;{budgetSelection.year}
                                </option>
                            ))}
                        </select>
                    </div>
                </fieldset>
            </section>
            <section className="moYrTab">
                <div className="tab">
                    <div className="budgetMoYr">
                        <h4>{budgets.map(budget => budget.month)}</h4>
                        <h4>{budgets.map(budget => budget.year)}</h4>
                    </div>
                </div>
            </section>
        </>
    )

}