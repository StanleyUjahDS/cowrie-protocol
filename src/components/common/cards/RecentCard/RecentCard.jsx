import "./RecentCard.css";

import { motion } from "framer-motion";

import Button from "../../ui/Button/Button";

import { cardItem } from "../../../../animations/variants";


function RecentCard({

  image,

  title,

  description,

  button = "Read More",

  onClick

}) {


return (

<motion.article

className="recent-card"

variants={cardItem}

initial="hidden"

whileInView="visible"

viewport={{

    once:true,

    amount:.2

}}

>


<div className="recent-card-image">

<img

src={image}

alt={title}

/>

</div>




<div className="recent-card-content">


<h3>

{title}

</h3>




<p>

{description}

</p>




<Button

variant="mid-green"

onClick={onClick}

>

{button}

</Button>



</div>



</motion.article>

);

}


export default RecentCard;