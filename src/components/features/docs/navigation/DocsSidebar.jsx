import "./DocsSidebar.css";


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
                link:"#tokens"
            },

            {
                name:"Revenue Sharing",
                link:"#revenue"
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


return (

<nav className="docs-sidebar">


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

<a href={item.link}>

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