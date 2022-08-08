import type { NextPage } from "next";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { slide as Menu } from "react-burger-menu";
import { DarkModeSwitch } from 'react-toggle-dark-mode';

import useDarkMode from '../useDarkMode';
import Socials from "../components/Socials";
import AboutMe from "../components/AboutMe";
import styles from "../styles/Home.module.css";
import Experiences from "../components/Experiences";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
      // Will be passed to the page component as props
    },
  };
}

function Nav({
  className = "",
  closeMenu,
}: {
  className?: string;
  closeMenu: () => void;
}) {
  const { t } = useTranslation();
  const [ colorTheme, setTheme ] = useDarkMode();

  function toggleTheme(isDarkMode: boolean) {
    // wtf typescript ?
    if (typeof setTheme !== 'function') {
      return;
    }
    setTheme(isDarkMode ? 'dark' : 'light');
  }
  return (
    <div className={className}>
      <nav>
        <ul className={styles.mainNavList}>
          <li>
            <a className="animated-link" href="/#aboutme" onClick={closeMenu}>
              {t("header.aboutMe")}
            </a>
          </li>
          <li>
            <a className="animated-link" href="/#skills" onClick={closeMenu}>
              {t("header.skills")}
            </a>
          </li>
          <li>
            <a
              className="animated-link"
              href="/#experiences"
              onClick={closeMenu}
            >
              {t("header.experiences")}
            </a>
          </li>
          <li>
            <a className="animated-link" href="/#projects" onClick={closeMenu}>
              {t("header.projects")}
            </a>
          </li>
        </ul>
      </nav>
      <div className="socials-dark-mode">
        <Socials />

        <div className="dark-mode-toggle-container">
          <DarkModeSwitch
            onChange={(isDarkMode: boolean) => toggleTheme(isDarkMode)}
            checked={colorTheme === 'light'}
            size={24}
            sunColor="#FFF"
            moonColor="#FFF"
          />
        </div>
      </div>
    </div>
  );
}

const Home: NextPage = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Florent Clerc - Développeur Frontend</title>
        <meta
          name="description"
          content="Florent Clerc, 31 ans, développeur fullstack, lyonnais"
        />
        <meta
          name="keywords"
          content="développeur frontend, développeur fullstack, cv développeur web, développeur web"
        />{" "}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_io/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />{" "}
      </Head>

      <main>
        <div className="header">
          <Menu
            isOpen={isMenuOpen}
            className={styles.mobileNav}
            onStateChange={({ isOpen }: { isOpen: boolean }) =>
              setIsMenuOpen(isOpen)
            }
            right
            customBurgerIcon={
              <img
                src="/icons/menu-line-white.svg"
                height={60}
                alt={t("menu.openIcon")}
              />
            }
            customCrossIcon={
              <img
                src="/icons/close-line-white.svg"
                height={60}
                alt={t("menu.openIcon")}
              />
            }
          >
            <Nav closeMenu={() => setIsMenuOpen(false)} />
          </Menu>

          <Nav
            className={styles.desktopNav}
            closeMenu={() => setIsMenuOpen(false)}
          />
        </div>
        <AboutMe />
        <Skills />
        <Experiences />
        <Projects />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
