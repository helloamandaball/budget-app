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
        <div className="noteHdr">
            <h2>NOTES</h2>
            <button className="addNoteBtn" onClick={() => navigate("/notes/create")}>
                +
            </button>
        </div>
        <div>
            {notes.filter(note => note.budgetId === selectedBudget).map(note => 
                <NoteCard key={note.id} note={note} />
            )}
        </div>
      </section>
    </>
  )
}