import React from "react";
import { Route, Routes } from "react-router-dom";
import IndexPage from "./components/indexPage/IndexPage";
import AboutPage from "./components/aboutPage/AboutPage";
import ContactUsPage from "./components/contactUsPage/ContactUsPage";
import BackendPage from "./components/backendPage/BackendPage";
import FrontendPage from "./components/frontendPage/FrontendPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/AboutUs" element={<AboutPage />} />
        <Route path="/ContactUs" element={<ContactUsPage />} />
        <Route path="/BackendPage" element={<BackendPage />} />
        <Route path="/FrontendPage" element={<FrontendPage />} />
      </Routes>
    </>
  );
};

export default App;
