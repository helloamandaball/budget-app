import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { BillsContext } from "./BillDataProvider"
import "./Bill.css"

export const BillCard = ({bill}) => {
    const { getBills, paidBill, deleteBill } = useContext(BillsContext)

	const navigate = useNavigate();

    //Use for checkbox:
    const handleCheckedInputChange = () => {
        paidBill(bill.id, true)
        .then(getBills)
    }

    //Use for delete:
    const handleDelete = () => {
        deleteBill(bill.id)
        // .then(() => {
        //     navigate("/bills")
        // })
        .then(getBills)
    }

    //Use to format date into MM/DD/YYYY
    const formattedDate = new Date(bill.date);
    const billDueDate = new Intl.DateTimeFormat('en-US', {timeZone: 'UTC',  weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }).format(formattedDate)

    return(
        <section className="billCard">
            <div className="billListContainer">
                <div className="billList">
                    <p className="billName"><strong>{bill.name}</strong></p>
                    <p className="billDateText"><em>Due Date:</em></p>
                    <p className="billDate">{billDueDate}</p>
                </div>
                <div className="checkedBillContainer">
                    {/* <label htmlFor="checkedBill" className="checkedBillLabel"><em>Paid:</em></label> 
                    <br /> */}
                    <input type="checkbox" name="checkedBill" id="checkedBill" className="checkedBillBox" onChange={handleCheckedInputChange}></input>
                    <div className="billEditDel">
                        <button className="billEdit" onClick={() => {navigate(`/bills/edit/${bill.id}`)}}>&#9998;</button>
                        <button className="billDel" onClick={handleDelete}>&#128465;</button>
                    </div>
                </div>
            </div>
        </section>
    )
}