import "./About.css";


import Layout from "../components/common/layout/Layout/Layout";

import Container from "../components/common/ui/Container/Container";


import AboutHero from "../components/features/about/AboutHero/AboutHero";

import WhoWeAre from "../components/features/about/WhoWeAre/WhoWeAre";

import Philosophy from "../components/features/about/Philosophy/Philosophy";

import Mission from "../components/features/about/Mission";

import Vision from "../components/features/about/Vision";

import Timeline from "../components/features/about/Timeline/Timeline";

import CoreTeam from "../components/features/about/CoreTeam";
import Team from "../components/features/about/Team";

import Advisors from "../components/features/about/Advisors";

import Contributors from "../components/features/about/Contributors";

import CommunityCTA from "../components/features/about/CommunityCTA/CommunityCTA";

import FAQ from "../components/features/home/Faq";

function About(){


return (

<Layout>


<main className="about-page">


<Container>


<AboutHero />


<WhoWeAre />


<Philosophy />


<Mission />


<Vision />

<Timeline />


<CoreTeam />

<Team />
<Advisors />


<Contributors />


<CommunityCTA />


<FAQ />


</Container>


</main>


</Layout>

);


}


export default About;