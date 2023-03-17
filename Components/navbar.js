import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import { signOut } from 'next-auth/react';


  const handleSignout = (e) => {
    e.preventDefault()
    signOut();

  }
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid px-3">

                    <a className="navbar-brand p" href="#">
                        <img className= {styles.logo}src="https://www.gulahmedshop.com/media/logo/stores/1/gulahmed-logo_1.png" alt="" width="90" height="40" />
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-0">
                        <li className="nav-item">
                                <a className="nav-link navbar-brand text-uppercase  active" aria-current="page" href="/">UnStitch</a>
                            </li>
                        <li className="nav-item">
                                <a className="nav-link navbar-brand text-uppercase  active" aria-current="page" href="#">Lawn</a>
                            </li>
                          
                            <li className="nav-item">
                                <a className="nav-link navbar-brand text-uppercase " href="#">Women</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navbar-brand text-uppercase " href="#">Shoes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navbar-brand text-uppercase " href="#">Bags</a>
                            </li>  <li className="nav-item">
                                <a className="nav-link navbar-brand text-uppercase " href="#">Fragnance</a>
                            </li>
                        </ul>
                        <a onClick={() => signOut("facebook")} href="/"  className="nav-link navbar-brand text-uppercase ">
                    SignOut
                  </a>
                        {/* <a className="nav-link navbar-brand text-uppercase " href="/">SignOut</a> */}
                        <a className="nav-link navbar-brand text-uppercase " href="/login">Signup</a>

                    </div>
                </div>

            </nav>
        </>
    )
}

export default Navbar