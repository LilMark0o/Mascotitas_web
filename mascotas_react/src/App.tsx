import { BrowserRouter, Routes, Route } from "react-router-dom";
// @ts-ignore
import Detail from "./componentes/Detail";
// @ts-ignore
import Mascotas from "./componentes/Mascotas";
// @ts-ignore
import NavBar from "./componentes/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mascotas />} />
          <Route path="/mascotas" element={<Mascotas />} />
          <Route path="/mascotas/:mascotaId" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
