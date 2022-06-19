import { useState } from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { MenuIcon } from "@heroicons/react/outline";
import * as Pages from "./pages";
import { AuthProvider, RequireAuth } from "./context/auth-context";

import Header from "./components/Header";

const Protected = () => {
  return (
    <>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Pages.DashBoard />} />
          <Route path="addpatient" element={<Pages.AddPatient />} />
        </Route>
        <Route path="*" element={<Navigate to="404" />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="login" element={<Pages.Login />} />
        <Route path="404" element={<Pages.NotFound />} />
        <Route
          path="*"
          element={
            <RequireAuth>
              <Protected />
            </RequireAuth>
          }
        />
      </Routes>
    </AuthProvider>
  );
};

export default App;
