import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { AiOutlineMail } from "react-icons/ai";
import { TbMessage } from "react-icons/tb";
import { IoPersonOutline } from "react-icons/io5";
import { PiHandshake } from "react-icons/pi";
import LinkedinIcon from "../../assets/img/icons/linkedin.svg";
import GitHubIcon from "../../assets/img/icons/github.svg";
import GmailIcon from "../../assets/img/icons/Gmail_icon_(2020).svg.png";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

export const FormContact = () => {
  const { t } = useTranslation();
  const form = useRef();

  const iconsStyle =
    "flex items-center hover:bg-[#ffffff30] hover:rounded-md transition-all ease-in-out duration-300 gap-2 p-1";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_tm6v8a6", "template_j6mw4fq", form.current, {
        publicKey: "ADUc_TA2mtXQyzSaM",
      })
      .then(
        () => {
          toast.success(t("form.formAlert"), {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  return (
    <main className="sm:w-[90%] w-full h-auto min-h-[700px] gap-2 grid sm:grid-cols-2 grid-cols-1 justify-center items-center m-auto">
      <section className="h-auto flex flex-col gap-4 p-2 text-wrap w-auto ml-2 m-auto">
        <div className="flex items-center gap-3">
          <h3 className="sm:text-2xl text-xl font-semibold text-[#7FDBFF]/80">
            {t("formPhase1.intro")}
          </h3>
          <PiHandshake
            className="sm:text-4xl text-3xl text-[#7FDBFF]/80 shrink-0"
            aria-hidden="true"
          />
        </div>

        <ul className="flex flex-col gap-2">
          <li>
            <a href="mailto:kaar.carlos@gmail.com" className={iconsStyle}>
              <img className="aspect-auto" src={GmailIcon} alt="" aria-hidden="true" />
              {t("formPhase1.email")}
            </a>
          </li>

          <li>
            <h2 className="flex items-center text-xl">
              {t("formPhase1.social")}
            </h2>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/carlos-alberto-kaar/"
              target="_blank"
              rel="noopener noreferrer"
              className={iconsStyle}
            >
              <img src={LinkedinIcon} alt="" aria-hidden="true" />
              LinkedIn
            </a>
          </li>

          <li>
            <a
              href="https://github.com/CharlyKrDev"
              target="_blank"
              rel="noopener noreferrer"
              className={iconsStyle}
            >
              <img className="invert" src={GitHubIcon} alt="" aria-hidden="true" />
              GitHub
            </a>
          </li>
        </ul>
      </section>

      <section className="col-span-1 rounded-lg border-2 border-[#00fcfc]/80 m-2">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-2 rounded-lg">
          <label className="flex items-center p-2">
            <IoPersonOutline aria-hidden="true" />
            <span className="m-2">{t("form.formName")}</span>
          </label>
          <input
            type="text"
            name="userName"
            className="m-2 text-black/90 font-semibold"
            placeholder={t("form.formName")}
            autoComplete="name"
            required
          />

          <label className="flex items-center p-2">
            <AiOutlineMail aria-hidden="true" />
            <span className="ml-2">Email</span>
          </label>
          <input
            type="email"
            name="userMail"
            className="m-2 text-black/90 font-semibold"
            placeholder="E-mail"
            autoComplete="email"
            required
          />

          <label className="flex items-center p-2">
            <TbMessage aria-hidden="true" />
            <span className="ml-2">{t("form.formMessage")}</span>
          </label>
          <textarea
            className="min-h-[200px] mx-2 text-black/90 font-semibold"
            name="message"
            placeholder={t("form.formMessagePlaceholder")}
            required
          />

          <input
            className="bg-[#7FDBFF] border-2 border-[#7FDBFF] text-black font-bold cursor-pointer min-w-[15%] px-2 m-auto my-4 active:scale-90 hover:bg-[#00fcfc] hover:scale-[1.05] hover:border-[#00fcfc] rounded-lg transition-all ease-in-out duration-300"
            type="submit"
            value={t("form.formBtn2")}
          />
        </form>
      </section>
    </main>
  );
};
