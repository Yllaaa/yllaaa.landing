// components/TermsAndPolicy.jsx
import React from 'react';
import styles from './TermsAndPolicy.module.css';

const TermsAndPolicy = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Terms and Policy</h1>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Introduction</h2>
        <p className={styles.text}>
          Welcome to our platform, a place designed to connect freelancers with clients. By accessing
          or using our platform, you agree to comply with our terms and policies.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>User Responsibilities</h2>
        <p className={styles.text}>
          Users must provide accurate information and maintain the confidentiality of their accounts.
          Freelancers and clients are responsible for ensuring the legality and fairness of their
          agreements.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Payment and Fees</h2>
        <p className={styles.text}>
          Payment transactions between clients and freelancers are processed through our secure
          payment system. We charge a service fee for facilitating these transactions.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Privacy Policy</h2>
        <p className={styles.text}>
          Your privacy is important to us. We collect and use your personal data only as described
          in our Privacy Policy.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Prohibited Activities</h2>
        <p className={styles.text}>
          Users are prohibited from engaging in fraudulent activities, violating intellectual property
          rights, or using the platform for illegal purposes.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Termination</h2>
        <p className={styles.text}>
          We reserve the right to terminate accounts that violate our terms and policies or engage
          in harmful activities.
        </p>
      </section>

      <footer className={styles.footer}>
        <p className={styles.text}>
          If you have any questions about our terms and policies, please contact us at
          support@example.com.
        </p>
      </footer>
    </div>
  );
};

export default TermsAndPolicy;
