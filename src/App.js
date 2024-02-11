import logo from "./logo.svg";
import "./App.css";
import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import Hero from "./Components/Hero";
import Header from "./Components/Header";
import Skills from "./Components/Skills";
import Experiance from "./Components/Experiance";
import ContactForm from "./Components/ContactForm";
import Projects from "./Components/Projects";

function App() {
  const createBrowserRoute = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="bg-primary-bg text-primary-text w-screen h-full font-poppins">
          <Header />
          <Hero />
          <Skills />
          <Experiance />
          <Projects />
          <ContactForm />
        </div>
      ),
    },
  ]);

  return (
    <div className="overflow-x-clip">
      <RouterProvider router={createBrowserRoute}></RouterProvider>
    </div>
  );
}

export default App;
