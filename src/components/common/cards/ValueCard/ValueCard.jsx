import "./ValueCard.css";

import { motion } from "framer-motion";

import { cardItem } from "../../../../animations/variants";


function ValueCard({

    icon: Icon,

    title,

    description,

    variant="default"

}) {


return (

<motion.article

className={`value-card ${variant}`}

variants={cardItem}

initial="hidden"

whileInView="visible"

viewport={{

    once:true,

    amount:.2

}}

>



{Icon && (

<div className="value-icon">

<Icon size={26}/>

</div>

)}





<div className="value-content">


<h3>

{title}

</h3>



<p>

{description}

</p>



</div>



</motion.article>

);


}


export default ValueCard;