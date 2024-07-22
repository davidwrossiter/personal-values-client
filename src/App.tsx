import { Route, Routes } from "react-router-dom";
import SelectValues from "./pages/SelectValues";
import ReturnValues from "./pages/ReturnValues";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SelectValues />} />
      <Route path="/your-values" element={<ReturnValues />} />
    </Routes>
  );
}

export default App;
