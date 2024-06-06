//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
// import "../js/component/narbar.jsx"
// import "../js/component/jumbotron.jsx"
// import "../js/component/card.jsx"
// import "../js/component/footer.jsx"

//import your own components
import Home from "./component/home.jsx";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
