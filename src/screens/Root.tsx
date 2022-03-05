import { lazy, Suspense } from "react";
// import AboutPage from "@pages/AboutPage";
// import MainPage from "@pages/MainPage";
import NotMatchPage from "@pages/NotMatchPage";
// import ReposSearchPage from "@pages/ReposSearchPage";
import { Route, Routes } from "react-router-dom";
import Layout from "./../layout/Layout";
import * as ROUTES from "./../constants/routes";
import LoaderComponent from "@components/LoaderComponent";

// const Layout = lazy(() => import("./../layout/Layout"));
const MainPage = lazy(() => import("@pages/MainPage"));
const AboutPage = lazy(() => import("@pages/AboutPage"));
// const NotMatchPage = lazy(() => import("@pages/NotMatchPage"));
const ReposSearchPage = lazy(() => import("@pages/ReposSearchPage"));

const RootScreen = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={<LoaderComponent />}>
              <MainPage />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.ABOUT}
          element={
            <Suspense fallback={<LoaderComponent />}>
              <AboutPage />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.REPOS}
          element={
            <Suspense fallback={<LoaderComponent />}>
              <ReposSearchPage />
            </Suspense>
          }
        />
        <Route path="*" element={<NotMatchPage />} />
      </Route>
    </Routes>
  );
};
export default RootScreen;
