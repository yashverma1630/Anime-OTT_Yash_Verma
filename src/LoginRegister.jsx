import React, { useState } from 'react';
import './LoginRegister.css'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { CiRead } from "react-icons/ci";
import { FaUserSecret } from "react-icons/fa";

const LoginRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegisterClick = () => {
    setIsRegistering(true);
  };

  const handleLoginClick = () => {
    setIsRegistering(false);
  };

  return (
    <body className='Main-Div'>
        <div className='Heading-Box1'>
            <h3 className='Heading-Anime'>Welcome to the Anime world !!!</h3>
        </div>
        <div className='Heading-Box2'>
        <p>If you are new user click on <span onClick={handleRegisterClick} className='Top-Link' style={{cursor:'pointer'}}>Register</span>. </p>
        <p> Already a user ?, Click on <span onClick={handleLoginClick} className='Top-Link' style={{cursor:'pointer'}}>Login</span></p>
        </div>

        
        <form action="#" className='Login-Box'>
          {isRegistering ? (
            <>
          <p className='Login-Heading'>Register</p>
          <p className='Terms-Conditions'>By signing in you are accepting <br /> our <a href="#" className='T-C'> Terms & Conditions </a></p>
          <p className='Login-Register'><span onClick={handleLoginClick} className='Login-Title2' style={{cursor:'pointer'}}>Login</span><span onClick={handleRegisterClick} className='Register-Title2' style={{cursor: 'pointer'}}>Register</span></p>
          <div>
          <p className='Email-Box'>
            <div className='Email-Underline'>
            <FaUserSecret />
            <input type="Username" name="Email" id="Email" placeholder="Enter Username" required className='Email'/>
            </div>
            </p>
          <p className='Email-Box'>
            <div className='Email-Underline'>
            <FaUser />
            <input type="email" name="Email" id="Email" placeholder="Enter Email" required className='Email'/>
            </div>
            </p>
          <p className='Password-Box'>
            <div className='Password-Underline'>
            <FaLock />
            <input type={showPassword ? "text":"password"} name="Password" id="Password" placeholder="Enter Password" required className='Password'/>
            </div>
            <CiRead onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}/>
            </p>
          </div>
          <div className="Checkpoint">
            <input type="checkbox" name="RememberPassword" id="RememberPassword" required/><span className='Remember-Password'>I confirm that data entered is correct.</span>
          </div>
          <div className='Login-Button-Box'>
            <input type="submit" name="Login" id="Login" value={'Register'} className='Login-Button' />
          </div>
          <p className='Or-Connect-With'>Or connect with</p>
          <div className='logo-box'>
          <div><a href="#"><img src="https://static.vecteezy.com/system/resources/previews/023/986/613/non_2x/facebook-logo-facebook-logo-transparent-facebook-icon-transparent-free-free-png.png" alt="facebook" className='facebook-img' /></a></div>
          <div><a href="#"><img src="https://static.vecteezy.com/system/resources/thumbnails/018/930/415/small/instagram-logo-instagram-icon-transparent-free-png.png" alt="instagram" className='instagram-img'/></a></div>
          <div><a href="#"><img src="https://static.vecteezy.com/system/resources/previews/018/930/468/non_2x/pinterest-logo-pinterest-transparent-free-png.png" alt="pinterest" className='pinterest-img' /></a></div>
          <div><a href="#"><img src="https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png" alt="linkedin" className='linkedin-img'/></a></div>
        </div>
        </>
          ):(
            <>
            <p className='Login-Heading'>Login</p>
          <p className='Terms-Conditions'>By signing in you are accepting <br /> our <a href="#" className='T-C'> Terms & Conditions </a></p>
          <p className='Login-Register'><span onClick={handleLoginClick} className='Login-Title1' style={{cursor:'pointer'}}>Login</span><span onClick={handleRegisterClick} className='Register-Title1' style={{cursor: 'pointer'}}>Register</span></p>
          <div>
          <p className='Email-Box'>
            <div className='Email-Underline'>
            <FaUser />
            <input type="email" name="Email" id="Email" placeholder="Enter Email" required className='Email'/>
            </div>
            </p>
          <p className='Password-Box'>
            <div className='Password-Underline'>
            <FaLock />
            <input type={showPassword ? "text":"password"} name="Password" id="Password" placeholder="Enter Password" required className='Password'/>
            </div>
            <CiRead onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}/>
            </p>
          </div>
          <div className="Checkpoint">
            <input type="checkbox" name="RememberPassword" id="RememberPassword" required/><span className='Remember-Password'>Remember Password</span> <a href="" className='Forget-Password'>Forget Password ?</a>
          </div>
          <div className='Login-Button-Box'>
            <input type="submit" name="Login" id="Login" value={'Login'} className='Login-Button' />
          </div>
          <p className='Or-Connect-With'>Or connect with</p>
          <div className='logo-box'>
          <div><a href="#"><img src="https://static.vecteezy.com/system/resources/previews/023/986/613/non_2x/facebook-logo-facebook-logo-transparent-facebook-icon-transparent-free-free-png.png" alt="facebook" className='facebook-img' /></a></div>
          <div><a href="#"><img src="https://static.vecteezy.com/system/resources/thumbnails/018/930/415/small/instagram-logo-instagram-icon-transparent-free-png.png" alt="instagram" className='instagram-img'/></a></div>
          <div><a href="#"><img src="https://static.vecteezy.com/system/resources/previews/018/930/468/non_2x/pinterest-logo-pinterest-transparent-free-png.png" alt="pinterest" className='pinterest-img' /></a></div>
          <div><a href="#"><img src="https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png" alt="linkedin" className='linkedin-img'/></a></div>
        </div>
        </>
          )}
        </form>
    </body>
  );
}

export default LoginRegister