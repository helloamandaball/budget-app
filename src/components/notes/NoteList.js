import React, { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { NotesContext } from "./NoteDataProvider"
import { NoteCard } from "./NoteCard"
import "./Note.css"

export const NoteList = () => {
  const { notes, getNotes } = useContext(NotesContext)

  const navigate = useNavigate()

  useEffect(() => {
    // console.log("NoteList: useEffect - getNotes")
    getNotes()
  }, [])

  return (
    <>
      <div className="noteContainer">
        <div className="noteHdr">
            <h2>NOTES</h2>
            <button className="addNoteBtn" onClick={() => navigate("/notes/create")}>
                +
            </button>
        </div>
        <div className="noteList">
              {/* returns the note Complete Card after filters/sorts by date */}
                {/* {notes.sort((a,b) => {return new Date(a.date) - new Date (b.date)}).map(note => 
                  <NoteCard key={note.id} note={note} />
                )} */}
                {notes.map(note => 
                  <NoteCard key={note.id} note={note} />
                )}
        </div>
      </div>
    </>
  )
}