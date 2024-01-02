import logo from "./logo.svg";
import "./App.css";
import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import Hero from "./Components/Hero";
import Header from "./Components/Header";
import Skills from "./Components/Skills";
import Experiance from "./Components/Experiance";
import ContactForm from "./Components/ContactForm";

function App() {
  const createBrowserRoute = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="bg-primary-bg text-primary-text w-full h-full ">
          <Header />
          <Hero />
          <Skills />
          <Experiance />
          <ContactForm />
        </div>
      ),
    },
  ]);

  return (
    <div className="">
      <RouterProvider router={createBrowserRoute}></RouterProvider>
    </div>
  );
}

export default App;
