import React from "react";
import "../styles/Sidebar.css";

const Sidebar = () => {
    return(
        <aside className="sidebar">
            <h2 className="logo">MYAPP</h2>

            <nav>
                <ul>
                    <li>Dashboard</li>
                    <li>Profile</li>
                    <li>Users</li>
                    <li>Settings</li>
                    <li>Logout</li>
                </ul>
            </nav>

        </aside>
    );
};

export default Sidebar