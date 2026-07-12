import "./AboutCard.css";

import { motion } from "framer-motion";

import Button from "../../ui/Button/Button";

import { cardItem } from "../../../../animations/variants";



function AboutCard({

    title,

    description,

    buttonText,

    image,

    variant="default"

}) {


return (

<motion.div

className={`about-card ${variant}`}

variants={cardItem}

initial="hidden"

whileInView="visible"

viewport={{

    once:true,

    amount:.2

}}

>


<div className="about-content">


<div className="about-text">


<h3>

{title}

</h3>



<p>

{description}

</p>




{buttonText && (

<div className="about-buttons">


<Button variant="mid-green">

{buttonText}

</Button>


</div>

)}


</div>





{image && (

<motion.div

className="about-image"

>

<img

src={image}

alt={title}

/>

</motion.div>

)}



</div>


</motion.div>

);

}


export default AboutCard;