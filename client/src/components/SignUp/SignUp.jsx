import React, {useEffect, useState} from 'react';
import {EyeInvisibleOutlined, EyeOutlined} from "@ant-design/icons";

import "../css/style.css";

import Google from '../img/google.svg';
import Facebook from '../img/facebook.svg';

const SignUp = (
) => {

    const handleChange = (e) => {
        setInputFields({ ...inputFields, [e.target.name]: e.target.value });
        setErrors(validateValues(inputFields));
    };

    const validateValues = (inputValues) => {
        let errors = {};
        if (inputValues.username.length < 1) {
            errors.username = "The field is empty";
        }
        if (inputValues.email.length < 1) {
            errors.email = "The field is empty";
        }
        if (inputValues.password.length < 5) {
            errors.password = "Password is to short";
        }
        if (inputValues.password.length < 1) {
            errors.password = "The field is empty";
        }
        if (inputValues.confirm_password !== inputValues.password) {
            errors.confirm_password = "Passwords do not match";
        }
        if ((inputValues.height_cm.length < 1) && (inputValues.height_feet === "0" && inputValues.height_inches === "0")) {
            errors.height = "The field is empty";
        }
        if (inputValues.weight.length < 1) {
            errors.weight = "The field is empty";
        }
        return errors;
    };

    const handleSend = (e) => {
        let data = inputFields;
        if (inputFields.height_feet === "0" && inputFields.height_inches === "0") {
            inputFields.height = inputFields.height_cm;
        } else {
            inputFields.height = (inputFields.height_feet * 30.48) + (inputFields.height_inches * 2.54);
        }
        if (inputFields.weight_unit === "Pounds") {
            inputFields.weight = inputFields.weight * 0.453592;
        }else {
            inputFields.weight = inputFields.weight;
        }
        e.preventDefault();
        console.log(inputFields);
        fetch('http://localhost:8000/accounts/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputFields),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    // SHOW/HIDE

    const [visible, setVisible] = useState(false);

    const [rulesChecked, setRulesChecked] = useState(false);
    const [inputFields, setInputFields] = useState({
        username: "",
        email: "",
        password: "",
        confirm_password: "",
        gender: "",
        height_cm: "",
        height_feet: "",
        height_inches: "",
        weight: "",
        weight_unit: "",
    });
    const [errors, setErrors] = useState({});

    return ( 

        <body className="light-flourish-body">
            <h2 className="title">Sign up for free to start live-streaming</h2>
            <noscript>
                <div>Your web browser must have JavaScript enabled in order for this application to display correctly.</div>
            </noscript>
            <form onSubmit={handleSend}>
                    <div align="center">
                        <div className="btn-auth" onClick={Google}>
                            <img src={Google} alt="google" className="icon" />
                                Continue with Google
                        </div>

                        <div className="btn-auth" onClick={Facebook}>
                            <img src={Facebook} alt="facebook" className="icon" />
                                Continue with Facebook
                        </div>
                    
                        <div className='line-container' >
                            <div className='divider-r' ></div>
                            <h1 className='or-sign'>OR</h1>
                            <div className='divider-l' ></div>
                        </div>

                    </div>

                    <div className='form__container'>
                        <h2 className="title1">Sign up with your email address</h2>
                        <div>
                            <label className='typelabel' >Profile Name</label>
                            <div>
                                <input className='input-row' value={inputFields.username} onChange={handleChange} type='text' name='username' placeholder='Enter your profile name'/>
                                <p className='error'>{errors.username}</p>
                            </div>
                        </div>

                        <div>
                            <label className="typelabel">Email</label>
                            <div>
                                <input id="emailInput" className='input-row' value={inputFields.email} onChange={handleChange} type='email' name='email' placeholder='Enter your email address' autocomplete="email"/>
                                <p className='error'>{errors.email}</p>
                            </div>
                        </div>

                        <div className='space-cont' >
                            <label className="typelabel">Password</label>
                            {visible ?

                                <EyeOutlined className='typelabel' onClick={() => setVisible(!visible)} />

                                :

                                <EyeInvisibleOutlined className='typelabel' onClick={() => setVisible(!visible)}/>

                            }
                        </div>

                        <div>
                            <input className='input-row' type={visible ? "text" : "password"} value={inputFields.password} onChange={handleChange} name='password' id="password" placeholder='Enter your password' autocomplete="new-password"/>
                            <p className='error'>{errors.password}</p>
                            <label className='typelabel-s'>Use 8 or more characters with a mix of letters, numbers & symbols</label>
                        </div>


                        <div>
                            <label className="typelabel">Confirm Password</label>
                            <div className="typespan">
                                <input className='input-row' type={visible ? "text" : "password"} value={inputFields.confirm_password} onChange={handleChange} name='confirm_password' id="confirm_password" placeholder='Confirm your password' autocomplete="new-password"/>
                                <p className='error'>{errors.confirm_password}</p>
                            </div>
                        </div>

                    </div>

                    <div className="form__container">
                        <label className="typelabel-b">What’s your gender? </label>
                        <radiogroup className="left-cont" name="gender" value={inputFields.gender} onChange={handleChange}>

                                <div className="center-cont">
                                    <input type="radio" id="maleradio" value="Male" name="gender" />
                                    <label className='label' for="maleradio" >Male</label>
                                </div>

                                <div className="center-cont">
                                    <input type="radio" id="femaleradio" value="Female" name="gender" />
                                    <label className='label' for="femaleradio" >Female</label>
                                </div>

                        </radiogroup>
                        <p className='error'>{errors.gender}</p>
                    </div>

                    {/* <div className="form__container">
                        <label className="typelabel-b">What’s your date of borth?</label>
                        <div className="typespan">
                            <div className="dropdown">
                                <span className="typelabel">Day</span>
                                <div>
                                <select className="text-box1"  name='day' id='day'>
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                                    <option value='6'>6</option>
                                    <option value='7'>7</option>
                                    <option value='8'>8</option>
                                    <option value='9'>9</option>
                                    <option value='10'>10</option>
                                    <option value='11'>11</option>
                                    <option value='12'>12</option>
                                    <option value='13'>13</option>
                                    <option value='14'>14</option>
                                    <option value='15'>15</option>
                                    <option value='16'>16</option>
                                    <option value='17'>17</option>
                                    <option value='18'>18</option>
                                    <option value='19'>19</option>
                                    <option value='20'>20</option>
                                    <option value='21'>21</option>
                                    <option value='22'>22</option>
                                    <option value='23'>23</option>
                                    <option value='24'>24</option>
                                    <option value='25'>25</option>
                                    <option value='26'>26</option>
                                    <option value='27'>27</option>
                                    <option value='28'>28</option>
                                    <option value='29'>29</option>
                                    <option value='30'>30</option>
                                    <option value='31'>31</option>
                                </select>
                                </div>
                            </div>
                            <div className="dropdown">
                                <span className="typelabel">Month</span>
                                <select className="text-box1 dropdown-toggle" id="monthselect" name='month'>
                                    <option value="January" selected="selected">January</option>
                                    <option value="February">February</option>
                                    <option value="March">March</option>
                                    <option value="April">April</option>
                                    <option value="May">May</option>
                                    <option value="June">June</option>
                                    <option value="July">July</option>
                                    <option value="August">August</option>
                                    <option value="September">September</option>
                                    <option value="October">October</option>
                                    <option value="November">November</option>
                                    <option value="December">December</option>
                                </select>
                            </div>
                            <div className="dropdown">
                                <span className="typelabel">Year</span>
                                <input className="num-box text-box1" type='number' id="year" name='year' maxlength="4"/>
                            </div>
                        </div>
                    </div> */}
                                <div className="form__container">
                                    <label className="typelabel-b">Height</label>
                                    <div className="typespan">
                                        <div className="dropdown">
                                            <span className="typelabel-r">ft</span>
                                            <select value={inputFields.height_feet} onChange={handleChange} className="text-box dropdown-toggle" id='height-feet' name='height_feet'>
                                                <option value="0" selected="selected">0</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                            </select>
                                        </div>
                                        <div className="dropdown">
                                            <span className="typelabel-r">in</span>
                                            <select value={inputFields.height_inches} onChange={handleChange} className="text-box dropdown-toggle" id='height-inches' name='height_inches'>
                                                <option value="0" selected="selected">0</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                            </select>
                                        </div>
                                        <b className='or_h' >or &nbsp;&nbsp;</b>
                                        <div className="dropdown">
                                            <span className="typelabel-r">cm</span>
                                            <input value={inputFields.height_cm} onChange={handleChange} className="text-box2 num-box" id="height-cm" type='number' name='height_cm' min="1" max='300' maxlength="3" placeholder='Enter your height'/>
                                        </div>
                                    </div>
                                    <p className='error'>{errors.height}</p>
                                </div>
                                <div className="form__container">
                                    <label className="typelabel-b">Weight</label>
                                    <div className="typespan">
                                        <div className='dropdown'>
                                            <input value={inputFields.weight} onChange={handleChange} className="text-box2" type='number' id="weightnum" name='weight' min="1" max='2000' maxlength="4" placeholder='Enter your height'/>
                                        </div>
                                        <div className="dropdown">
                                            <select value={inputFields.height_unit} onChange={handleChange} className="text-box1" id="weighttype" name='weight_unit'>
                                                <option value="Pounds">Pounds</option>
                                                <option value="Kilograms">Kilograms</option>
                                            </select>
                                        </div>
                                    </div>
                                    <p className='error'>{errors.weight}</p>
                                </div>
                        <div className='form__container'>
                                <label className="checkbox-wrapper">
                                    <input id="checkAll" type="checkbox" className="checkbox-elem" name="checkAll" checked={rulesChecked} onChange={() => setRulesChecked(prev => !prev)}/>
                                    <p>
                                    Share my registration data with our content providers for marketing purposes.
                                    </p>
                                </label>
                        </div>


                        <div className='form__container'>
                            <button className='submit_sign' type='submit'>
                                Sign Up
                            </button>
                        </div>
                        {/* <input type="hidden" name="signup" value="true"/>
                        <input type="hidden" name="promo" id="promo-hidden" value="null"/>
                        <input type="hidden" name="segment" id="segment" value="null"/>
                        <input type="hidden" name="tid" id="tid" value="null"/>
                        <input type="hidden" name="gold-token" id="gold-token" value=""/> */}
                </form>
            </body>
     );
}
 
export default SignUp;