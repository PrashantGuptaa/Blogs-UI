import Home from "../Container/Home";
import AddBlogForm from "../Container/AddBlogForm";
import NotFound from "../Container/NotFound";

const appRoutes = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/add-blogs",
    element: AddBlogForm,
  },
  {
    path: '*',
    element: NotFound,
  }
];

export default appRoutes;
