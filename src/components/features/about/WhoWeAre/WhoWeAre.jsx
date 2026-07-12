import "./WhoWeAre.css";


import { motion } from "framer-motion";


import {
    Globe,
    Layers,
    Users,
    ShieldCheck
} from "lucide-react";


import {
    fadeUp,
    staggerContainer
} from "../../../../animations/variants";



function WhoWeAre(){


const identity = [


    {
        icon: Globe,

        title:"Decentralized Ecosystem",

        description:
        "Cowrie connects blockchain technology, digital ownership and decentralized applications into one unified ecosystem."

    },


    {
        icon: Layers,

        title:"Infrastructure Layer",

        description:
        "Building the foundation that enables users, developers and communities to participate in the decentralized economy."

    },


    {
        icon: Users,

        title:"Community Driven",

        description:
        "A protocol designed around participation, contribution and shared value creation."

    },


    {
        icon: ShieldCheck,

        title:"Ownership Focused",

        description:
        "Empowering users with transparent systems where control and ownership remain in their hands."

    }


];



return (


<section className="who-we-are">



<motion.div


className="who-we-are-content"


variants={fadeUp}


initial="hidden"


whileInView="visible"


viewport={{

    once:false,

    amount:.2

}}


>


<span className="who-label">

Who We Are

</span>



<h2>

Building The Next Generation Of Digital Ownership

</h2>



<p>

Cowrie Protocol is a decentralized ecosystem focused on
real-world asset tokenization, DeFi innovation, education
and community-powered growth.

</p>


<p>

We combine blockchain infrastructure with accessible tools
to help individuals, developers and organizations participate
in the future of finance.

</p>



</motion.div>







<motion.div


className="who-we-are-grid"


variants={staggerContainer}


initial="hidden"


whileInView="visible"


viewport={{

    once:false,

    amount:.2

}}


>


{

identity.map((item)=>(


<motion.div


className="who-card"


variants={fadeUp}


key={item.title}


>


<div className="who-icon">

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


export default WhoWeAre;