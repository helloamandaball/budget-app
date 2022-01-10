import React from "react"
import { TotalsCard } from "./TotalsCard"
import "./Totals.css"

export const TotalsList = ({selectedBudget}) => {

    return (
         <TotalsCard selectedBudget={selectedBudget} />
    )
    
}