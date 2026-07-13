import "./DocsHeader.css";

import Button from "../../common/ui/Button/Button.jsx"
function DocsHeader(){


return (

<section className="docs-header">


<div className="docs-header-content">


<span className="docs-badge">
Cowrie Protocol Documentation
</span>



<h1>
Building the Future of
<span>
Decentralized Ownership
</span>
</h1>



<p>

Explore the architecture, ecosystem,
tokenomics and technology powering
Cowrie Protocol; a decentralized
ecosystem connecting real-world assets,
DeFi and community ownership.

</p>



<div className="docs-header-actions">

<Button variant="mid-green">
Read Whitepaper
</Button>


<Button variant="mid-green">

Start Building

</Button>
</div>


</div>


</section>

);

}


export default DocsHeader;