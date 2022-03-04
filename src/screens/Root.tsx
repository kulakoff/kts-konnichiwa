import AboutPage from "@pages/AboutPage";
import MainPage from "@pages/MainPage";
import NotMatchPage from "@pages/NotMatchPage";
import ReposSearchPage from "@pages/ReposSearchPage";
import { Route, Routes } from "react-router-dom";
import Layout from "./../layout/Layout";

const RootScreen = () => {
    return (

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/repos" element={<ReposSearchPage />} />
          <Route path="*" element={<NotMatchPage />} />
        </Route>
      </Routes>


    )
  };
  export default RootScreen;
  