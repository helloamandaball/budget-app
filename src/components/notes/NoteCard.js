import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { NotesContext } from "./NoteDataProvider"
import "./Note.css"

export const NoteCard = ({ note, selectedBudget }) => {
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
        // <div className="noteList">
        //     <div className="noteSection" key={note.id}>
        //         <div className="note">
        //             <div className="noteTitle">{note.title}</div>  
        //             {/* <div className = "noteDate">{noteDate}</div>  */}
        //             <div className="noteMemo">{note.memo}</div>
        //         </div>
        //         <div className="noteEditDel">
        //             <button className="noteEdit" onClick={() => { navigate(`/notes/edit/${selectedBudget}/${note.id}`) }}>&#9998;</button>
        //             <button className="noteDel" onClick={handleDelete}>&#128465;</button>
        //         </div>
        //     </div>
        // </div>
        <div className="noteBorder">
            <div className="noteSection2" key={note.id}>
                <div className="note2">
                    <div className="noteTitle">{note.title}</div>  
                    {/* <div className = "noteDate">{noteDate}</div>  */}
                    <div className="noteMemo">{note.memo}</div>
                </div>
                <div className="noteEditDel">
                    <button className="noteEdit" onClick={() => { navigate(`/notes/edit/${selectedBudget}/${note.id}`) }}>&#9998;</button>
                    <button className="noteDel" onClick={handleDelete}>&#128465;</button>
                </div>
                <hr></hr>
            </div>
        </div>
    )
}