import React from "react";

const Header =()=>{
    return(
        <>
        <input type="checkbox" id="menu"/>
        <nav>
            <label>Developerdiary</label>
            <ul>
                <li><a href="#">Logout <i class="fa fa-sign-out"></i></a></li>
            </ul>
            <label for="menu" className="menu-bar">
                <i className="fa fa-bars"></i>
            </label>
        </nav>
        </>
    )
}
export default Header;