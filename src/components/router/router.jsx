import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Error from "../error/Error";
import Home from "../pages/Home/Home";
import About from "../pages/about/About";
import Team from "../pages/Team/Team";
import Campus from "../pages/campus/Campus";
import GalleryPhoto from "../pages/gallery/Gallery";
import Contact from "../pages/contact/Contact";
import Admission from "../pages/Admission/Admission";
import Academics from "../pages/academics/Academics";
import CBSE from "../pages/cbse/CBSE";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/admission",
        element: <Admission />,
      },
      {
        path: "/academics",
        element: <Academics />,
      },
      {
        path: "/mandatory-disclosure",
        element: <CBSE />,
      },
      {
        path: "/campus",
        element: <Campus />,
      },
      {
        path: "/gallery",
        element: <GalleryPhoto />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
