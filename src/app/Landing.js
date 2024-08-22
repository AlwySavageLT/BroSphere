"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { motion } from 'framer-motion';
import Header from './Header';
import Authentication from './Authentication';
import LoadingSpinner from './components/LoadingSpinner';
import styles from './styles/Landing.module.css';
import { auth } from '../lib/firebase';

const Landing = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) {
        setLoading(true);
        router.push('/').then(() => setLoading(false));
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleStartReading = async () => {
    setLoading(true);
    if (user) {
      await router.push('/');
    } else {
      await router.push('/auth');
    }
    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.content}
        >
          <h1 className={styles.title}>Human stories & ideas</h1>
          <p className={styles.description}>
            A place to read, write, and deepen your understanding.
          </p>
          <button className={styles.cta} onClick={handleStartReading}>
            Start reading
          </button>
        </motion.div>
        <Authentication />
      </main>
      {loading && <LoadingSpinner />}
    </div>
  );
};

export default Landing;