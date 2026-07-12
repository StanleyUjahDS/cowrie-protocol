import "./EcosystemBenefits.css";


import {motion} from "framer-motion";


import SectionTitle from "../../../common/ui/SectionTitle/SectionTitle";


import {
    ecosystemBenefits
} from "../../../../data/ecosystemData";


import {
    fadeUp,
    staggerContainer
} from "../../../../animations/variants";




function EcosystemBenefits(){


return (


<section className="ecosystem-benefits">



<SectionTitle


title="Why Join The Cowrie Ecosystem"


description="
Built to connect people, applications and digital ownership
in one unified ecosystem.
"


align="center"


/>







<motion.div


className="ecosystem-benefits-grid"


variants={staggerContainer}


initial="hidden"


whileInView="visible"


exit="exit"


viewport={{

amount:.2

}}



>



{


ecosystemBenefits.map((benefit)=>(


<motion.article


key={benefit.title}


className="ecosystem-benefit-card"


variants={fadeUp}



>



<h3>

{benefit.title}

</h3>



<p>

{benefit.description}

</p>



</motion.article>


))


}



</motion.div>




</section>


);


}


export default EcosystemBenefits;