import "./Team.css";

import TeamCard from "../../common/cards/TeamCard/TeamCard";

import SectionTitle from "../../common/ui/SectionTitle/SectionTitle";

import { teamMembers } from "../../../data/teamData";



function Team(){


return(

<section className="team-section">


<SectionTitle

title="Meet The Rest of The Team"

description="
Engineers, designers and contributors helping build the Cowrie ecosystem.
"

/>



<div className="team-grid">


{
teamMembers.map((member)=>(


<TeamCard

key={member.name}

{...member}

/>


))

}


</div>



</section>


);


}


export default Team;