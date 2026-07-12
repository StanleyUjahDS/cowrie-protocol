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



import infrastructureImage from "../../../assets/images/dashboard.png";
import dappImage from "../../../assets/images/dapp-image.png";
import buildersImage from "../../../assets/images/builders_oasis.png";
import globeImage from "../../../assets/images/cowrie-globe.png";





const slides = [

    {
        title:"Open Ecosystem",

        description:
        "A modular ecosystem designed for developers, institutions and communities.",

        image:globeImage

    },


    {
        title:"Composable Infrastructure",

        description:
        "Build applications on top of interoperable blockchain infrastructure.",

        image:infrastructureImage

    },


    {
        title:"Global Access",

        description:
        "Connecting users worldwide through decentralized technologies.",

        image:dappImage

    },


    {
        title:"Developer First",

        description:
        "Powerful SDKs, APIs and documentation for rapid development.",

        image:buildersImage

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

slidesPerView:2

},



1024:{

slidesPerView:3

}



}}



>



{


slides.map((slide,index)=>(



<SwiperSlide key={index}>


<div className="ecosystem-overview-card">



<div className="ecosystem-overview-content">


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

/>


</div>



</div>


</SwiperSlide>


))


}



</Swiper>


</section>

);


}



export default EcosystemOverview;