import About from "../pages/About"
import MainLayout from "../components/layouts/MainLayout"
import HomePage from "../pages/HomePage"

const AppRoutes = [
  {
    name: "main",
    path: "/",
    Component: MainLayout,
    key: "main",
    routes: [
      {
        key: "home",
        name: "home",
        path: "/",
        index: true,
        requireAuth: false,
        Component: HomePage
      },
      {
        key: "about",
        name: "about",
        path: "/about",
        requireAuth: false,
        Component: () => <About/>
      }
    ]
  },
  {
    name: "404",
    path: "*",
    Component: () => <p>this content 404 page</p>,
    key: "404"
  }
]

export default AppRoutes