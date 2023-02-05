import { Route, Routes, useNavigate } from "react-router-dom";
import { Login } from "../components/Login/Login";
import { Register } from "../components/Register/Register";
import { PrivateHeader } from "../components/PrivateHeader/PrivateHeader";
import { Users } from "../pages/Users/Users";
import { Todos } from "../pages/Todos/Todos";

export const Private = () => {
  return (
    <div>
      <PrivateHeader />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route index path="/" element={<Todos />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </div>
  );
};
