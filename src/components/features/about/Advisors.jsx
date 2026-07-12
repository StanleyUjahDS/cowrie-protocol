import "./Advisors.css";


const advisors = [

{
name:"Alex Morgan",
role:"Blockchain Advisor"
},

{
name:"Chris Williams",
role:"Finance Advisor"
},

{
name:"Emma Davis",
role:"Security Advisor"
}

];


function Advisors(){


return(

<section className="advisors-section">


<h2>
Advisors
</h2>



<div className="advisor-grid">


{
advisors.map((advisor,index)=>(

<div
className="advisor-card"
key={index}
>


<h3>
{advisor.name}
</h3>


<p>
{advisor.role}
</p>


</div>

))

}


</div>


</section>

);


}


export default Advisors;