import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import DiagramApp from "./DiagramApp";
import GSNtoSACM from "./GSNtoSACM";
import Cae_Gsn from "./Cae_Gsn";
// import DiagramApp from "./Diagra"
// import Cae_Sacm from "./Cae_Sacm";
// import Cae_Sacm from "./Cae_Sacm";
import CaeToSacm from "./CaeToSacm";

// import Contact from "./Contact";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/DiagramApp" element={<DiagramApp />} />
          <Route path="/GSNtoSACM" element={<GSNtoSACM />} />
          <Route path="/CaeToSacm" element={<CaeToSacm />} />
          <Route path="/Cae_Gsn" element={<Cae_Gsn />} />
          {/* <Route path="/Cae_Sacm" element={<Cae_Sacm />} /> */}
          {/* <Route path="/Cae_Sacm" element={<Cae_Sacm />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
