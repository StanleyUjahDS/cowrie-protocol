import "./CoreTeamCard.css";

import { motion } from "framer-motion";

import { SiX } from "react-icons/si";

import { cardItem } from "../../../../animations/variants";



function CoreTeamCard({

    image,

    name,

    role,

    expertise,

    bio,

    twitter

}) {


return (

<motion.div

className="core-team-card"

variants={cardItem}

initial="hidden"

whileInView="visible"

viewport={{

    once:true,

    amount:.2

}}

>


<div className="core-team-image">

<img

src={image}

alt={name}

/>

</div>





<div className="core-team-content">


<h3>

{name}

</h3>





<span className="core-team-role">

{role}

</span>






<p className="core-team-expertise">

{expertise}

</p>





<p className="core-team-bio">

{bio}

</p>






{
twitter && (

<div className="core-team-socials">


<a

href={twitter}

target="_blank"

rel="noopener noreferrer"

className="core-team-social"

>


<SiX />


<span>

X

</span>


</a>


</div>

)

}




</div>



</motion.div>

);

}


export default CoreTeamCard;