import "./Timeline.css";


import { motion } from "framer-motion";


import {
    Rocket,
    Code2,
    Globe2,
    Layers
} from "lucide-react";


import SectionTitle from "../../../common/ui/SectionTitle/SectionTitle";


import {
    fadeUp,
    staggerContainer
} from "../../../../animations/variants";



function Timeline(){



const milestones = [


    {

        icon:Rocket,

        year:"2024",

        title:"Foundation",

        description:
        "Cowrie Protocol concept was established with a vision to build an inclusive decentralized ecosystem."

    },


    {

        icon:Code2,

        year:"2025",

        title:"Infrastructure Development",

        description:
        "Development of core applications, blockchain infrastructure and ecosystem foundations."

    },


    {

        icon:Layers,

        year:"2026",

        title:"Ecosystem Expansion",

        description:
        "Launching products, developer tools and decentralized services for global adoption."

    },


    {

        icon:Globe2,

        year:"Future",

        title:"Global Decentralized Economy",

        description:
        "Growing a worldwide community of users, builders and contributors powering the Cowrie ecosystem."

    }


];



return (


<section className="timeline">



<SectionTitle


title="Our Journey"


description="
The milestones shaping the evolution of Cowrie Protocol.
"


align="center"


/>







<motion.div


className="timeline-container"


variants={staggerContainer}


initial="hidden"


whileInView="visible"


viewport={{

    once:false,

    amount:.2

}}


>


<div className="timeline-line"></div>



{

milestones.map((item,index)=>(


<motion.div


className={`timeline-item ${
index % 2 === 0 ? "left" : "right"
}`}


variants={fadeUp}


key={item.title}


>



<div className="timeline-dot">


<item.icon />


</div>





<div className="timeline-card">



<span>

{item.year}

</span>



<h3>

{item.title}

</h3>



<p>

{item.description}

</p>



</div>



</motion.div>


))


}



</motion.div>



</section>


);


}



export default Timeline;