import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const capch = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const [runCpach, setCapcha] = useState("");
  const [enteredCaptcha, setEnteredCaptcha] = useState("");
  const [captchaError, setCaptchaError] = useState("");

  const generateCaptcha = () => {
    let capchaLetters = "";
    for (let i = 0; i < 7; i++) {
      let randNumber = Math.floor(Math.random() * capch.length);
      capchaLetters += capch[randNumber];
    }
    setCapcha(capchaLetters);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const displayNameError = (e) => {
    if (e.target.value === "") {
      setNameError("Username cannot be blank");
    } else {
      setNameError("");
    }
  };

  const displayEmailError = (e) => {
    if (e.target.value === "") {
      setEmailError("Password cannot be blank.");
    } else {
      setEmailError("");
    }
  };

  const handleVerification = (e) => {
    const value = e.target.value;
    setEnteredCaptcha(value);
    if (value !== runCpach) {
      setCaptchaError("The verification code is incorrect.");
    } else {
      setCaptchaError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.trim() === "" || email.trim() === "" || enteredCaptcha.trim() === "") {
      alert("Please fill all fields correctly before logging in!");
      return;
    }
    if (email.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }
    if (enteredCaptcha !== runCpach) {
      alert("Captcha verification failed!");
      return;
    }

    try {
      const res = await axios.get("http://localhost:5000/users");
      const users = res.data;
      const foundUser = users.find(
        (user) => user.username === name && user.password === email
      );

      if (foundUser) {
        alert("Login Successful!");
        navigate("/dashboard");
      } else {
        alert("Invalid username or password!");
      }
    } catch (err) {
      console.error(err);
      alert("Server error, please try again later");
    }
  };

  let color = ["#1982c4", "#cb997e", "#aad576", "#9f8be8", "#2a2b47", "#a83aa8"];
  let [bgColor, setColor] = useState(color[0]);
  let clr1 = () => setColor(color[0]);
  let clr2 = () => setColor(color[1]);
  let clr3 = () => setColor(color[2]);
  let clr4 = () => setColor(color[3]);
  let clr5 = () => setColor(color[4]);
  let clr6 = () => setColor(color[5]);

  return (
    <div className='container-fluid main_container d-flex flex-column flex-md-row align-items-stretch justify-content-center p-0' style={{ backgroundColor: bgColor, minHeight: '100vh' }}>
      <div className='d-none d-md-flex flex-column justify-content-center align-items-center side_container1 text-center px-3' style={{ width: '40%', background: '#ffffff', padding: 24 }}>
        <div className='side_container text-center' style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="/src/components/Home/kl logo.jpg" alt="KLU Logo" style={{ maxWidth: '70%', height: 'auto', display: 'block' }} />
        </div>
        <div className='text_container' style={{ marginTop: 18 }}>
          <p className='side_container_text ' style={{ color: '#033049', fontSize: 13 }}>© Copyright 2024 by K L Deemed to be University. All Rights Reserved.</p>
        </div>
      </div>

      <div className='main_card col-11 col-sm-9 col-md-7 col-lg-5 col-xl-4 main_card p-4 shadow rounded' style={{ maxWidth: 480 }}>
        <div style={{ width: '100%' }}>
          <div className='d-flex mt-3 justify-content-between align-items-center' style={{ marginBottom: 12 }}>
            <div className='img_element d-flex align-items-center' style={{ gap: 8 }}>
              <img className='card_image' src='/src/components/Home/kl logo.jpg' alt="KL University Logo" style={{ maxWidth: 96, height: 'auto' }} />
              <img className='card_image' src='/src/components/Home/kl logo.jpg' alt="KLH Logo" style={{ maxWidth: 56, height: 'auto', opacity: 0.9 }} />
            </div>
            <div className='clr_cont d-flex' style={{ gap: 8 }}>
              <div className='color_container clr1' onClick={clr1} style={{ width:18, height:18, borderRadius:6, background: color[0], cursor:'pointer' }}></div>
              <div className='color_container clr2' onClick={clr2} style={{ width:18, height:18, borderRadius:6, background: color[1], cursor:'pointer' }}></div>
              <div className='color_container clr3' onClick={clr3} style={{ width:18, height:18, borderRadius:6, background: color[2], cursor:'pointer' }}></div>
              <div className='color_container clr4' onClick={clr4} style={{ width:18, height:18, borderRadius:6, background: color[3], cursor:'pointer' }}></div>
              <div className='color_container clr5' onClick={clr5} style={{ width:18, height:18, borderRadius:6, background: color[4], cursor:'pointer' }}></div>
              <div className='color_container clr6' onClick={clr6} style={{ width:18, height:18, borderRadius:6, background: color[5], cursor:'pointer' }}></div>
            </div>
          </div>

          <div className='cardElements mt-5'>
            <h1 className='login_head text-center mt-4'>Login</h1>
            <form className='input_elements' onSubmit={handleSubmit}>
              <div className='mb-3'>
                <input
                  className='inputElements form-control'
                  type='text'
                  placeholder='Enter Username'
                  id='username'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={displayNameError}
                />
                <p className='nameError' style={{ color: '#b91c1c', marginTop: 6 }}>{nameError}</p>
              </div>
              <div className='mb-3'>
                <input
                  className='inputElements form-control'
                  type='password'
                  id='password'
                  placeholder='Enter Password'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={displayEmailError}
                />
                <p className='emailError' style={{ color: '#b91c1c', marginTop: 6 }}>{emailError}</p>
              </div>
              <div className='mb-2 form-check'>
                <input type='checkbox' id='check' className='form-check-input' />
                <label htmlFor="check" className='form-check-label'>Remember Me</label>
              </div>
              <div className='d-flex align-items-center gap-2 mb-2'>
                <input className='capcha form-control' type='text' value={runCpach} readOnly style={{ width: 'auto', display: 'inline-block' }} />
                <button type="button" className='btn btn-light' onClick={generateCaptcha}>🔄</button>
              </div>
              <div className='mb-2'>
                <input
                  className='inputElements form-control'
                  type='text'
                  placeholder='Enter verification Code'
                  value={enteredCaptcha}
                  onChange={handleVerification}
                  onBlur={handleVerification}
                />
                <p className='CaptchaError' style={{ color: '#b91c1c', marginTop: 6 }}>{captchaError}</p>
              </div>
              <div className='anchor_elements d-flex justify-content-between align-items-center mb-3'>
                <div>
                  <a href='' onClick={(e)=>e.preventDefault()}>Forgot Password?</a>
                  <span style={{ margin: '0 8px' }}>|</span>
                  <a href='' onClick={(e)=>e.preventDefault()}>Parent Registration?</a>
                </div>
                <a href='' onClick={(e)=>e.preventDefault()}>MFA Registration?</a>
              </div>
              <button type='submit' className='btn btn-primary mt-3 w-100' style={{ backgroundColor: bgColor, borderColor: bgColor }}>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}