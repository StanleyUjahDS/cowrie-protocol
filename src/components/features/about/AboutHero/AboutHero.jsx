import "./AboutHero.css";


import { motion } from "framer-motion";


import SectionTitle from "../../../common/ui/SectionTitle/SectionTitle";


import {
    fadeUp
} from "../../../../animations/variants";



function AboutHero(){


return (


<section className="about-hero">



<motion.div


className="about-hero-content"


variants={fadeUp}


initial="hidden"


whileInView="visible"


viewport={{

    once:false,

    amount:.2

}}



>


<SectionTitle


title="About Cowrie Protocol"


description="
Building an open and inclusive decentralized ecosystem
where ownership, innovation and opportunity are accessible
to everyone.
"


align="center"


/>



<div className="about-hero-highlight">


<span>
Decentralized Finance
</span>


<span>
Real World Assets
</span>


<span>
Community Ownership
</span>


<span>
Web3 Education
</span>


</div>



</motion.div>




</section>


);


}



export default AboutHero;