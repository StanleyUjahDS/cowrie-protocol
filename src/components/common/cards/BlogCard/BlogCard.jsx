import "./BlogCard.css";

import { motion } from "framer-motion";

import { cardItem } from "../../../../animations/variants";



function BlogCard({

    image,

    title,

    description,

}) {


return (

<motion.div

className="blog-card"

variants={cardItem}

initial="hidden"

whileInView="visible"

viewport={{

    once:true,

    amount:.2

}}

>


{image && (

<div className="blog-image">


<img

src={image}

alt={title}

/>


</div>

)}





<div className="blog-content">


<h3>

{title}

</h3>




<p>

{description}

</p>



</div>



</motion.div>

);

}


export default BlogCard;