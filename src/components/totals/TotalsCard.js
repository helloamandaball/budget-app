import React, { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { BillsContext } from "../bills/BillsDataProvider"
import { BudgetContext } from "../budgets/BudgetDataProvider"
import "./Totals.css"

export const TotalsCard = ({budget, bill}) => {
    const { bills, getBills } = useContext(BillsContext)
    // const { budgets, getBudgets } = useContext(BudgetContext)

	const navigate = useNavigate();

   
    const totalBudget = () => {
        // total amount is pulled from the budget table {budgets.amount}
        // {budgets.map()}
    };
    
    const totalPending = () => {
        // pending amount is total amount of the bills pending and added together {bills.amount, paid = false}
        let unpaidAmounts = bills.filter(bill => bill.paid === false).map(bill => bill.amount)
            console.log(unpaidAmounts)
        // .reduce((total) => total + bill.amount, 0)
        // .reduce((previousValue, currentValue) => previousValue + currentValue.amount)
        let sum = 0;
        for (let i=0; i < unpaidAmounts; i++) {
            sum += unpaidAmounts[i]
            console.log("inside the loop")
        }

            console.log("this is the sum:", sum)
        

        //.toFixed(2)
    }
    
    const totalPaid = () => {
        // paid amount is total amount of bills marked as paid and added together {bills.amount, paid = true}
 
    }
    
    const totalRemaining = () => {
        // remaining amount is total amount minus bills pending and bills paid 
        
    }

    // useEffect(() => {
    //     getBudgets()
    //     .then(getBills)
    //   }, [])

    return(
        <section className="totals">
            {totalPending()}
            <div className="totalsListContainer">
                <div className="totalsList">
                    <p className="totalBudget">Total Budget: $<span className="totalAmount">{totalBudget}</span></p>
                    {/* <p className="totalPending">Pending: $<span className="pendingAmount">{totalPending()}</span></p> */}
                    <p className="totalPaid">Paid: $<span className="paidAmount">{totalPaid}</span></p>
                    <p className="totalRemaining">Remaining: $<span className="remainingAmount">{totalRemaining}</span></p>
                </div>
                <div className="totalsEdit">
                <button className="totalsEditBtn" onClick={() => { navigate(`/totals/edit/${budget.id}`) }}>&#9998;</button>              
                </div>
            </div> 
        </section>
    )
}