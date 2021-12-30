import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { BillsContext } from "../BillsDataProvider"
import "./Totals.css"

export const TotalsCard = ({totals}) => {
    const { getBills } = useContext(BillsContext)

	const navigate = useNavigate();


    return(
        <section className="totals">
            <div className="totalsListContainer">
                <div className="totalsList">
                    <p className="totalBudget">Total Budget: <span className="pendingAmount">$000{totals.totalName}</span></p>
                    <p className="totalPending">Pending: <span className="pendingAmount">$000</span></p>
                    <p className="totalPaid">Paid: <span className="paidAmount">$000</span></p>
                    <p className="totalRemaining">Remaining: <span className="remainingAmount">$000</span></p>
                </div>
                <div className="totalsEdit">
                    <button className="totalsEditBtn" onClick={() => {navigate(`/totals/edit/${totals.id}`)}}>&#9998;<u>EDIT</u></button>                
                </div>
            </div> 
        </section>
    )
}