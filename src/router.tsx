import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import MainRoot from "./roots/MainRoot";
import axios from "axios";

// Mock API to return posts
import mockAPI from "./_mocks/api";

/*
React Router Documentation: https://reactrouter.com/en/main

* Additional Hints *
 - View loaders in react-rotuer-dom
 - Should there be a Catch all route / Error Boundary
*/

// Loader
const fetchSinglePost = async () => {};

// Loader
const fetchAllPosts = async () => {};

export default createBrowserRouter([
  {
    path: "/",
    element: <MainRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "posts",
        children: [
          { path: "", element: <Posts /> },
          {
            path: ":postId",
            element: <Post />,
          },
        ],
      },
    ],
  },
]);
