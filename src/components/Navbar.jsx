import React from 'react'
import { Link } from "react-router-dom";
import { BiAddToQueue } from 'react-icons/bi';
import { RiLogoutBoxRLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <>
        <nav className='container-fluid' style={{'borderBottom':'1px solid lightgrey'}}>
        <ul>
            <li><strong><Link to={'/dashboard'}>Dashboard</Link></strong></li>
        </ul>
        <ul>
          <li>
            <Link to={`jadwal/add`}>
              <BiAddToQueue/>
            </Link>
          </li>
        <li><Link to={`/`}>
          <RiLogoutBoxRLine/>
        </Link></li>
        </ul>
        </nav>
    </>
  )
}

export default Navbar