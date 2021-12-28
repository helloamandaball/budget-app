import React, { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom';
import { BillsContext } from "./BillDataProvider"
import "./Bill.css"

export const BillForm = () => {
  const { addBill, getBillById, updateBill, billType, getBills } = useContext(BillsContext)
//   const { locations, getLocations } = useContext(LocationContext)

  //for edit, hold on to state of bill in this view
  const [bill, setBill] = useState({})
  //wait for data before button is active
  const [isLoading, setIsLoading] = useState(true);

  const {billId} = useParams();
  const navigate = useNavigate();

  //when field changes, update state. This causes a re-render and updates the view.
  //Controlled component
  const handleControlledInputChange = (event) => {
    //When changing a state object or array,
    //always create a copy make changes, and then set state.
    const newBill = { ...bill }
    //bill is an object with properties.
    //set the property to the new value
    newBill[event.target.name] = event.target.value
    //update state
    setBill(newBill)
  }

  const handleSaveBill = () => {
    if (parseInt(bill.id) === 0) {
        window.alert("placeholder")
    } else {
      //disable the button - no extra clicks
      setIsLoading(true);
      if (billId){
        //PUT - update
        updateBill({
            id: bill.id,
            name: bill.name,
            date: bill.date,
            paid: false
        })
        .then(() => navigate(`/bills/${bill.id}`))
      }else {
        //POST - add
        addBill({
            name: bill.name,
            date: bill.date,
            paid: false
        })
        .then(() => navigate("/bills"))
      }
    }
  }

  // Get bills. If billId is in the URL, getBillById
  useEffect(() => {
      if (billId){
          console.log("bill ID:", billId)
        getBillById(billId)
        .then(bill => {
            setBill(bill)
              console.log("bill ID:", billId)
            setIsLoading(false)
        })
      } else {
        setIsLoading(false)
      }
  }, [])


    useEffect(() => {
      getBills().then(billType).then(() => {
        if (billType){
          getBillById(billId)
          .then(bill => {
              setBill(bill)
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
          <label htmlFor="billName">Bill name: </label>
          <input type="text" id="billName" name="billName" required autoFocus className="form-control"
          placeholder="Bill name"
          onChange={handleControlledInputChange}
          defaultValue={bill.name}/>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="billName">Amount due: </label>
          <input type="number" id="billAmount" name="billAmount" required autoFocus className="form-control"
          placeholder="Amount due"
          onChange={handleControlledInputChange}
          defaultValue={bill.amount}/>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="billDate">Due date: </label>
          <input type="date" id="billDate" name="billDate" required className="form-control"
          onChange={handleControlledInputChange}
          defaultValue={bill.date}/>
        </div>
      </fieldset>
      <fieldset>
          <div className="form-group">
            <label htmlFor="location">Bill type: </label>
            <select value={bill.typeId} name="locationId" id="billLocation" className="form-control" 
            onChange={handleControlledInputChange}>
              <option value="0">Select a bill type</option>
              {/* {billType.map(bill => (
                <option key={bill.id} value={bill.id}>
                  {bill.typeId}
                </option>
              ))} */}
            </select>
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