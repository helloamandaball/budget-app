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
                    amount: parseInt(budget.amount)
                })
                    .then(() => navigate(`/budgets/${budget.id}`))
            } else {
                //POST - add new budget
                addBudget({
                    month: budget.month,
                    year: parseInt(budget.year),
                    amount: parseInt(budget.amount),

                })
                    .then(() => navigate("/"))
            }
        
    }

    useEffect(() => {
        getBudgets().then(() => {
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
        })
    }, [])

    return (
        <form className="billForm">
            <h2 className="billForm__title">
                {budgetId ? <>EDIT BUDGET</> : <>NEW BUDGET</>}
            </h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="month">Month &amp; Year: </label>
                    <input type="month" id="month" name="month" required autoFocus className="form-control"
                        placeholder="Choose"
                        onChange={handleControlledInputChange}
                        defaultValue={budget.month} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="amount">Budget Amount: </label>
                    <br />
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