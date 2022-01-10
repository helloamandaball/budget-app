import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { BudgetContext } from "./BudgetDataProvider"
import "./Budget.css"

export const BudgetListTabs = ({setSelectedBudget}) => {
    const { budgets, getBudgets, deleteBudget } = useContext(BudgetContext)

    const navigate = useNavigate();
    
    useEffect(() => {
        getBudgets()
      }, [])

    //Use for delete:
    // const handleDelete = () => {
    //     deleteBudget(budgets.id)
    //         .then(getBudgets)
    // }

    // const handleDelete = () => {
    //     deleteBudget(budgets.id)
    //     .then(() => {
    //         navigate("/")
    //       })
    // }

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
            <section className="budgetTabsDiv">
                <div className="spacer">&nbsp;</div>
                {budgets.map(budget => {
                    return (  
                        <>
                            <div className="moYrTab">
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
                })}
            </section>
            {/* <div className="hr">
            </div> */}
        </>
    )

}