import React from "react";

const Sidebar=()=>{
    return(
        <>
        <div className="side-menu">
            <a href="#"><i class="fa fa-tachometer"></i><span>Dashboard</span></a>
            <a href="#"><i class="fa fa-list-ul"></i><span>Tasks</span></a>
            <a href="#"><i class="fa fa-calculator"></i><span>Developer calcy</span></a>
            <a href="#"><i class="fa fa-tasks"></i><span>Projects</span></a>
            <a href="#"><i class="fa fa-check-square"></i><span>Skills level </span></a>
            <a href="#"><i class="fa fa-book"></i><span>Company experiance</span></a>
            <a href="#" className="Logout"><span>Logout</span></a>
        </div>
        </>
    )
}

export default Sidebar;