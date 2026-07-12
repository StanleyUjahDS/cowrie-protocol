import "./Mission.css";

import AboutCard from "../../common/cards/AboutCard/AboutCard";

import missionImage from "../../../assets/images/hero_image.png";


function Mission(){


return (

<section className="mission">


<AboutCard

variant="mission"

title="Building The Future Of Real-World Finance"

description="
Cowrie Protocol bridges traditional finance
and blockchain technology by creating secure,
transparent infrastructure for tokenized assets.
"

buttonText="Learn More"

image={missionImage}

/>


</section>

);


}


export default Mission;