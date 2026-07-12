import "./About.css";

import Layout from "../components/common/layout/Layout/Layout";

import Mission from "../components/features/about/Mission";
import Vision from "../components/features/about/Vision";
import Team from "../components/features/about/Team";
import CoreTeam from "../components/features/about/CoreTeam";
import Advisors from "../components/features/about/Advisors";
import Contributors from "../components/features/about/Contributors";
import FAQ from "../components/features/home/Faq";


function About(){

return(

<Layout>

<main className="about-page">


<section className="about-header">

<h1>
About Cowrie Protocol
</h1>

<p>
Building the future of decentralized finance through secure,
transparent and community-driven blockchain technology.
</p> 

</section>



<section className="about-section">

<Mission />

</section>



<section className="about-section">

<Vision />

</section>

<section className="about-section">

<CoreTeam />

</section>


<section className="about-section">

<Team />

</section>


<section className="about-section">

<FAQ />

</section>



</main>

</Layout>

)

}


export default About;