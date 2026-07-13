import "./DocsProducts.css";


const products=[

{
title:"Griot",
text:"A decentralized social and financial interface designed to help users connect, interact, and participate within the Cowrie ecosystem through seamless onchain experiences."
},

{
title:"Builders Oasis",
text:"A community-powered learning platform designed to educate, empower, and onboard users with Web3 knowledge, digital skills, and practical tools for the future of decentralized innovation."
},

{
title:"RWA Marketplace",
text:"A marketplace infrastructure for tokenized assets, enabling users to discover, access, and interact with real-world value through transparent onchain systems."
},

{
title:"DeFi Services",
text:"A decentralized yield and liquidity tool built to help users participate in ecosystem rewards, explore earning opportunities, and engage with sustainable onchain financial growth."
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