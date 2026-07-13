import "./DocsArchitecture.css";


const architectureLayers = [

    {
        title:"Blockchain Layer",

        text:
        "Smart contracts, decentralized applications and token infrastructure powering transparent ownership and transactions."
    },


    {
        title:"RWA Infrastructure",

        text:
        "Systems responsible for representing, managing and verifying real-world assets on-chain."
    },


    {
        title:"Application Layer",

        text:
        "User-facing applications including Griot Wallet and Builders Oasis connecting users with the ecosystem."
    },


    {
        title:"Data & Storage",

        text:
        "Secure decentralized and traditional storage solutions supporting application data and ecosystem services."
    }

];



function DocsArchitecture(){


return (

<section
id="architecture"
className="docs-section docs-architecture"
>



<div className="docs-section-header">


<span>
Technology
</span>


<h2>
Cowrie Architecture
</h2>


<p>

Cowrie Protocol is designed as a modular
decentralized infrastructure combining blockchain
technology, applications and real-world asset
systems.

</p>


</div>





<div className="architecture-grid">


{
architectureLayers.map((layer,index)=>(


<div 
className="architecture-card"
key={index}
>


<div className="architecture-number">

0{index + 1}

</div>


<h3>
{layer.title}
</h3>


<p>
{layer.text}
</p>


</div>


))
}


</div>




</section>

);


}


export default DocsArchitecture;