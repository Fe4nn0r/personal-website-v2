import React from "react";
import { useTranslation } from "next-i18next";
import Image from 'next/image';
import styles from "../styles/Projects.module.css";
import BorderedTile from "../components/BorderedTile";
import { useRouter } from 'next/router';

interface IProject {
  name: string;
  screenshots: string[];
  mainScreenshot: {
    src: string;
    height: number;
    width: number;
  } | null;
  link: string | null;
  descriptionFr: string;
  descriptionEn: string;
  tech: string;
}

const projects: IProject[] = [
  {
    name: "Beager",
    screenshots: [],
    mainScreenshot: null,
    link: "https://beager.com",
    descriptionEn: "Beager connects top talent to projects through cutting-edge tools and bespoke solutions, based on the values of one another.",
    descriptionFr:
      "Beager est un service de mise en relation affinitaire qui repose sur une qualification approfondie des missions et des talents.",
    tech: "NextJS - ReactJS (Typescript) - NodeJS - Storybook - Cypress & Jest - Azure DevOps",
  },
  {
    name: "Timtle",
    screenshots: [
      "/img/atecna/timtle/vos-annonces.png",
      "/img/atecna/timtle/nouveau-locataire.png",
    ],
    mainScreenshot: {
      src: "/img/atecna/timtle/vos-annonces.png",
      width: 1284,
      height: 2778,
    },
    link: "https://timtle.io/",
    descriptionEn: "Timtle is a mobile app for individuals and real estate agencies that aims to facilitate the process of visiting and renting appartments.",
    descriptionFr:
      "Timtle est une application mobile à destination des particuliers et des agences immobilières qui a pour but de faciliter le processus de visite et de location de biens immobiliers.",
    tech: "React Native - Appcenter",
  },
  {
    name: "Appvitam by Advitam",
    screenshots: [
      "/img/atecna/appvitam/account.jpg",
      "/img/atecna/appvitam/calendar.jpg",
    ],
    mainScreenshot: {
      src: "/img/atecna/appvitam/account.jpg",
      width: 1080,
      height: 2400,
    },
    link: "https://www.groupe-advitam.com/",
    descriptionEn: "Appvitam is an internal mobile app for Groupe Advitam that aims to facilitate exchanges with the HR team",
    descriptionFr:
      "Appvitam est une application mobile interne au groupe Advitam, qui a pour but de faciliter les échanges avec l'équipe RH",
    tech: "Strapi - Flutter",
  },
  {
    name: "Geotwin",
    screenshots: [],
    mainScreenshot: null,
    link: "https://geotwin.io/en/",
    descriptionEn: "Geotwin is a SAAS that combines AI, activity and agent-based simulation to help make more reliable and better decisions across different sectors (ie. city planning, behavioral analysis, real estate)",
    descriptionFr:
      "Geotwin est une application de simulation en mode Saas, destinée à représenter et analyser virtuellement les comportements de déplacement des usagers des transports",
    tech: "ReactJS - Cypress & Jest",
  },
  {
    name: "Mapado",
    screenshots: [
      "/img/mapado/screenshots/gestion-masse.png",
      "/img/mapado/screenshots/historique.png",
      "/img/mapado/screenshots/plan.png",
      "/img/mapado/screenshots/creation-offre.png",
    ],
    mainScreenshot: {
      src: "/img/mapado/screenshots/historique.png",
      width: 1044,
      height: 685,
    },
    link: "https://mapado.com",
    descriptionEn: "Mapado is a ticketing solution for the cultural sector",
    descriptionFr:
      "Mapado est une solution complète de billetterie qui s'adresse principalement au secteur culturel.",
    tech: "Symfony - ReactJS - Cypress & Jest - Storybook",
  },
  {
    name: "Batch",
    screenshots: [
      "/img/batch/screenshots/campaigns.jpg",
      "/img/batch/screenshots/in-app-message.jpg",
      "/img/batch/screenshots/userbase.jpg",
    ],
    mainScreenshot: {
      src: "/img/batch/screenshots/in-app-message.jpg",
      width: 2000,
      height: 1333,
    },
    link: "https://batch.com",
    descriptionEn: "Batch is a CRM for mobile applications",
    descriptionFr:
      "Batch est une plateforme CRM pensée pour les applications mobiles, permettant de maîtriser les campagnes de notifications push.",
    tech: "Symfony / AngularJS",
  },
];

export default function Project() {
  const { t } = useTranslation();
  const router = useRouter();
  const locale = router.locale;

  const descriptionKey = locale === 'en' ? 'descriptionEn' : 'descriptionFr';


  return (
    <section id="projects">
      <div className='section-inner'>
      <h2>{t("projects.baseline")}</h2>

      <ul className={styles.projectList}>
        {projects.map((p, i) => {
          const isEven = i % 2 === 0;
          return (
            <li key={p.name} className={styles.projectLine}>
              <BorderedTile top={false} left={!isEven} right={isEven} bottom>
                {p.link ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.name}
                  >
                    {p.name}
                  </a>
                ) : (
                  <span className={styles.name}>{p.name}</span>
                )}
                <p className={styles.description}>{p[descriptionKey]}</p>

                <p className={styles.tech}>{p.tech}</p>
              </BorderedTile>
            </li>
          );
        })}
      </ul>
      </div>
    </section>
  );
}
