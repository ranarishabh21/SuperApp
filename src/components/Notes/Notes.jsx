import React from 'react'
import styles from './Notes.module.css'
import { useState } from 'react'

function Notes() {

    const [notesData,setNotesData] = useState("")

    const handleSaveNotes = (e)=>{
        setNotesData(e.target.value)
        localStorage.setItem("notes",JSON.stringify(notesData))
    }
  return (
    <div className={styles.notesContainer}>
        All Notes

        <textarea onChange={handleSaveNotes}
        value={notesData}


        ></textarea>




    </div>
  )
}

export default Notes