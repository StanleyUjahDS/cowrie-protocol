import "./Advisors.css";

import AdvisorCard from "../../common/cards/AdvisorCard/AdvisorCard";

import SectionTitle from "../../common/ui/SectionTitle/SectionTitle";

import buildersImage from "../../../assets/images/builders_oasis.png";



const advisors=[

{
image:buildersImage,
name:"Alex Morgan",
role:"Blockchain Advisor",
expertise:"DeFi • Protocol Architecture • Web3 Strategy",
bio:"Supporting Cowrie Protocol with expertise in blockchain infrastructure and decentralized ecosystems.",
linkedin:"#"
},

{
image:buildersImage,
name:"Chris Williams",
role:"Finance Advisor",
expertise:"Digital Assets • Investment Strategy",
bio:"Providing strategic guidance around financial innovation and sustainable ecosystem growth.",
linkedin:"#"
},

{
image:buildersImage,
name:"Emma Davis",
role:"Security Advisor",
expertise:"Smart Contract Security • Risk Management",
bio:"Helping ensure secure and resilient infrastructure across the Cowrie ecosystem.",
linkedin:"#"
}

];



function Advisors(){

return(

<section className="advisors-section">


<SectionTitle

title="Advisors"

description="
Experienced professionals providing strategic guidance and expertise to the Cowrie ecosystem.
"

/>



<div className="advisor-grid">

{
advisors.map(item=>(

<AdvisorCard

key={item.name}

{...item}

/>

))
}

</div>


</section>

);

}


export default Advisors;