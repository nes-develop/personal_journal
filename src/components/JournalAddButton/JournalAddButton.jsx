import React from 'react'
import './JournalAddButton.css'
import CardButton from '../CardButton/CardButton';

function JournalAddButton() {
    return (
        <CardButton className="journal-add">
            <img src="./plus.svg" alt="Значок +" />
            Новое воспоминание
        </CardButton>
    )
}

export default JournalAddButton;