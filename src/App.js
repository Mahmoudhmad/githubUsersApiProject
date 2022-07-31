import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import GithubUsersList from "./components/GithubUsersList";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import GithubUserDetails from "./components/GithubUserDetails";


function App() {

  return (

        <Router>
            <div className="App">
              <Navbar/>
              <Routes>
                <Route path="/" element={<GithubUsersList/>}></Route>
                <Route path="/GithubUserDetails/:id" element={<GithubUserDetails/>}></Route>
                <Route path="/About" element={<About/>}></Route>
                <Route path="/Contact" element={<Contact/>}></Route>
              </Routes> 
            </div>
          </Router>
    
      
    );
  }
  
export default App;
