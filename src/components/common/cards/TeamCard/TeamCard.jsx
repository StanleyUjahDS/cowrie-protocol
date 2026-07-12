import "./TeamCard.css";

import { motion } from "framer-motion";

import { SiX } from "react-icons/si";

import {
cardItem
} from "../../../../animations/variants";



function TeamCard({

image,

name,

role,

expertise,

bio,

twitter

}){


return(


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



<div className="team-avatar-wrapper">


<div className="team-avatar">


<img

src={image}

alt={name}

/>


</div>


</div>





<div className="team-info">


<h3>
{name}
</h3>



<p className="team-role">

{role}

</p>




{
expertise &&

<p className="team-expertise">

{expertise}

</p>

}




{
bio &&

<p className="team-bio">

{bio}

</p>

}




{
twitter &&

<a

href={twitter}

target="_blank"

rel="noopener noreferrer"

className="team-x-link"

>

<SiX/>

</a>

}


</div>



</motion.article>


);


}


export default TeamCard;