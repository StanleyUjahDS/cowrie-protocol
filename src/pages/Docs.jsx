import Layout from "../components/common/layout/Layout/Layout";
import DocsSidebar from "../components/features/docs/navigation/DocsSidebar";

import DocsHeader from "../components/features/docs/DocsHeader";
import DocsComponents from "../components/features/docs/DocsComponents";

import "./Docs.css";
import SEO from "../components/common/SEO/SEO";


function Docs(){

return (

<Layout aside={<DocsSidebar/>}>

<SEO title="Documentation" description="Explore Cowrie Protocol documentation, technology, ecosystem, tokenomics, and developer resources." />


<div className="docs-page">


<DocsHeader />


<DocsComponents />


</div>


</Layout>

);

}


export default Docs;
