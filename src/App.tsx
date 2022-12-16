import ErrorPage from "@pages/ErrorPage";
import HomePage from "@pages/HomePage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<HomePage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="/error" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
