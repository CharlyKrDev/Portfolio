import React from "react";
import { projects } from "../../data/projects";
import { FaExternalLinkAlt, FaGithub, FaLock, FaServer } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export const Projects = () => {
  const { t } = useTranslation();

  const projectButton =
    "min-w-24 inline-flex items-center justify-center gap-2 border p-2 px-3 rounded-full text-xs border-green-900 hover:bg-green-50 hover:text-black font-semibold active:scale-95 transition-all duration-300";

  return (
    <main className="w-full min-h-screen p-4 flex justify-center text-white/70">
      <section className="w-full max-w-6xl p-4">
        <header className="mb-10 max-w-3xl">
          <h1 className="text-2xl sm:text-4xl font-bold text-white/90">
            {t("projectsPhase1.title")}
          </h1>
          <p className="mt-4 text-sm sm:text-lg leading-relaxed text-white/60">
            {t("projectsPhase1.intro")}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="flex h-full flex-col justify-between rounded-2xl border border-green-900/80 bg-[#ffffff08] p-5 sm:p-6"
            >
              <div>
                <div className="mb-5 flex items-center justify-between gap-4">
                  <FaServer className="text-3xl text-[#00fcfc]/70" aria-hidden="true" />

                  {project.private && (
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#b458eef8]/50 px-3 py-1 text-xs text-[#b458eef8]">
                      <FaLock aria-hidden="true" />
                      {t("projectsPhase1.private")}
                    </span>
                  )}
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-white/90">
                  {t(project.titleKey)}
                </h2>

                <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/60">
                  {t(project.descriptionKey)}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-gray-100/30 px-2 py-1 text-xs"
                    >
                      #{technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={projectButton}
                  >
                    <FaGithub aria-hidden="true" />
                    {t("projectsPhase1.github")}
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={projectButton}
                  >
                    <FaExternalLinkAlt aria-hidden="true" />
                    {t("projectsPhase1.live")}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};
