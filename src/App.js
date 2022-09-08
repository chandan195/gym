
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Details from "./components/Details";
// import Banner from "./components/Banner";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}  value={`value`}>
          {/* <Banner/> */}
        </Route>
        <Route exact path="/Details/:user_id" element={<Details/>}></Route>
        {/* <Route exact path="/About" element={<About />} />
        <Route exact path="/Products" element={<Product />} />
        <Route exact path="/Product/:_id" element={<SingleProduct />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
