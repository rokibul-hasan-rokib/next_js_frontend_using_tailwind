import React from 'react';
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import Link from "next/link";

const Header = () => {
    return (
        <section className={'top-bar'}>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <Image src={logo} alt="logo" width={200} height={42} priority={true}/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="m-auto mb-2 navbar-nav mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    Categories
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Category 1</a></li>
                                    <li><a className="dropdown-item" href="#">Category 2</a></li>
                                    <li><a className="dropdown-item" href="#">Category 3</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#">Reviews</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#">Blog</a>
                            </li>

                        </ul>
                        <div className="right-area d-flex align-items-center">
                            <Link className={'nav-link me-lg-4 me-0 mb-3 mb-lg-0'} href={''}>Login</Link>
                            <Link className={'secondary-button'} href={''}>Sign up</Link>
                        </div>
                    </div>
                </div>
            </nav>

        </section>
    );
};

export default Header;