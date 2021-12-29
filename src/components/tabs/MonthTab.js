import React, { useContext, useEffect } from "react"
import { useNavigate } from "react-router"
import { BillsContext } from "../bills/BillsDataProvider"
import "../bills/Bills.css"

export const MonthTab = () => {
    const { bills, getBills } = useContext(BillsContext)

    const navigate = useNavigate()

    useEffect(() => {
        getBills()
    }, [])

    return (
        <>
            <div className="monthContainer">
                <div className="monthHdr">
                    <h2>month</h2>
                    <button className="addMonthBtn" onClick={() => navigate("/bills/create")}>
                        +
                    </button>
                </div>
                <div className="months">
                    {bills.map(bill => {
                        return <MonthTab
                            key={bill.id}
                            month={bill.month}
                            year={bill.year}
                        />
                    })
                    }
                </div>
            </div>
        </>
    )
}