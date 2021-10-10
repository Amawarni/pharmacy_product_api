import React from "react";

function Header() {


    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
            <a className="navbar-brand" href="#" style={{color: "purple"}}>Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                 <li className="nav-item">
                    <a className="nav-link" href="#">Add Product</a>
                 </li>
                 <li className="nav-item">
                     <a className="nav-link" href="#">Payment</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                     Dropdown link
                    </a>
             <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="#">All</a></li>
                <li><a className="dropdown-item" href="#">Foreign Products</a></li>
                <li><a className="dropdown-item" href="#">Local Products</a></li>
            </ul>
                </li>
            <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </ul>
    </div>
  </div>
</nav>



    )
}

export default Header;