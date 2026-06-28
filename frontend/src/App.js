import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
