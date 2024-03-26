import './App.css'
import NavBar from "src/Components/NavBar";
import NewzItems from "src/Components/NewzItems"
import MoreNews from "src/Components/MoreNews"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './Components/Footer';

function App() {

  return (
    <>
    <Router>
      <NavBar/>
        <Routes>
          <Route exact path="/" element={<NewzItems/>}></Route>
          <Route exact path="/business" element={<MoreNews key="business" topic="BUSINESS" />}></Route>
          <Route exact path="/sports" element={<MoreNews key="sports" topic="SPORTS" />}></Route>
          <Route exact path="/technology" element={<MoreNews key="technology" topic="TECHNOLOGY" />}></Route>
          <Route exact path="/health" element={<MoreNews key="health" topic="HEALTH" />}></Route>
          <Route exact path="/entertainment" element={<MoreNews key="entertainment" topic="ENTERTAINMENT" />}></Route>
          <Route exact path="/world" element={<MoreNews key="world" topic="WORLD" />}></Route>
        </Routes>
        <Footer/>
    </Router>
    </>
  )
}

export default App

// #008080 == blue shade
// #050505 == black shade
// #dddbcb == grey shade
