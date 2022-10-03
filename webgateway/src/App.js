import GeneralInfo from "./components/GeneralInfo";
import Instruments from "./pages/Instruments";
import InteliMarket from "./components/InteliMarket";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Instruments />} />
          {/* <GeneralInfo /> */}
          {/* <Instruments /> */}
          {/* <InteliMarket /> */}
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </div>
  );
}

export default App;
