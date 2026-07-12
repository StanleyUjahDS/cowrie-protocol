import "./CoreTeam.css";


import CoreTeamCard from "../../common/cards/CoreTeamCard/CoreTeamCard";


import SectionTitle from "../../common/ui/SectionTitle/SectionTitle";


import {
    coreTeam
} from "../../../data/teamData";




function CoreTeam(){


return(


<section className="core-team-section">





<SectionTitle


title="Core Team"


description="
The builders and innovators driving the vision, technology and growth of Cowrie Protocol.
"


/>








<div className="core-team-grid">



{

coreTeam.map((member)=>(


<CoreTeamCard


key={member.name}


{...member}


/>


))


}



</div>






</section>


);


}



export default CoreTeam;