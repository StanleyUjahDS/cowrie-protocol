import "./EcosystemFlow.css";

import { motion } from "framer-motion";

import EcosystemProductCard from "./EcosystemProductCard/EcosystemProductCard";

import SectionTitle from "../../../common/ui/SectionTitle/SectionTitle";

import {
    fadeUp,
    staggerContainer
} from "../../../../animations/variants";


function EcosystemFlow() {


    return (

        <section className="ecosystem-flow">



            <SectionTitle

                title="How The Cowrie Ecosystem Works"

                description="
                Cowrie connects applications, users and
                blockchain infrastructure into one unified ecosystem.
                "

                align="center"

            />






            <motion.div

                className="ecosystem-product-grid"

                variants={staggerContainer}

                initial="hidden"

                whileInView="visible"

                viewport={{

                    once:false,

                    amount:.2

                }}

            >



                <motion.div variants={fadeUp}>

                    <EcosystemProductCard

                        icon="💳"

                        title="Cowrie Wallet"

                        description="
                        A secure gateway for digital ownership,
                        asset management and blockchain interaction.
                        "

                        features={[

                            "Self-custody wallet",

                            "Digital asset management",

                            "Secure transactions"

                        ]}

                    />

                </motion.div>






                <motion.div variants={fadeUp}>

                    <EcosystemProductCard

                        icon="📚"

                        title="Builders Oasis"

                        description="
                        An educational ecosystem helping builders,
                        developers and creators grow.
                        "

                        features={[

                            "Learning platform",

                            "Developer education",

                            "Community growth"

                        ]}

                    />

                </motion.div>






                <motion.div variants={fadeUp}>

                    <EcosystemProductCard

                        icon="🌐"

                        title="Cowrie DApp"

                        description="
                        Decentralized applications powered by
                        Cowrie blockchain infrastructure.
                        "

                        features={[

                            "Smart contracts",

                            "Digital assets",

                            "On-chain services"

                        ]}

                    />

                </motion.div>



            </motion.div>








            <motion.div

                className="infrastructure-box"

                variants={fadeUp}

                initial="hidden"

                whileInView="visible"

                viewport={{

                    once:false,

                    amount:.2

                }}

            >


                <h3>
                    Cowrie Infrastructure
                </h3>



                <div className="infra-items">


                    <span>
                        Blockchain
                    </span>


                    <span>
                        Smart Contracts
                    </span>


                    <span>
                        Identity
                    </span>


                    <span>
                        APIs
                    </span>


                </div>


            </motion.div>








            <motion.div

                className="ecosystem-result"

                variants={fadeUp}

                initial="hidden"

                whileInView="visible"

                viewport={{

                    once:false,

                    amount:.2

                }}

            >


                <h3>
                    A Connected Digital Economy
                </h3>


                <p>
                    Bringing ownership, education and
                    decentralized applications together.
                </p>


            </motion.div>





        </section>

    );

}


export default EcosystemFlow;