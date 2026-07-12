import "./NotABank.css";

import { motion } from "framer-motion";

import {
    fadeUp,
    staggerContainer
} from "../../../../animations/variants";

import SectionTitle from "../../../common/ui/SectionTitle/SectionTitle";


function NotABank() {


const points = [

    {
        title:"Decentralized Ownership",

        text:
        "Your assets remain under your control. Cowrie removes unnecessary intermediaries and puts ownership back in your hands."
    },


    {
        title:"Global Access",

        text:
        "Connect with a borderless ecosystem designed for users, builders and communities everywhere."
    },


    {
        title:"Community Driven",

        text:
        "Cowrie shares ecosystem value with its community through transparent and decentralized incentives."
    }

];



return (


<section className="not-bank-section">



<SectionTitle

title="Cowrie Is Not A Bank"

description="
A new financial ecosystem built around ownership,
transparency and decentralized participation.
"

align="center"

/>







<motion.div


className="not-bank-container"


variants={staggerContainer}


initial="hidden"


whileInView="visible"


viewport={{

once:false,

amount:.2

}}



>




<motion.div

className="not-bank-left"

variants={staggerContainer}

>



{

points.map((item)=>(


<motion.article


key={item.title}


className="not-bank-item"


variants={fadeUp}


>


<h3>

{item.title}

</h3>



<p>

{item.text}

</p>


</motion.article>


))


}



</motion.div>









<motion.div


className="not-bank-right"


variants={fadeUp}


>



<div className="not-bank-card">


<span>
DECENTRALIZED FINANCE
</span>



<h3>

Beyond Traditional Banking

</h3>



<p>

Cowrie provides infrastructure where
people can own assets, participate in
communities and build the future of finance.

</p>





<div className="not-bank-stats">


<div>

<strong>
40%
</strong>

<p>
Community Rewards
</p>

</div>



<div>

<strong>
100%
</strong>

<p>
User Ownership
</p>

</div>


</div>




</div>


</motion.div>







</motion.div>



</section>


);


}


export default NotABank;