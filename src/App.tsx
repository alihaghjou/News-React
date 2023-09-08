import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import EachNewsPage from "./routes/EachNewsPage";
import MainPage from "./routes/MainPage";
import { useState } from "react";

function App() {
  const [filter, setFilter] = useState("apple");
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={<MainPage filter={filter} setFilter={setFilter} />}
        />
        <Route path="/:id" element={<EachNewsPage filter={filter} />} />
        <Route path="/about" element={<div>About</div>} />
      </Route>
    </Routes>
  );
}

export default App;
