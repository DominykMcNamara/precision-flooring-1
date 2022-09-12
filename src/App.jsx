import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./routes/Home"
import { Login } from "./routes/Login";
import { AuthProvider } from "./context/AuthContext";



export const App = () => {
    return (
      <AuthProvider>
        <div>
          <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={ <Login />} />
            </Routes>
          </Router>  
        </div>
        </AuthProvider>
    )
}