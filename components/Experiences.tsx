import { Trans, useTranslation } from "next-i18next";
import styles from "../styles/Experiences.module.css";
import Image from "next/image";

interface ICompany {
  date: string;
  title: string;
  companyName: string;
  url: string | null;
  presentation: string;
  myWork: string;
  logo: string;
  logoWhite?: string;
  logoAspectRatio: string;
}

function CompanyItem({ company, index }: { company: ICompany; index: number }) {
  const { t } = useTranslation();
  return (
    <div
      id={`panel-company-${index}`}
      role="tabpanel"
      aria-labelledby={`tab-company-${index}`}
      className={styles.companyItem}
    >
      <div className={styles.companyItemInner}>
        {company.url === null ? (
          <h3>
            {`${company.title} @ `}<em>{company.companyName}</em>
          </h3>
        ) : (
          <a href={company.url} target="_blank" rel="noreferrer" tabIndex={0}>
            <h3>
            {`${company.title} @ `}<em>{company.companyName}</em>
            </h3>
          </a>
        )}

        <p className={styles.date}>{company.date}</p>

        <p className={styles.text}>{company.presentation}</p>
        <p className={styles.text}>
          <Trans t={t}>{company.myWork}</Trans>
        </p>
      </div>
    </div>
  );
}

export default function Experiences() {
  const { t } = useTranslation();

  const IN_TACT: ICompany = {
    date: t("experiences.in-tact.date"),
    title: t("experiences.in-tact.title"),
    companyName: "Atecna",
    url: "https://www.atecna.fr/",
    presentation: t("experiences.in-tact.presentation"),
    myWork: t("experiences.in-tact.myWork"),
    logo: "/img/atecna/logo.svg",
    logoWhite: "/img/atecna/logo-white.svg",
    logoAspectRatio: "90/24",
  };

  const MAPADO: ICompany = {
    date: t("experiences.mapado.date"),
    title: t("experiences.mapado.title"),
    companyName: "Mapado",
    url: "https://www.mapado.com/",
    presentation: t("experiences.mapado.presentation"),
    myWork: t("experiences.mapado.myWork"),
    logo: "/img/mapado/Mapado-logo-blue.png",
    logoWhite: "/img/mapado/Mapado-logo-light.png",
    logoAspectRatio: "117/46",
  };

  const BATCH: ICompany = {
    date: t("experiences.batch.date"),
    title: t("experiences.batch.title"),
    companyName: "Batch",
    url: "https://batch.com/",
    presentation: t("experiences.batch.presentation"),
    myWork: t("experiences.batch.myWork"),
    logo: "/img/batch/logo.svg",
    logoWhite: "/img/batch/logo.svg",
    logoAspectRatio: "250/112",
  };

  const NIXDO: ICompany = {
    date: t("experiences.nixdo.date"),
    title: t("experiences.nixdo.title"),
    companyName: "Nixdo",
    url: null,
    presentation: t("experiences.nixdo.presentation"),
    myWork: t("experiences.nixdo.myWork"),
    logo: "/img/nixdo/logo.jpg",
    logoWhite: "/img/nixdo/logo.jpg",
    logoAspectRatio: "85/27",
  };

  const ICE_DEVELOPMENT: ICompany = {
    date: t("experiences.ice-development.date"),
    title: t("experiences.ice-development.title"),
    companyName: "Ice Development",
    url: "https://www.ice-dev.com/",
    presentation: t("experiences.ice-development.presentation"),
    myWork: t("experiences.ice-development.myWork"),
    logo: "/img/icedev/logo.png",
    logoWhite: "/img/icedev/logo-white.svg",
    logoAspectRatio: "90/90",
  };

  const orderedCompanies = [IN_TACT, MAPADO, BATCH, NIXDO, ICE_DEVELOPMENT];

  return (
    <section id="experiences" className={styles.section}>
      <div className={`section-inner ${styles.sectionInner}`}>

        {orderedCompanies.map((c, i) => (
          <input
            type="radio"
            name="company"
            key={c.companyName}
            defaultChecked={i === 0}
            tabIndex={0}
            aria-label={c.companyName}
            id={`tab-company-${i + 1}`}
          />
        ))}
        <ul className={styles.selectionList} role="tablist">
          {orderedCompanies.map((c, i) => (
            <li key={c.companyName}>
              <label
                htmlFor={`tab-company-${i + 1}`}
                className={`${styles.tabLabel} animated-link`}
                aria-controls={`panel-company-${i + 1}`}
              >
                {c.companyName}
              </label>
            </li>
          ))}
        </ul>
        {orderedCompanies.map((c, i) => (
          <CompanyItem company={c} key={c.companyName} index={i + 1} />
        ))}
      </div>
    </section>
  );
}
