import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Error from "../error/Error";
import Home from "../pages/Home/Home";
import About from "../pages/about/About";
import Team from "../pages/Team/Team";
import Campus from "../pages/campus/Campus";
import GalleryPhoto from "../pages/gallery/Gallery";

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
        element: <About/>,
      },
      {
        path: "/team",
        element: <Team/>,
      },
      {
        path: "/campus",
        element: <Campus/>,
      },
      {
        path: "/gallery",
        element: <GalleryPhoto/>,
      },
      
    ],
  },
]);
