import "./Contributors.css";


const contributors = [

{
name:"Community Developers",
description:
"Open source developers contributing to Cowrie Protocol."
},

{
name:"Research Contributors",
description:
"Researchers helping improve blockchain infrastructure."
},

{
name:"Community Builders",
description:
"Members growing the Cowrie ecosystem globally."
}

];



function Contributors(){


return(

<section className="contributors-section">


<h2>
Contributors
</h2>



<div className="contributors-grid">


{
contributors.map((item,index)=>(


<div
className="contributor-card"
key={index}
>


<h3>
{item.name}
</h3>


<p>
{item.description}
</p>


</div>


))

}


</div>


</section>

);


}


export default Contributors;