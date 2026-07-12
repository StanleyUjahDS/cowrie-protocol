import "./Contributors.css";


import SectionTitle from "../../common/ui/SectionTitle/SectionTitle";


import ContributorCard from "../../common/cards/ContributorCard/ContributorCard";


import {
    Code2,
    Search,
    Users
} from "lucide-react";




const contributors = [


{
    icon:Code2,

    name:"Community Developers",

    description:
    "Open source developers contributing code, tools and infrastructure to expand the Cowrie ecosystem."

},



{
    icon:Search,

    name:"Research Contributors",

    description:
    "Researchers exploring blockchain innovation, decentralized finance and emerging technologies."

},



{
    icon:Users,

    name:"Community Builders",

    description:
    "Members helping grow awareness, adoption and participation across the global Cowrie community."

}



];





function Contributors(){


return(


<section className="contributors-section">



<SectionTitle


title="Contributors"


description="
A global network of builders, researchers and community members helping shape the future of Cowrie Protocol.
"


/>






<div className="contributors-grid">


{

contributors.map((item)=>(


<ContributorCard

key={item.name}

{...item}

/>


))


}


</div>




</section>


);


}



export default Contributors;