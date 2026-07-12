import "./CoreTeamCard.css";


import { motion } from "framer-motion";


import {
    SiX,
    SiGithub
} from "react-icons/si";


import {
    FaLinkedin
} from "react-icons/fa";


import {
    cardItem
} from "../../../../animations/variants";



function CoreTeamCard({

    image,

    name,

    role,

    expertise,

    bio,

    twitter,

    linkedin,

    github

}) {


return (


<motion.article


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

alt={`${name} profile`}

/>


</div>






<div className="core-team-content">



<h3>

{name}

</h3>






<span className="core-team-role">

{role}

</span>







{
expertise && (

<p className="core-team-expertise">

{expertise}

</p>

)

}







{
bio && (

<p className="core-team-bio">

{bio}

</p>

)

}







<div className="core-team-socials">



{
twitter && (

<a

href={twitter}

target="_blank"

rel="noopener noreferrer"

className="core-team-social"

>

<SiX />

</a>

)

}






{
linkedin && (

<a

href={linkedin}

target="_blank"

rel="noopener noreferrer"

className="core-team-social"

>

<FaLinkedin />

</a>

)

}







{
github && (

<a

href={github}

target="_blank"

rel="noopener noreferrer"

className="core-team-social"

>

<SiGithub />

</a>

)

}




</div>







</div>





</motion.article>


);


}


export default CoreTeamCard;