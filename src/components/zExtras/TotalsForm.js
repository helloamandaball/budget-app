import React, { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom';
import { BudgetContext } from "../budgets/BudgetDataProvider";
import "./Totals.css"

export const TotalsForm = () => {
    const { getBudgets, getBudgetById, updateBudget } = useContext(BudgetContext)

    const [budget, setBudget] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    const { budgetId } = useParams();
    const navigate = useNavigate();

    const handleUpdateTotal = () => {
        setIsLoading(true);
        if (budgetId) {
            //PUT - update bill
            updateBudget({
                id: budget.id,
                amount: parseInt(budget.amount),
                budgetId: parseInt(budget.budgetId),
                userId: +localStorage.activeUser
            })
                .then(() => navigate(`/`))
        }
    }

    useEffect(() => {
        getBudgets().then(() => {
            if (budgetId) {
                //   console.log("budget ID:", budgetId)
                getBudgetById(budgetId)
                    .then(budget => {
                        setBudget(budget)
                        //   console.log("budget ID:", budgetId)
                        setIsLoading(false)
                    })
            } else {
                setIsLoading(false)
            }
        })
    }, [])
    
    return (
        <form className="totalsForm">
            <h2 className="">EDIT BUDGET TOTAL</h2>
            <button className="cancelBtn" onClick={() => navigate("/")}>
                X
            </button>
            <fieldset>
                <p className="totalBudget">Total Budget: $<input type="number" id="amount" name="amount" className="totalAmount"></input></p>
            </fieldset>
            <button className="btn btn-primary"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault() // Prevent browser from submitting the form and refreshing the page
                    handleUpdateTotal()
                }}>
                SAVE
            </button>
        </form>
    )
}