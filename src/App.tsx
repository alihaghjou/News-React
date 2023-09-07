import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import EachNewsPage from "./routes/EachNewsPage";
import MainPage from "./routes/MainPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/:id" element={<EachNewsPage />} />
        <Route path="/about" element={<div>About</div>} />
      </Route>
    </Routes>
  );
}

export default App;
