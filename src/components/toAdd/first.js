import React from "react";
import { Link } from "react-router-dom";

function First() {
  return (
    <div className="div1 hiddenOne" id="1">
      <div className="closeContainer">
        <div className="closeContainer2">
          <h3>Profile Info</h3>
          <Link to="/">
            <span className="close" title="Close Modal">
              &times;
            </span>
          </Link>
        </div>
      </div>
      <div className="profileInfo">
        <div className="infoDiv">
          <div className="infoLabel">
            <div className="txt">
              <label for="firstName">First Name:</label>
              <input
                className="nameLabel"
                type="text"
                id="firstName"
                name="fav_language"
              />
            </div>
            <div className="txt">
              <label for="lastName">Last Name:</label>
              <input
                className="nameLabel"
                type="text"
                id="lastName"
                name="fav_language"
              />
            </div>
            <div className="txt">
              <label className="txtEmail" for="email">
                Email:
              </label>
              <input
                className="emailLabel"
                type="email"
                id="email"
                name="fav_language"
              />
            </div>
            <div className="txt">
              <label className="txtNumber" for="number">
                Phone Number:
              </label>
              <input
                className="phoneNumber"
                type="number"
                id="number"
                name="fav_language"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Second() {
  return (
    <div className="div2 hiddenTwo" id="2">
      <div className="closeContainer">
        <div className="closeContainer2">
          <h3>შეკვეთები</h3>
          <Link to="/">
            <span className="close" title="Close Modal">
              &times;
            </span>
          </Link>
        </div>
      </div>
      <div className="nothingisHere">
        <h1>ამჟამად აქ შეკვეთები არ არის!</h1>
      </div>
    </div>
  );
}

function Third() {
  return (
    <div className="div3 hiddenThree" id="3">
      <div className="closeContainer">
        <div className="closeContainer2">
          <h3>საგადასახადო</h3>
          <Link to="/">
            <span className="close" title="Close Modal">
              &times;
            </span>
          </Link>
        </div>
      </div>
      <div className="nothingIsHere2">
        <h1>საგადასახადოები არ არის!</h1>
      </div>
    </div>
  );
}

function Fourth() {
  return (
    <div className="div4 hiddenFour" id="4">
      <div className="closeContainer">
        <div className="closeContainer2">
          <h3>პაროლის შეცვლა</h3>
          <Link to="/">
            <span className="close" title="Close Modal">
              &times;
            </span>
          </Link>
        </div>
      </div>
      <div className="changePasswordDiv">
        <div className="changePassword">
          <div className="passwordLabel">
            <div>
              <label for="Current">Current password: </label>
              <input
                className="passwordInput"
                type="password"
                id="Current"
                name="fav_language"
                placeholder="Current password"
                required
              />
            </div>
            <div>
              <label className="passwordTXT" for="newPassword">
                New Password:
              </label>
              <input
                className="passwordInput2"
                type="password"
                id="newPassword"
                name="fav_language"
                placeholder="Repeat password"
                required
              />
            </div>
            <div>
              <label for="Repeat password">Repeat password: </label>
              <input
                className="passwordInput"
                type="password"
                id="Repeat password"
                name="fav_language"
                placeholder="Repeat password"
                required
              />
            </div>
            <button className="submitBTN">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
function Fifth() {
  return (
    <div className="closeContainer2">
      <h3>LOG OUT</h3>
      <Link to="/">
        <span className="close" title="Close Modal">
          &times;
        </span>
      </Link>
    </div>
  );
}
export { First, Second, Third, Fourth, Fifth };
