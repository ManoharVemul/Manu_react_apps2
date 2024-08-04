// import { Link } from "react-router-dom"
// import 'bootstrap'
// import './navbar.css'
// const NavBar = () => {
//   const linkStyle = { margin: "10px" }
//   return (
//     <>
//       <nav className="navbar navbar-expand-sm bg-dark navbar-light">
//         <div className="container-fluid">
//           <ul className="navbar-nav" style={linkStyle}>
//             <li className="nav-item">
//               <Link  to={"/about"} style={linkStyle}>About</Link>
//             </li>
//             <li className="nav-item" style={linkStyle}>
//               <Link to={"/"} style={linkStyle}>Home </Link>

//             </li>
//             <li className="nav-item" style={linkStyle}>
//               <Link  to={"/setting"}  style={linkStyle}> Setting</Link>
//             </li>
//             <li className="nav-item" style={linkStyle}>
//               <Link  to={"/blog"}  style={linkStyle}>Blog </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>

//     </>
//   )
// }
// export default NavBar





import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">MyApp</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/setting">Setting</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;