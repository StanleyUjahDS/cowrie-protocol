import "./EcosystemHero.css";

import { motion } from "framer-motion";

import EcosystemCard from "./cards/EcosystemCard/EcosystemCard";

import ecosystemImage from "../../../assets/images/ecosystem-image.png";

import {
    fadeUp,
    heroImage
} from "../../../animations/variants";



function EcosystemHero(){

    return (

        <section className="ecosystem-hero">


            <motion.div

                variants={fadeUp}

                initial="hidden"

                whileInView="visible"

                viewport={{

                    once:false,

                    amount:.2

                }}

            >


                <EcosystemCard


                    title={
                        <>
                            The Cowrie Ecosystem.
                            <br/>
                            Building a More Inclusive Web3.
                        </>
                    }



                    description="
                    A decentralized ecosystem designed to accelerate Web3 adoption,
                    onboard the next generation of users, and create sustainable
                    revenue-sharing opportunities for everyone.
                    "



                    button="Explore Ecosystem"



                    image={ecosystemImage}


                />


            </motion.div>



        </section>

    );

}


export default EcosystemHero;