import "./DocsFAQ.css";


const questions = [

{
    question:"What is Builders Oasis?",

    answer: (
        <>
            <p>
                Builders Oasis is the HBADGER community-powered Web3 education
                initiative within the Cowrie Ecosystem.
            </p>

            <p>
                It is designed to educate, onboard, and equip individuals with
                the knowledge, skills, and confidence required to participate
                in the decentralized economy.
            </p>
        </>
    )
},



{
    question:"What is Griot?",

    answer: (
        <>
            <p>
                Griot is a privacy-first decentralized social application
                within the Cowrie Ecosystem.
            </p>

            <p>
                It enables HBadgers to communicate securely, engage with the
                community, participate in decentralized interactions, and earn
                rewards through ecosystem participation.
            </p>

            <p>
                Griot is designed to give users greater control over their
                digital identity, privacy, and community contributions while
                supporting a transparent revenue-sharing model.
            </p>
        </>
    )
},



{
    question:"How does Cowrie Protocol work with Real World Assets (RWAs)?",

    answer: (
        <>
            <p>
                Through the RWA DApp, Cowrie Protocol enables users to access
                tokenized real-world assets, including opportunities connected
                to real estate and other asset classes.
            </p>

            <p>
                By leveraging blockchain technology, the platform creates a
                transparent and borderless framework for digital ownership,
                allowing users to participate in asset-backed opportunities
                and potential DeFi-powered yield generation.
            </p>
        </>
    )
},



{
    question:"What is the current roadmap for Cowrie Protocol?",

    answer: (
        <>
            <p>
                Cowrie Protocol is being developed through a phased approach,
                with each milestone expanding the ecosystem and increasing
                utility for the community.
            </p>

            <p>
                Key roadmap milestones include:
            </p>


            <ul>

                <li>
                    Growth and expansion of the HBADGER Community.
                </li>


                <li>
                    Launch and development of Builders Oasis for Web3
                    education and onboarding.
                </li>


                <li>
                    Introduction of Griot as a decentralized social platform.
                </li>


                <li>
                    Release and expansion of the $COWRIE governance system.
                </li>


                <li>
                    Development of the RWA DApp for global access to
                    tokenized real-world assets.
                </li>

            </ul>

        </>
    )
},



{
    question:"How can I participate in Cowrie Protocol?",

    answer: (
        <>
            <p>
                Anyone can participate in the Cowrie Ecosystem by joining the
                community and engaging with its products and services.
            </p>


            <p>
                Ways to participate include:
            </p>


            <ul>

                <li>
                    Join the HBADGER Community and become part of the
                    decentralized movement.
                </li>


                <li>
                    Learn blockchain fundamentals and Web3 skills through
                    Builders Oasis.
                </li>


                <li>
                    Connect, contribute, and participate through Griot.
                </li>


                <li>
                    Hold $HBADG to access ecosystem utilities, rewards, and
                    community activities.
                </li>


                <li>
                    Hold $COWRIE to participate in governance and help shape
                    the future direction of the protocol.
                </li>

            </ul>

        </>
    )
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