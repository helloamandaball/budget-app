import React from "react"
import { TotalsList } from "../totals/TotalsList"
import { BillsList } from "../bills/BillsList"
import { PaidList } from "../paid/PaidList"
import "./Dashboard.css"

export const Dashboard = () => {
    return (
        <>
            <section className="tabs">
                {/* month tab list goes here */}
            </section>
            <section className="main">
                <div className="flex-row-reverse">
                    <TotalsList />
                    <BillsList />
                </div>
                <div className="">
                    <PaidList />
                </div>
                <div className="">
                    NOTES GO HERE.
                </div>
            </section>
        </>
    )
}