import "./EcosystemCard.css";

import { motion } from "framer-motion";

import Button from "../../../../common/ui/Button/Button";


function EcosystemCard({

    title,

    description,

    button,

    image,

}) {


return (

<motion.div

className="ecosystem-card"


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

    amount:.25

}}


transition={{

    duration:.6,

    ease:"easeOut"

}}


>


<div className="ecosystem-content">


<h2>

{title}

</h2>





<p>

{description}

</p>







{button && (

<div className="ecosystem-button">


<Button variant="mid-green">

{button}

</Button>


</div>

)}








{image && (

<motion.div

className="ecosystem-image"


initial={{

    opacity:0,

    scale:.95

}}


whileInView={{

    opacity:1,

    scale:1

}}


viewport={{

    once:false,

    amount:.25

}}


transition={{

    duration:.5,

    delay:.15

}}


>


<img

src={image}

alt={title || "Cowrie ecosystem"}

/>


</motion.div>

)}



</div>


</motion.div>


);

}


export default EcosystemCard;