import "./TeamCard.css";

import { motion } from "framer-motion";

import { SiX } from "react-icons/si";

import { cardItem } from "../../../../animations/variants";


function TeamCard({ image, name, role, twitter }) {


return (

<motion.article

className="team-card"

variants={cardItem}

initial="hidden"

whileInView="visible"

viewport={{
    once:true,
    amount:.2
}}

>


<motion.div

className="team-avatar-wrapper"

initial={{
    scale:0,
    opacity:0
}}

whileInView={{
    scale:1,
    opacity:1
}}

transition={{
    duration:.5,
    delay:.2
}}

viewport={{
    once:true
}}

>


<div className="team-avatar">


<img
src={image}
alt={name}
/>


</div>


</motion.div>





<div className="team-info">


<h3>
{name}
</h3>


<p className="team-role">
{role}
</p>



{
twitter && (

<a

href={twitter}

target="_blank"

rel="noopener noreferrer"

className="team-x-link"

>

<SiX />

</a>

)

}



</div>



</motion.article>

);

}


export default TeamCard;