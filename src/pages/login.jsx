import React from 'react'
import '../style/login.css';

const login = () => {
  return (
    <div className="container">
  <div className="header">
    <button className="close-button">
      <img src="src/assets/close-svgrepo-com.svg" alt="close" />
    </button>
  </div>
  <p className="login-text">Login</p>
  <a href="#" className="signup-text">
    Sign Up
  </a>
  <div className="form-container">
    <form>
      <p>Phone Number Or Email</p>
      <input type="text" />
    </form>
    <a href="#" className="need-help">
      Need Help?
    </a>
    <div>
      <button className="next-button">Next</button>
    </div>
    <div className="login-with">
      <span>or login with</span>
    </div>
    <div className="other-buttons">
      <button className="qr-button">
        <img src="src/assets/qr-code-scan-svgrepo-com.svg" alt="QR Code" />
        Scan Kode QR
      </button>
      <button className="other-methods">Other Methods</button>
    </div>
  </div>
</div>

  )
}

export default login