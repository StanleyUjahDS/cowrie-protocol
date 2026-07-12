import "./AdvisorCard.css";


import {
    FaLinkedin
} from "react-icons/fa";



function AdvisorCard({

image,

name,

role,

expertise,

bio,

linkedin

}){


return(


<article className="advisor-card">


<div className="advisor-image">


<img

src={image}

alt={name}

/>


</div>





<h3>

{name}

</h3>





<span className="advisor-role">

{role}

</span>






<p className="advisor-expertise">

{expertise}

</p>







<p className="advisor-bio">

{bio}

</p>







{
linkedin &&

<a

href={linkedin}

target="_blank"

rel="noopener noreferrer"

className="advisor-link"

>

<FaLinkedin />

</a>

}




</article>


);


}


export default AdvisorCard;