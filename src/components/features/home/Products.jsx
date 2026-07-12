import "./Products.css";

import ProductCard from "../products/cards/ProductCard/ProductCard";

import SectionTitle from "../../common/ui/SectionTitle/SectionTitle";

import Container from "../../common/ui/Container/Container";

import productData from "../../../data/productData";


function Products(){


return (

<section className="products">


<Container>


<SectionTitle

title="Our Products"

description="
Explore the applications powering the Cowrie Protocol ecosystem.
"

/>



<div className="products-grid">


{
productData.map((product)=>(


<ProductCard

key={product.id}

variant={product.variant}

title={product.title}

description={product.description}

image={product.image}

buttonOne={product.buttonOne}

/>


))

}


</div>


</Container>


</section>


);


}


export default Products;