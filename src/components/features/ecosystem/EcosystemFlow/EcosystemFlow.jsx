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

                        icon="🦸‍♂️"

                        title="Griot"

                        description="
                        Griot empowers HBadgers (community members) to connect, engage, and earn 
                        through a privacy-first decentralized social experience.

                        "

                        features={[

                            "Anonymous communicatio",

                            "Revenue Sharing",

                            "Peer-to-peer engagement"

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
                        The Cowrie DApp enables users to invest in tokenized real-world 
                        assets(RWA), unlocking global opportunities through secure and 
                        transparent blockchain technology.

                        "

                        features={[

                            "Borderless investing",

                            "Digital assets",

                            "Yield Farming"

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
                       Blockchain Technology

                    </span>


                    <span>
                        Web3 Education

                    </span>


                    <span>
                        Revenue Sharing
                    </span>


                    <span>
                        Digital Ownership
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