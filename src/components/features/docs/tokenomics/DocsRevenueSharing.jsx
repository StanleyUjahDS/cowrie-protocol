import "./DocsRevenueSharing.css";


const revenueStreams = [

    "Protocol fees",

    "RWA ecosystem activities",

    "DeFi services",

    "Application revenue"

];



function DocsRevenueSharing(){


return (

<section
id="revenue-sharing"
className="docs-section docs-revenue"
>



<div className="docs-section-header">


<span>
Community Economy
</span>


<h2>
Revenue Sharing Model
</h2>


<p>

Cowrie introduces a community-driven economic
model where ecosystem growth creates value for
participants.

</p>


</div>





<div className="revenue-layout">



<div className="revenue-card">


<h3>
Value Distribution
</h3>


<p>

A percentage of ecosystem revenue is returned
to the community through incentives,
participation rewards and ecosystem development.

</p>


</div>





<div className="revenue-card">


<h3>
Revenue Sources
</h3>



<ul>


{
revenueStreams.map((item,index)=>(

<li key={index}>

{item}

</li>

))
}


</ul>


</div>





<div className="revenue-card">


<h3>
Community Incentives
</h3>


<p>

Rewards encourage users, creators and builders
to actively contribute to the growth of Cowrie.

</p>


</div>




</div>





</section>

);


}


export default DocsRevenueSharing;