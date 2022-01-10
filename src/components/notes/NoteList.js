import React, { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { NotesContext } from "./NoteDataProvider"
import { NoteCard } from "./NoteCard"
import "./Note.css"

export const NoteList = ({selectedBudget}) => {
  const { notes, getNotes } = useContext(NotesContext)

  const navigate = useNavigate()

  useEffect(() => {
    // console.log("NoteList: useEffect - getNotes")
    getNotes()
  }, [])

  return (
    <>
      <section className="noteContainer">
        <div className="noteHdr2">
            <h2>NOTES</h2>
            <button className="addNoteBtn" onClick={() => navigate(`/notes/create/${selectedBudget}`)}>
                +
            </button>
        </div>
        <div>
            {notes.filter(note => note.userId === +localStorage.activeUser).filter(note => note.budgetId === selectedBudget).filter(note => note.budgetId === selectedBudget).map(note => 
                <NoteCard key={note.id} note={note} selectedBudget={selectedBudget} />
            )}
        </div>
      </section>
    </>
  )
}