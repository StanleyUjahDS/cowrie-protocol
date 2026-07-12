import "./SimpleCard.css";

import { motion } from "framer-motion";

import { cardItem } from "../../../../animations/variants";


function SimpleCard({

  title,

  description,

  icon: Icon,

  variant = "default",

}) {


return (

<motion.div

className={`simple-card ${variant}`}

variants={cardItem}

initial="hidden"

whileInView="visible"

viewport={{

    once:true,

    amount:.2

}}

>


{Icon && (

<div className="card-icon">

<Icon size={20} />

</div>

)}



<div className="card-content">


<h3>

{title}

</h3>



<p>

{description}

</p>



</div>



</motion.div>

);

}


export default SimpleCard;