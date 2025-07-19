import React from "react";
import {Link} from "react-router-dom";


const NavComponent = () =>{
    return (<nav className="main-nav">
        <Link className="nav-brand" to="/">MoneyDefender</Link>
        <button className="nav-toggle-btn" id="sidebarToggle"
                onClick={() => { /* Toggle sidebar logic */ }}><i className="bi bi-list"></i></button>
        <form className="nav-search-form">
            <div className="input-group">
                <input className="nav-search-input" type="text" placeholder="Search for..."
                       aria-label="Search for..." aria-describedby="btnNavbarSearch"/>
                <button className="nav-search-btn" id="btnNavbarSearch" type="button">
                    <i className="bi bi-search"></i>
                </button>
            </div>
        </form>
        <ul className="nav-user-menu">
            <li className="nav-item dropdown">
                <button className="nav-user-dropdown-toggle" id="navbarDropdown" role="button"
                   data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i></button>
                <ul className="nav-dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link className="nav-dropdown-item" to="/settings">Settings</Link></li>
                    <li><Link className="nav-dropdown-item" to="/activity-log">Activity Log</Link></li>
                    <li>
                        <hr className="nav-dropdown-divider"/>
                    </li>
                    <li><Link className="nav-dropdown-item" to="/logout">Logout</Link></li>
                </ul>
            </li>
        </ul>
    </nav>
    );
}
export default NavComponent;