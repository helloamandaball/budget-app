import React, { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom';
import { NotesContext } from "./NoteDataProvider"
import { BudgetContext } from "../budgets/BudgetDataProvider";
import "./Note.css"

export const NoteForm = () => {
    const { addNote, getNoteById, updateNote } = useContext(NotesContext)
    const { selectedBudget, setSelectedBudget } = useContext(BudgetContext)

    const [note, setNote] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    const { budgetId } = useParams();
    const { noteId } = useParams();
    const navigate = useNavigate();

    const handleControlledInputChange = (event) => {
        const newNote = { ...note }
        newNote[event.target.name] = event.target.value
        setNote(newNote)
    }

    const handleSaveNote = () => {
        setIsLoading(true);
        if (noteId) {
            setSelectedBudget(parseInt(budgetId))
            //PUT - update note
            updateNote({
                id: note.id,
                title: note.title,
                // date: note.date,
                memo: note.memo,
                budgetId: parseInt(budgetId),
                userId: +localStorage.activeUser
            })
                .then(() => navigate(`/`))
        } else {
            //POST - add new note
            addNote({
                title: note.title,
                // date: note.date,
                memo: note.memo,
                budgetId: parseInt(budgetId),
                userId: +localStorage.activeUser
            })
                .then(() => navigate("/"))
        }
    }


    useEffect(() => {
        if (noteId) {
                console.log("note ID:", noteId)
            getNoteById(noteId)
                .then(note => {
                    setNote(note)
                        // console.log("note ID:", noteId)
                    setIsLoading(false)
                })
        } else {
            setIsLoading(false)
        }
    }, [])

    return (
        <form className="noteForm">
            <h2 className="noteForm__title">
                {noteId ? <>EDIT NOTE</> : <>NEW NOTE</>}
            </h2>
            <button className="cancelBtn" onClick={() => navigate("/")}>
                X
            </button>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Note title: </label>
                    <input type="text" id="title" name="title" required autoFocus className="form-control" maxLength="30"
                        placeholder="Note title"
                        onChange={handleControlledInputChange}
                        defaultValue={note.title} />
                </div>
            </fieldset>
            {/* <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Date: </label>
                    <input type="date" id="date" name="date" className="form-control"
                        onChange={handleControlledInputChange}
                        defaultValue={note.date} />
                </div>
            </fieldset> */}
            <fieldset>
                <div className="form-group">
                    <label htmlFor="memo">Memo: </label>
                    <input type="text" id="memo" name="memo" className="memoField"
                        placeholder="Add memo here"
                        onChange={handleControlledInputChange}
                        defaultValue={note.memo} />
                </div>
            </fieldset>
            <button className="btn btn-primary"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault() // Prevent browser from submitting the form and refreshing the page
                    handleSaveNote()
                }}>
                {noteId ? <>Save Note</> : <>Add Note</>}
            </button>
        </form>
    )
}