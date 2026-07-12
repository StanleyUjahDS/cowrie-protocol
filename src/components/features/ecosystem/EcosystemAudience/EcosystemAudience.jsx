import "./EcosystemAudience.css";

import { motion } from "framer-motion";

import SectionTitle from "../../../common/ui/SectionTitle/SectionTitle";

import { ecosystemAudience } from "../../../../data/ecosystemData";

function EcosystemAudience(){


return (


<section className="ecosystem-audience">



<SectionTitle

title="Who The Ecosystem Is For"

description="
Cowrie brings together builders, creators,
communities and organizations through shared infrastructure.
"

align="center"

/>





<div className="ecosystem-audience-grid">


{

ecosystemAudience.map((item,index)=>(


<motion.article


key={item.title}


className="ecosystem-audience-card"



initial={{

opacity:0,

y:40

}}



whileInView={{


opacity:1,

y:0


}}



viewport={{


once:false,

amount:.2


}}



transition={{


duration:.5,

delay:index * .1


}}



>


<h3>

{item.title}

</h3>




<p>

{item.description}

</p>



</motion.article>


))


}


</div>



</section>


);


}


export default EcosystemAudience;