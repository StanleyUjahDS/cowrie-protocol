import "./SectionTitle.css";

import { motion } from "framer-motion";

import { fadeUp } from "../../../../animations/variants";


function SectionTitle({

    title,

    description,

    align="center"

}) {


return (

<motion.div

className={`section-title section-title-${align}`}

variants={fadeUp}

initial="hidden"

whileInView="visible"

viewport={{

    once:true,

    amount:.3

}}

>


<h2>

{title}

</h2>



{description && (

<p>

{description}

</p>

)}



</motion.div>

);


}


export default SectionTitle;