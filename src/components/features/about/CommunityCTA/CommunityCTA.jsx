import "./CommunityCTA.css";


import {
    ArrowRight,
    Users,
    Globe
} from "lucide-react";


import { motion } from "framer-motion";



function CommunityCTA(){


return(


<section className="community-cta">



<motion.div


className="community-cta-card"


initial={{

    opacity:0,

    y:40

}}


whileInView={{

    opacity:1,

    y:0

}}


transition={{

    duration:.6

}}


viewport={{

    once:true

}}



>





<div className="community-cta-content">



<div className="community-cta-icon">


<Users />


</div>






<h2>

Build The Future With Cowrie

</h2>





<p>

Join developers, creators and community members
working together to shape a more open and
inclusive decentralized ecosystem.

</p>






<div className="community-cta-actions">


<a href="#community">


Join Community

<ArrowRight />

</a>





<a href="#ecosystem">


Explore Ecosystem

<Globe />

</a>



</div>





</div>




</motion.div>



</section>


);


}


export default CommunityCTA;