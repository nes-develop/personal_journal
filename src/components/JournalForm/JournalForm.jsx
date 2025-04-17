import { React, useState } from 'react'
import styles from './JournalForm.module.css'
import Button from '../Button/Button';
import cn from 'classnames'

function JournalForm({ onSubmit }) {

    const [formValidState, setFormValidState] = useState({
        title: true,
        text: true,
        date: true
    })

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
        let isFormValid = true
        if (!formProps.title?.trim().length) {
            setFormValidState(state => ({ ...state, title: false }));
            isFormValid = false;
        } else {
            setFormValidState(state => ({ ...state, title: true }));
        }

        if (!formProps.post?.trim().length) {
            setFormValidState(state => ({ ...state, post: false }))
            isFormValid = false;
        } else {
            setFormValidState(state => ({ ...state, post: true }))
        }
        if (!formProps.date) {
            setFormValidState(state => ({ ...state, date: false }))
            isFormValid = false;
        } else {
            setFormValidState(state => ({ ...state, date: true }))
        }
        if (!isFormValid) {
            return
        }

        onSubmit(formProps)
        // console.log(formProps)
        // console.log(formProps.post)
    }
    return (
        <>
            <form className={styles['journal-form']} onSubmit={addJournalItem}>
                <div>
                    <input type='text' name='title' className={cn(styles['input-title'], {
                        [styles['invalid']]: !formValidState.title
                    })} />
                </div>

                <div className={styles['form-row']}>
                    <label htmlFor='date' className={styles['form-label']}>
                        <img src='/calendar.svg' alt='Иконка календаря' />
                        <span>Дата</span>
                    </label>
                    <input type='date' name='date' id="date" className={cn(styles['input'], {
                        [styles['invalid']]: !formValidState.date
                    })} />
                </div>

                <div className={styles['form-row']}>
                    <label htmlFor='tag' className={styles['form-label']}>
                        <img src='/folder.svg' alt='Иконка папки' />
                        <span>Метки</span>
                    </label>
                    <input type='text' name='tag' id='tag' className={styles['input']} />
                </div>

                <textarea name="post" id='post' cols="30" rows="10" className={cn(styles['input'], {
                    [styles['invalid']]: !formValidState.post
                })}></textarea>
                <Button text="Сохранить" onClick={() => { console.log('Нажали') }} />
            </form>
        </>


    )
}


export default JournalForm