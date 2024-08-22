// components/LoadingSpinner.js
import styles from '../styles/LoadingSpinner.module.css';

const LoadingSpinner = () => (
  <div className={styles.spinnerOverlay}>
    <div className={styles.spinner}></div>
  </div>
);

export default LoadingSpinner;