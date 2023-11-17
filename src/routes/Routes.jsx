import { createBrowserRouter } from "react-router-dom";
import Layout from './../layout/Layout';
import MainContent from './../components/content/MainContent';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <MainContent />,
        }
      ],
    },
  ]);


export default router;