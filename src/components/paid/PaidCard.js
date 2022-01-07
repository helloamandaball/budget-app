import React, { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { BillsContext } from "../bills/BillsDataProvider"
import "./Paid.css"

export const PaidCard = ({ bill, selectedBudget }) => {
    const { paidBill, getBills, deleteBill } = useContext(BillsContext)

    const navigate = useNavigate();

    //Use for checkbox:
    const handleCheckedAsCompleted = (bill) => {
        paidBill(bill.id, false)
            .then(getBills)
    }

    //Use for delete:
    const handleDelete = () => {
        deleteBill(bill.id)
            .then(getBills)
    }

    //Use to format date into MM/DD/YYYY
    const formattedDate = new Date(bill.date);
    const billDueDate = new Intl.DateTimeFormat('en-US', { timeZone: 'UTC', month: '2-digit', day: '2-digit', year: '2-digit' }).format(formattedDate)
        // const billDueDate = new Intl.DateTimeFormat('en-US', { timeZone: 'UTC', month: 'short', day: 'numeric', year: 'numeric' }).format(formattedDate)

    return ( 
        <tr key = {bill.id}>
            <td className="billPaidColumn checkedBillBox-checked">
                <input type="checkbox" checked = {bill.paid}
                name="checkedBill"
                id="checkedBill"
                className="checkedBillBox-checked"
                onChange={() => handleCheckedAsCompleted(bill)}
                value={bill.paid}></input> 
            </td> 
            <td className="paidBillNameColumn">{bill.name}</td>  
            <td className="paidBillDateColumn">{billDueDate}</td> 
            <td className="paidBillAmountColumn">${bill.amount.toFixed(2)}</td>
            <td className="paidBillEditDel">
                <button className="paidBillEdit" onClick={() => { navigate(`/paid/edit/${selectedBudget}/${bill.id}`) }}>&#9998;</button>
                <button className="paidBillDel" onClick={handleDelete}>&#128465;</button>
            </td>
        </tr>
    )
}