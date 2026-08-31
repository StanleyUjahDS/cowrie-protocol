import "./DocsSidebar.css";
import { useEffect, useState } from "react";


const navigation = [

    {
        title:"Overview",

        items:[
            {
                name:"Introduction",
                link:"#overview"
            },

            {
                name:"Vision & Mission",
                link:"#vision"
            }
        ]
    },


    {
        title:"Ecosystem",

        items:[
            {
                name:"Cowrie Ecosystem",
                link:"#ecosystem"
            },

            {
                name:"RWA Tokenization",
                link:"#tokenization"
            },

            {
                name:"Products",
                link:"#products"
            }
        ]
    },


    {
        title:"Applications",

        items:[
            {
                name:"Builders Oasis",
                link:"#builders-oasis"
            },

            {
                name:"Griot Wallet",
                link:"#griot-wallet"
            }
        ]
    },


    {
        title:"Tokenomics",

        items:[
            {
                name:"Ecosystem Tokens",
                link:"#ecosystem-tokens"
            },

            {
                name:"Revenue Sharing",
                link:"#revenue-sharing"
            }
        ]
    },


    {
        title:"Technology",

        items:[
            {
                name:"Architecture",
                link:"#architecture"
            },

            {
                name:"Wallet Infrastructure",
                link:"#wallet"
            }
        ]
    },


    {
        title:"Developers",

        items:[
            {
                name:"Developer Guide",
                link:"#developers"
            }
        ]
    },


    {
        title:"Security",

        items:[
            {
                name:"Security Model",
                link:"#security"
            }
        ]
    },


    {
        title:"Governance",

        items:[
            {
                name:"Protocol Governance",
                link:"#governance"
            }
        ]
    },


    {
        title:"Resources",

        items:[
            {
                name:"Whitepaper",
                link:"#whitepaper"
            },

            {
                name:"Roadmap",
                link:"#roadmap"
            },

            {
                name:"FAQ",
                link:"#faq"
            }
        ]
    }

];





function DocsSidebar(){

    const [activeSection, setActiveSection] = useState(
        window.location.hash.slice(1) || "overview"
    );

    useEffect(() => {
        const sections = navigation
            .flatMap((group) => group.items)
            .map((item) => document.getElementById(item.link.slice(1)))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

                if (visible[0]) {
                    setActiveSection(visible[0].target.id);
                }
            },
            { rootMargin: "-110px 0px -65% 0px", threshold: 0 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const handleNavigation = (sectionId) => {
        setActiveSection(sectionId);
    };


return (

<nav className="docs-sidebar" aria-label="Documentation sections">


<h3>
Cowrie Documentation
</h3>



{
navigation.map((section,index)=>(


<div 
className="docs-sidebar-group"
key={index}
>


<h4>
{section.title}
</h4>



<ul>


{
section.items.map((item,i)=>(


<li key={i}>

<a
    href={item.link}
    className={activeSection === item.link.slice(1) ? "active" : ""}
    aria-current={activeSection === item.link.slice(1) ? "location" : undefined}
    onClick={() => handleNavigation(item.link.slice(1))}
>

{item.name}

</a>

</li>


))
}


</ul>


</div>


))
}



</nav>


);


}


export default DocsSidebar;
