import "./Infrastructure.css";

import EcosystemOverview from "../EcosystemOverview";

import SectionTitle from "../../../common/ui/SectionTitle/SectionTitle";


function Infrastructure() {


    return (

        <section className="infrastructure-section">


            <SectionTitle

                title="The Cowrie Infrastructure"

                description="
                A decentralized foundation connecting
                blockchain technology, applications and
                digital ownership.
                "

                align="center"

            />



            <EcosystemOverview />


        </section>

    );

}


export default Infrastructure;