import "./Mission.css";


import { motion } from "framer-motion";


import {
    Coins,
    Globe2,
    Rocket
} from "lucide-react";


import {
    fadeUp,
    staggerContainer
} from "../../../animations/variants";



function Mission(){



const missionPoints = [


    {

        icon:Coins,

        title:"Digital Ownership",

        description:
        "Creating tools that allow individuals and communities to participate in the ownership economy."

    },


    {

        icon:Globe2,

        title:"Global Inclusion",

        description:
        "Removing barriers and connecting people worldwide through decentralized technology."

    },


    {

        icon:Rocket,

        title:"Future Innovation",

        description:
        "Building infrastructure that supports the next generation of blockchain applications."

    }


];



return (


<section className="mission">



<motion.div


className="mission-content"


variants={fadeUp}


initial="hidden"


whileInView="visible"


viewport={{

    once:false,

    amount:.2

}}



>


<span className="mission-label">

Our Mission

</span>



<h2>

Empowering Everyone To Participate In The Decentralized Economy

</h2>



<p>

Cowrie Protocol exists to create accessible blockchain
solutions that connect ownership, innovation and opportunity.

</p>



<p>

Our mission is to build an ecosystem where users,
developers and communities can create, contribute and
benefit from decentralized technologies.

</p>


</motion.div>







<motion.div


className="mission-grid"


variants={staggerContainer}


initial="hidden"


whileInView="visible"


viewport={{

    once:false,

    amount:.2

}}


>


{

missionPoints.map((item)=>(


<motion.div


className="mission-card"


variants={fadeUp}


key={item.title}


>


<div className="mission-icon">


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



export default Mission;