import { atom } from "recoil";

// False = Norwegian, True = English
export const recoilLanguage = atom({
  key: "recoilLanguageAtom",
  default: getLanguageLocalstorage() as boolean,
});

function getLanguageLocalstorage() {
  const language: boolean = JSON.parse(localStorage.getItem("language")!);
  if (language === null) {
    localStorage.setItem("language", JSON.stringify(false));
    return false;
  }
  return language;
}

export const recoilPage = atom({
  key: "recoilPageAtom",
  default: getPageSessionstorage() as string,
});

function getPageSessionstorage() {
  const page: string = JSON.parse(sessionStorage.getItem("activePage")!);
  if (page === null) {
    sessionStorage.setItem("activePage", JSON.stringify("home"));
    return "home";
  }
  return page;
}
