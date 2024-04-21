import "./global.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ComprasProvider } from "./Context/ComprasContext";
import { VisivelCompraProvider } from "./Context/VisibilidadeCompras"; // Importe visivelCompraProvider em vez de VisivelCompraContext
import { ProdutoPage } from "./Pages/ProdutoPage/ProdutoPage";
import { lazy, Suspense } from "react";
const Cabecalho = lazy(() =>
  import("./components/Cabecalho/Cabecalho").then((module) => ({
    default: module.Cabecalho,
  }))
);
const Home = lazy(() =>
  import("./Pages/Home").then((module) => ({ default: module.Home }))
);
const NotFound = lazy(() =>
  import("./Pages/NotFound/NotFound").then((module) => ({
    default: module.NotFound,
  }))
);

export function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<p className="Carregando"> Carregando ... </p>}>
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
        </Suspense>
      </Router>
    </>
  );
}
