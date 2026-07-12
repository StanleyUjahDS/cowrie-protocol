import "./LatestUpdates.css";

import {motion} from "framer-motion";

import RecentCard from "../../../common/cards/RecentCard/RecentCard";

import SectionTitle from "../../../common/ui/SectionTitle/SectionTitle";

import {
    fadeUp,
    staggerContainer
} from "../../../../animations/variants";


import {
    blogData
} from "../../../../data/blogData";



function LatestUpdates(){


return (


<section className="latest-updates">



<SectionTitle

title="Latest Updates"

description="
Stay informed about Cowrie releases,
ecosystem milestones and community news.
"

align="center"

/>





<motion.div


className="latest-updates-grid"


variants={staggerContainer}


initial="hidden"


whileInView="visible"


viewport={{

once:false,

amount:.2

}}



>


{

blogData.map((blog)=>(



<motion.div


key={blog.id}


variants={fadeUp}



>


<RecentCard


image={blog.image}


title={blog.title}


description={blog.excerpt}


button="Read Article"


/>



</motion.div>



))


}



</motion.div>





</section>


);


}


export default LatestUpdates;