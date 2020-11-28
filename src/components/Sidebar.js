import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Sidebar extends Component
{
    render()
    {
        return(
            
                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                    {/* Sidebar - Brand */}
                    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                        <div className="sidebar-brand-icon rotate-n-15">
                            <i className="fas fa-laugh-wink" />
                        </div>
                        <div className="sidebar-brand-text mx-3">Axus's Project</div>
                    </a>
                    {/* Divider */}
                    <hr className="sidebar-divider my-0" />
                    {/* Nav Item - Dashboard */}
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">
                            <i className="fas fa-fw fa-tachometer-alt" />
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    {/* Divider */}
                    <hr className="sidebar-divider" />
                    {/* Heading */}
                    <div className="sidebar-heading">
                        Account
                    </div>
                    {/* Nav Item - Pages Collapse Menu */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="https://www.google.com" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                            <i className="fas fa-fw fa-list" />
                            <span>Teacher</span>
                        </a>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <Link className="collapse-item" to="/teacher/list">List</Link>
                                <Link className="collapse-item" to='/teacher/add'>Add</Link>
                                <Link className="collapse-item" to="/teacher/trash">Trash</Link>
                            </div>
                        </div>
                    </li>
                    {/* Nav Item - Utilities Collapse Menu */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="https://www.google.com" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                            <i className="fas fa-fw fa-user" />
                            <span>Student</span>
                        </a>
                        <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <Link className="collapse-item" to="/student/list">List</Link>
                                <Link className="collapse-item" to="/student/add">Add</Link>
                                <Link className="collapse-item" to="/student/trash">Trash</Link>
                            </div>
                        </div>
                    </li>
                    {/* Divider */}
                    <hr className="sidebar-divider" />
                    {/* Heading */}
                    <div className="sidebar-heading">
                        Account
                    </div>
                    {/* Nav Item - Pages Collapse Menu */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="https://www.google.com" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
                            <i className="fas fa-fw fa-users" />
                            <span>Users</span>
                        </a>
                        <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <Link className="collapse-item" to="/user">User</Link>
                                <Link className="collapse-item" to="/admin">Trash</Link>
                            </div>
                        </div>
                    </li>
                    {/* Sidebar Toggler (Sidebar) */}
                    <div className="text-center d-none d-md-inline">
                        <button className="rounded-circle border-0" id="sidebarToggle" />
                    </div>
                </ul>
            
        )
    }
}

export default Sidebar