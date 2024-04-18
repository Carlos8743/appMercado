import "./global.module.css";
import { Cabecalho } from "./components/Cabecalho/Cabecalho";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { NotFound } from "./Pages/NotFound/NotFound";
import { ComprasProvider } from "./Context/ComprasContext";
import { VisivelCompraProvider } from "./Context/VisibilidadeCompras"; // Importe visivelCompraProvider em vez de VisivelCompraContext
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
                <VisivelCompraProvider>
                  <Cabecalho />
                </VisivelCompraProvider>
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
