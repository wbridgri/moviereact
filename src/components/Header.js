import React from "react";
import { Link } from "react-router-dom";  
import { useParams } from "react-router-dom";

/**
 * 
 * The nav style is basically verbatim from the bootstrap docs.  I am aware that the movie randomizer only works once
 */


const Header = () => {
    
    
    

    let ranId = Math.floor(Math.random() * 10) + 1
    return (
    <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom px-4 ">
        <div className="container-fluid">
        
            <Link className="navbar-brand" to="/">  
            <img
                src="/images/logo.jpg"
                alt="MovieRVs Logo"
                height="100"
                className="d-inline-block align-top"
            />
            </Link>


            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-nav"
            aria-controls="navbar-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbar-nav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                <Link className="nav-link" onClick={ranId} to={`/Movies/${ranId}`}>   
                    Random Movie
                </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/">  
                    Movies
                </Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </div>
    );
};

export default Header;