import React from "react";
import { useState } from "react";
import Logo from "./Logo";
import icon from '../../renderer/menubar.png';

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full bg-white shadow py-4">
            <div className="justify-between px-4 md:items-center md:flex">
                <div>
                    <div className="flex items-center justify-between md:block">
                        {/* logo */}
                        <div className="">
                            <Logo />
                        </div>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <button id="icon" type="submit" className="block h-9 w-9 md:hidden" onClick={() => setNavbar(!navbar)}>
                                        <img src={icon} />
                                    </button>
                                ) : (
                                    <button id="icon" type="submit" className="block h-9 w-9 md:hidden" onClick={() => setNavbar(!navbar)}>
                                        <img src={icon} />
                                    </button>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className={`flex my-auto space-x-6 justify-center mx-auto md:block ${
                        navbar ? "block" : "hidden"
                    }`}
                >
                    <ul className="items-center justify-between md:flex md:space-x-6">
                        <li className="text-gray-600 hover:text-blue-600 font-primary">
                            <a href="/">Home</a>
                        </li>
                        <hr></hr>
                        <li className="text-gray-600 hover:text-blue-600">
                            <a href="/catalog">Catalog</a>
                        </li>
                        <hr></hr>
                        <li className="text-gray-600 hover:text-blue-600">
                            <a href="javascript:void(0)">Help</a>
                        </li>
                    </ul>
                </div>

                <div
                    className={`${
                        navbar ? "hidden" : "block"
                    }`}
                >
                    <button className="hidden my-auto items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:block">
                        Sign in
                    </button>
                </div>
              
            </div>
        </nav>
    );
}