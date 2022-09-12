import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { Home } from "./routes/Home";
import { Login } from "./routes/Login";

export const App = () => {
  return (
    <AuthProvider>
    <div>
      <Router>
        
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/" element={<Login />} />
          </Routes>
        
      </Router>
    </div>
    </AuthProvider>
  );
};
