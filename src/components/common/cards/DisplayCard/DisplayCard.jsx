import "./DisplayCard.css";

import { motion } from "framer-motion";

import { cardItem } from "../../../../animations/variants";



function DisplayCard({

    image,

    title,

    subtitle,

    description,

    variant="default"

}) {


return (

<motion.div

className={`display-card ${variant}`}

variants={cardItem}

initial="hidden"

whileInView="visible"

viewport={{

    once:true,

    amount:.2

}}

>


{image && (

<div className="display-card-image">

<img

src={image}

alt={title}

/>

</div>

)}





<div className="display-card-content">


<h3 className="display-title">

{title}

</h3>





{subtitle && (

<h4 className="display-subtitle">

{subtitle}

</h4>

)}






<p>

{description}

</p>




</div>



</motion.div>

);

}


export default DisplayCard;