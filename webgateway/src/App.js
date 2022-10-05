import Instruments from "./pages/Instruments";
import Intelimarket from "./pages/Intelimarket";
import GeneralInfo from "./pages/GeneralInfo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Instruments />} />
          <Route path="/intelimarket" element={<Intelimarket />} />
          <Route path="/informacoes-gerais" element={<GeneralInfo />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </div>
  );
}

export default App;
