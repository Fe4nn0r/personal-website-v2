import { useTranslation } from "next-i18next";
import styles from "../styles/Skills.module.css";

interface ISkill {
  name: string;
}

interface ISkillSection {
  name: string;
  skills: ISkill[];
}

export default function Skills() {
  const { t } = useTranslation();

  const skills: ISkillSection[] = [
    {
      name: "Frontend",
      skills: [
        {
          name: "ReactJS",
        },
        {
          name: "Typescript",
        },
        {
          name: "CSS / SCSS",
        },
      ],
    },
    {
      name: "Mobile",
      skills: [
        {
          name: "React Native",
        },
      ],
    },
    {
      name: "Backend",
      skills: [
        {
          name: "PHP",
        },
        {
          name: "Symfony",
        },
        {
          name: "NodeJS",
        },
        {
          name: "Next.JS",
        },
        {
          name: t("skills.restAPIS"),
        },
        {
          name: "MySQL",
        },
      ],
    },
    {
      name: "Tests",
      skills: [
        {
          name: "Cypress",
        },
        {
          name: "Jest",
        },
      ],
    },
    {
      name: t("skills.categoryTools"),
      skills: [
        {
          name: "Storybook",
        },
        {
          name: "Webpack",
        },
        {
          name: "Azure DevOps",
        },
        {
          name: "AppCenter",
        },
      ],
    },
  ];

  return (
    <section id="skills">
      <div className="section-inner">
        <h2 className={styles.baseline}>{t("skills.baseline")}</h2>

        <ul className={styles.skillList}>
          {skills.map((skillCategory) => (
            <li key={skillCategory.name} className={styles.skill}>
              <h3 className={styles.skillCategoryName}>
                {skillCategory.name}
              </h3>
              <ul className={styles.subList}>
                {skillCategory.skills.map((skill) => (
                  <li className={styles.skillName} key={skillCategory.name}>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
