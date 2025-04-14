import React from 'react'
import './LeftPanel.css'
import Header from '../../components/Header/Header';

function LeftPanel({ children }) {
    return (
        <div className='left-panel'>
            {children}
        </div>

    )
}


export default LeftPanel;