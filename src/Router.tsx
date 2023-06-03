import { BrowserRouter as MainRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Foundations from "./pages/Foundations";
function Router() {
  return (
    <MainRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Foundations />} />
        </Route>
      </Routes>
    </MainRouter>
  );
}

export default Router;
