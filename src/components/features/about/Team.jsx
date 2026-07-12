import "./Team.css";

import TeamCard from "../../common/cards/TeamCard/TeamCard";

import buildersImage from "../../../assets/images/builders_oasis.png";


const teamMembers = [

{
image: buildersImage,
name: "Alex Morgan",
role: "Blockchain Engineer",
twitter: "https://x.com/alexmorgan"
},


{
image: buildersImage,
name: "Chris Williams",
role: "Product Designer",
twitter: "https://x.com/chriswilliams"
},


{
image: buildersImage,
name: "Emma Davis",
role: "Frontend Developer",
twitter: "https://x.com/emmadavis"
},


{
image: buildersImage,
name: "Michael Adams",
role: "Protocol Researcher",
twitter: "https://x.com/michaeladams"
}

];



function Team(){

return(

<section className="team-page">


<section className="team-header">


<h2>
Meet The Team
</h2>


<p>
Engineers, designers and contributors helping build
the Cowrie ecosystem.
</p>


</section>



<div className="team-grid">


{
teamMembers.map((member,index)=>(

<TeamCard

key={index}

{...member}

/>

))

}


</div>


</section>

);

}


export default Team;