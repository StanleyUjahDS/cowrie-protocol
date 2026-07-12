import "./ContributorCard.css";


import { motion } from "framer-motion";


import {
    cardItem
} from "../../../../animations/variants";



function ContributorCard({

icon:Icon,

name,

description

}){


return(


<motion.article


className="contributor-card"


variants={cardItem}


initial="hidden"


whileInView="visible"


viewport={{

once:true,

amount:.2

}}



>



<div className="contributor-icon">


<Icon />


</div>






<h3>

{name}

</h3>





<p>

{description}

</p>




</motion.article>


);


}


export default ContributorCard;