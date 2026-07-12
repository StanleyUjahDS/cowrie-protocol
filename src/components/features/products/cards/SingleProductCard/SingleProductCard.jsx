import "./SingleProductCard.css";

import { motion } from "framer-motion";

import Button from "../../../../common/ui/Button/Button";


function SingleProductCard({

    title,

    description,

    image,

    buttonText,

}) {


return (

<motion.div


className="single-product-card"


initial={{

    opacity:0,

    y:40

}}


whileInView={{


    opacity:1,

    y:0


}}


viewport={{


    once:false,

    amount:.25


}}


transition={{


    duration:.6,

    ease:"easeOut"


}}



>


{image && (

<motion.div

className="single-product-image"


initial={{

    opacity:0,

    scale:.9

}}


whileInView={{


    opacity:1,

    scale:1


}}


viewport={{


    once:false,

    amount:.25


}}


transition={{


    duration:.5


}}


>


<img

src={image}

alt={title}

/>


</motion.div>

)}







<h2>

{title}

</h2>






<p>

{description}

</p>







{buttonText && (


<Button variant="mid-green">

{buttonText}

</Button>


)}



</motion.div>

);


}


export default SingleProductCard;