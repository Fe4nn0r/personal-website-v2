import type { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from "next/head";
import Socials from '../components/Socials';
import AboutMe from '../components/AboutMe';
import styles from "../styles/Home.module.css";
import Experiences from "../components/Experiences";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from '../components/Footer';

export async function getStaticProps({ locale }: { locale: string}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer'])),
      // Will be passed to the page component as props
    },
  };
}

const Home: NextPage = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <Head>
        <title>Florent Clerc - Développeur Frontend</title>
        <meta
          name="description"
          content="Florent Clerc, 31 ans, développeur fullstack, lyonnais"
        />
        <meta name="keywords" content="développeur frontend, développeur fullstack, cv développeur web, développeur web" />{" "}
        <link rel="icon" href="/favicon.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header>
          <nav>
            <ul>
              <li><a className="animated-link" href="/#aboutme">{t("header.aboutMe")}</a></li>
              <li><a className="animated-link" href="/#skills">{t("header.skills")}</a></li>
              <li><a className="animated-link" href="/#experiences">{t("header.experiences")}</a></li>
              <li><a className="animated-link" href="/#projects">{t("header.projects")}</a></li>
            </ul>
          </nav>
         <Socials />
        </header>
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
