import React, { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom';
import { BudgetContext } from "./BudgetDataProvider"
import "./Budget.css"

export const BudgetForm = () => {
    const { addBudget, getBudgetById, updateBudget, getBudgets } = useContext(BudgetContext)

    const [budget, setBudget] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    const { budgetId } = useParams();
    const navigate = useNavigate();

    const handleControlledInputChange = (event) => {
        const newBudget = { ...budget }
        newBudget[event.target.name] = event.target.value
        setBudget(newBudget)
    }

    const handleSaveBudget = () => {
        setIsLoading(true);
        if (budgetId) {
            //PUT - update budget
            updateBudget({
                id: budget.id,
                month: budget.month,
                year: parseInt(budget.year),
                // date: budget.date,
                amount: parseInt(budget.amount),
                userId: +localStorage.activeUser
            })
                .then(() => navigate(`/`))
        } else {
            //POST - add new budget
            addBudget({
                month: budget.month,
                year: parseInt(budget.year),
                // date: budget.date,
                amount: parseInt(budget.amount),
                userId: +localStorage.activeUser
            })
                .then(() => navigate(`/`))
        }
    }

    useEffect(() => {
        if (budgetId) {
                console.log("budget ID:", budgetId)
            getBudgetById(budgetId)
                .then(budget => {
                    setBudget(budget)
                        console.log("budget ID:", budgetId)
                    setIsLoading(false)
                })
        } else {
            setIsLoading(false)
        }
        console.log("is this working?")
    }, [])

    return (
        <form className="billForm">
            <h2 className="billForm__title">
                {budgetId ? <>EDIT BUDGET</> : <>NEW BUDGET</>}
            </h2>
            <button className="cancelBtn" onClick={() => navigate("/budgets")}>
                X
            </button>
            <fieldset>
                <div className="form-group">
                    <select value={budget.month} name="month" id="month" className="form-control"
                    onChange={handleControlledInputChange}>
                        <option value="0">Select a month</option>
                            <option value="January">January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="year">Year: </label>
                    <input type="number" id="year" name="year" required className="form-control"
                        placeholder="Enter a year"
                        onChange={handleControlledInputChange}
                        defaultValue={budget.year} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="amount">Budget Amount: </label>
                    $<input type="number" id="amount" name="amount" required className="form-control"
                        placeholder="Budget Amount"
                        onChange={handleControlledInputChange}
                        defaultValue={budget.amount} />
                </div>
            </fieldset>
            <button className="btn btn-primary"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault() // Prevent browser from submitting the form and refreshing the page
                    handleSaveBudget()
                }}>
                {budgetId ? <>Save Budget</> : <>Add Budget</>}
            </button>
        </form>
    )
}