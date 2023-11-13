import {FaBars, FaTimes} from 'react-icons/fa'
import { useState } from "react";
import { FaHome, FaEnvelope, FaUtensils, FaShoppingCart, FaTools } from "react-icons/fa";

const TopNavbar = () => {

    const Menus = [
        {
            name: 'Home', 
            link:'/',
            icon: <FaHome></FaHome>
        },
        {
            name: 'CONTACT US', 
            link:'/',
            icon: <FaEnvelope></FaEnvelope>
        },
        {
            name: 'Our Menu', 
            link:'/',
            icon: <FaUtensils></FaUtensils>
        },
        {
            name: 'Our Shop', 
            link:'/',
            icon: <FaShoppingCart></FaShoppingCart>
        },

    ]

    let [open, setOpen] = useState(false)

    return (
        <div className="bg-white w-full top-0 left-0 z-50 ">
            <div className="flex items-center justify-between px-14 py-7">
                <div className="flex justify-center items-center text-2xl font-semibold gap-3">
                    <FaTools className="text-blue-500 text-3xl"></FaTools>
                    <a to="/"><h1 className="font-semibold font-sans italic">Swader Songe</h1></a>
                </div>
                <div>
                    <div onClick={() => setOpen(!open)} className="md:hidden absolute top-8 right-10 text-xl">
                        {
                            open ? <FaTimes></FaTimes> : <FaBars></FaBars> 
                        }
                    </div>
                    
                    <ul className={`md:flex md:items-center justify-center absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto pl-9 md:pl-0 py-4 md:py-0 uppercase ${open ? 'top-20 opacity-100': 'top-[-490px] md:opacity-100 opacity-0'} `}>
                        {
                            Menus.map(Menu => <li key={Menu.name} className="flex justify-center items-center gap-1 md:ml-6 my-6 md:my-0 transition duration-300 hover:text-blue-500 font-medium">
                                <span className="text-xl text-blue-500">{Menu.icon}</span>
                               <a to={Menu.link}>{Menu.name}</a> 
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TopNavbar;