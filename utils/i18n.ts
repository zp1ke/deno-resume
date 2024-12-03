import { Dictionary, Lang } from "./types.ts";

export enum Message {
  PageMetaDescription = "PageMetaDescription",
  DownloadResume = "DownloadResume",
  Skills = "Skills",
  MadeWithFresh = "MadeWithFresh",
}

const messagesEN: Dictionary<Message, string> = {
  [Message.PageMetaDescription]: "Software Developer",
  [Message.DownloadResume]: "Download Resume",
  [Message.Skills]: "Skills",
  [Message.MadeWithFresh]: "Made with Fresh",
};

const messagesES: Dictionary<Message, string> = {
  [Message.PageMetaDescription]: "Desarrollador de Software",
  [Message.DownloadResume]: "Descargar CV",
  [Message.Skills]: "Habilidades",
  [Message.MadeWithFresh]: "Hecho con Fresh",
};

export const i18n = (lang: Lang, message: Message): string => {
  const messages: Dictionary<Message, string> = lang === Lang.EN
    ? messagesEN
    : messagesES;
  return messages[message];
};
