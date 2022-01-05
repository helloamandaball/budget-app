import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { BudgetContext } from "../budgets/BudgetDataProvider"
import "./Budget.css"

export const BudgetList = () => {
    const { budgets, getBudgets, deleteBudget } = useContext(BudgetContext)

    const navigate = useNavigate();
    
    useEffect(() => {
        getBudgets()
      }, [])

    //Use for delete:
    const handleDelete = () => {
        deleteBudget(budgets.id)
            .then(getBudgets)
    }
    
    //Use to format date into MM/DD/YYYY
    // const formattedDate = new Date(budget.date));
    // const budgetDate = new Intl.DateTimeFormat('en-US', {timeZone: 'UTC', year: 'numeric', month: 'short'}).format(formattedDate)

    return (
        <>
            <section className="startBudget">
                <ul className="startBudgetList">
                    <li className="newBudgetBtn">
                        <Link className="addBudget" to="/budgets/create/">
                            <button className="addBudgetBtn">NEW BUDGET+</button>
                        </Link>
                    </li>
                </ul>
                {/* Dropbox for budget select can go here - see extras.txt */}
            </section>
            <section className="budgetDiv">
                <div className="spacer">&nbsp;</div>
                {budgets.map(budget => {
                    return (  
                        <>
                            <div className="moYrTab">
                                <Link className="tabLink" to='/budgets'>
                                    <div className="moYrText">
                                        <h4>{budget.month}</h4>
                                        <h4>{budget.year}</h4>
                                    </div>
                                </Link>
                                <div className="budgetEditDel">
                                    <button className="budgetEdit" onClick={() => { navigate(`/budgets/edit/${budget.id}`) }}>&#9998;</button>
                                    <button className="budgetDel" onClick={handleDelete}>&#128465;</button>
                                </div>
                            </div>
                        </>
                    )
                })}
            </section>
            <div className="hr">
            </div>
        </>
    )

}