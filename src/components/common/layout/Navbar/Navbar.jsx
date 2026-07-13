import "./Navbar.css";

import {
    NavLink,
    useLocation,
    useNavigate
} from "react-router-dom";

import { useState } from "react";

import {
    Menu,
    X
} from "lucide-react";

import Dropdown from "../../ui/Dropdown/Dropdown";
import Button from "../../ui/Button/Button";



function Navbar() {


    const [open, setOpen] = useState(false);


    const location = useLocation();


    const navigate = useNavigate();




    const closeMenu = () => {

        setOpen(false);

    };





    const productItems = [

        {
            label: "Cowrie Vault",
            to: "/products/vault"
        },

        {
            label: "RWA Bridge",
            to: "/products/bridge"
        },

        {
            label: "Staking",
            to: "/products/staking"
        }

    ];







    const navbarTheme =

        location.pathname.includes("/about")

        ?

        "about-active"


        :


        location.pathname.includes("/ecosystem")

        ?

        "ecosystem-active"


        :


        location.pathname.includes("/docs")

        ?

        "docs-active"


        :


        location.pathname.includes("/launch")

        ?

        "launch-active"


        :

        "";








    return (

        <nav className={`navbar ${navbarTheme}`}>


            <div className="navbar-container">






                <NavLink

                    to="/"

                    end

                    className={({ isActive }) =>

                        `navbar-logo ${isActive ? "active-logo" : ""}`

                    }

                    onClick={closeMenu}

                >


                    <img

                        src={`${import.meta.env.BASE_URL}cowrieLogo.png`}

                        alt="Cowrie Protocol Logo"

                        className="logo-image"

                    />



                    <span>
                        Cowrie Protocol
                    </span>



                </NavLink>









                <button

                    className="navbar-menu"

                    onClick={() => setOpen(!open)}

                    aria-label="Toggle navigation"

                >


                    {

                        open

                        ?

                        <X size={28} />

                        :

                        <Menu size={28} />

                    }


                </button>









                <div

                    className={`navbar-links ${open ? "active" : ""}`}

                >






                    <Dropdown

                        label="Products"

                        items={productItems}

                    />









                    <NavLink

                        to="/ecosystem"

                        onClick={closeMenu}

                        className={({ isActive }) =>

                            isActive ? "active-link" : ""

                        }

                    >

                        Ecosystem

                    </NavLink>









                    <NavLink

                        to="/about"

                        onClick={closeMenu}

                        className={({ isActive }) =>

                            isActive ? "active-link" : ""

                        }

                    >

                        About

                    </NavLink>









                    <NavLink

                        to="/docs"

                        onClick={closeMenu}

                        className={({ isActive }) =>

                            isActive ? "active-link" : ""

                        }

                    >

                        Docs

                    </NavLink>









                    <div className="launch-wrapper">


                        <Button

                            variant="black"

                            onClick={() => {

                                navigate("/launch");

                                closeMenu();

                            }}

                        >

                            Launch App

                        </Button>


                    </div>







                </div>





            </div>


        </nav>

    );


}


export default Navbar;