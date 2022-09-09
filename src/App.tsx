import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import Home from "./Routes/Home";
import Categories from "./Routes/Categories";
import Member from "./Routes/Member";
import Login from "./Routes/Login";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/*" element={<Categories />} />
        <Route path="/member" element={<Member />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
