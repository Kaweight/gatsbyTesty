import React from 'react'
import Navbar from './Navbar'

export default function Layout({children}) {
  return (
    <div className="Layout">
      <Navbar />
      <div className="content">
        { children }
      </div>
      <footer>
        <p>Copyright test test</p>
      </footer>
    </div>
  )
}
