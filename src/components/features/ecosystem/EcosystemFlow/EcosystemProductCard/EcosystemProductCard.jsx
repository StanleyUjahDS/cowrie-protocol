import "./EcosystemProductCard.css";


function EcosystemProductCard({

    icon,

    title,

    description,

    features

}) {


return (

<article className="ecosystem-product-card">


<div className="ecosystem-product-icon">

    {icon}

</div>




<h3 className="ecosystem-product-title">

{title}

</h3>





<p className="ecosystem-product-description">

{description}

</p>





<ul className="ecosystem-product-features">


{

features.map((feature,index)=>(


<li key={index}>

{feature}

</li>


))

}


</ul>




</article>

);


}


export default EcosystemProductCard;