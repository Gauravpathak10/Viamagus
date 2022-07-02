import React from 'react';
import "./Login.css"

function Login() {

    function validation() {
        var email = document.getElementById('email').value
        var pass = document.getElementById('email').value
        if (!email) {
            document.getElementById('warning').innerHTML = "⛔ Email field is required"
        }
        if (email || !pass) {
            document.getElementById('warning-pass').innerHTML = "⛔ Password is required"
        }
    }

    return (
        <div>
            <div className='login-bg'>
            </div>
            <div className='login-content-body'>
                <div className='login-content'>
                    <div className='login-logo'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJeZIPvUv8zAc9pW0pO8_dBeMI5BYl7jcrD5FZsau-iYvUFxn8bIqA7SvfdtGa01x5sxM&usqp=CAU' width="90" height="40" alt='abc'></img>
                    </div>
                    <div className='login-content-inner'>
                        <p className='login-text'>Login</p>
                        <div className='login-tree-img'>
                            <img src='https://interpretered.com/wp-content/uploads/2019/06/tree-home.svg' width="120"></img>
                        </div>
                        <div className='login-inputs'>
                            <input type="text" name='email' placeholder='Email' className='email-input' id="email"></input>
                            <p id='warning' style={{ margin: "0", padding: "0", textAlign: "left", color: "red", fontSize: "12px" }}></p>
                            <input type="text" name='email' placeholder='Password' className='email-input' id='password'></input>
                            <p id='warning-pass' style={{ margin: "0", padding: "0", textAlign: "left", color: "red", fontSize: "12px" }}></p>
                            <button className='login-btn' onClick={validation}>Sign In</button>
                            <div className='login-forget-pass-main'>
                                <p style={{ margin: "5px", fontSize: "12px", fontWeight: "500" }}>Forget Password?</p>
                                <p style={{ margin: "5px", fontSize: "12px", fontWeight: "500", color: "red" }}>New User? Sign Up</p>
                            </div>
                            <p style={{ textAlign: "center" }}>Or</p>
                            <button className='google-btn'><p><img src='https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515358_10512.png' width="25" height="25" /></p><p>Continue with Google</p></button>
                            <button className='google-btn'><p><img src='https://static.wixstatic.com/media/e316f544f9094143b9eac01f1f19e697.png/v1/fill/w_29,h_29,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e316f544f9094143b9eac01f1f19e697.png' width="25" height="25" /></p><p>Continue with Facebook</p></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;