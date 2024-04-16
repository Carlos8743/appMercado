import "./global.module.css";
import { Cabecalho } from "./components/Cabecalho/Cabecalho";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { NotFound } from "./Pages/NotFound/NotFound";
import { ComprasProvider } from "./Context/ComprasContext";
import { ProdutoPage } from "./Pages/ProdutoPage/ProdutoPage";
export function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ComprasProvider>
                <Cabecalho />
              </ComprasProvider>
            }
          >
            <Route index element={<Home />} />
            <Route path="/Produto/:id" element={<ProdutoPage />} />
            <Route path="/*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
