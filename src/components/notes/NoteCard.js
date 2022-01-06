import React, { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { NotesContext } from "../notes/NoteDataProvider"
import "./Note.css"

export const NoteCard = ({ note }) => {
    const { getNotes, deleteNote } = useContext(NotesContext)

    const navigate = useNavigate();

    //Use for delete:
    const handleDelete = () => {
        deleteNote(note.id)
            .then(getNotes)
    }

    //Use to format date into MM/DD/YYYY
    // const formattedDate = new Date(note.date);
    // const noteDate = new Intl.DateTimeFormat('en-US', { timeZone: 'UTC', month: '2-digit', day: '2-digit', year: '2-digit' }).format(formattedDate)
        // const noteDueDate = new Intl.DateTimeFormat('en-US', { timeZone: 'UTC', month: 'short', day: 'numeric', year: 'numeric' }).format(formattedDate)

    return ( 
        <section key = {note.id}> 
            <div className = "noteTitle">{note.title}</div>  
            {/* <div className = "noteDate">{noteDate}</div>  */}
            <div className = "noteMemo">${note.memo}</div>
            <div className="noteEditDel">
                <button className="noteEdit" onClick={() => { navigate(`/paid/edit/${note.id}`) }}>&#9998;</button>
                <button className="noteDel" onClick={handleDelete}>&#128465;</button>
            </div>
        </section>
    )
}