import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="flex min-h-[50px] px-4 py-3 text-xs sm:text-base text-white/50">
      <p className="m-auto text-center">{t("footerPhase1.text")}</p>
    </footer>
  );
};
