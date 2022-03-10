// src/Home.js
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Home.css";
import "./index.css";
import { Button } from "./Button";
const Home = (props) => {
  const navigate = useNavigate();

  return (
    <div className="hero-container">
      {/* <video src="/videos/video-1.mp4" autoPlay loop muted /> */}
      <h1>ACTT</h1>
      <h2 style={{ color: "white" }}>Assurance Case Transformation Tool</h2>
      <p>Choose Modelling Languange to Translate</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          onClick={() => navigate("/Cae_Gsn")}
        >
          CAE
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          onClick={() => navigate("/GSNtoSACM")}
        >
          GSN
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          onClick={() => navigate("/DiagramApp")}
        >
          SACM
        </Button>
        {/* <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button> */}
        {/* <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button> */}
      </div>
    </div>
  );
};
// <div className="Main-container">
//   <div className="Welcome-text">
//     <h1> Welcome To Model Translation Tool</h1>
//     <p>Choose Your Language</p>
//   </div>
// </div>

// <div className="App">
//   <div className="gradient__bg">
//     <div className="Main_text">
//       <h1>Model Transformation</h1>
//     </div>
//     <p>Choose the following languange to translate :</p>
//     <hr />

//     {/* Button */}
//     <div className="gpt3__cta-btn">
//       <button type="button" onClick={() => navigate("/DiagramApp")}>
//         CAE To SACM
//       </button>
//     </div>
//     <div className="gpt3__cta-btn">
//       <button type="button" onClick={() => navigate("/Cae_Gsn")}>
//         CAE To GSN
//       </button>
//     </div>
//     <div className="gpt3__cta-btn">
//       <button type="button" onClick={() => navigate("/GSNtoSACM")}>
//         GSN To SACM
//       </button>
//     </div>
//     <div className="gpt3__cta-btn">
//       <button type="button" onClick={() => navigate("/CaeToSacm")}>
//         CAE To SACM
//       </button>
//     </div>
//     {/* <p>
//     <button onClick={() => navigate("/DiagramApp")}>CAE To SACM</button>
//   </p>
//   <p>
//     <a onClick={() => navigate("/DiagramApp")}> AAAAA </a>
//   </p>
//   <p>
//     <button onClick={() => navigate("/Cae_Gsn")}>Cae_Gsn</button>
//   </p>
//   <p>
//     <button onClick={() => navigate("/GSNtoSACM")}>GSNtoSACM</button>
//   </p>
//   <p>
//     <button onClick={() => navigate("/CaeToSacm")}>CaeToSacm</button>
//   </p> */}
//     <Link className="btn btn-success" to="/CaeToSacm">
//       Cae to Sacm
//     </Link>
//     {/* <p>
//     <a className="button">
//       <i className="fa fa-download"></i>Download Resume
//     </a>
//   </p> */}
//     {/* Checkbox */}

//     {/* Text field */}
//   </div>
// </div>
//   );
// };

export default Home;
// Kindacode.com
