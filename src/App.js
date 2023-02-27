import "./App.css";
import Layout from "./components/layout/Layout";
import About from "./components/main/About";
import Home from "./components/main/Home";
import Projects from "./components/main/Projects";
import Contact from "./components/main/Contact";

function App() {
  return (
    <Layout>
      <Home />
      <About />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default App;
