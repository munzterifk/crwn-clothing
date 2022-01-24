import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Link,
} from "react-router-dom";
import { Navigation } from "../components/navigation/Navigation";
import { About } from "../pages/About";
import { Child1 } from "../pages/Child1";
import { Child2 } from "../pages/Child2";
import { HomePage } from "../pages/HomePage";
import { Users } from "../pages/Users";

const NewHome = ( props) => {
  const location = useLocation();
  console.log('location :>> ', location);
  console.log('props :>> ', window.history.state);
  return (
    <div>
      <h1>
        newHome
      </h1>
    </div>
  )
}

const App = () => {
  return (
    <Router>
       <Navigation/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="/" element={<HomePage/>} />
          <Route path="/newhome" element={<NewHome/>} />
          <Route path="/nested" element={<HomePage/>} >
            <Route path="child1" element={<Child1/>}></Route>
            <Route path="child2" element={<Child2/>}></Route>
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
 