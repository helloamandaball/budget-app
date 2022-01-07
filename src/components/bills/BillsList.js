import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { BillsContext } from "./BillsDataProvider"
import { BillTypesContext } from "./BillTypesDataProvider"
import { BillCard } from "./BillCard"
import { BillForm } from "./BillForm"
import "./Bills.css"
// import { type } from "@testing-library/user-event/dist/type"

export const BillsList = ({selectedBudget}) => {
    const { bills, getBills } = useContext(BillsContext)
    const { billTypes, getBillTypes } = useContext(BillTypesContext)

    const navigate = useNavigate()

    // const [buttonPopup, setButtonPopup] = useState(false)

    useEffect (() => {
            // console.log("BillList: useEffect", getBills)
        getBills()
        .then(getBillTypes)
    }, [])

    return (
        <>
            <div className="billsContainer">
                <div className="billHdr">
                    <h2>BILLS</h2>
                    <button className="addBillBtn" onClick={() => navigate("/bills/create")}>
                    {/* <button className="addBillBtn" onClick={() => setButtonPopup(true)}> */}
                        +
                    </button>
                    {/* <BillForm trigger={buttonPopup} setTrigger={setButtonPopup}/> */}
                </div>
                <div className="bills">
                        {/* {console.log("BillList: Render", bills)} */}
                    {
                    //filter bills for those not yet complete, then sort through those and put them in date order, then map to return BillCard
                    bills.filter(bill => bill.budgetId === selectedBudget).filter(bill => bill.paid === false).sort((a,b) => {return new Date(a.date) - new Date (b.date)}).map(bill => {
                        const typeOfBill = billTypes.find(type => type.id === bill.typeId)

                       return <BillCard key={bill.id} bill={bill} typeOfBill={typeOfBill} />
                    })
                    }
                </div>
            </div>
        </>
    )
}