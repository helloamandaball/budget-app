import React, { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { BillsContext } from "../bills/BillsDataProvider"
import { BudgetContext } from "../budgets/BudgetDataProvider"
import "./Totals.css"

export const TotalsCard = ({ budget }) => {
    const { bills, getBills } = useContext(BillsContext)
    const { budgets, getBudgets, getBudgetById } = useContext(BudgetContext)

	const navigate = useNavigate();

    const totalBudget = () => {
        // total amount is pulled from the budget table {budgets.amount}
        let budgetAmount = budgets.filter(budgetId => budgetId.id).map(budget => budget.amount).length
            console.log("budget amount:", budgetAmount)
            return budgetAmount.toFixed(2)
    };
    
    const totalPending = () => {
        // pending amount is total amount of the bills pending and added together {bills.amount, paid = false}
        let unpaidAmounts = bills.filter(bill => bill.paid === false).map(bill => bill.amount)
            // console.log("List of unpaidAmounts:", unpaidAmounts)

        let sum = 0;
        for (let i = 0; i < unpaidAmounts.length; i++) {
                // console.log("inside the loop (unpaid amounts):", unpaidAmounts)
            sum += unpaidAmounts[i]
        }
            // console.log("this is the sum amount:", sum)
            return sum.toFixed(2)

        // .reduce((total) => total + bill.amount, 0)
        // .reduce((previousValue, currentValue) => previousValue + currentValue.amount)
    }
    
    const totalPaid = () => {
        // paid amount is total amount of bills marked as paid and added together {bills.amount, paid = true}
        let paidAmounts = bills.filter(bill => bill.paid === true).map(bill => bill.amount)
            // console.log("List of paidAmounts:", paidAmounts)

        let sum = 0;
        for (let i = 0; i < paidAmounts.length; i++) {
                // console.log("inside the loop (paid amounts):", paidAmounts)
            sum += paidAmounts[i]
        }
            // console.log("this is the sum amount:", sum)
            return sum.toFixed(2)
    }
    
    const totalRemaining = () => {
        // remaining amount is total amount minus bills pending and bills paid 
        let totaledAmounts = bills.map(bill => bill.amount)
            // console.log("List of totaledAmounts:", totaledAmounts)

        let sum = 0;
        for (let i = 0; i < totaledAmounts.length; i++) {
                // console.log("inside the loop (totaled amounts):",totaledAmounts)
            sum += totaledAmounts[i]
        }
            // console.log("this is the sum amount:", sum)

        let remTotal = sum -= totalBudget.length;
            // for (let i = 0; i < remTotal.length; i++){
            //     sum -= remTotal[i]
            // }
            console.log("remaining amount:", remTotal)
            return remTotal.toFixed(2)
    }

    // useEffect(() => {
    //     getBudgets()
    //      .then(getBudgetById)
    //      .then(getBills)
    //   }, [])

    return(
        <section className="totals">
            <div className="totalsListContainer">
                <div className="totalsList">
                    <p className="totalBudget">Total Budget:&nbsp; $<span className="totalAmount">{totalBudget()}</span></p>
                    <p className="totalPending">Pending:&nbsp; $<span className="pendingAmount">{totalPending()}</span></p>
                    <p className="totalPaid">Paid:&nbsp; $<span className="paidAmount">{totalPaid()}</span></p>
                    <p className="totalRemaining">Remaining:&nbsp; $<span className="remainingAmount">{totalRemaining()}</span></p>
                </div>
                <div className="totalsEdit">
                <button className="totalsEditBtn" onClick={() => { navigate(`/totals/edit/${budget.id}`) }}>&#9998;</button>              
                </div>
            </div> 
        </section>
    )
}