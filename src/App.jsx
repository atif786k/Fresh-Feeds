import "./App.css";
import NavBar from "src/Components/NavBar";
import NewzItems from "src/Components/NewzItems";
import MoreNews from "src/Components/MoreNews";
import Footer from "./Components/Footer";
import Lenis from "@studio-freight/lenis";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    // console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<NewzItems />}></Route>
          <Route
            exact
            path="/business"
            element={<MoreNews key="business" topic="business" />}
          ></Route>
          <Route
            exact
            path="/sports"
            element={<MoreNews key="sports" topic="sports" />}
          ></Route>
          <Route
            exact
            path="/technology"
            element={<MoreNews key="technology" topic="technology" />}
          ></Route>
          <Route
            exact
            path="/health"
            element={<MoreNews key="health" topic="health" />}
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={<MoreNews key="entertainment" topic="entertainment" />}
          ></Route>
          <Route
            exact
            path="/world"
            element={<MoreNews key="world" topic="world" />}
          ></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

// #008080 == blue shade
// #050505 == black shade
// #dddbcb == grey shade
