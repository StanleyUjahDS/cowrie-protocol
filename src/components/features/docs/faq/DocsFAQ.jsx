import "./DocsFAQ.css";


const questions = [


{
question:"What is Cowrie Protocol?",

answer:
"Placeholder answer describing Cowrie Protocol."
},


{
question:"What are Real World Assets?",

answer:
"Placeholder explanation of RWA tokenization."
},


{
question:"What is Griot Wallet?",

answer:
"Placeholder explanation of the Cowrie wallet ecosystem."
},


{
question:"How can developers build on Cowrie?",

answer:
"Placeholder developer information."
}


];



function DocsFAQ(){


return (

<section
id="faq"
className="docs-section docs-faq"
>


<div className="docs-section-header">


<span>
FAQ
</span>


<h2>
Frequently Asked Questions
</h2>


<p>

Common questions about Cowrie Protocol.

</p>


</div>





<div className="faq-list">


{
questions.map((item,index)=>(


<div 
className="faq-item"
key={index}
>


<h3>
{item.question}
</h3>


<p>
{item.answer}
</p>


</div>


))
}


</div>



</section>

);


}


export default DocsFAQ;