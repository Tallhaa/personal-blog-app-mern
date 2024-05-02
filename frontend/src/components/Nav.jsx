import React from 'react'
import {Link} from "react-router-dom"

const Nav = () => {
  return (
    <div className="nav" style={{display:"flex", justifyContent:"space-between"}}>
        <div className="logo">Blog</div>
        <ul style={{display:"flex", listStyle:"none"}}>
            <Link to="/">
            <li style={{textDecoration:"none",margin: "0 10px"}}>Home</li>
            </Link>
            <Link to="/add-blog">
            <li style={{textDecoration:"none", margin: "0 10px"}}>Add Blog</li>
            </Link>

        </ul>
    </div>
  )
}

export default Nav