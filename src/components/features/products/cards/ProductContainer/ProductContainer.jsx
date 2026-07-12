import "./ProductContainer.css";

import { motion } from "framer-motion";

import Button from "../../../../common/ui/Button/Button";


function ProductContainer({

  title,
  description,
  primaryButton,
  secondaryButton,
  image,
  tag,
  ctaText,
  ctaButton,
  bottomTitle,
  bottomText,
  bottomButton

}) {


return (

<motion.div

className="product-container-card"


initial={{
    opacity:0,
    y:40
}}


whileInView={{
    opacity:1,
    y:0
}}


viewport={{
    once:false,
    amount:.2
}}


transition={{
    duration:.6,
    ease:"easeOut"
}}


>



<motion.div

className="product-content"


>


{tag && (

<motion.span

className="product-tag"

initial={{
    opacity:0,
    scale:.8
}}

whileInView={{
    opacity:1,
    scale:1
}}

viewport={{
    once:false
}}

transition={{
    duration:.4
}}

>

{tag}

</motion.span>

)}






<motion.h1

initial={{
    opacity:0,
    y:25
}}

whileInView={{
    opacity:1,
    y:0
}}

viewport={{
    once:false
}}

transition={{
    delay:.1
}}

>

{title}

</motion.h1>







<motion.p

className="product-description"


initial={{
    opacity:0,
    y:20
}}

whileInView={{
    opacity:1,
    y:0
}}

viewport={{
    once:false
}}

transition={{
    delay:.2
}}

>

{description}

</motion.p>







{(ctaText || ctaButton) && (

<motion.div

className="product-cta"

initial={{
    opacity:0,
    y:20
}}

whileInView={{
    opacity:1,
    y:0
}}

viewport={{
    once:false
}}

transition={{
    delay:.3
}}

>


<div className="product-cta-text">

<p>
{ctaText}
</p>

</div>



{ctaButton && (

<Button variant="light-sea">

{ctaButton}

</Button>

)}



</motion.div>

)}







<motion.div

className="product-buttons"

initial={{
    opacity:0,
    y:20
}}

whileInView={{
    opacity:1,
    y:0
}}

viewport={{
    once:false
}}

transition={{
    delay:.35
}}

>


{primaryButton && (

<Button variant="mid-green">

{primaryButton}

</Button>

)}





{secondaryButton && (

<Button variant="outline">

{secondaryButton}

</Button>

)}



</motion.div>



</motion.div>









{image && (

<motion.div

className="product-container-image"


initial={{
    opacity:0,
    scale:.9
}}


whileInView={{
    opacity:1,
    scale:1
}}


viewport={{
    once:false,
    amount:.2
}}


transition={{
    duration:.7,
    delay:.2
}}


>


<img

src={image}

alt={title}

/>


</motion.div>

)}








{(bottomTitle || bottomText || bottomButton) && (


<motion.div

className="product-bottom"


initial={{
    opacity:0,
    y:30
}}

whileInView={{
    opacity:1,
    y:0
}}

viewport={{
    once:false
}}

transition={{
    delay:.25
}}

>



<div className="product-bottom-content">


{bottomTitle && (

<h3>

{bottomTitle}

</h3>

)}





{bottomText && (

<p>

{bottomText}

</p>

)}


</div>





{bottomButton && (

<Button variant="sea-green">

{bottomButton}

</Button>

)}



</motion.div>


)}



</motion.div>

);

}


export default ProductContainer;