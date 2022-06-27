import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ProjectPage from "./pages/ProjectPage";
import AllProjects from "./pages/AllProjects";
import { useDispatch } from "react-redux";
import { getProjects } from "./actions/projects";

const App = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    getProjects(dispatch);
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projekty" element={<AllProjects />} />
        <Route path="/projekt/:id" element={<ProjectPage />} />
      </Routes>
      <Contact />
      <Footer />
    </>
  );
};

export default App;
