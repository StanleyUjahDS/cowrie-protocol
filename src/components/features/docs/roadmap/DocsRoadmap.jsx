import "./DocsRoadmap.css";


const phases = [


{
title:"Phase 1 - Foundation",

text:
"Placeholder for initial protocol development, infrastructure and ecosystem preparation."
},


{
title:"Phase 2 - Expansion",

text:
"Placeholder for application launches, partnerships and community growth."
},


{
title:"Phase 3 - Decentralization",

text:
"Placeholder for governance, ecosystem scaling and wider adoption."
}


];



function DocsRoadmap(){


return (

<section
id="roadmap"
className="docs-section docs-roadmap"
>


<div className="docs-section-header">


<span>
Roadmap
</span>


<h2>
Cowrie Development Roadmap
</h2>


<p>

Future milestones and ecosystem development
plans will be published here.

</p>


</div>





<div className="roadmap-container">


{
phases.map((phase,index)=>(


<div 
className="roadmap-card"
key={index}
>


<span>
Phase {index+1}
</span>


<h3>
{phase.title}
</h3>


<p>
{phase.text}
</p>


</div>


))
}


</div>



</section>

);


}


export default DocsRoadmap;