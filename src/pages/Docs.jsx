import Layout from "../components/common/layout/Layout/Layout";
import Aside from "../components/common/layout/Aside/Aside";

import "./Docs.css";

import DocsHeader from "../components/features/docs/DocsHeader";
import DocsIntroduction from "../components/features/docs/DocsIntroduction";
import DocsComponents from "../components/features/docs/DocsComponents";


function Docs(){

return(

<Layout aside={<Aside/>}>


<main className="docs-page">


<DocsHeader />

<DocsIntroduction />

<DocsComponents />


<section className="docs-section">

<h2>
Getting Started
</h2>

<p>
Developers can explore the ecosystem, integrate available tools, and build
applications using Cowrie Protocol infrastructure.
</p>


<button className="docs-button">
Start Building
</button>


</section>


</main>


</Layout>

)

}


export default Docs;