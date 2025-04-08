import { createRoot } from "react-dom/client";
import HomePage from "./assets/Home_page/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from "./assets/components/topBar/TopBar";

const root = document.getElementById("root");

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={<HomePage />}>
          <Route path="/:userId" />
      </Route>
      <Route
        path="/asd"
        element={<TopBar />}
      />
    </Routes>
  </BrowserRouter>
);
