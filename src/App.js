import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Restaurant from "./pages/Restaurant";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:anyPath" element={<Error />} />
        <Route path="/restaurant/:restaurantId" element={<Restaurant />} />
      </Routes>
    </div>
  );
}

export default App;
