import React from "react";
import "../../styles/Home.css";
import { FaFileDownload, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import FotoPerfil from "../../assets/img/layout/PerfilLinkedin.png";
import { Carrusel } from "../Carrusel/Carrusel";
import CV_EN from "../../data/CV/Carlos_Alberto_Kaar_CV_EN.pdf";
import CV_ES from "../../data/CV/Carlos_Alberto_Kaar_CV_ES.pdf";
import CV_IT from "../../data/CV/Carlos_Alberto_Kaar_CV_IT.pdf";
import { useTranslation } from "react-i18next";

const cvByLanguage = {
  en: {
    file: CV_EN,
    filename: "Carlos_Alberto_Kaar_CV_EN.pdf",
  },
  es: {
    file: CV_ES,
    filename: "Carlos_Alberto_Kaar_CV_ES.pdf",
  },
  it: {
    file: CV_IT,
    filename: "Carlos_Alberto_Kaar_CV_IT.pdf",
  },
};

export const Home = () => {
  const { t, i18n } = useTranslation();
  const socialButton = "socialIcon flex justify-center items-center gap-2";

  const currentLanguage = (i18n.resolvedLanguage || i18n.language || "en")
    .split("-")[0]
    .toLowerCase();

  const currentCV = cvByLanguage[currentLanguage] || cvByLanguage.en;

  return (
    <main className="w-full h-auto flex justify-center items-center m-auto mt-10 sm:mt-20">
      <section className="flex justify-center items-center max-w-[90%] h-[70%] flex-col">
        <div className="w-full h-auto flex ml-0 sm:ml-64">
          <article className="w-[60%] h-auto flex flex-col">
            <p className="m-2 mt-10 text-sm sm:text-lg text-white/60">
              {t("home.greeting")}
            </p>

            <h1 className="m-2 text-xl sm:text-4xl font-bold">
              <span className="text-blue-500">Carlos Alberto Kaar</span>
            </h1>

            <h2 className="m-2 mt-4 text-lg sm:text-3xl font-bold text-[#33fd2c]/80">
              {t("home.role")}
            </h2>

            <p className="m-2 mt-5 text-sm sm:text-xl text-white/75 leading-relaxed">
              {t("home.summary")}
            </p>

            <p className="m-2 mt-4 flex items-center gap-2 text-xs sm:text-base text-white/55">
              <FaMapMarkerAlt aria-hidden="true" />
              {t("home.location")}
            </p>
          </article>

          <div className="w-[40%] h-[70%] max-h-[30vh]">
            <img
              className="mt-14 aspect-square flex m-auto rounded-full border-2 border-[#00fcfc]/70 opacity-95 sm:h-auto h-20 max-h-60 ml-4"
              src={FotoPerfil}
              alt="Carlos Alberto Kaar"
            />
          </div>
        </div>

        <nav className="w-[95%] sm:ml-64" aria-label="Professional links">
          <div className="flex gap-2 sm:gap-8 text-[10px] sm:text-[14px] flex-wrap">
            <a
              href="https://www.linkedin.com/in/carlos-alberto-kaar/"
              target="_blank"
              rel="noopener noreferrer"
              className={socialButton}
            >
              <FaLinkedin aria-hidden="true" />
              LinkedIn
            </a>

            <a
              href="https://github.com/CharlyKrDev"
              target="_blank"
              rel="noopener noreferrer"
              className={socialButton}
            >
              <FaGithub aria-hidden="true" />
              GitHub
            </a>

            <a
              className={socialButton}
              href={currentCV.file}
              download={currentCV.filename}
            >
              <FaFileDownload aria-hidden="true" />
              {t("home.cv")}
            </a>
          </div>
        </nav>

        <section className="h-auto max-w-[70vw]">
          <div className="sm:my-12 flex justify-center items-center">
            <Carrusel />
          </div>
        </section>
      </section>
    </main>
  );
};
