import "./global.module.css";
import { Cabecalho } from "./components/Cabecalho/Cabecalho";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { NotFound } from "./Pages/NotFound/NotFound";
export function App() {
  // const [classe, setClasse] = useState();
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Cabecalho />}>
            <Route index element={<Home />} />
            <Route path="/*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
