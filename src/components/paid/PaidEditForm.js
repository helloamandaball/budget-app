import React, { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom';
import { BillsContext } from "../bills/BillsDataProvider"
import { BillTypesContext } from "../bills/BillTypesDataProvider";
import { BudgetContext } from "../budgets/BudgetDataProvider";
import "../bills/Bills.css"

export const PaidEditForm = () => {
    const { getBillById, updateBill } = useContext(BillsContext)
    const { billTypes, getBillTypes } = useContext(BillTypesContext)
    const { selectedBudget, setSelectedBudget } = useContext(BudgetContext)

    const [bill, setBill] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    const { budgetId } = useParams();
    const { billId } = useParams();
    const navigate = useNavigate();

    const handleControlledInputChange = (event) => {
        const newBill = { ...bill }
        newBill[event.target.name] = event.target.value
        setBill(newBill)
    }

    const handleSaveBill = () => {
        if (parseInt(bill.typeId) === 0) {
            window.alert("Please select a bill type")
        } else {
            setIsLoading(true);
            if (billId) {
                setSelectedBudget(parseInt(budgetId))
                //PUT - update bill
                updateBill({
                    id: bill.id,
                    name: bill.name,
                    date: bill.date,
                    amount: parseInt(bill.amount),
                    memo: bill.memo,
                    paid: true,
                    typeId: parseInt(bill.typeId),
                    budgetId: parseInt(budgetId),
                    userId: +localStorage.activeUser
                })
                    .then(() => navigate(`/`))
            } 
        }
    }

    useEffect(() => {
        getBillTypes().then(() => {
            if (billId) {
                //   console.log("bill ID:", billId)
                getBillById(billId)
                    .then(bill => {
                        setBill(bill)
                        //   console.log("bill ID:", billId)
                        setIsLoading(false)
                    })
            } else {
                setIsLoading(false)
            }
        })
    }, [])

    return (
        <section className="bg">
            <form className="billForm">
                <div className="billFormHdrDiv">
                    <h2 className="billFormTitle">EDIT PAID BILL</h2>
                    <button className="cancelBtn" onClick={() => navigate("/")}>
                        X
                    </button>
                </div>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name" className="Label">Bill name: </label>
                        <input type="text" id="name" name="name" required autoFocus className="billSelectField" maxLength="18"
                            placeholder="Bill name"
                            onChange={handleControlledInputChange}
                            defaultValue={bill.name} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="amount" className="Label">Amount due: </label>
                        <div className="amountDiv">
                            <p className="amountDollarSign">$</p>
                            <input type="number" id="amount" name="amount" required className="amountSelectField"
                            placeholder="Amount due"
                            onChange={handleControlledInputChange}
                            defaultValue={bill.amount} />
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group" className="Label">
                        <label htmlFor="date">Due date: </label>
                        <input type="date" id="date" name="date" required className="monthSelectField"
                            onChange={handleControlledInputChange}
                            defaultValue={bill.date} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="typeId" className="Label">Bill type: </label>
                        <select value={bill.typeId} name="typeId" id="typeId" className="typeSelectField"
                            onChange={handleControlledInputChange}>
                            <option value="0">Select a bill type</option>
                            {billTypes.sort((a, b) => a.name.localeCompare(b.name)).map(type => (
                                <option key={type.id} value={type.id}>
                                    {type.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="memo" className="Label">Memo: </label>
                        <input type="text" id="memo" name="memo" required autoFocus className="memoSelectField" maxLength="100"
                            placeholder="Add memo here"
                            onChange={handleControlledInputChange}
                            defaultValue={bill.memo} />
                    </div>
                </fieldset>
                <button className="saveBtn"
                    disabled={isLoading}
                    onClick={event => {
                        event.preventDefault() // Prevent browser from submitting the form and refreshing the page
                        handleSaveBill()
                    }}>
                    SAVE
                </button>
            </form>
        </section>
    )
}