import "./Home.css";

import Layout from "../components/common/layout/Layout/Layout";
import Container from "../components/common/ui/Container/Container";

import Hero from "../components/features/home/Hero/Hero";
import Ecosystem from "../components/features/ecosystem/Ecosystem/Ecosystem";
import Products from "../components/features/home/Products";
import FAQ from "../components/features/home/Faq";
import Newsletter from "../components/features/home/Newsletter";
import Dapp from "../components/features/home/Dapp";


function Home() {


    return (

        <Layout>


            <main className="home">


                <Container>


                    <section>

                        <Hero />

                    </section>



                    <section>

                        <Dapp />

                    </section>



                    <section>

                        <Products />

                    </section>



                    <section>

                        <Ecosystem />

                    </section>



                    <section>

                        <FAQ />

                    </section>



                    <section>

                        <Newsletter />

                    </section>


                </Container>


            </main>


        </Layout>

    );


}


export default Home;