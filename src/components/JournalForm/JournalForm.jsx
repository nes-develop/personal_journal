import { React, useState } from 'react'
import './JournalForm.css'
import Button from '../Button/Button';

function JournalForm({ onSubmit }) {

    // const [inputData, setInputData] = useState('')
    // const inputChange = (event) => {
    //     // console.log(event);
    //     console.log(inputData);
    //     setInputData(event.target.value);
    // }

    const addJournalItem = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const formProps = Object.fromEntries(formData)
        onSubmit(formProps)
        // console.log(formProps)
        // console.log(formProps.post)
    }
    return (
        <>
            <form className="journal-form" onSubmit={addJournalItem}>
                <input type="text" name="title" />
                <input type="date" name="date" />
                <input type="text" name="tag" />
                <textarea name="text" id='' cols={30} rows={10}></textarea>
                <Button text="Сохранить" />
            </form>
        </>


    )
}


export default JournalForm