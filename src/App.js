import { useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";
import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Articles from "./pages/articles";
import Paintings from "./pages/paintings";
import ReadArticle from "./pages/readArticle";
import Contact from "./pages/contact";
import Notfound from "./pages/404";
import { TRACKING_ID } from "./data/tracking";
import "./app.css";


function App() {
    useEffect(() => {
        if (TRACKING_ID !== "") {
            ReactGA.initialize(TRACKING_ID);
        }
    }, []);
    const basename = process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL : '/';
    console.log(basename)
    return ( 
        <div className="App">
			{console.log("Public URL:", process.env.PUBLIC_URL)}
            <Router>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="about" element={<About />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="articles" element={<Articles />} />
                    <Route path="paintings" element={<Paintings />} />
                    <Route path="article/:slug" element={<ReadArticle />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<Notfound />} />
                </Routes>
            </Router>
        </div>
    );
}
export default App;