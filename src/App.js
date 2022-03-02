import { Route, Routes } from "react-router-dom";
import "./App.css";
import Pay from "./components/Pay";
import Success from "./components/Success";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/pay" element={<Pay />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  );
}

export default App;
