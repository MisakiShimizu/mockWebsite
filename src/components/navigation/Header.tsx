import React from 'react';
import { NavLink } from 'react-router-dom';
import { PiBoneThin } from 'react-icons/pi';
import { CiMenuBurger, CiShoppingCart } from 'react-icons/ci';
import { useMediaQuery } from 'react-responsive';

export default function Header() {
    const isMobile = useMediaQuery({ query: `(max-width:800px)` });

    return (
        <header>
            <nav className="navbar bg-body-tertiary container">
                {isMobile && (
                    <div className="container d-flex align-items-center justify-content-between ">
                        <button
                            className="navbar-toggler navbar-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <CiMenuBurger />
                        </button>
                        <div className="logo-container">
                            <NavLink to="" className="d-flex flex-column align-items-center ">
                                <PiBoneThin className="logo navbar-brand" />
                                <h4 className="logo-text">Parker & Co.</h4>
                            </NavLink>
                        </div>
                        <button className="navbar-button">
                            <CiShoppingCart />
                        </button>
                        <div className="collapse navbar-collapse " id="navbarNav">
                            <ul className="navbar-nav mobile-navbar justify-content-evenly">
                                <li className="fs-3">
                                    <NavLink to="">Home</NavLink>
                                </li>

                                <li className="fs-3">
                                    <NavLink to="">Shop By Pet</NavLink>
                                </li>

                                <li className="fs-3">
                                    <NavLink to="">Wear</NavLink>
                                </li>

                                <li className="fs-3">
                                    <NavLink to="">Play</NavLink>
                                </li>

                                <li className="fs-3">
                                    <NavLink to="">Walk</NavLink>
                                </li>

                                <li className="fs-3">
                                    <NavLink to="">Eat</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
                {!isMobile && (
                    <ul className="navbar-nav d-flex justify-content-evenly">
                        <li>
                            <NavLink to="">Shop By Pet</NavLink>
                        </li>
                        <li>
                            <NavLink to="">Wear</NavLink>
                        </li>
                        <li>
                            <div>
                                <NavLink to="">
                                    <PiBoneThin className="logo navbar-brand" />
                                </NavLink>
                            </div>
                        </li>
                        <li>
                            <NavLink to="">Play</NavLink>
                        </li>
                        <li>
                            <NavLink to="">Walk</NavLink>
                        </li>
                        <li>
                            <NavLink to="">Eat</NavLink>
                        </li>
                    </ul>
                )}
            </nav>
        </header>
    );
}
