import "./DocsEcosystemTokens.css";


const tokenUtilities = [

    {
        title:"Ecosystem Access",
        text:
        "Tokens provide access to Cowrie ecosystem services, applications and decentralized opportunities."
    },


    {
        title:"Community Incentives",
        text:
        "Participants are rewarded for contributing value, adoption and growth to the ecosystem."
    },


    {
        title:"Governance Participation",
        text:
        "Token holders can participate in decisions shaping the future direction of the protocol."
    },


    {
        title:"DeFi Utility",
        text:
        "Tokens can be integrated into decentralized financial applications and ecosystem services."
    }

];



function DocsEcosystemTokens(){


return (

<section
id="ecosystem-tokens"
className="docs-section docs-tokenomics"
>



<div className="docs-section-header">


<span>
Tokenomics
</span>


<h2>
Cowrie Ecosystem Tokens
</h2>


<p>

The Cowrie token ecosystem powers participation,
utility and value exchange across the protocol.

Tokens are designed to align users, creators,
developers and communities with long-term growth.

</p>


</div>




<div className="token-grid">


{
tokenUtilities.map((item,index)=>(


<div 
className="token-card"
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


export default DocsEcosystemTokens;