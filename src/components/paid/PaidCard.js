import React, { useContext, useEffect } from "react"
// import { useNavigate } from "react-router-dom"
import { BillsContext } from "../bills/BillsDataProvider"
import "./Paid.css"

export const PaidCard = ({bill}) => {
    const { paidBill, getBills } = useContext(BillsContext)

	// const navigate = useNavigate();

    //Use for checkbox:
    const handleCheckedAsCompleted = (bill) => {
        paidBill(bill.id, false)
        .then(getBills)
    }

    // Use for delete:
    // const handleDelete = () => {
    //     deleteBill(bill.id)
    //     // .then(() => {
    //     //     navigate("/bills")
    //     // })
    //     .then(getBills)
    // }

    //Use to format date into MM/DD/YYYY
    const formattedDate = new Date(bill.date);
    const billDueDate = new Intl.DateTimeFormat('en-US', { timeZone: 'UTC', month: 'short', day: 'numeric' }).format(formattedDate)

    return(
        <tr key={bill.id}>
            <td className="billNameColumn">{bill.billName}</td> 
            <td className="billDateColumn">{billDueDate}</td>
            <td className="billCompletedColumn checkedBillBox-completed">
                <input type="checkbox" checked={bill.complete} name="checkedBill" id="checkedBill" className="checkedBillBox-completed" onChange={() => handleCheckedAsCompleted(bill)} value={bill.complete}></input>
            </td>
        </tr>
    )
}