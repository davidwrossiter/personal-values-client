import { Route, Routes } from "react-router-dom";
import SelectValues from "./components/SelectValues";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SelectValues />} />
    </Routes>
  );
}

export default App;
