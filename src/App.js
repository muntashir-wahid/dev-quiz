import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Blog from "./pages/Blog/Blog";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";
import Quizzes from "./pages/Quizzes/Quizzes";
import Statistics from "./pages/Statistics/Statistics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
      },
      {
        path: "home",
        element: <Home />,
        loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
      },
      {
        path: "/quiz/:quizId",
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.quizId}`
          ),
        element: <Quizzes />,
      },
      {
        path: "statistics",
        element: <Statistics />,
        loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="bg-neutral-800">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
