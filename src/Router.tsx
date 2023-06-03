import { BrowserRouter as MainRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Foundations from "./pages/Foundations";
import Atoms from "./pages/Atoms";
import Molecules from "./pages/Molecules";
import Organisms from "./pages/Organisms";
import Templates from "./pages/Templates";
function Router() {
  return (
    <MainRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Foundations />} />
          <Route path="/atoms" element={<Atoms />} />
          <Route path="/molecules" element={<Molecules />} />
          <Route path="/organisms" element={<Organisms />} />
          <Route path="/templates" element={<Templates />} />
        </Route>
      </Routes>
    </MainRouter>
  );
}

export default Router;
