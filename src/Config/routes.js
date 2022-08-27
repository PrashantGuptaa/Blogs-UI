import Home from "../Container/Home";
import AddBlog from "../Container/AddBlog";
import NotFound from "../Container/NotFound";

const appRoutes = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/add-blogs",
    element: AddBlog,
  },
  {
    path: '*',
    element: NotFound,
  }
];

export default appRoutes;
