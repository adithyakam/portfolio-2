import logo from "./logo.svg";
import "./App.css";
import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import Hero from "./Components/Hero";
import Header from "./Components/Header";
import Skills from "./Components/Skills";
import Experiance from "./Components/Experiance";
import ContactForm from "./Components/ContactForm";
import Projects from "./Components/Projects";
import Welcome from "./Components/Welcome";

import About from "./Components/About";
import { Suspense, useEffect, useRef, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay using setTimeout
    const timer = setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after delay
    }, 2500); // Adjust the delay as needed

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  const createBrowserRoute = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="bg-primary-bg text-primary-text font-poppins ">
          <Header />
          <Hero />
          <About />
          {/* <Skills /> */}
          <Experiance />
          <Projects />
          <ContactForm />
        </div>
      ),
    },
  ]);

  if (isLoading) return <Welcome />;
  return (
    <div className="overflow-x-clip">
      <RouterProvider router={createBrowserRoute}></RouterProvider>
    </div>
  );
}

export default App;
