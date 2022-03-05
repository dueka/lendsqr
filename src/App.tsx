import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/login";
import "./App.scss";
import "../src/styles/main.scss";
import { DashboardHeader, DashboardMenu } from "./components";
import Users from "./pages/users/Users";
import UsersCard from "./pages/users/UsersCard";

const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <DashboardHeader />
      <DashboardMenu />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UsersCard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
