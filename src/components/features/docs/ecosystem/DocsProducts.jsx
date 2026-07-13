import "./DocsProducts.css";


const products=[

{
title:"Griot Wallet",
text:"A non-custodial Web3 wallet connecting users to the Cowrie ecosystem."
},

{
title:"Builders Oasis",
text:"An educational platform empowering creators and learners."
},

{
title:"RWA Marketplace",
text:"A marketplace infrastructure for tokenized assets."
},

{
title:"DeFi Services",
text:"Decentralized financial tools for ecosystem participation."
}

];



function DocsProducts(){


return (

<section 
id="products"
className="docs-section docs-products"
>


<h2>
Cowrie Products
</h2>



<div className="products-grid">


{
products.map((product,index)=>(

<div 
className="product-card"
key={index}
>

<h3>
{product.title}
</h3>

<p>
{product.text}
</p>


</div>

))
}


</div>


</section>

);


}


export default DocsProducts;