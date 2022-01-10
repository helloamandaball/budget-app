import React, { useContext } from "react"
import { BillsContext } from "../bills/BillsDataProvider"
import { BudgetContext } from "../budgets/BudgetDataProvider"
import "./Totals.css"

export const TotalsCard = ({ budget, selectedBudget }) => {
    const { bills } = useContext(BillsContext)
    const { budgets } = useContext(BudgetContext)

    const totalBudget = () => {
        // total amount is pulled from the budget table {budgets.amount}
         let budgetAmount = budgets.find(budgetObj => budgetObj.id === selectedBudget)
            // console.log("budget amount:", budgetAmount)
            return budgetAmount
    };
    
    const totalPending = () => {
        // pending amount is total amount of the bills pending and added together {bills.amount, paid = false}
        let unpaidAmounts = bills.filter(bill => bill.paid === false).filter(bill => bill.budgetId === selectedBudget).map(bill => bill.amount)
            // console.log("List of unpaidAmounts:", unpaidAmounts)

        let sum = 0;
        for (let i = 0; i < unpaidAmounts.length; i++) {
                // console.log("inside the loop (unpaid amounts):", unpaidAmounts)
            sum += unpaidAmounts[i]
        }
            // console.log("this is the sum amount:", sum)
            return sum.toFixed(2)
    }
    
    const totalPaid = () => {
        // paid amount is total amount of bills marked as paid and added together {bills.amount, paid = true}
        let paidAmounts = bills.filter(bill => bill.paid === true).filter(bill => bill.budgetId === selectedBudget).map(bill => bill.amount)
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
        let totaledAmounts = bills.filter(bill => bill.budgetId === selectedBudget).map(bill => bill.amount)
            // console.log("List of totaledAmounts:", totaledAmounts)

        let sum = 0;
        for (let i = 0; i < totaledAmounts.length; i++) {
                // console.log("inside the loop (totaled amounts):",totaledAmounts)
            sum += totaledAmounts[i]
        }
            // console.log("this is the sum amount:", sum)

        let sumTotal = sum -= totalBudget()?.amount;

            // * -1 multiplies by -1 in order to get it showing as a positive integer if it is in fact a positive number.
        let remTotal = sumTotal * -1;
            // console.log("remaining amount:", remTotal)
            return remTotal.toFixed(2)
    }


    return(
        <section className="totals">
            {budgets.filter(budget => budget.id === selectedBudget).map(budget => {
                return <h2 className="totalsHdr">{budget.month} <span className="totalHdrYr">{budget.year}</span> Totals</h2>
            })}
            <div className="totalsListContainer">
                {/* <div className="totalsList">
                    <p className="totalBudget">Total Budget:&nbsp; $<span className="totalAmount">{totalBudget()?.amount.toFixed(2)}</span></p>
                    <p className="totalPending">Bills Pending:&nbsp; $<span className="pendingAmount">{totalPending()}</span></p>
                    <p className="totalPaid">Bills Paid:&nbsp; $<span className="paidAmount">{totalPaid()}</span></p>
                    <p className="totalRemaining">Remaining Budget:&nbsp; $<span className="remainingAmount">{totalRemaining()}</span></p>
                </div> */}
                
                <table className="totalsList">
                    <tbody>
                        <tr>
                            <td className="totalBudget">Total Budget:&nbsp; $</td>
                            <td className="totalAmount">{totalBudget()?.amount.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td className="totalPending">Bills Pending:&nbsp; $</td>
                            <td className="pendingAmount">{totalPending()}</td>
                        </tr>
                        <tr>
                            <td className="totalPaid">Bills Paid:&nbsp; $</td>
                            <td className="paidAmount">{totalPaid()}</td>
                        </tr>
                        <tr>
                            <td className="totalRemaining">Remaining Budget:&nbsp; $</td>
                            <td className="remainingAmount">{totalRemaining()}</td>
                        </tr>
                    </tbody>
                </table>
            </div> 
        </section>
    )
}