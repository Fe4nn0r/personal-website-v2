import React from "react";
import styles from "../styles/Socials.module.css";
import { useTranslation } from "next-i18next";
import Image from 'next/image';

export default function Socials() {
  const { t } = useTranslation();
  const socials = [
    {
      link: "https://github.com/fe4nn0r",
      name: "Github",
      icon: '/img/github/logo-white.png',
      iconWidth: 24,
      iconHeight: 24
    },
    {
      link: "https://twitter.com/fe4nn0r",
      name: "Twitter",
      icon: '/img/twitter/logo-blue.svg',
      iconWidth: 24,
      iconHeight: 24
    },
    {
      link: "https://www.linkedin.com/in/florentclerc",
      name: "Linkedin",
      icon: '/img/linkedin/logo-white.svg',
      iconWidth: 24,
      iconHeight: 21
    },
  ];
  return (
    <div className={styles.container}>
      <ul className={styles.socialList}>
        {socials.map((s) => (
          <li key={s.name}>
            <a href={s.link} title={s.name} className={styles.socialLink}>
              <Image src={s.icon} width={s.iconWidth} height={s.iconHeight} alt={s.name} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
