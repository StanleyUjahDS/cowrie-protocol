import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import Home from "../pages/Home";
import Docs from "../pages/Docs";
import About from "../pages/About";
import Ecosystem from "../pages/Ecosystem";
import LaunchApp from "../pages/LaunchApp";



function Router() {


  return (

    <BrowserRouter>


      <Routes>


        <Route
          path="/"
          element={<Home />}
        />


        <Route
          path="/docs"
          element={<Docs />}
        />


        <Route
          path="/about"
          element={<About />}
        />


        <Route
          path="/ecosystem"
          element={<Ecosystem />}
        />


        <Route
          path="/launch"
          element={<LaunchApp />}
        />


      </Routes>


    </BrowserRouter>

  );


}


export default Router;