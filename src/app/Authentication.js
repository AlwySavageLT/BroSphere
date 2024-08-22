import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase';
import styles from './styles/Authentication.module.css';

const Authentication = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [isEmailSignIn, setIsEmailSignIn] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      onClose();
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  const handleEmailSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onClose();
    } catch (error) {
      console.error('Error signing in with email:', error);
    }
  };

  const handleEmailSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      onClose();
    } catch (error) {
      console.error('Error signing up with email:', error);
    }
  };

  const handleToggleSignUp = () => {
    setIsSigningUp((prevState) => !prevState);
    setIsEmailSignIn(false);
  };

  const handleContinueWithEmail = () => {
    setIsEmailSignIn(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={styles.authContainer}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <button className={styles.closeButton} onClick={onClose}>
              ×
            </button>
            <h2>{isSigningUp ? 'Sign up to BroSphere' : 'Sign in to BroSphere'}</h2>
            {!isEmailSignIn ? (
              <>
                <button className={styles.googleButton} onClick={handleGoogleSignIn}>
                  <img src="/google-icon.png" alt="Google" />
                  {isSigningUp ? 'Sign up with Google' : 'Sign in with Google'}
                </button>
                <div className={styles.divider}>or</div>
                <button className={styles.emailButton} onClick={handleContinueWithEmail}>
                  Continue with email
                </button>
              </>
            ) : (
              <>
                {isSigningUp && (
                  <>
                    <input
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={styles.input}
                    />
                    <input
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className={styles.input}
                    />
                  </>
                )}
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.input}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={styles.input}
                />
                {isSigningUp && (
                  <label className={styles.checkbox}>
                    <input type="checkbox" />
                    <span>I agree with BroSphere's Terms of Service, Privacy Policy, and default Notification Settings.</span>
                  </label>
                )}
                <button className={styles.submitButton} onClick={isSigningUp ? handleEmailSignUp : handleEmailSignIn}>
                  {isSigningUp ? 'Create Account' : 'Sign In'}
                </button>
              </>
            )}
            <p className={styles.switchMode}>
              {isSigningUp ? 'Already have an account?' : "Don't have an account?"}
              <button onClick={handleToggleSignUp}>{isSigningUp ? 'Sign In' : 'Sign up'}</button>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Authentication;