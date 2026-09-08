import { useTranslation } from "react-i18next";
import {
  FaCode,
  FaDatabase,
  FaGlobeEurope,
  FaLaptopCode,
  FaPeopleCarry,
  FaTerminal,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

export const AboutMe = () => {
  const { t } = useTranslation();

  const sectionAboutMe =
    "flex flex-col gap-2 border-2 border-[#33fd2c]/50 h-full p-4 bg-[#ffffff0c] rounded-lg";
  const h2AboutMe = "text-xl text-[#b458eef8] font-bold ml-2 my-4";
  const ulAboutMe = "flex flex-col gap-4";
  const liAboutMe = "flex gap-3 items-start sm:text-lg text-sm";
  const iconAboutMe = "text-2xl sm:text-3xl text-[#00fcfc]/70 shrink-0 mt-1";

  return (
    <main className="w-[90%] text-[16px] h-auto p-2 m-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
      <section className={sectionAboutMe}>
        <h2 className={h2AboutMe}>{t("aboutmePhase1.profileTitle")}</h2>
        <ul className={ulAboutMe}>
          <li className={liAboutMe}>
            <FaGlobeEurope className={iconAboutMe} aria-hidden="true" />
            <p>{t("aboutmePhase1.profileP1")}</p>
          </li>
          <li className={liAboutMe}>
            <FaLaptopCode className={iconAboutMe} aria-hidden="true" />
            <p>{t("aboutmePhase1.profileP2")}</p>
          </li>
          <li className={liAboutMe}>
            <FaTerminal className={iconAboutMe} aria-hidden="true" />
            <p>{t("aboutmePhase1.profileP3")}</p>
          </li>
        </ul>
      </section>

      <section className={sectionAboutMe}>
        <h2 className={h2AboutMe}>{t("aboutmePhase1.backendTitle")}</h2>
        <ul className={ulAboutMe}>
          <li className={liAboutMe}>
            <FaCode className={iconAboutMe} aria-hidden="true" />
            <p>{t("aboutmePhase1.backendP1")}</p>
          </li>
          <li className={liAboutMe}>
            <FaDatabase className={iconAboutMe} aria-hidden="true" />
            <p>{t("aboutmePhase1.backendP2")}</p>
          </li>
          <li className={liAboutMe}>
            <FaTerminal className={iconAboutMe} aria-hidden="true" />
            <p>{t("aboutmePhase1.backendP3")}</p>
          </li>
        </ul>
      </section>

      <section className={sectionAboutMe}>
        <h2 className={h2AboutMe}>{t("aboutmePhase1.collaborationTitle")}</h2>
        <ul className={ulAboutMe}>
          <li className={liAboutMe}>
            <FaGlobeEurope className={iconAboutMe} aria-hidden="true" />
            <p>{t("aboutmePhase1.collaborationP1")}</p>
          </li>
          <li className={liAboutMe}>
            <FaPeopleCarry className={iconAboutMe} aria-hidden="true" />
            <p>{t("aboutmePhase1.collaborationP2")}</p>
          </li>
          <li className={liAboutMe}>
            <FaLaptopCode className={iconAboutMe} aria-hidden="true" />
            <p>{t("aboutmePhase1.collaborationP3")}</p>
          </li>
        </ul>
      </section>

      <section className={sectionAboutMe}>
        <h2 className={h2AboutMe}>{t("aboutmePhase1.goalsTitle")}</h2>
        <ul className={ulAboutMe}>
          <li className={liAboutMe}>
            <FaTerminal className={iconAboutMe} aria-hidden="true" />
            <p>{t("aboutmePhase1.goalsP1")}</p>
          </li>
          <li className={liAboutMe}>
            <FaDatabase className={iconAboutMe} aria-hidden="true" />
            <p>{t("aboutmePhase1.goalsP2")}</p>
          </li>
          <li className={liAboutMe}>
            <SiTypescript className={iconAboutMe} aria-hidden="true" />
            <p>{t("aboutmePhase1.goalsP3")}</p>
          </li>
        </ul>
      </section>
    </main>
  );
};
