import i18n from "i18next";

const phase1Content = {
  es: {
    home: {
      greeting: "¡Hola! Soy",
      role: "Junior Backend Developer",
      summary:
        "Desarrollo aplicaciones backend y APIs REST con Node.js y Express, con experiencia en testing, bases de datos e integración de APIs externas.",
      location: "Piacenza, Italia",
      cv: "Descargar CV",
    },
    aboutmePhase1: {
      profileTitle: "Perfil",
      profileP1: "Nací en Argentina y actualmente vivo en Piacenza, Italia.",
      profileP2:
        "Soy Técnico orientado en Telecomunicaciones y orienté mi carrera profesional al desarrollo de software.",
      profileP3:
        "Mi foco actual es el desarrollo backend con Node.js, Express, APIs REST y bases de datos.",
      backendTitle: "Backend y herramientas",
      backendP1: "Trabajo con Node.js, Express y diseño de APIs REST.",
      backendP2:
        "Tengo experiencia con PostgreSQL y MongoDB, testing automatizado e integración de servicios externos.",
      backendP3:
        "Uso Git y GitHub para control de versiones y documentación de proyectos.",
      collaborationTitle: "Idiomas y experiencia",
      collaborationP1:
        "Español nativo, italiano con competencia profesional e inglés intermedio orientado a documentación técnica.",
      collaborationP2:
        "Mi experiencia laboral previa fortaleció habilidades de resolución de problemas, atención al detalle, comunicación y trabajo en equipo.",
      collaborationP3:
        "Estoy acostumbrado a aprender de manera autónoma, documentar decisiones y trabajar sobre problemas reales.",
      goalsTitle: "Objetivos",
      goalsP1:
        "Busco una oportunidad como Junior Backend Developer o Trainee para seguir creciendo dentro de un equipo de desarrollo.",
      goalsP2:
        "Quiero profundizar en diseño de APIs, testing, bases de datos y buenas prácticas de backend.",
      goalsP3: "Actualmente también estoy incorporando TypeScript a mi stack.",
    },
    projectsPhase1: {
      title: "Proyectos seleccionados",
      intro:
        "Una selección de proyectos que representan mejor mi enfoque actual en backend, APIs, testing y soluciones reales.",
      github: "GitHub",
      live: "Ver sitio",
      private: "Proyecto privado",
      ecommerce: {
        title: "Modular E-commerce Backend API",
        description:
          "Backend modular de e-commerce desarrollado con Node.js y Express. Incluye API REST, persistencia de datos, autenticación, testing, logging e integración con Socket.IO.",
      },
      neurology: {
        title: "Centro de Neurología",
        description:
          "Sitio institucional real en producción para un centro médico de Venado Tuerto. Implementé la landing responsive, SEO técnico y local, datos estructurados, analytics, optimización de performance y deploy en Cloudflare.",
      },
      betty: {
        title: "Betty — Trading Signal Backend",
        description:
          "Proyecto backend privado para análisis reproducible de señales de trading. Integra módulos técnicos, sentimiento y datos externos, con contratos internos, backtesting, trazabilidad y 178 tests automatizados aprobados.",
      },
    },
    formPhase1: {
      intro:
        "¿Querés contactarme por una oportunidad laboral o conversar sobre un proyecto?",
      email: "Contactarme por e-mail",
      social: "También podés encontrarme en:",
    },
    footerPhase1: {
      text: "Portfolio desarrollado con React y mantenido por CharlyKrDev · 2026",
    },
  },

  en: {
    home: {
      greeting: "Hello! I'm",
      role: "Junior Backend Developer",
      summary:
        "I build backend applications and REST APIs with Node.js and Express, with experience in testing, databases and external API integrations.",
      location: "Piacenza, Italy",
      cv: "Download CV",
    },
    aboutmePhase1: {
      profileTitle: "Profile",
      profileP1:
        "I was born in Argentina and I am currently based in Piacenza, Italy.",
      profileP2:
        "I am a Telecommunications Technician who transitioned my professional path into software development.",
      profileP3:
        "My current focus is backend development with Node.js, Express, REST APIs and databases.",
      backendTitle: "Backend & tools",
      backendP1: "I work with Node.js, Express and REST API design.",
      backendP2:
        "I have experience with PostgreSQL and MongoDB, automated testing and external service integrations.",
      backendP3:
        "I use Git and GitHub for version control and project documentation.",
      collaborationTitle: "Languages & experience",
      collaborationP1:
        "Native Spanish, professional working proficiency in Italian, and intermediate English focused on technical documentation.",
      collaborationP2:
        "My previous work experience strengthened my problem-solving, attention to detail, communication and teamwork skills.",
      collaborationP3:
        "I am comfortable learning independently, documenting decisions and working on real-world problems.",
      goalsTitle: "Goals",
      goalsP1:
        "I am looking for a Junior Backend Developer or Trainee opportunity where I can continue growing within a development team.",
      goalsP2:
        "I want to deepen my knowledge of API design, testing, databases and backend best practices.",
      goalsP3: "I am also currently adding TypeScript to my stack.",
    },
    projectsPhase1: {
      title: "Selected projects",
      intro:
        "A selection of projects that best represent my current focus on backend development, APIs, testing and real-world solutions.",
      github: "GitHub",
      live: "Live site",
      private: "Private project",
      ecommerce: {
        title: "Modular E-commerce Backend API",
        description:
          "Modular e-commerce backend built with Node.js and Express. It includes a REST API, data persistence, authentication, testing, logging and Socket.IO integration.",
      },
      neurology: {
        title: "Centro de Neurología",
        description:
          "Real production website for a medical center in Venado Tuerto. I implemented the responsive landing page, technical and local SEO, structured data, analytics, performance optimization and Cloudflare deployment.",
      },
      betty: {
        title: "Betty — Trading Signal Backend",
        description:
          "Private backend project for reproducible trading signal analysis. It combines technical modules, sentiment and external data with internal contracts, backtesting, traceability and 178 passing automated tests.",
      },
    },
    formPhase1: {
      intro:
        "Would you like to contact me about a job opportunity or discuss a project?",
      email: "Contact me by email",
      social: "You can also find me on:",
    },
    footerPhase1: {
      text: "Portfolio built with React and maintained by CharlyKrDev · 2026",
    },
  },

  it: {
    home: {
      greeting: "Ciao! Sono",
      role: "Junior Backend Developer",
      summary:
        "Sviluppo applicazioni backend e API REST con Node.js ed Express, con esperienza in testing, database e integrazione di API esterne.",
      location: "Piacenza, Italia",
      cv: "Scarica CV",
    },
    aboutmePhase1: {
      profileTitle: "Profilo",
      profileP1:
        "Sono nato in Argentina e attualmente vivo a Piacenza, Italia.",
      profileP2:
        "Sono un Tecnico in Telecomunicazioni e ho orientato il mio percorso professionale verso lo sviluppo software.",
      profileP3:
        "Il mio focus attuale è lo sviluppo backend con Node.js, Express, API REST e database.",
      backendTitle: "Backend e strumenti",
      backendP1: "Lavoro con Node.js, Express e progettazione di API REST.",
      backendP2:
        "Ho esperienza con PostgreSQL e MongoDB, testing automatizzato e integrazione di servizi esterni.",
      backendP3:
        "Utilizzo Git e GitHub per il controllo di versione e la documentazione dei progetti.",
      collaborationTitle: "Lingue ed esperienza",
      collaborationP1:
        "Spagnolo madrelingua, italiano con competenza professionale e inglese intermedio orientato alla documentazione tecnica.",
      collaborationP2:
        "La mia esperienza lavorativa precedente ha rafforzato capacità di problem solving, attenzione ai dettagli, comunicazione e lavoro di squadra.",
      collaborationP3:
        "Sono abituato a imparare in autonomia, documentare le decisioni e lavorare su problemi reali.",
      goalsTitle: "Obiettivi",
      goalsP1:
        "Cerco un'opportunità come Junior Backend Developer o Trainee per continuare a crescere all'interno di un team di sviluppo.",
      goalsP2:
        "Voglio approfondire la progettazione di API, il testing, i database e le buone pratiche backend.",
      goalsP3: "Attualmente sto anche aggiungendo TypeScript al mio stack.",
    },
    projectsPhase1: {
      title: "Progetti selezionati",
      intro:
        "Una selezione di progetti che rappresentano meglio il mio focus attuale su backend, API, testing e soluzioni reali.",
      github: "GitHub",
      live: "Sito online",
      private: "Progetto privato",
      ecommerce: {
        title: "Modular E-commerce Backend API",
        description:
          "Backend modulare per e-commerce sviluppato con Node.js ed Express. Include API REST, persistenza dei dati, autenticazione, testing, logging e integrazione con Socket.IO.",
      },
      neurology: {
        title: "Centro de Neurología",
        description:
          "Sito istituzionale reale in produzione per un centro medico di Venado Tuerto. Ho implementato la landing responsive, SEO tecnico e locale, dati strutturati, analytics, ottimizzazione delle prestazioni e deploy su Cloudflare.",
      },
      betty: {
        title: "Betty — Trading Signal Backend",
        description:
          "Progetto backend privato per l'analisi riproducibile di segnali di trading. Integra moduli tecnici, sentiment e dati esterni con contratti interni, backtesting, tracciabilità e 178 test automatizzati superati.",
      },
    },
    formPhase1: {
      intro:
        "Vuoi contattarmi per un'opportunità lavorativa o parlare di un progetto?",
      email: "Contattami via email",
      social: "Puoi trovarmi anche su:",
    },
    footerPhase1: {
      text: "Portfolio sviluppato con React e mantenuto da CharlyKrDev · 2026",
    },
  },
};

Object.entries(phase1Content).forEach(([language, resources]) => {
  i18n.addResourceBundle(language, "translation", resources, true, true);
});