import "./DocsComponents.css";


// Overview

import DocsOverview from "./overview/DocsOverview";
import DocsIntroduction from "./overview/DocsIntroduction";
import DocsVision from "./overview/DocsVision";


// Ecosystem

import DocsEcosystem from "./ecosystem/DocsEcosystem";
import DocsTokenization from "./ecosystem/DocsTokenization";
import DocsProducts from "./ecosystem/DocsProducts";


// Applications

import DocsBuildersOasis from "./applications/DocsBuildersOasis";
import DocsGriotWallet from "./applications/DocsGriotWallet";


// Tokenomics

import DocsEcosystemTokens from "./tokenomics/DocsEcosystemTokens";
import DocsRevenueSharing from "./tokenomics/DocsRevenueSharing";


// Technology

import DocsArchitecture from "./technology/DocsArchitecture";
import DocsWallet from "./technology/DocsWallet";


// Other

import DocsDevelopers from "./developers/DocsDevelopers";
import DocsSecurity from "./security/DocsSecurity";
import DocsGovernance from "./governance/DocsGovernance";

import DocsWhitepaper from "./whitepaper/DocsWhitepaper";
import DocsRoadmap from "./roadmap/DocsRoadmap";
import DocsFAQ from "./faq/DocsFAQ";




function DocsComponents(){


return (

<div className="docs-components">


<DocsOverview />


<DocsIntroduction />


<DocsVision />



<DocsEcosystem />


<DocsTokenization />


<DocsProducts />



<DocsBuildersOasis />


<DocsGriotWallet />



<DocsEcosystemTokens />


<DocsRevenueSharing />



<DocsArchitecture />


<DocsWallet />



<DocsDevelopers />


<DocsSecurity />


<DocsGovernance />



<DocsWhitepaper />


<DocsRoadmap />


<DocsFAQ />


</div>

);


}


export default DocsComponents;