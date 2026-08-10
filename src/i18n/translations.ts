export type Lang = "en" | "pl";

export const defaultLang: Lang = "en";
export const storageKey = "site-lang";

export const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      portfolio: "Portfolio",
      blog: "Blog",
      contact: "Contact",
    },
    hero: {
      badge: "Seeking Full-time IT Role",
      titleLine1: "Designing and building",
      titleEmphasis: "digital products",
      titleLine2: "that teams can rely on",
      subtitle:
        "I'm a UI/UX Designer & Web Developer looking to bring thoughtful design and solid engineering to a product team full-time.",
      cta1: "Explore my portfolio",
      cta2: "Download CV",
    },
    service: {
      badge: "Skills",
      title: "What I bring to a team",
      subtitle:
        "I combine design and development skills to help teams ship products that are both well-designed and well-built.",
      items: [
        {
          title: "UI/UX",
          titleItalic: "design",
          description:
            "Designing intuitive interfaces and user flows, backed by research and prototyping that keep the end user at the center of every decision.",
        },
        {
          title: "SEO, AI",
          titleItalic: "optimization",
          description:
            "Comfortable applying SEO best practices and integrating AI-driven tools into products to improve visibility and efficiency.",
        },
        {
          title: "Programming",
          titleItalic: "",
          description:
            "Writing clean, maintainable code across the stack — from frontend (JavaScript, Astro) to backend and scripting in Python, PHP, and more.",
        },
        {
          title: "Graphic",
          titleItalic: "design",
          description:
            "Bringing a strong visual sense to branding and UI work, translating ideas into clear, consistent design systems.",
        },
      ],
    },
    tools: {
      badge: "Tools",
      title: "Tools & Software",
      subtitle: "The most crucial tools I use every day to deliver great value.",
      tabProgrammer: "Programmer",
      tabDesigner: "Designer",
      tabAi: "AI",
    },
    projects: {
      badge: "Projects",
      title: "Few selected projects",
      subtitle:
        "A showcase of innovative solutions that solve real-world digital challenges.",
      items: [
        {
          title: "Analyss -",
          titleItalic: "AI",
          suffix: "Tool",
          tags: ["UI Design", "UX Design", "Development", "DevOps"],
          description:
            "Ghost job postings make up about half of all job ads. Analyss solves this problem with a modern AI job-listing scanner and helps refine your CV using a dedicated verification algorithm.",
          cta: "Test project",
        },
        {
          title: "Website for",
          titleItalic: "coworking",
          suffix: "office",
          tags: ["UI Design", "UX Design"],
          description:
            "A modern website for renting workspace for small and medium-sized businesses. Designed for maximum conversion.",
          cta: "View case study",
        },
        {
          title: "Dobre CV -",
          titleItalic: "Website",
          suffix: "",
          tags: ["UI Design", "UX Design", "Web development"],
          description: "Clear website with modern UI deploy in Framer for Dobre-CV.",
          cta: "View website",
        },
      ],
    },
    journey: {
      badge: "Journey",
      titleLine1: "Design professional with a passion for solving",
      titleLine2: "complex digital challenges",
      subtitleLine1:
        "Five years of experience transforming ideas into functional, beautiful",
      subtitleLine2: "digital products across multiple industries and platforms.",
      experienceHeading: "Experience",
      educationHeading: "Education",
      cvButton: "Download résumé",
      experience: [
        {
          role: "UX Designer",
          company: "New Level Sport",
          period: "01.01.2025 – present",
          points: [
            "Own the end-to-end user experience of the website and online store, from research and wireframes to final UI.",
            "Handle website and store administration, and contribute to the front-end code and visual/graphic design.",
            "Manage Instagram and social media presence for the brand.",
          ],
        },
        {
          role: "Freelancer – Product Design",
          company: "Self-employed",
          period: "Ongoing",
          points: [
            "Work with private clients and small businesses on a freelance basis in my free time.",
            "Services mainly include building web and mobile applications and websites.",
            "Also handle UI/UX and graphic design for these projects.",
          ],
        },
        {
          role: "Computer Service Technician (Internship)",
          company: "KRIONI.PL",
          period: "05.2020 – 06.2020",
          points: [
            "Mainly responsible for computer servicing and repairs.",
            "Worked on setting up and servicing internet networks, including routers, TCP/IP, and WLAN configuration.",
            "Gained hands-on experience with Linux.",
          ],
        },
      ],
      education: [
        {
          degree: "Computer Science Studies",
          period: "2023 - present",
          school: "University of Information Technology and Management",
          mode: "Part-time",
          description:
            "Currently studying computer science part-time, working toward an engineering degree. I have a clear goal and am consistently working toward it.",
        },
        {
          degree: "IT Technical Secondary School",
          period: "2018 - 2022",
          school:
            "Poviat School Complex No. 2 – Sports and Technical Championship Schools",
          mode: "",
          description: "",
        },
      ],
    },
    faqs: {
      badge: "FAQs",
      title: "Frequently asked questions",
      subtitleLine1: "Common questions recruiters and hiring teams ask",
      subtitleLine2: "about my skills and availability.",
      items: [
        {
          question: "What technologies do you know best?",
          answer:
            "On the development side: HTML, CSS, JavaScript, TypeScript, React, Astro, Python, Flask, Supabase, Git/GitHub, and Linux. On the design side: Figma, Webflow, Framer, WordPress, and the Adobe suite (Photoshop, Illustrator). I'm comfortable working across the full stack, from UI design to implementation.",
        },
        {
          question: "What does your workflow look like within a development team?",
          answer:
            "My work so far has been largely independent, but I value feedback highly — I believe any feedback is better than none. Regardless of the project, what matters most to me is what the end user actually gets out of it and how they use it, since that's what truly determines a project's value. For day-to-day communication I've mainly used Slack and Outlook.",
        },
        {
          question: "What type of employment are you looking for?",
          answer:
            "I'm open to any form of employment — UoP, umowa zlecenie, or umowa o dzieło — working remotely or hybrid, based in Poland or remotely for international companies.",
        },
        {
          question: "How soon can you join a new team or project?",
          answer: "Immediately — I'm available to start right away.",
        },
        {
          question:
            "Do you have experience working with a product team or Agile methodology?",
          answer:
            "Yes, on an ongoing basis at New Level Sport, where I work within a product-oriented, iterative process covering UX, development, and store administration.",
        },
      ],
    },
    contact: {
      badge: "Contact",
      title: "Let's talk about an opportunity",
      subtitleLine1:
        "Hiring or know a team looking for a UI/UX Designer & Developer?",
      subtitleLine2: "Fill out the form below and I'll get back to you within 24 hours.",
      formSuccess: "✓ Message sent successfully! I'll get back to you within 24 hours.",
      labelName: "Name",
      placeholderName: "Your name",
      labelEmail: "Email",
      placeholderEmail: "your@email.com",
      labelSubject: "Subject",
      placeholderSubject: "What is this about?",
      labelMessage: "Message",
      placeholderMessage: "Tell me about your project...",
      submit: "Send Message",
      sending: "Sending...",
      reachDirectly: "Or reach out directly:",
      errTakeYourTime: "Please take your time filling out the form.",
      errWait: "Please wait {n} seconds before sending another message.",
      errNotConfigured:
        "Email service is not configured. Please contact me directly at przemyslaw.tomanek02@gmail.com",
      errGeneric: "Something went wrong. Please try again or contact me directly.",
    },
    footer: {
      copyright: "© 2026 Przemyslaw Tomanek. All rights reserved.",
    },
  },
  pl: {
    nav: {
      home: "Główna",
      services: "Usługi",
      portfolio: "Portfolio",
      blog: "Blog",
      contact: "Kontakt",
    },
    hero: {
      badge: "Szukam pracy w IT na pełny etat",
      titleLine1: "Projektuję i tworzę",
      titleEmphasis: "produkty cyfrowe",
      titleLine2: "na których zespoły mogą polegać",
      subtitle:
        "Jestem projektantem UI/UX i web developerem, który chce wnieść przemyślany design i solidne podejście inżynierskie do zespołu produktowego na pełny etat.",
      cta1: "Zobacz moje portfolio",
      cta2: "Pobierz CV",
    },
    service: {
      badge: "Umiejętności",
      title: "Co wnoszę do zespołu",
      subtitle:
        "Łączę umiejętności projektowe i programistyczne, aby pomagać zespołom dostarczać produkty, które są zarówno dobrze zaprojektowane, jak i dobrze zbudowane.",
      items: [
        {
          title: "UI/UX",
          titleItalic: "design",
          description:
            "Projektuję intuicyjne interfejsy i ścieżki użytkownika, opierając się na badaniach i prototypowaniu, które stawiają użytkownika końcowego w centrum każdej decyzji.",
        },
        {
          title: "SEO, AI",
          titleItalic: "optymalizacja",
          description:
            "Swobodnie stosuję dobre praktyki SEO i integruję narzędzia oparte na AI z produktami, aby zwiększać ich widoczność i efektywność.",
        },
        {
          title: "Programowanie",
          titleItalic: "",
          description:
            "Piszę czysty, łatwy w utrzymaniu kod w całym stacku — od frontendu (JavaScript, Astro) po backend i skrypty w Pythonie, PHP i innych technologiach.",
        },
        {
          title: "Grafika",
          titleItalic: "projektowanie",
          description:
            "Wnoszę silne wyczucie wizualne do brandingu i pracy nad UI, przekładając pomysły na przejrzyste, spójne systemy projektowe.",
        },
      ],
    },
    tools: {
      badge: "Narzędzia",
      title: "Narzędzia i oprogramowanie",
      subtitle: "Najważniejsze narzędzia, których używam na co dzień, aby dostarczać dużą wartość.",
      tabProgrammer: "Programista",
      tabDesigner: "Projektant",
      tabAi: "AI",
    },
    projects: {
      badge: "Projekty",
      title: "Kilka wybranych projektów",
      subtitle:
        "Prezentacja innowacyjnych rozwiązań, które odpowiadają na realne cyfrowe wyzwania.",
      items: [
        {
          title: "Analyss -",
          titleItalic: "AI",
          suffix: "Tool",
          tags: ["Projektowanie UI", "Projektowanie UX", "Programowanie", "DevOps"],
          description:
            "Fałszywe ogłoszenia o pracę stanowią około połowy wszystkich ofert. Analyss rozwiązuje ten problem dzięki nowoczesnemu skanerowi ofert pracy opartemu na AI i pomaga dopracować CV za pomocą dedykowanego algorytmu weryfikacji.",
          cta: "Przetestuj projekt",
        },
        {
          title: "Strona dla",
          titleItalic: "coworkingowego",
          suffix: "biura",
          tags: ["Projektowanie UI", "Projektowanie UX"],
          description:
            "Nowoczesna strona internetowa do wynajmu przestrzeni biurowej dla małych i średnich firm. Zaprojektowana pod kątem maksymalnej konwersji.",
          cta: "Zobacz case study",
        },
        {
          title: "Dobre CV -",
          titleItalic: "Strona",
          suffix: "",
          tags: ["Projektowanie UI", "Projektowanie UX", "Tworzenie stron"],
          description: "Przejrzysta strona z nowoczesnym UI, wdrożona we Framerze dla Dobre-CV.",
          cta: "Zobacz stronę",
        },
      ],
    },
    journey: {
      badge: "Moja droga",
      titleLine1: "Specjalista ds. designu z pasją do rozwiązywania",
      titleLine2: "złożonych cyfrowych wyzwań",
      subtitleLine1:
        "Pięć lat doświadczenia w przekształcaniu pomysłów w funkcjonalne, piękne",
      subtitleLine2: "produkty cyfrowe w wielu branżach i na wielu platformach.",
      experienceHeading: "Doświadczenie",
      educationHeading: "Edukacja",
      cvButton: "Pobierz CV",
      experience: [
        {
          role: "Projektant UX",
          company: "New Level Sport",
          period: "01.01.2025 – obecnie",
          points: [
            "Odpowiadam za całościowe doświadczenie użytkownika strony i sklepu internetowego — od researchu i wireframe'ów po finalny UI.",
            "Zajmuję się administracją strony i sklepu oraz współtworzę kod front-endowy i design graficzny/wizualny.",
            "Zarządzam Instagramem i obecnością marki w mediach społecznościowych.",
          ],
        },
        {
          role: "Freelancer – Product Design",
          company: "Działalność własna",
          period: "W trakcie",
          points: [
            "Współpracuję z prywatnymi klientami i małymi firmami na zasadzie freelance w wolnym czasie.",
            "Usługi obejmują głównie tworzenie aplikacji webowych, mobilnych oraz stron internetowych.",
            "Zajmuję się również projektowaniem UI/UX i grafiką dla tych projektów.",
          ],
        },
        {
          role: "Technik serwisu komputerowego (staż)",
          company: "KRIONI.PL",
          period: "05.2020 – 06.2020",
          points: [
            "Odpowiadałem głównie za serwis i naprawę komputerów.",
            "Zajmowałem się konfiguracją i serwisowaniem sieci internetowych, w tym routerów, TCP/IP oraz WLAN.",
            "Zdobyłem praktyczne doświadczenie z Linuksem.",
          ],
        },
      ],
      education: [
        {
          degree: "Studia informatyczne",
          period: "2023 - obecnie",
          school: "Wyższa Szkoła Informatyki i Zarządzania",
          mode: "Studia niestacjonarne",
          description:
            "Obecnie studiuję informatykę w trybie niestacjonarnym, dążąc do tytułu inżyniera. Mam jasno wyznaczony cel i konsekwentnie do niego dążę.",
        },
        {
          degree: "Technikum Informatyczne",
          period: "2018 - 2022",
          school:
            "Powiatowy Zespół Szkół nr 2 – Mistrzostwa Sportowego i Technicznego",
          mode: "",
          description: "",
        },
      ],
    },
    faqs: {
      badge: "FAQ",
      title: "Najczęściej zadawane pytania",
      subtitleLine1: "Najczęstsze pytania rekruterów i zespołów rekrutujących",
      subtitleLine2: "dotyczące moich umiejętności i dostępności.",
      items: [
        {
          question: "Jakie technologie znasz najlepiej?",
          answer:
            "Od strony developerskiej: HTML, CSS, JavaScript, TypeScript, React, Astro, Python, Flask, Supabase, Git/GitHub oraz Linux. Od strony projektowej: Figma, Webflow, Framer, WordPress oraz pakiet Adobe (Photoshop, Illustrator). Swobodnie poruszam się w całym procesie — od projektowania UI po wdrożenie.",
        },
        {
          question: "Jak wygląda Twój sposób pracy w zespole deweloperskim?",
          answer:
            "Do tej pory pracowałem w dużej mierze samodzielnie, ale bardzo cenię sobie feedback — uważam, że każda informacja zwrotna jest lepsza niż jej brak. Niezależnie od projektu, najważniejsze jest dla mnie to, co użytkownik końcowy z niego wynosi i jak z niego korzysta, bo to właśnie decyduje o wartości projektu. Na co dzień do komunikacji wykorzystywałem głównie Slacka i Outlooka.",
        },
        {
          question: "Jakiej formy zatrudnienia szukasz?",
          answer:
            "Jestem otwarty na każdą formę zatrudnienia — UoP, umowę zlecenie lub umowę o dzieło — pracując zdalnie lub hybrydowo, w Polsce lub zdalnie dla firm zagranicznych.",
        },
        {
          question: "Jak szybko możesz dołączyć do nowego zespołu lub projektu?",
          answer: "Natychmiast — jestem dostępny od zaraz.",
        },
        {
          question:
            "Czy masz doświadczenie w pracy z zespołem produktowym lub metodyką Agile?",
          answer:
            "Tak, na bieżąco w New Level Sport, gdzie pracuję w iteracyjnym, zorientowanym na produkt procesie obejmującym UX, development oraz administrację sklepu.",
        },
      ],
    },
    contact: {
      badge: "Kontakt",
      title: "Porozmawiajmy o współpracy",
      subtitleLine1: "Rekrutujesz albo znasz zespół szukający projektanta UI/UX i developera?",
      subtitleLine2: "Wypełnij poniższy formularz, a odezwę się w ciągu 24 godzin.",
      formSuccess: "✓ Wiadomość wysłana pomyślnie! Odezwę się w ciągu 24 godzin.",
      labelName: "Imię",
      placeholderName: "Twoje imię",
      labelEmail: "Email",
      placeholderEmail: "twoj@email.com",
      labelSubject: "Temat",
      placeholderSubject: "Czego dotyczy wiadomość?",
      labelMessage: "Wiadomość",
      placeholderMessage: "Opowiedz mi o swoim projekcie...",
      submit: "Wyślij wiadomość",
      sending: "Wysyłanie...",
      reachDirectly: "Lub skontaktuj się bezpośrednio:",
      errTakeYourTime: "Nie spiesz się z wypełnianiem formularza.",
      errWait: "Poczekaj {n} sekund przed wysłaniem kolejnej wiadomości.",
      errNotConfigured:
        "Usługa e-mail nie jest skonfigurowana. Skontaktuj się ze mną bezpośrednio: przemyslaw.tomanek02@gmail.com",
      errGeneric: "Coś poszło nie tak. Spróbuj ponownie lub skontaktuj się ze mną bezpośrednio.",
    },
    footer: {
      copyright: "© 2026 Przemysław Tomanek. Wszelkie prawa zastrzeżone.",
    },
  },
} as const;
