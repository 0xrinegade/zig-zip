import Home from "./views/Home";
import Gallery from "./views/Gallery";
import PackageDetail from "./views/PackageDetail";
import NotFound from "./views/NotFound";
import StdGallery from "./views/StdGallery";

export const routes = [
  {
    path: "",
    component: Home,
  },
  {
    path: "/gallery",
    component: Gallery,
    props: (route) => ({ search: route.query.search })
  },
  {
    path: "/package/:id",
    component: PackageDetail,
    props: (route) => ({ v: route.query.v })
  },
  {
    path: "/package/:id/*",
    component: PackageDetail
  },
  {
    path: "/std",
    component: StdGallery
  },
  {
    path: "/404",
    component: NotFound
  },
  {
    path: "*",
    redirect: "/404",
  },
];