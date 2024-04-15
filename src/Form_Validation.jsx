import React from "react";
import "./Form_Validation.css";
function Form_Validation() {
  // All variables declaration:--------
  const form = document.getElementById("form");
  const uname = document.getElementById("uname");
  const uemail = document.getElementById("uemail");
  const uphone = document.getElementById("uphone");
  const upass1 = document.getElementById("upass1");
  const upass2 = document.getElementById("upass2");
  const unameAlert = document.getElementById("unameAlert");
  const uemailAlert = document.getElementById("uemailAlert");

  // Password eye open and close section:--------
  const passCheck1 = document.getElementById("passCheck1");
  const passCheck2 = document.getElementById("passCheck2");
  const passEye1 = document.getElementById("pass-eye1");
  const passEye2 = document.getElementById("pass-eye2");

  const openCloseEye_1 = () => {
    if (upass1.type == "password") {
      upass1.type = "text";
      passEye1.src = "./img/open-eye.png";
    } else {
      upass1.type = "password";
      passEye1.src = "/img/closed-eye.png";
    }
  };
  const openCloseEye_2 = () => {
    if (upass2.type == "password") {
      upass2.type = "text";
      passEye2.src = "./img/open-eye.png";
    } else {
      upass2.type = "password";
      passEye2.src = "./img/closed-eye.png";
    }
  };

  // form validation function:-------
  const Form_Val = () => {
    form.target.preventDefault();
    validation();
  };

  // Validation function :-----
  const validation = () => {
    let unameVal = uname.value.trim();
    let uemailVal = uemail.value.trim();
    let uphoneVal = uphone.value.trim();
    let upass1Val = upass1.value.trim();
    let upass2Val = upass2.value.trim();

    // User name validation
    if (unameVal === "") {
      error(uname, "Enter the username");
    } else if (unameVal.length < 3) {
      error(uname, "Username must have minimun 3 characters");
    } else {
      success(uname);
    }

    // Email validation
    if (uemailVal === "") {
      error(uemail, "Enter the Email");
    } else if (emailValidation(uemailVal)) {
      success(uemail);
    } else {
      error(uemail, "Please enter valid email");
    }

    // Phone validation
    if (uphoneVal === "") {
      error(uphone, "Enter the phone number");
    } else if (uphoneVal.length < 10 || uphoneVal.length > 10) {
      error(uphone, "Enter 10 digit phone number");
    } else {
      success(uphone);
    }

    // Password validation
    if (upass1Val == "") {
      error(upass1, "Enter the password");
    } else if (upass1Val.length < 8) {
      error(upass1, "Username must have 8 characters");
    } else {
      success(upass1);
    }

    //Password comfirm validation
    if (upass2Val === "") {
      error(upass2, "Enter the password");
    } else if (upass2Val.length < 8) {
      error(upass2, "Password must have 8 characters");
    } else if (upass2Val == upass1Val) {
      success(upass2);
    } else {
      error(upass2, "Password dosen't match");
    }

    return success;
  };

  const error = (element, message) => {
    let inputgroup = element.parentElement;
    let alertElement = inputgroup.querySelector(".Alert");
    let inputElement = inputgroup.querySelector(".inputBox");

    alertElement.innerText = message;

    inputElement.style.borderColor = "red";
  };

  const success = (element) => {
    let inputgroup = element.parentElement;
    let alertElement = inputgroup.querySelector(".Alert");
    let inputElement = inputgroup.querySelector(".inputBox");

    alertElement.textContent = "";
    inputElement.style.borderColor = "green";
  };

  const emailValidation = (email) => {
    let emailPattern =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return email.match(emailPattern);
  };

  return (
    <>
      <div id="container">
        <div id="box">
          <h1>Register Form</h1>
          <form id="form" action="">
            {/* <!-- min 3 char --> */}
            <div class="input-control">
              <label for="uname">Name </label>
              <input
                class="inputBox"
                placeholder="Enter Name"
                id="uname"
                name="uname"
                type="text"
              />
              <br />
              <p class="Alert"></p>
            </div>

            {/* <!-- email validation --> */}
            <div class="input-control">
              <label for="uemail">Email </label>
              <input
                class="inputBox"
                placeholder="Enter Email"
                id="uemail"
                name="uemail"
                type="da"
              />
              <br />
              <p class="Alert"></p>
            </div>

            {/* <!-- 10 digit --> */}
            <div class="input-control">
              <label for="uphone">Phone </label>
              <input
                class="inputBox"
                placeholder="Enter Phone Number"
                id="uphone"
                name="uphone"
                type="number"
              />
              <br />
              <p class="Alert"></p>
            </div>

            <div class="passContainer">
              {/* <!-- password view --> */}
              <div class="input-control">
                <label for="upass1">Password </label>
                <div class="pass-container">
                  <input
                    class="inputBox"
                    placeholder="Enter Password"
                    id="upass1"
                    name="upass1"
                    type="password"
                  />
                  <span id="passCheck1" onClick={openCloseEye_1}>
                    <img src="./img/closed-eye.png" alt="" id="pass-eye1" />
                  </span>
                  <p class="Alert"></p>
                </div>
              </div>

              {/* <!-- same and 8 char min --> */}
              <div class="input-control">
                <label for="upass2">Confirm Password </label>
                <div class="pass-container">
                  <input
                    class="inputBox"
                    placeholder="Enter Confirm Password"
                    id="upass2"
                    name="upass2"
                    type="password"
                  />
                  <span id="passCheck2" onClick={openCloseEye_2}>
                    <img src="./img/closed-eye.png" alt="" id="pass-eye2" />
                  </span>
                  <p class="Alert"></p>
                </div>
              </div>
            </div>

            <button type="button" onClick={Form_Val}>
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form_Validation;
