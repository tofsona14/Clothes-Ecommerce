import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link1, Link2, Link3, Link4, Link5 } from "./none";
import Rame from "./profile";

function EndProfile() {
  return (
    <div className="mainContainer">
      <BrowserRouter>
        <Routes>
          <Route path="/profile" element={<Rame />} />
          <Route path="/profile-orders" element={<Link1 />} />
          <Route path="/profile-pay" element={<Link2 />} />
          <Route path="/profile-payment" element={<Link3 />} />
          <Route path="/profile-psw" element={<Link4 />} />
          <Route path="/profile-logout" element={<Link5 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default EndProfile;
