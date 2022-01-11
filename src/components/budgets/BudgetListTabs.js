import React, { useContext, useEffect, useState } from "react"
// import { Link } from "react-router-dom"
import { useNavigate, useParams } from "react-router-dom"
import { BudgetContext } from "./BudgetDataProvider"
import { BudgetCardTab } from "./BudgetCardTab"
import "./Budget.css"

export const BudgetListTabs = ({setSelectedBudget}) => {
    const { budgets, getBudgets, deleteBudget, selectedBudget } = useContext(BudgetContext)
    // const [ clickedBudgetStyle, setClickedBudgetStyle ] = useState("moYrTab")

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

    // highlight the tab of the budget currently displayed in dashboard by changing (or adding) className:
        // const { isClicked } = useParams();
        // const handleClickedBudget = () => {            
        //     if (isClicked) {
        //         console.log("you've been clicked!")
        //         setClickedBudgetStyle("moYrTab-clicked")
        //     } else {
        //         setClickedBudgetStyle("moYrTab")
        //     }
        // }

    // const handleClickedBudget = () => {
    //         console.log("you've been clicked!")
    //     setClickedBudgetStyle("moYrTab-clicked")
    // }

    return (
        <>
            <section className="budgetTabsDiv">
                <div className="spacer">&nbsp;</div>

                    {budgets.filter(budget => budget.userId === +localStorage.activeUser).map(budget => {
                        return (  
                            <>
                                <BudgetCardTab key={budget.id} budget={budget} selectedBudget={selectedBudget} setSelectedBudget={setSelectedBudget}/>
                            </>
                        )
                    })}

            </section>
        </>
    )

}