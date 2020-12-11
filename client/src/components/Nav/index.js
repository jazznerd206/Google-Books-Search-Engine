import React from "react";
import { Navbar,Nav } from 'react-bootstrap';
import "./style.css";

function NavigationBar() {
  return (

    <Navbar variant="dark" expand="lg">
      <Navbar.Toggle />
      <Navbar.Brand href="/">
        <div className="navbar-brand title">
          <p>Netboox</p>
        </div>
      </Navbar.Brand>
      <Navbar.Collapse>
          <Nav className="mr-auto">
              <Nav.Link href="/search">Search</Nav.Link>
              <Nav.Link href="/saved">Saved</Nav.Link>
          </Nav>
      </Navbar.Collapse> 
    </Navbar>

    // <div>
    //   <nav class="navbar navbar-expand-lg navbar-light">
    //     <div class="navbar-brand" href="/">
          // <div className="navbar-brand title">
          //   <p>Netboox</p>
          // </div>
    //     </div>
    //     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navToggle" aria-controls="navToggle" aria-expanded="false" aria-label="Toggle navigation">
    //       <span class="navbar-toggler-icon"></span>
    //     </button>
    //     <div class="collapse navbar-collapse" id="navToggle">
    //       <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
    //         {/* <li class="nav-item active">
    //           <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
    //         </li> */}
    //         <li class="nav-item">
    //           <a class="nav-link" href="/search">Search</a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link" href="/saved">Saved</a>
    //         </li>
    //       </ul>
    //     </div>
    //   </nav>
    // </div>
    
    // <nav className="navbar navbar-expand-sm">
    //   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //     <span class="navbar-toggler-icon"></span>
    //   </button>
      // <a className="navbar-brand title">
      //   <p>Netboox</p>
      // </a>
    //   <div class="collapse navbar-collapse" id="navbarNav">
    //     <ul class="navbar-nav">
    //       <li class="nav-item active">
    //         <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
    //       </li>
    //       <li class="nav-item">
    //         <a class="nav-link" href="/search">Search</a>
    //       </li>
    //       <li class="nav-item">
    //         <a class="nav-link" href="/saved">Saved</a>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  );
}

export default NavigationBar;
