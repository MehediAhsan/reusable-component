import { createBrowserRouter } from "react-router-dom";
import Layout from './../layout/Layout';
import MainContent from './../components/content/MainContent';
import SignIn from './../pages/SignIn';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <MainContent />,
        },
        {
          path: "/signin",
          element: <SignIn />,
        }
      ],
    },
  ]);


export default router;