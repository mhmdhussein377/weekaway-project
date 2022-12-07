import React, {useState} from 'react'
import {FaBars, FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram} from "react-icons/fa";

const Navbar = () => {

    let [nav,
        setNav] = useState(false);

    let toggleNav = () => {
        setNav(!nav);
    }

    return (
        <div
            className="min-h-[50px] absolute w-full flex items-center justify-between text-white bg-gray-700/80 z-10">
            <ul className="hidden sm:flex px-4">
                <li>
                    <a href="/" className="">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#gallery">Gallery</a>
                </li>
                <li>
                    <a href="#deals">Deals</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <div className="flex justify-between">
                <FaFacebookF className="mx-4"/>
                <FaTwitter className="mx-4"/>
                <FaGooglePlusG className="mx-4"/>
                <FaInstagram className="mx-4"/>
            </div>

            {/* Hamburger Icon */}
            <div className="sm:hidden z-10" onClick={toggleNav}>
                <FaBars size={20} className="mr-4 cursor-pointer"/>
            </div>
            {/* Mobile Menu */}
            <div onClick={toggleNav}
                className={nav
                ? "overflow-y-hidden sm:hidden ease-in duration-300 absolute top-0 left-0 w-full" +
                    " flex items-center justify-center bg-black/90 text-gray-300 h-screen"
                : "overflow-y-hidden sm:hidden ease-in duration-500 absolute top-0 left-[-100vh] w-full h-" +
                    "screen flex items-center justify-center bg-black/90 text-gray-300"}>
                <ul className="text-center font-semibold">
                    <li className="text-2xl">
                        <a href="#">Home</a>
                    </li>
                    <li className="text-2xl">
                        <a href="#gallery">Gallery</a>
                    </li>
                    <li className="text-2xl">
                        <a href="#deals">Deals</a>
                    </li>
                    <li className="text-2xl">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar