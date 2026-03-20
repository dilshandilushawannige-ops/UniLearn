import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Home from './features/home/pages/Home.jsx';
import Login from './features/auth/pages/Login.jsx';
import Signup from './features/auth/pages/Signup.jsx';
import ResourcePage from './features/placeholders/pages/ResourcePage.jsx';
import ResourceRequestPage from './features/placeholders/pages/ResourceRequestPage.jsx';
import LiveClassPage from './features/placeholders/pages/LiveClassPage.jsx';
import StudyPlanPage from './features/placeholders/pages/StudyPlanPage.jsx';

function AppRoutes() {
  return (
    <Routes>
      {/* All pages share the unified layout (Navbar + page content) */}
      <Route element={<MainLayout />}>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected routes — require login */}
        <Route element={<ProtectedRoute />}>
          <Route path="/resources" element={<ResourcePage />} />
          <Route path="/requests" element={<ResourceRequestPage />} />
          <Route path="/live-class" element={<LiveClassPage />} />
          <Route path="/study-plan" element={<StudyPlanPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRoutes;
