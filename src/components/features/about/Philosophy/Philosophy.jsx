import "./Philosophy.css";


import { motion } from "framer-motion";


import {
    CircleDollarSign,
    Network,
    Sparkles,
    UsersRound
} from "lucide-react";


import SectionTitle from "../../../common/ui/SectionTitle/SectionTitle";


import {
    fadeUp,
    staggerContainer
} from "../../../../animations/variants";



function Philosophy(){



const principles = [


    {

        icon: CircleDollarSign,

        title:"Accessible Ownership",

        description:
        "Financial opportunities should not be limited by geography, institutions or traditional barriers. Cowrie believes ownership should be open and accessible."

    },


    {

        icon: Network,

        title:"Open Infrastructure",

        description:
        "Building transparent and interoperable systems where developers, communities and organizations can create without unnecessary restrictions."

    },


    {

        icon: Sparkles,

        title:"Innovation Through Technology",

        description:
        "Using blockchain, decentralized finance and real-world asset technology to create meaningful solutions for the future economy."

    },


    {

        icon: UsersRound,

        title:"Community First",

        description:
        "The ecosystem grows through participation, collaboration and shared value creation among every HBadgers (community contributor)."

    }


];




return (


<section className="philosophy">



<SectionTitle


title="Our Philosophy"


description="
The principles that guide Cowrie Protocol and shape
the decentralized future we are building.
"


align="center"


/>






<motion.div


className="philosophy-grid"


variants={staggerContainer}


initial="hidden"


whileInView="visible"


viewport={{

    once:false,

    amount:.2

}}


>


{

principles.map((item)=>(


<motion.div


className="philosophy-card"


variants={fadeUp}


key={item.title}


>


<div className="philosophy-icon">


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



export default Philosophy;