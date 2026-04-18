import "./App.css";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  return (
    <div className="flex flex-col items-center justify-center mx-6">
      <Navbar />
      <Main /> /* Carrusel */
      <Services />
      <Contact />
    </div>
  );
}

export default App;
