import React, { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom';
import { BudgetContext } from "./BudgetDataProvider"
import "./Budget.css"

export const BudgetForm = () => {
    const { addBudget, getBudgetById, updateBudget, getBudgets, selectedBudget, setSelectedBudget } = useContext(BudgetContext)

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
            setSelectedBudget(parseInt(budgetId))
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
                // console.log("budget ID:", budgetId)
            getBudgetById(budgetId)
                .then(budget => {
                    setBudget(budget)
                        // console.log("budget ID:", budgetId)
                    setIsLoading(false)
                })
        } else {
            setIsLoading(false)
        }
        // console.log("is this working?")
    }, [])

    return (
        <section className="bg">
            <form className="billForm">
                <div className="billFormHdrDiv">
                    <h2 className="billFormTitle">
                        {budgetId ? <>EDIT BUDGET</> : <>NEW BUDGET</>}
                    </h2>
                    <button className="cancelBtn" onClick={() => navigate("/")}>
                        X
                    </button>
                </div>
                <fieldset>
                    <div className="form-group">
                        <select value={budget.month} name="month" id="month" required autoFocus className="monthSelectField"
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
                        <label htmlFor="year" className="Label">Year: </label>
                        <input type="number" id="year" name="year" required className="yearSelectField"
                            placeholder="Enter a year"
                            onChange={handleControlledInputChange}
                            defaultValue={budget.year} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="amount" className="Label">Budget Amount: </label>
                        <div className="amountDiv">
                            <p className="amountDollarSign">$</p>
                            <input type="number" id="amount" name="amount" required className="amountSelectField"
                                placeholder="Budget Amount"
                                onChange={handleControlledInputChange}
                                defaultValue={budget.amount} />
                        </div>
                    </div>
                </fieldset>
                <button className="saveBtn"
                    disabled={isLoading}
                    onClick={event => {
                        event.preventDefault() // Prevent browser from submitting the form and refreshing the page
                        handleSaveBudget()
                    }}>
                    {budgetId ? <>Save Budget</> : <>Add Budget</>}
                </button>
            </form>
        </section>
    )
}