import "./Newsletter.css";

import SectionTitle from "../../common/ui/SectionTitle/SectionTitle";
import Button from "../../common/ui/Button/Button";


function Newsletter(){


return (

<section className="newsletter">


<div className="newsletter-container">



<div className="newsletter-content">


<SectionTitle

title="Be The First To Know"

description="
Stay updated with Cowrie Protocol.
Get ecosystem updates, product launches,
developer news and Web3 insights.
"

align="left"

/>


</div>





<form className="newsletter-form">


<input

type="email"

placeholder="Enter your email"

aria-label="Email address"

/>




<Button

variant="primary"

type="submit"

>

Notify Me

</Button>



</form>





</div>


</section>

);


}


export default Newsletter;