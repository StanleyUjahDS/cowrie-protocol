import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import "./Layout.css";


function Layout({ children, aside }) {


    return (

        <div className="layout">


            <Navbar />


            <div className="layout-body">


                {aside && (

                    <aside>

                        {aside}

                    </aside>

                )}




                <main>


                    <div className="page-content">


                        {children}


                    </div>


                </main>



            </div>



            <Footer />


        </div>

    );

}


export default Layout;