
import React from 'react'
import { Link } from 'react-router-dom'

const navStyle = {
  display: "flex",
  justifyContent: "space-around", // Adjust spacing
  alignItems: "center", // Center items vertically
  padding: "10px", // Add padding around the nav
  backgroundColor: "#f4f4f4", // Background color
  borderBottom: "1px solid #ccc" // Border at the bottom
};
export default function RecipeNavBar() {
  return (
    <div className={navStyle}>
      <Link to = {"/"} >Home</Link>
      <Link to = {"/viewmore"}>View more</Link>
      <Link to = {"/favourite"}   > Favorite </Link>
      {/* <Link to = {"/"} /> */}

    </div>
  )
}


