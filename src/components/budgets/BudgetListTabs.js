import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate, useParams } from "react-router-dom"
import { BudgetContext } from "./BudgetDataProvider"
// import { BudgetMonth } from "./BudgetMonth"
import "./Budget.css"

export const BudgetListTabs = ({setSelectedBudget, selectedBudget}) => {
    const { budgets, getBudgets, deleteBudget } = useContext(BudgetContext)
    const [ clickedBudgetStyle, setClickedBudgetStyle ] = useState("moYrTab")

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

    // const { isClicked } = useParams();
    const handleClickedBudget = () => {
        // highlight the tab of the budget currently displayed in dashboard by changing (or adding) className
        // if (isClicked) {
        //     console.log("you've been clicked!")
        //     setClickedBudgetStyle("moYrTab-clicked")
        // } else {
        //     setClickedBudgetStyle("moYrTab")
        // }
        console.log("you've been clicked!")
            setClickedBudgetStyle("moYrTab-clicked")
    }

    return (
        <>
            {/* <section className="startBudget">
                <ul className="startBudgetList">
                    <li className="newBudgetBtn">
                        <Link className="addBudget" to="/budgets/create/">
                            <button className="addBudgetBtn">NEW BUDGET+</button>
                        </Link>
                    </li> */}
                    {/* <BudgetMonth selectedBudget={selectedBudget}/> */}
                {/* </ul> */}
                {/* Dropbox for budget select can go here - see extras.txt */}
            {/* </section> */}
            <section className="budgetTabsDiv">
                <div className="spacer">&nbsp;</div>
                {budgets.filter(budget => budget.userId === +localStorage.activeUser).map(budget => {
                    return (  
                        <>
                        
                            <div className={clickedBudgetStyle} onClick={handleClickedBudget}>

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