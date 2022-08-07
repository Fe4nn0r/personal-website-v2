import React from 'react';
import { useTranslation, Trans } from 'next-i18next';
import styles from '../styles/AboutMe.module.css';

export default function AboutMe() {
  const { t } = useTranslation();
  return (
    <section id="aboutme" className={styles.section}>
      <div className="section-inner">
        <div className={styles.header}>
          <h1 className={styles.title}><Trans >{t('aboutme.title', {
            interpolation: {
              escapeValue: false
            }
          })}</Trans></h1>
        </div>
        <p className={styles.text}>{t('aboutme.subtitle')}</p>

        <p className={styles.text}>{t('aboutme.presentation')}</p>
        <p className={styles.text}>{t('aboutme.presentation2')}</p>
      </div>
    </section>
  );
}