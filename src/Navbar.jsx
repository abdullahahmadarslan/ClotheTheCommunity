import React from 'react'
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-9 mx-auto">
                        <nav className="navbar navbar-expand-sm">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" to="#" ><strong className='title'>CLOTHE THE COMMUNITY</strong></NavLink>
                                <ul className="navbar-nav d-flex justify-content-center">
                                    <li className="nav-item">
                                        <NavLink exact activeClassNam=".active" className="nav-link" to="/"><button type="button" className="btn btn-outline-light text-dark nav-btn">Home</button></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink exact activeClassNam=".active" className="nav-link" to="/about"><button type="button" className="btn btn-outline-light text-dark nav-btn">About</button></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink exact activeClassNam=".active" className="nav-link" to="/donate"><button type="button" className="btn btn-outline-light text-dark nav-btn">Donate</button></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink exact activeClassNam=".active" className="nav-link" to="/contact"><button type="button" className="btn btn-outline-light text-dark nav-btn">Contact</button></NavLink>
                                    </li>
                                </ul>
                            </div>

                        </nav>
                        <Outlet />

                    </div>
                </div>
            </div>


        </>
    )
}

export default Navbar;