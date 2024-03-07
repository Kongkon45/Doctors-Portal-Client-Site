import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Homes/Home/Home";
import About from "../Pages/Abouts/About/About";
import Dental_Services from "../Pages/Dental_Services/Dental_Services/Dental_Services";
import Review from "../Pages/Reviews/Review/Review";
import Blog from "../Pages/Blogs/Blog/Blog";
import Contact_Us from "../Pages/Contacts/Contact_Us/Contact_Us";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path : '/about',
        element : <About/>
      },
      {
        path : "/dental_services",
        element : <Dental_Services/>
      },
      {
        path : "/review",
        element : <Review/>
      },
      {
        path : "/blog",
        element : <Blog/>
      },
      {
        path : "/contact_us",
        element : <Contact_Us/>
      }

    ],
  },
]);