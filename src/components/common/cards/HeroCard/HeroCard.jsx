import "./HeroCard.css";

import { motion } from "framer-motion";

import Button from "../../ui/Button/Button";

import {
    heroContainer,
    heroItem,
    heroImage
} from "../../../../animations/variants";



function HeroCard({

    title,

    description,

    primaryButton,

    secondaryButton,

    image

}) {


return (

<motion.div

className="hero-card"

variants={heroContainer}

initial="hidden"

animate="visible"

>


<motion.div

className="hero-content"

>


<motion.h1

variants={heroItem}

>

{title}

</motion.h1>





<motion.p

variants={heroItem}

>

{description}

</motion.p>







<motion.div

className="hero-buttons"

variants={heroItem}

>


{primaryButton && (

<Button variant="mid-green">

{primaryButton}

</Button>

)}




{secondaryButton && (

<Button variant="light-sea">

{secondaryButton}

</Button>

)}



</motion.div>








{image && (

<motion.div

className="hero-image"

variants={heroImage}

>


<img

src={image}

alt="Cowrie Protocol"

/>


</motion.div>

)}




</motion.div>


</motion.div>

);

}


export default HeroCard;