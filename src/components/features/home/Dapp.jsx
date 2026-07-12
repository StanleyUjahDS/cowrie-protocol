import "./Dapp.css";

import ProductContainer from "../products/cards/ProductContainer/ProductContainer";

import { motion } from "framer-motion";

import { fadeUp } from "../../../animations/variants";


function Dapp() {


const dappImage = new URL(

    "../../../assets/images/dashboard.png",

    import.meta.url

).href;



return (


<section className="dapp">


<motion.div

className="dapp-wrapper"

variants={fadeUp}

initial="hidden"

whileInView="visible"

viewport={{

    once:true,

    amount:.2

}}

>


<ProductContainer



tag="Cowrie DApp"



title="Real Asset Gateway"



description="
Step into a simple onchain gateway for discovering tokenized real-world assets, viewing key asset details, and accessing real value through a seamless dApp experience.
"



image={dappImage}



primaryButton="Launch App"



secondaryButton="Documentation"





bottomTitle="Explore Assets"



bottomText="
Browse available RWAs and start participating in onchain ownership.
"



bottomButton="Explore DApp"



/>


</motion.div>


</section>


);


}


export default Dapp;