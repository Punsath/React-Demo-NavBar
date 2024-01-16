import { Routes, Route } from "react-router-dom"

import NavbarComponents from "./components/NavbarComponents"
//import FooterComponent from "./components/FooterComponent"

import HomePage from "./pages/HomePage"
import AboutUs from "./pages/AboutUs"
import BuyorRent from "./pages/BuyorRent"
import FaqPage from "./pages/FaqPage"
import FindAgents from "./pages/FindAgents"

function App() {
  return <div>
    <NavbarComponents/>

    <Routes>
      <Route path="/home" Component={HomePage}/>
      <Route path="/buyorrent" Component={BuyorRent}/>
      <Route path="/findagents" Component={FindAgents}/>
      <Route path="/aboutus" Component={AboutUs}/>
      <Route path="/faq" Component={FaqPage}/>
    </Routes>

    {/*<FooterComponent/>*/}
  </div>
}

export default App
