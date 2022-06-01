import { Route, Routes } from "react-router-dom";

const routers = [
  {
    path: "/",
    element: <h2>ok</h2>,
  },
  {
    path: '/about-us',
    element: <h2>About us</h2>,
  },
  {
    path: '/news',
    element: <h2>News</h2>,
  },
  {
    path: '/services',
    element: <h2>Services</h2>
  },{
    path: '/sign-up',
    element: <h2>Sign Up</h2>
  },{
    path: '/sign-in',
    element: <h2>Sign In</h2>
  }
];

function AppRouters() {
  return (
    <Routes>
      {routers.map((router, index) => {
        return (
          <Route key={index} path={router.path} element={router.element} />
        );
      })}
    </Routes>
  );
}

export default AppRouters;
