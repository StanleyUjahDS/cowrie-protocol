import { Swiper, SwiperSlide } from "swiper/react";

import {
    Navigation,
    Pagination,
    Autoplay
} from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import "./EcosystemOverview.css";



import rwaImage from "../../../assets/images/rwa-image.png";
import revenueImage from "../../../assets/images/share-image.png";
import yieldImage from "../../../assets/images/yield-image.png";
import web3Image from "../../../assets/images/hbadgerLogo.png";

const slides = [

    {
        label: "Real World Assets",

        title: "RWA Tokenization",

        description:
        "Bridging traditional assets with blockchain technology by creating transparent, accessible and efficient digital ownership opportunities.",

        image: rwaImage

    },


    {
        label: "Community Economy",

        title: "Revenue Sharing",

        description:
        "More than ownership. Participate in the value you help create through a community-driven ecosystem designed to reward contribution and participation.",

        image: revenueImage

    },


    {
        label: "DeFi Growth",

        title: "Yield Farming",

        description:
        "Your idle capital becomes active growth, generating sustainable rewards through decentralized finance opportunities within the Cowrie ecosystem.",

        image: yieldImage

    },


    {
        label: "Education & Adoption",

        title: "Web3 Sensitization",

        description:
        "Turning curiosity into competence, one resilient badger at a time by educating communities and empowering users to confidently participate in the decentralized future.",

        image: web3Image

    }

];






function EcosystemOverview(){


    return (

        <section className="ecosystem-overview">


            <Swiper


                modules={[

                    Navigation,

                    Pagination,

                    Autoplay

                ]}



                spaceBetween={30}


                slidesPerView={1.15}


                centeredSlides={true}



                navigation={true}



                pagination={{

                    clickable:true

                }}



                autoplay={{


                    delay:3500,


                    disableOnInteraction:false


                }}



                speed={800}



                loop={true}



                breakpoints={{



                    640:{


                        slidesPerView:1.5


                    },



                    1024:{


                        slidesPerView:3


                    }


                }}


            >





                {

                    slides.map((slide,index)=>(



                        <SwiperSlide key={index}>


                            <article className="ecosystem-overview-card">





                                <div className="ecosystem-overview-content">



                                    <span className="overview-label">


                                        {slide.label}


                                    </span>





                                    <h2>


                                        {slide.title}


                                    </h2>





                                    <p>


                                        {slide.description}


                                    </p>




                                </div>







                                <div className="ecosystem-overview-image">



                                    <img

                                        src={slide.image}

                                        alt={slide.title}

                                        loading="lazy"

                                    />



                                </div>





                            </article>


                        </SwiperSlide>


                    ))

                }





            </Swiper>



        </section>

    );


}



export default EcosystemOverview;