import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from './assets/logo.png'
 
export default function Header(){

    return (
        <div>
            <header className='relative flex gap-32 items-center p-5 text-white max-md:flex-col max-md:gap-10'>
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <div className="mt-5 grow max-md:mt-2">
                    <ul className="flex gap-16 font-semibold text-lg max-md:gap-12">
                        <li>Home</li>
                        <li>Class</li>
                        <li className="text-black">Promo</li>
                        <li className="max-md:hidden">Online Class</li>
                        <li className="text-black">Contact</li>
                    </ul>
                </div>
            </header>
      </div>
    )
}