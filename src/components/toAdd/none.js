import React from "react";
import Rame from "./profile";
import { First, Second, Third, Fourth, Fifth } from "./first";

function Link1() {
  return (
    <div className="both">
      <Rame />
      <First />
    </div>
  );
}

function Link2() {
  return (
    <div className="both">
      <Rame />
      <Second />
    </div>
  );
}

function Link3() {
  return (
    <div className="both">
      <Rame />
      <Third />
    </div>
  );
}
function Link4() {
  return (
    <div className="both">
      <Rame />
      <Fourth />
    </div>
  );
}
function Link5() {
  return (
    <div className="both">
      <Rame />
      <Fifth />
    </div>
  );
}
export { Link1, Link2, Link3, Link4, Link5 };
