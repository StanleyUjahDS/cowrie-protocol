import "./Hero.css";

import HeroCard from "../../../common/cards/HeroCard/HeroCard";
import heroImage from "../../../../assets/images/3.png";

import { motion } from "framer-motion";

import { heroContainer } from "../../../../animations/variants";


function Hero(){


    return (

        <section className="hero">


            <motion.div

                className="hero-wrapper"

                variants={heroContainer}

                initial="hidden"

                animate="visible"

            >


                <HeroCard


                    title={
                        <>
                        Your Guide To The Decentralized Economy.
                        </>
                    }


                    description="
                    An ancient symbol of value, rebuilt for the decentralized age.
                    "



                    primaryButton="Launch App"



                    secondaryButton="Read Docs"



                    image={heroImage}


                />


            </motion.div>


        </section>

    );

}


export default Hero;