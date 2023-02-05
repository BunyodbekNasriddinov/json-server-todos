import { Route, Routes } from "react-router-dom";
import { Login } from "../components/Login/Login";
import { Register } from "../components/Register/Register";
import { PublicHeader } from "../components/PublicHeader/PublicHeader";
import { Todos } from "../pages/Todos/Todos";

export const Public = () => {
  return (
    <div>
      <PublicHeader />
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};
