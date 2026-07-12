import "./Vision.css";


import { motion } from "framer-motion";


import {
    Building2,
    Sparkles,
    Network,
    Landmark
} from "lucide-react";


import {
    fadeUp,
    staggerContainer
} from "../../../animations/variants";



function Vision(){



const visionItems = [


    {

        icon:Building2,

        title:"Open Financial Systems",

        description:
        "A future where financial infrastructure is accessible, transparent and built for everyone."

    },


    {

        icon:Network,

        title:"Connected Ecosystem",

        description:
        "A global network of users, developers and organizations creating value together."

    },


    {

        icon:Landmark,

        title:"Real World Integration",

        description:
        "Bringing traditional assets and decentralized technology together through innovation."

    },


    {

        icon:Sparkles,

        title:"Sustainable Growth",

        description:
        "Creating long-term opportunities through ownership, participation and collaboration."

    }


];



return (


<section className="vision">



<motion.div


className="vision-panel"


variants={fadeUp}


initial="hidden"


whileInView="visible"


viewport={{

    once:false,

    amount:.2

}}


>


<span className="vision-label">

Our Vision

</span>



<h2>

Creating A More Open, Connected And Inclusive Digital Economy

</h2>



<p>

Cowrie envisions a world where blockchain technology
becomes accessible to everyone, enabling communities
to own, build and participate in the future economy.

</p>



<div className="vision-highlight">


Decentralized.
Transparent.
Community Powered.


</div>



</motion.div>







<motion.div


className="vision-grid"


variants={staggerContainer}


initial="hidden"


whileInView="visible"


viewport={{

    once:false,

    amount:.2

}}



>


{

visionItems.map((item)=>(


<motion.div


className="vision-card"


variants={fadeUp}


key={item.title}


>


<div className="vision-icon">


<item.icon />


</div>



<h3>

{item.title}

</h3>



<p>

{item.description}

</p>



</motion.div>


))


}


</motion.div>




</section>


);


}



export default Vision;