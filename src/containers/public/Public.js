import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarLeft, SidebarRight, Player } from "../../components";

const Public = () => {
    return (
        <div className="content">
            <div className="content-up">
                <div>
                    <SidebarLeft />
                </div>
                <div className="main-content" >
                    <Outlet />
                </div>
                <div className="sidebar-right">
                    <SidebarRight />
                </div>
            </div>
            <div className="player-content">
                <Player />
            </div>
        </div>

    )
}
export default Public