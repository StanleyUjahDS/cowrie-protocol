import "./Footer.css";

import { Link } from "react-router-dom";

import {
    FaXTwitter,
    FaTelegram,
    FaGithub
} from "react-icons/fa6";



function Footer() {


return (


<footer className="footer">



{/* ===========================
    FOOTER TOP
=========================== */}


<div className="footer-container">



{/* BRAND */}

<div className="footer-col">


<h3>
Cowrie Protocol
</h3>


<p>

Real World Assets.
Real Decentralization.

</p>


</div>






{/* PRODUCT */}

<div className="footer-col">


<h4>
Product
</h4>


<a href="#">
Cowrie Vault
</a>


<a href="#">
Liquidity Engine
</a>


<a href="#">
RWA Bridge
</a>


<a href="#">
Dashboard
</a>


</div>






{/* SERVICES */}

<div className="footer-col">


<h4>
Services
</h4>


<a href="#">
Asset Tokenization
</a>


<a href="#">
DeFi Yield
</a>


<a href="#">
Staking
</a>


<a href="#">
API Access
</a>


</div>







{/* COMMUNITY */}

<div className="footer-col">


<h4>
Community
</h4>



<a
href="https://x.com"
target="_blank"
rel="noopener noreferrer"
>

Twitter

</a>




<a
href="https://discord.com"
target="_blank"
rel="noopener noreferrer"
>

Discord

</a>





<a
href="https://t.me"
target="_blank"
rel="noopener noreferrer"
>

Telegram

</a>





<a
href="https://github.com"
target="_blank"
rel="noopener noreferrer"
>

GitHub

</a>


</div>







{/* RESOURCES */}

<div className="footer-col">


<h4>
Resources
</h4>


<a href="#">
Docs
</a>


<a href="#">
Whitepaper
</a>


<a href="#">
Blog
</a>


<a href="#">
Roadmap
</a>


</div>





</div>








{/* ===========================
    FOOTER BOTTOM
=========================== */}


<div className="footer-bottom-bar">


<div className="footer-content">





{/* LOGO */}


<Link
to="/"
className="footer-logo"
>



<img

src="/cowrieLogo.png"

alt="Cowrie Protocol Logo"

className="footer-logo-image"

/>




<h3>
Cowrie Protocol
</h3>



</Link>








{/* SOCIALS */}


<div className="footer-socials">



<a

href="https://x.com"

target="_blank"

rel="noopener noreferrer"

aria-label="X"

>

<FaXTwitter />

</a>





<a

href="https://t.me"

target="_blank"

rel="noopener noreferrer"

aria-label="Telegram"

>

<FaTelegram />

</a>






<a

href="https://github.com"

target="_blank"

rel="noopener noreferrer"

aria-label="Github"

>

<FaGithub />

</a>





</div>





</div>







<div className="footer-bottom">


<p>

© {new Date().getFullYear()} Cowrie Protocol.
All rights reserved.

</p>


</div>






</div>





</footer>


);


}


export default Footer;