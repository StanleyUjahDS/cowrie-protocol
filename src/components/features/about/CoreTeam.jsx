import "./CoreTeam.css";

import CoreTeamCard from "../../common/cards/CoreTeamCard/CoreTeamCard";

import buildersImage from "../../../assets/images/builders_oasis.png";


const coreMembers = [

{
    image: buildersImage,
    name:"Stanley Ujah",
    role:"Founder & Protocol Lead",
    expertise:"Blockchain • Data Science • Web3 Infrastructure",
    bio:
    "Leading the development of Cowrie Protocol with a focus on decentralized finance, blockchain infrastructure and real-world asset innovation.",
    twitter:"#"
},


{
    image: buildersImage,
    name:"James Carter",
    role:"Co-Founder & CTO",
    expertise:"Smart Contracts • Security • Distributed Systems",
    bio:
    "Building secure and scalable blockchain systems powering the Cowrie ecosystem.",
    twitter:"#"
},

{
    image: buildersImage,
    name:"Stanley Ujah",
    role:"Founder & Protocol Lead",
    expertise:"Blockchain • Data Science • Web3 Infrastructure",
    bio:
    "Leading the development of Cowrie Protocol with a focus on decentralized finance, blockchain infrastructure and real-world asset innovation.",
    twitter:"#"
},


{
    image: buildersImage,
    name:"James Carter",
    role:"Co-Founder & CTO",
    expertise:"Smart Contracts • Security • Distributed Systems",
    bio:
    "Building secure and scalable blockchain systems powering the Cowrie ecosystem.",
    twitter:"#"
}

];



function CoreTeam(){

return(

<section className="core-team-section">


<div className="core-team-header">

<h2>
Core Team
</h2>


<p>
The leadership team driving the vision,
technology and growth of Cowrie Protocol.
</p>


</div>



<div className="core-team-grid">

{
coreMembers.map((member,index)=>(

<CoreTeamCard

key={index}

{...member}

/>

))

}

</div>


</section>

);

}


export default CoreTeam;