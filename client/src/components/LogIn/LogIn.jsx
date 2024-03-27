import React, { useState } from 'react';
import {EyeInvisibleOutlined, EyeOutlined} from "@ant-design/icons";


import Navbar from './Navbar';

// import "./main.css";
import "../css/style.css";

import Google from '../img/google.svg';
import Facebook from '../img/facebook.svg';
import mail from '../img/mail.svg';


const LogIn = () => { 

  const [rulesChecked, setRulesChecked] = useState(false);

  // SHOW/HIDE

  const [visible, setVisible] = useState(false);


  // VALIDATION

    const [inputFields, setInputFields] = useState({
        email: "",
        password: "",
      });
      const [errors, setErrors] = useState({});
      const [statusMessage, setStatusMessage] = useState("");

    const validateValues = (inputValues) => {
        let errors = {};
        if (inputValues.email.length < 1) {
            errors.email = "The field is empty";
        }


        if (inputValues.password.length < 5) {
            errors.password = "Password is to short";
        }

        if (inputValues.password.length < 1) {
            errors.password = "The field is empty";
        }
        return errors;
    };

    const handleChange = (e) => {
        setInputFields({ ...inputFields, [e.target.name]: e.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validateValues(inputFields));
        if (Object.keys(errors).length === 0) {
          finishSubmit();
        }
    };

    const finishSubmit = () => {
        let data = {username: inputFields.email, password: inputFields.password};
        fetch('http://localhost:8000/accounts/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).catch((error) => {
          console.error('Error:', error);
        }).then(response => response.json()).then(data => {
            setStatusMessage(data.message);
            if (data.access) {
                localStorage.setItem('access_token', data.access);
                window.location.href = '/';
            }
        })
      };

      const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^\S+@\S+\.\S+$/
          );
      };

      function PasswordReset() {
        if (inputFields.email.length < 1) {
            setErrors({email: "Please enter your email address"});
            return;
        }else if (!validateEmail(inputFields.email)) {
            setErrors({email: "Please enter a valid email address"});
            return;
        }else {
          setErrors({});
          fetch('http://localhost:8000/accounts/password-reset/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: inputFields.email}),
          }).catch((error) => {
            console.error('Error:', error);
          }).then(response => response.json()).then(data => {
            setStatusMessage(data.message);
          })
        }
      }


    return ( 
      <>
       <Navbar/>
        <div className="login">
          <div className="circle"></div>
          <h1 className="loginTitle">Log in</h1>
          
          <div className="wrapper">
            <form onSubmit={handleSubmit} className="right validate-form">
              <span className="LoginTitle_small">Log in</span>

              <div className='space-cont'>
                <label className="typelabel">Email</label>
              </div>

              <div className="input validate-input">
                <input className="input100" type="email" placeholder="Email Adress"
                name="email"
                value={inputFields.email}
                onChange={handleChange}/>
                <span className="focus-input100"></span>
                {errors.email ? (
                  <div className='alert-validate' data-validate={errors.email} ></div>
                ) : null}
              </div>

              <div className='space-cont' onClick={() => setVisible(!visible)}>
                <label className="typelabel">Password</label>
                {visible ?

                <EyeOutlined className='typelabel' />

                :

                <EyeInvisibleOutlined className='typelabel'/>

                }
              </div>

              <div className="input validate-input">
                <input className="input100" placeholder="Password" 
                name="password"
                value={inputFields.password}
                type={visible ? "text" : "password"}
                onChange={handleChange}/>
                <span className="focus-input100"></span>
                {errors.password ? (
                  <div className='alert-validate' data-validate={errors.password} ></div>
                ) : null}
              </div>

              <label className="checkbox-wrapper">
                <input id="checkAll" type="checkbox" className="checkbox-elem" name="checkAll" checked={rulesChecked} onChange={() => setRulesChecked(prev => !prev)}/>
                <h1>
                  Remember me.
                </h1>
              </label>

              <button type='submit' className="submit">Login</button>


            </form>

            <div className="center">
              <div className="line" />
              <div className="or">OR</div>
            </div>

            <div className="left">
              <div className="loginButton btn" onClick={Google}>
                <img src={Google} alt="google" className="icon" />
                  Continue with Google
              </div>

              <div className="loginButton btn" onClick={Facebook}>
                <img src={Facebook} alt="facebook" className="icon" />
                  Continue with Facebook
              </div>

              <div className="loginButton btn">
                <img src={mail} alt="mail" className="icon" />
                  Sign up with email
              </div>

            </div>
            {statusMessage ? (
                        <span className="success">{statusMessage}</span>
                    ) : null}
          </div>

          {/* <div > */}
                <a onClick={PasswordReset} className='tx1'>
                    Can’t log in?
                </a>
                <h1 className='tx2' >
                Secure Login with reCAPTCHA subject to Google
                <a href="">Terms</a> & <a href="">Privacy</a>
                </h1>
            {/* </div> */}
          
        </div>
        </>
    );
}

export default LogIn;