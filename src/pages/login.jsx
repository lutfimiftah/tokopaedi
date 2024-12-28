import React from 'react';
import styles from '../style/login.module.css';

const login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button className={styles['close-button']}> {/* Perhatikan penggunaan bracket notation */}
          <img src="src/assets/close-svgrepo-com.svg" alt="close" />
        </button>
      </div>
      <p className={styles['login-text']}>Login</p>
      <a href="#" className={styles['signup-text']}>
        Sign Up
      </a>
      <div className={styles['form-container']}>
        <form>
          <p>Phone Number Or Email</p>
          <input type="text" />
        </form>
        <a href="#" className={styles['need-help']}>
          Need Help?
        </a>
        <div>
          <button className={styles['next-button']}>Next</button>
        </div>
        <div className={styles['login-with']}>
          <span>or login with</span>
        </div>
        <div className={styles['other-buttons']}>
          <button className={styles['qr-button']}>
            <img src="src/assets/qr-code-scan-svgrepo-com.svg" alt="QR Code" />
            Scan Kode QR
          </button>
          <button className={styles['other-methods']}>Other Methods</button>
        </div>
      </div>
    </div>
  );
};

export default login;
