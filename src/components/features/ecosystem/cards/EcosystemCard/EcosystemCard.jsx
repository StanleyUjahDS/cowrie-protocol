import "./EcosystemCard.css";

import { motion } from "framer-motion";

import Button from "../../../../common/ui/Button/Button";



const containerVariants = {

    hidden:{
        opacity:0
    },

    visible:{
        opacity:1,

        transition:{
            staggerChildren:.15,
            delayChildren:.1
        }
    }

};



const itemVariants = {

    hidden:{

        opacity:0,

        y:40,

        filter:"blur(8px)"

    },


    visible:{

        opacity:1,

        y:0,

        filter:"blur(0px)",

        transition:{
            duration:.7,
            ease:[0.22,1,0.36,1]
        }

    }

};





const imageVariants = {


hidden:{

    opacity:0,

    scale:.9,

    y:50,

    rotateX:10

},


visible:{


    opacity:1,

    scale:1,

    y:0,

    rotateX:0,


    transition:{

        duration:1,

        ease:[0.16,1,0.3,1]

    }

}


};





function EcosystemCard({

    title,

    description,

    button,

    image,

}) {


return (


<motion.div


className="ecosystem-card"


variants={containerVariants}


initial="hidden"


whileInView="visible"


viewport={{

    once:true,

    amount:.25

}}



>


<motion.div


className="ecosystem-content"


>


<motion.h2

variants={itemVariants}

>

{title}

</motion.h2>






<motion.p

variants={itemVariants}

>

{description}

</motion.p>








{
button && (


<motion.div

className="ecosystem-button"

variants={itemVariants}

>


<Button variant="mid-green">

{button}

</Button>


</motion.div>


)

}









{
image && (


<motion.div


className="ecosystem-image"


variants={imageVariants}


whileHover={{

    y:-10,

    scale:1.03

}}



>


<img

src={image}

alt={title || "Cowrie ecosystem"}

/>


</motion.div>


)

}




</motion.div>




</motion.div>


);


}


export default EcosystemCard;