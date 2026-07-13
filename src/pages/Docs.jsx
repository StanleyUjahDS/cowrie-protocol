import Layout from "../components/common/layout/Layout/Layout";
import DocsSidebar from "../components/features/docs/navigation/DocsSidebar";

import DocsHeader from "../components/features/docs/DocsHeader";
import DocsComponents from "../components/features/docs/DocsComponents";

import "./Docs.css";


function Docs(){

return (

<Layout aside={<DocsSidebar/>}>


<div className="docs-page">


<DocsHeader />


<DocsComponents />


</div>


</Layout>

);

}


export default Docs;