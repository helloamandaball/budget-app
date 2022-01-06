import React, { useContext, useEffect } from "react"
import { NotesContext } from "../notes/NoteDataProvider"
import { NoteCard } from "./NoteCard"
import "./Note.css"

export const NoteList = () => {
  const { notes, getNotes } = useContext(NotesContext)

  useEffect(() => {
    // console.log("NoteList: useEffect - getNotes")
    getNotes()
  }, [])

  return (
    <>
      <div className="noteContainer">
        <h2>NOTES</h2>
        <div className="noteList">
          <div className="note">
              {/* returns the note Complete Card after filters/sorts by date */}
                {/* {notes.sort((a,b) => {return new Date(a.date) - new Date (b.date)}).map(note => 
                  <NoteCard key={note.id} note={note} />
                )} */}
                {notes.map(note => 
                  <NoteCard key={note.id} note={note} />
                )}
          </div>
        </div>
      </div>
    </>
  )
}