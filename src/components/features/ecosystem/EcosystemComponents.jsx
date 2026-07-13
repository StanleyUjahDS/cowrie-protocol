import "./EcosystemComponents.css";

import { motion } from "framer-motion";

import {
    Globe,
    Layers,
    BookOpen,
    Users
} from "lucide-react";


import SimpleCard from "../../common/cards/SimpleCard/SimpleCard";

import SectionTitle from "../../common/ui/SectionTitle/SectionTitle";

import {
    fadeUp,
    staggerContainer
} from "../../../animations/variants";



function EcosystemComponents(){


const components = [

    {
        title:"Decentralized Infrastructure",

        description:
        "Unlock secure, transparent, and accessible financial opportunities without barriers.",

        icon:Layers
    },


    {
        title:"Global Network",

        description:
        "Worldwide decentralized connectivity for users and communities.",

        icon:Globe
    },


    {
        title:"Developer Hub",

        description:
        "Empowering developers with resources to build for their community and the ecosystem.",

        icon:BookOpen
    },


    {
        title:"Community",

        description:
        "Education, governance and collaboration across the ecosystem.",

        icon:Users
    }

];



return (


<section className="ecosystem-components">



<SectionTitle

title="Ecosystem Components"

description="
The building blocks connecting users, developers
and decentralized applications.
"

align="center"

/>






<motion.div


className="ecosystem-components-grid"


variants={staggerContainer}


initial="hidden"


whileInView="visible"


viewport={{

once:false,

amount:.2

}}



>


{


components.map((item)=>(


<motion.div


key={item.title}


variants={fadeUp}


>


<SimpleCard

title={item.title}

description={item.description}

icon={item.icon}

/>


</motion.div>


))


}



</motion.div>






</section>


);


}


export default EcosystemComponents;