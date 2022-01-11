import React, { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
// import { BudgetContext } from "./BudgetDataProvider"
import "./Budget.css"

export const BudgetCardTab = ({setSelectedBudget, selectedBudget, budget}) => {
    // const { budgets, getBudgets } = useContext(BudgetContext)
    const [ clickedBudgetStyle, setClickedBudgetStyle ] = useState("moYrTab")

    const navigate = useNavigate();

    const handleClickedBudget = () => {
            console.log("you've been clicked!")
        setClickedBudgetStyle("moYrTab-clicked")
    }

    return (
        <>
            <div className={selectedBudget === budget?.id ?"moYrTab-clicked" : "moYrTab"}>
                <div className="tabLink" onClick={() => setSelectedBudget(budget.id)}>
                    <div className="moYrText">
                        <h4>{budget.month}</h4>
                        <h4>{budget.year}</h4>
                    </div>
                </div>
                <div className="budgetEditDel">
                    <button className="budgetEdit" onClick={() => { navigate(`/budgets/edit/${budget.id}`) }}>&#9998;</button>
                    {/* <button className="budgetDel" onClick={handleDelete}>&#128465;</button> */}
                </div>
            </div>
        </>
    )
}