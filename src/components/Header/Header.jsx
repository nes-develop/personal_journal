import React from 'react'
import styles from './Header.module.css'

function Header() {
    return (
        <img className={styles.logo} src='/logo.svg' alt='Логотип' />
    )
}

export default Header