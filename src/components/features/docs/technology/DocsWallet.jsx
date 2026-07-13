import "./DocsWallet.css";


const walletFeatures = [

    {
        title:"Non-Custodial Design",

        text:
        "Users maintain complete ownership of their private keys and digital assets."
    },


    {
        title:"Secure Key Management",

        text:
        "Private keys are protected through secure storage mechanisms designed to reduce security risks."
    },


    {
        title:"Multi-Chain Support",

        text:
        "The wallet is designed to interact with decentralized networks and ecosystem applications."
    },


    {
        title:"Web3 Connectivity",

        text:
        "Users can connect with DeFi services, tokenized assets and decentralized applications."
    }

];



function DocsWallet(){


return (

<section
id="wallet"
className="docs-section docs-wallet"
>




<div className="docs-section-header">


<span>
Infrastructure
</span>


<h2>
Griot Wallet Architecture
</h2>


<p>

Griot Wallet serves as the user gateway into
Cowrie Protocol, providing secure access to
digital assets and decentralized services.

</p>


</div>






<div className="wallet-grid">


{
walletFeatures.map((item,index)=>(


<div 
className="wallet-feature"
key={index}
>


<h3>
{item.title}
</h3>


<p>
{item.text}
</p>


</div>


))
}


</div>





</section>

);


}


export default DocsWallet;