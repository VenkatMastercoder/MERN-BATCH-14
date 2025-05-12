import "./style.css";
import ReactDOM from "react-dom/client";
import Header from "./component/Header/Header";
import HeroSection from "./component/HeroSection/HeroSection";
import Footer from "./component/Footer/Footer";
import ProductLayout from "./component/ProductLayout/ProductLayout";
import Counter from "./component/Counter/Counter";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./component/Error/Error";
import ProductsDetails from "./component/ProductsDetails/ProductsDetails";
import ImageComponent from "./component/ImageComponent/ImageComponent";
import { lazy, Suspense } from "react";
import ComponentA from "./component/PropDrilling/ComponentA/ComponentA";
import Cart from "./component/Cart/Cart";
import UserStore from "./store/UserStore";
import CartProvider from "./store/CartStore";
import Contact from "./component/Contact/Contact";

const Comment = lazy(() => import("./component/Comment/Comment"));

// Component Compostion - Calling a Function Component inside a Other Functional Component

const AppLayout = () => {
  return (
    <>
      <CartProvider>
        <UserStore.Provider value={{ name: "Hello" }}>
          <Header />
          <Outlet />
          <Footer />
        </UserStore.Provider>
      </CartProvider>
    </>
  );
};

const Home = () => {
  return (
    <>
      <HeroSection />
      <ProductLayout />
    </>
  );
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/counter",
        element: <Counter />,
      },
      {
        path: "/comment",
        element: (
          <Suspense>
            <Comment />
          </Suspense>
        ),
      },
      {
        path: "/products",
        element: <ProductLayout />,
      },
      {
        path: "/products/:id",
        element: <ProductsDetails />,
      },
      {
        path: "/images",
        element: <ImageComponent />,
      },
      {
        path: "/componentA",
        element: <ComponentA />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />);
