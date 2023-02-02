import React from "react"
import { Link } from "react-router-dom"

function Header() {
  return (
    <>
      <Link to='/'><p>Home</p></Link>
      <Link to='/1'><p>Calendar1</p></Link>
      <Link to='/2'><p>Calendar2</p></Link>
      <Link to='/3'><p>Calendar3</p></Link>
    </>
  )
}
export default Header