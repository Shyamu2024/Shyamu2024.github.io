import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <main>
          <Home />
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </main>
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
