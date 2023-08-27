import React, { useState } from "react"
// import "./navbar.css"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"

const Navbar = () => {
    const [Mobile, setMobile] = useState(false)
    return (
        <>
            <nav className='navbar'>
            <div >
                <Link to="/">
                    <span className='logo'>PrakReti</span>
                </Link>
            </div>
                {/* <h3 className='logo'>PrakReti</h3> */}
                <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
                    <Link to='/marketplace' className='marketplace'>
                        <li><button class="btn btn-2 hover-filled-slide-right">
                        Marketplace </button></li>

                    </Link>
                    <Link to='/verified' className='verified'>
                        <li><button class="btn btn-2 hover-filled-slide-right">
                       Verified
                    </button></li>
                    </Link>
                    <Link to='/about' className='about'>
                        <li><button class="btn btn-2 hover-filled-slide-right">
                         About Us
                    </button></li>
                    </Link>
                    <li>
                <button className="btn-hover color-1" >Connect Wallet</button>
    </li>
                </ul>

                <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
                    {Mobile ? <ImCross /> : <FaBars />}
                </button>
            </nav>
        </>
    )
}
export default Navbar