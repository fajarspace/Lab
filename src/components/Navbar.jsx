import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
        <nav className='container-fluid'>
        <ul>
            <li><strong>Dashboard</strong></li>
        </ul>
        <ul>
            <li><Link style={{"backgroundColor":"green"}} role='button' to={`jadwal/add`}>
          Tambah jadwal
        </Link></li>
        <li><Link style={{"backgroundColor":"red"}} role='button' to={`/`}>
          Back to /
        </Link></li>
        </ul>
        </nav>
    </>
  )
}

export default Navbar