import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const NotesContext = createContext()

// This component establishes what data can be used.
export const NotesProvider = (props) => {
    const [notes, setNotes] = useState([])
    const [searchTerms, setSearchTerms] = useState("")

    const getNotes = () => {
        return fetch("http://localhost:8088/notes")
            .then(res => res.json())
            .then(setNotes)
    }

    const addNote = noteObj => {
        return fetch("http://localhost:8088/notes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(noteObj)
        })
            .then(response => response.json())
    }

    const getNoteById = (id) => {
        return fetch(`http://localhost:8088/notes/${id}`)
            .then(res => res.json())
    }

    const deleteNote = noteId => {
        return fetch(`http://localhost:8088/notes/${noteId}`, {
            method: "DELETE"
        })
            .then(getNotes)
    }

    const updateNote = note => {
        return fetch(`http://localhost:8088/notes/${note.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(note)
        })
            .then(getNotes)
    }

    return (
        <NotesContext.Provider value={
            {
                notes, addNote, getNotes, getNoteById, deleteNote, updateNote, searchTerms, setSearchTerms
            }
        }>
            {props.children}
        </NotesContext.Provider>
    )

}
