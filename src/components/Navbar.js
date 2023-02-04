import React from 'react'
import { Link } from 'gatsby'
import * as styles from '../styles/navigation.module.css'

export default function Navbar() {
  return (
    <nav className={styles.Navbar}>
        <h1>Kitesurfing</h1>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/places">Places to kitesurfing</Link>
        </div>
    </nav>
  )
}
