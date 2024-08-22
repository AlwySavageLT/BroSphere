// Header.js
import React from 'react';
import { motion } from 'framer-motion';
import styles from './styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.logo}
      >
        BroSphere
      </motion.div>
      <nav className={styles.nav}>
        <motion.a
          href="#"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={styles.navLink}
        >
          Our story
        </motion.a>
        <motion.a
          href="#"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={styles.navLink}
        >
          Membership
        </motion.a>
        <motion.a
          href="#"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className={styles.navLink}
        >
          Write
        </motion.a>
        <motion.a
          href="#"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className={styles.navLink}
        >
          Sign in
        </motion.a>
      </nav>
    </header>
  );
};

export default Header;