import type { NextPage } from "next";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
// @ts-expect-error
import { slide as Menu } from "react-burger-menu";
import { DarkModeSwitch } from "react-toggle-dark-mode";

import useDarkMode from "../useDarkMode";
import Socials from "../components/Socials";
import AboutMe from "../components/AboutMe";
import styles from "../styles/Home.module.css";
import Experiences from "../components/Experiences";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Link from "next/link";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const locale = router.locale;
  const [colorTheme, setTheme] = useDarkMode();

  function toggleTheme(isDarkMode: boolean) {
    // wtf typescript ?
    if (typeof setTheme !== "function") {
      return;
    }
    setTheme(isDarkMode ? "dark" : "light");
  }
  return (
    <div className={className}>
      <nav>
        <ul className={styles.mainNavList}>
          <li>
            <Link
              className="animated-link"
              href="/#aboutme"
              onClick={closeMenu}
            >
              {t("header.aboutMe")}
            </Link>
          </li>
          <li>
            <Link className="animated-link" href="/#skills" onClick={closeMenu}>
              {t("header.skills")}
            </Link>
          </li>
          <li>
            <Link
              className="animated-link"
              href="/#experiences"
              onClick={closeMenu}
            >
              {t("header.experiences")}
            </Link>
          </li>
          <li>
            <Link
              className="animated-link"
              href="/#projects"
              onClick={closeMenu}
            >
              {t("header.projects")}
            </Link>
          </li>
        </ul>
      </nav>
      <div className="socials-dark-mode">
        <Socials />

        <div className="dark-mode-toggle-language-switch-container">
          <DarkModeSwitch
            onChange={(isDarkMode: boolean) => toggleTheme(isDarkMode)}
            checked={colorTheme === "light"}
            size={24}
            sunColor="#FFF"
            moonColor="#FFF"
          />

          {locale === "en" ? (
            <Link href="/" locale="fr">
              FR
            </Link>
          ) : (
            <Link href="/" locale="en">
              EN
            </Link>
          )}
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
        <title>{t("meta.title")}</title>
        <meta name="description" content={t("meta.description")} />
        <meta name="keywords" content={t("meta.keywords")} />
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
