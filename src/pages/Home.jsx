import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/loadingpage">Loadingpage</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/datasuhu">DataSuhu</Link>
        </li>
        <li>
          <Link to="/kelembabantanah">KelembabanTanah</Link>
        </li>
        <li>
          <Link to="/kelembabanudara">KelembabanUdara</Link>
        </li>
        <li>
          <Link to="/hasilklasifikasi">HasilKlasifikasi</Link>
        </li>
        <li>
          <Link to="/aboutus">Aboutus</Link>
        </li>
        <li>
          <Link to="/deivceused">Deivceused</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
