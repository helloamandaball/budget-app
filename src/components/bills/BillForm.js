import React, { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom';
import { BillsContext } from "./BillsDataProvider"
import { BillTypesContext } from "./BillTypesDataProvider";
import "./Bills.css"

export const BillForm = () => {
    const { addBill, getBillById, updateBill } = useContext(BillsContext)
    const { billTypes, getBillTypes } = useContext(BillTypesContext)

    const [bill, setBill] = useState({})
    const [isLoading, setIsLoading] = useState(true);

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
                //PUT - update bill
                updateBill({
                    id: bill.id,
                    name: bill.name,
                    date: bill.date,
                    amount: parseInt(bill.amount),
                    memo: bill.memo,
                    paid: false,
                    typeId: parseInt(bill.typeId),
                })
                    .then(() => navigate(`/bills/${bill.id}`))
            } else {
                //POST - add new bill
                addBill({
                    name: bill.name,
                    date: bill.date,
                    amount: parseInt(bill.amount),
                    memo: bill.memo,
                    paid: false,
                    typeId: parseInt(bill.typeId),
                    budgetId: parseInt(bill.budgetId)
                })
                    .then(() => navigate("/bills"))
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
        <form className="billForm">
            <h2 className="billForm__title">New Bill</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Bill name: </label>
                    <input type="text" id="name" name="name" required autoFocus className="form-control"
                        placeholder="Bill name"
                        onChange={handleControlledInputChange}
                        defaultValue={bill.name} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="amount">Amount due: </label>
                    <br />
                    $<input type="number" id="amount" name="amount" required autoFocus className="form-control"
                        placeholder="Amount due"
                        onChange={handleControlledInputChange}
                        defaultValue={bill.amount} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Due date: </label>
                    <input type="date" id="date" name="date" required className="form-control"
                        onChange={handleControlledInputChange}
                        defaultValue={bill.date} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="typeId">Bill type: </label>
                    <select value={bill.typeId} name="typeId" id="typeId" className="form-control"
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
                    <label htmlFor="memo">Memo: </label>
                    <input type="text" id="memo" name="memo" required autoFocus className="form-control"
                        placeholder="Add memo here"
                        onChange={handleControlledInputChange}
                        defaultValue={bill.memo} />
                </div>
            </fieldset>
            <button className="btn btn-primary"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault() // Prevent browser from submitting the form and refreshing the page
                    handleSaveBill()
                }}>
                {billId ? <>Save Bill</> : <>Add Bill</>}
            </button>
        </form>
    )
}