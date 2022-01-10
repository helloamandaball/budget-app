import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { BillsContext } from "./BillsDataProvider"
import "./Bills.css"

export const BillCard = ({ bill, typeOfBill, selectedBudget }) => {
    const { getBills, paidBill, deleteBill } = useContext(BillsContext)

    useEffect(() => {
        // console.log("Bills List: useEffect - getBills")
        getBills()
      }, [])

    const navigate = useNavigate();

    //Use for checkbox:
    const handleCheckedInputChange = () => {
        paidBill(bill.id, true)
            .then(getBills)
    }

    //Use for delete:
    const handleDelete = () => {
        deleteBill(bill.id)
            .then(getBills)
    }

    //Use to toggle Details button:
    // const showHide = () => {
    //     this.setState({billDetails:!this.state.billDetails});
    // }
    // const seeDetails=this.state.billDetails;

    const [showDetails, setShowDetails] = useState(false);
    // const handleHideDetails = () => setShowDetails(false);
    // const handleShowDetails = () => setShowDetails(true);
    const handleShowDetails = () => setShowDetails(!showDetails)

    //Use to format date into MM/DD/YYYY
    const formattedDate = new Date(bill.date);
    const billDueDate = new Intl.DateTimeFormat('en-US', { timeZone: 'UTC', month: 'short', day: 'numeric' }).format(formattedDate)

    return (
        <section className="billCard">
            <div className="billsListContainer">
                <div className="billList-leftColumn">
                    <p className="billName">{bill.name}</p>
                    {/* .toFixed(2) is to show the two numbers after decimal point */}
                    <p className="billAmount">${bill.amount.toFixed(2)}</p>
                </div>
                <div className="billList-rightColumn">
                    <label htmlFor="checkedBill" className="checkedBillLabel">PAID</label> 
                    <br />
                    <input type="checkbox" name="checkedBill" id="checkedBill" className="checkedBillBox" onChange={handleCheckedInputChange}></input>
                </div>
            </div>
            <div className="billList-bottomHalf">
                <p className="billDateText">DUE:&nbsp; <span className="billDate">{billDueDate}</span></p>
                
                {/* <button className="detailsText" onClick={handleShowDetails}>
                    <u>SHOW DETAILS</u>&nbsp;<span className="detailsArrow">&#9654;</span>
                </button>
                <button className="detailsText" onClick={handleHideDetails}>>
                    <u>HIDE DETAILS</u>&nbsp;<span className="detailsArrow">&#9660;</span>
                </button> */}
                    {/* Show-Hide details when button above is clicked */}
                    <div className="billDetails">
                        <p className="billType">BILL TYPE:&nbsp; <span className="billTypeName">{typeOfBill?.name}</span></p>
                        <p className="billMemo">MEMO:&nbsp; </p>
                            <div className="billMemoBorder">
                                <p className="billMemoText">{bill.memo}</p>
                            </div>
                    </div>

                <div className="billEditDel">
                    <button className="billEdit" onClick={() => { navigate(`/bills/edit/${selectedBudget}/${bill.id}`) }}>&#9998;</button>
                    <button className="billDel" onClick={handleDelete}>&#128465;</button>
                </div>
            </div>    
        </section>
    )
}