import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Deivceused = React.lazy(() => import("pages/Deivceused"));
const Aboutus = React.lazy(() => import("pages/Aboutus"));
const HasilKlasifikasi = React.lazy(() => import("pages/HasilKlasifikasi"));
const KelembabanUdara = React.lazy(() => import("pages/KelembabanUdara"));
const KelembabanTanah = React.lazy(() => import("pages/KelembabanTanah"));
const DataSuhu = React.lazy(() => import("pages/DataSuhu"));
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const Loadingpage = React.lazy(() => import("pages/Loadingpage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/loadingpage" element={<Loadingpage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/datasuhu" element={<DataSuhu />} />
          <Route path="/kelembabantanah" element={<KelembabanTanah />} />
          <Route path="/kelembabanudara" element={<KelembabanUdara />} />
          <Route path="/hasilklasifikasi" element={<HasilKlasifikasi />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/deivceused" element={<Deivceused />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
