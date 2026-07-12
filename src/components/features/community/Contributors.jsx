import "./Contributors.css";


import TeamCard from "../../common/cards/TeamCard/TeamCard";

import image from "../../../assets/images/builders_oasis.png";



const contributors = [

{
    name:"John Doe",
    role:"Core Contributor"
},


{
    name:"Jane Smith",
    role:"Protocol Engineer"
},


{
    name:"David Lee",
    role:"Developer Relations"
}

];




function Contributors(){


return (

<section className="contributors">


<h2>
Partners & Contributors
</h2>



<div className="contributors-grid">


{
contributors.map((member,index)=>(


<TeamCard

key={index}

image={image}

name={member.name}

role={member.role}

bio="Helping build the Cowrie ecosystem."

/>


))


}



</div>


</section>

);


}


export default Contributors;