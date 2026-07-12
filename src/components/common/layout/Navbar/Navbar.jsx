import "./Navbar.css";

import { Link } from "react-router-dom";
import { useState } from "react";

import { Menu, X } from "lucide-react";

import Dropdown from "../../ui/Dropdown/Dropdown";
import Button from "../../ui/Button/Button";


function Navbar() {


const [open,setOpen] = useState(false);



const productItems = [

    {
        label:"Cowrie Vault",
        to:"/products/vault"
    },

    {
        label:"RWA Bridge",
        to:"/products/bridge"
    },

    {
        label:"Staking",
        to:"/products/staking"
    }

];



return (

<nav className="navbar">


<div className="navbar-container">



<Link 
to="/" 
className="navbar-logo"
onClick={()=>setOpen(false)}
>


<img

src="/cowrieLogo.png"

alt="Cowrie Protocol Logo"

className="logo-image"

/>


<span>
Cowrie Protocol
</span>


</Link>





<button

className="navbar-menu"

onClick={()=>setOpen(!open)}

>

{
open 
?
<X size={28}/>
:
<Menu size={28}/>
}

</button>





<div

className={`navbar-links ${open ? "active" : ""}`}

>


<Dropdown

label="Products"

items={productItems}

/>


<Link 
to="/ecosystem"
onClick={()=>setOpen(false)}
>
Ecosystem
</Link>


<Link 
to="/about"
onClick={()=>setOpen(false)}
>
About
</Link>



<Link 
to="/docs"
onClick={()=>setOpen(false)}
>
Docs
</Link>



<Button

variant="black"

onClick={()=>window.open(
"https://app.cowrieprotocol.com",
"_blank"
)}

>

Launch App

</Button>



</div>



</div>


</nav>

);


}


export default Navbar;