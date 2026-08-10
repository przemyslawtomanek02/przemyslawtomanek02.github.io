import { translations, defaultLang, storageKey, type Lang } from "./translations";

function getByPath(obj: unknown, path: string): unknown {
  return path
    .split(".")
    .reduce<unknown>(
      (acc, part) =>
        acc && typeof acc === "object" ? (acc as Record<string, unknown>)[part] : undefined,
      obj
    );
}

export function getLang(): Lang {
  const stored = localStorage.getItem(storageKey);
  return stored === "pl" || stored === "en" ? stored : defaultLang;
}

export function applyLanguage(lang: Lang) {
  document.documentElement.lang = lang;
  const dict = translations[lang] ?? translations[defaultLang];

  document.querySelectorAll<HTMLElement>("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (!key) return;
    const value = getByPath(dict, key);
    if (typeof value === "string") el.textContent = value;
  });

  document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
    "[data-i18n-placeholder]"
  ).forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (!key) return;
    const value = getByPath(dict, key);
    if (typeof value === "string") el.placeholder = value;
  });

  document.querySelectorAll<HTMLElement>(".lang-flag-pl").forEach((el) => {
    el.classList.toggle("hidden", lang !== "en");
  });
  document.querySelectorAll<HTMLElement>(".lang-flag-uk").forEach((el) => {
    el.classList.toggle("hidden", lang !== "pl");
  });

  // Recalculate height of any open FAQ answer since translated text can change its size
  document.querySelectorAll<HTMLElement>(".faq-answer").forEach((answer) => {
    if (answer.style.maxHeight && answer.style.maxHeight !== "0px") {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });

  document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
}

export function initLanguageToggle() {
  applyLanguage(getLang());

  document.querySelectorAll<HTMLButtonElement>(".lang-toggle-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const next: Lang = getLang() === "en" ? "pl" : "en";
      localStorage.setItem(storageKey, next);
      applyLanguage(next);
    });
  });
}
