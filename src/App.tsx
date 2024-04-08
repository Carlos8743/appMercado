import "./global.module.css";
import { Cabecalho } from "./components/Cabecalho/Cabecalho";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
export function App() {
  // const [classe, setClasse] = useState();
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Cabecalho />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
