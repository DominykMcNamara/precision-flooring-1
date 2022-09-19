import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./routes/Home"
import { SpecialsProvider } from "./context/SpecialsContext";
import { Specials } from "./routes/Specials";
import { Webmaster } from "./routes/Webmaster";



export const App = () => {
    return (
      <SpecialsProvider>
        <div>
          <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/webmaster" element={ <Webmaster />} />
                {/*<Route exact path="/specials" element={ <Specials /> } /> */} 
            </Routes>
          </Router>  
        </div>
        </SpecialsProvider>
    )
}