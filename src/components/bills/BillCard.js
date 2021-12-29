import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { BillsContext } from "./BillsDataProvider"
import { BillTypesContext } from "./BillTypesDataProvider"
import "./Bills.css"

export const BillCard = ({ bill }) => {
    const { bills, getBills, paidBill, deleteBill } = useContext(BillsContext)
    const { billTypes } = useContext(BillTypesContext)
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
    const billDueDate = new Intl.DateTimeFormat('en-US', { timeZone: 'UTC', year: 'numeric', month: 'short', day: 'numeric' }).format(formattedDate)

    return (
        <section className="billCard">
            <div className="billsListContainer">
                <div className="billList-leftColumn">
                    <p className="billName"><strong>{bill.name}</strong></p>
                    <p className="billAmount">${bill.amount}</p>
                    <p className="billDateText"><em>Due:</em> <span className="billDate">{billDueDate}</span></p>
                    <div className="billDetails">
                        <p className="detailsText">Details:</p>
                        <p className="billType">
                            {bills.map( type => {
                                return !bills.find( bills => bills.typeId === type.id );
                            })}
                        </p>
                        <p className="billMemo">{bill.memo}</p>
                    </div>
                </div>
                <div className="billList-rightColumn">
                    {/* <label htmlFor="checkedBill" className="checkedBillLabel"><em>Paid:</em></label> 
                    <br /> */}
                    <input type="checkbox" name="checkedBill" id="checkedBill" className="checkedBillBox" onChange={handleCheckedInputChange}></input>
                    <div className="billEditDel">
                        <button className="billEdit" onClick={() => { navigate(`/bills/edit/${bill.id}`) }}>&#9998;</button>
                        <button className="billDel" onClick={handleDelete}>&#128465;</button>
                    </div>
                </div>
            </div>
        </section>
    )
}