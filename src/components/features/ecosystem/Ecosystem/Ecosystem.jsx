import "./Ecosystem.css";

import { motion } from "framer-motion";

import ProductContainer from "../../products/cards/ProductContainer/ProductContainer";


function Ecosystem() {


const img1 = new URL(

    "../../../../assets/images/dashboard.png",

    import.meta.url

).href;



return (


<motion.section


className="ecosystem"


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

    amount:.2

}}


transition={{

    duration:.6,

    ease:"easeOut"

}}



>



<ProductContainer


tag="RWA Protocol"


title="Real Asset Gateway and DeFi Yield Vaults"



description="
Step into a simple onchain gateway for discovering
tokenized real-world assets and accessing DeFi yield generation.
"



image={img1}



primaryButton="Launch"


secondaryButton="Docs"



bottomTitle="Build With Cowrie Vault"



bottomText="
Access tokenized real-world assets through secure
infrastructure designed for developers, institutions,
and decentralized applications.
"



bottomButton="Explore Ecosystem"



/>



</motion.section>


);


}


export default Ecosystem;