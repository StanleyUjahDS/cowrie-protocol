import "./Ecosystem.css";

import Layout from "../components/common/layout/Layout/Layout";
import Container from "../components/common/ui/Container/Container";

import EcosystemHero from "../components/features/ecosystem/EcosystemHero";

import NotABank from "../components/features/ecosystem/NotABank/NotABank";
import Infrastructure from "../components/features/ecosystem/Infrastructure/Infrastructure";

import EcosystemFlow from "../components/features/ecosystem/EcosystemFlow/EcosystemFlow";
import EcosystemComponents from "../components/features/ecosystem/EcosystemComponents";
import EcosystemBenefits from "../components/features/ecosystem/EcosystemBenefits/EcosystemBenefits";
import EcosystemAudience from "../components/features/ecosystem/EcosystemAudience/EcosystemAudience";
import LatestUpdates from "../components/features/ecosystem/LatestUpdates/LatestUpdates";

import FAQ from "../components/features/home/Faq";
import SEO from "../components/common/SEO/SEO";

function Ecosystem(){

return (

<Layout>

<SEO title="Ecosystem" description="Discover the Cowrie Protocol ecosystem, infrastructure, products, benefits, and community-owned opportunities." />

<main className="ecosystem-page">

<Container>

<div className="ecosystem-sections">

<EcosystemHero />

<NotABank />

<Infrastructure />

<EcosystemFlow />

<EcosystemComponents />

<EcosystemBenefits />

<EcosystemAudience />

<LatestUpdates />

<FAQ />

</div>

</Container>

</main>

</Layout>

);

}

export default Ecosystem;
