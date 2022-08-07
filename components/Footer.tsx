import React from 'react';
import { useTranslation, Trans } from 'next-i18next';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className={styles.main}>
      <div className={styles.inner}>
        <a href="https://www.midjourney.com" target="_blank" rel="noreferrer">{t('footer.midjourney')}</a>
        <a href="https://nextjs.org/" target="_blank" rel="noreferrer">{t('footer.nextJS')}</a>
      </div>
    </footer>
  );
}