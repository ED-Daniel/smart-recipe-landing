import { Locale, createI18n, useI18n as useVueI18n } from "vue-i18n";
import { nextTick } from "vue";
import ru from "./locales/ru.json";

type MessageSchema = typeof ru;

export function getStorageItem<T>(key: string, defaultValue: T): T {
  const value = localStorage.getItem(key);

  try {
    return value ? JSON.parse(value) : defaultValue;
  } catch {
    return (value as T) ?? defaultValue;
  }
}

export function setStorageItem<T>(key: string, value: T): T {
  const isString = typeof value === "string";
  localStorage.setItem(key, isString ? value : JSON.stringify(value));

  return getStorageItem<T>(key, value);
}

export function isSupportedLocale(locale: string) {
  return ["en", "ru"].includes(locale);
}

export function getUserLocale(): string {
  const navigatorLanguage = navigator.language.split("-")[0];
  const fallbackLocale = isSupportedLocale(navigatorLanguage)
    ? navigatorLanguage
    : "ru";

  return getStorageItem("locale", fallbackLocale);
}

export async function setI18nLanguage(locale: Locale) {
  try {
    await loadLocaleMessages(locale);

    i18n.global.locale.value = locale;
    const html = document.querySelector("html") as HTMLHtmlElement;

    setStorageItem("locale", locale);

    if (html.lang !== locale) {
      html.setAttribute("lang", locale);
    }
  } catch (e) {
    console.error(e);
  }
}

export async function loadLocaleMessages(locale: Locale) {
  if (i18n.global.availableLocales.includes(locale)) return;

  const messages = await import(`./locales/${locale}.json`);
  i18n.global.setLocaleMessage(locale, messages.default);

  return nextTick();
}

const locale = getUserLocale();
const i18n = createI18n<[MessageSchema], string, false>({
  legacy: false,
  locale,
  fallbackLocale: "en",
  messages: { ru },
  pluralizationRules: {
    ru(choice, choicesLength) {
      if (choice === 0) {
        return 0;
      }

      const teen = choice > 10 && choice < 20;
      const endsWithOne = choice % 10 === 1;

      console.log(choicesLength, choice, teen, endsWithOne);
      if (!teen && endsWithOne) {
        return 1;
      }
      if (!teen && choice % 10 >= 2 && choice % 10 <= 4) {
        return 2;
      }

      return choicesLength < 4 ? 2 : 3;
    },
  },
});

setI18nLanguage(locale);

export const useI18n = useVueI18n<{ message: MessageSchema }, "ru">;

export default i18n;
