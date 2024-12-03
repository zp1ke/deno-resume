import { EnumDictionary, Lang } from "./types.ts";

export enum Message {
  PageMetaDescription = "PageMetaDescription",
  DownloadResume = "DownloadResume",
  Skills = "Skills",
  MadeWithFresh = "MadeWithFresh",
}

const messagesEN: EnumDictionary<Message, string> = {
  [Message.PageMetaDescription]: "Software Developer",
  [Message.DownloadResume]: "Download Resume",
  [Message.Skills]: "Skills",
  [Message.MadeWithFresh]: "Made with Fresh",
};

const messagesES: EnumDictionary<Message, string> = {
  [Message.PageMetaDescription]: "Desarrollador de Software",
  [Message.DownloadResume]: "Descargar CV",
  [Message.Skills]: "Habilidades",
  [Message.MadeWithFresh]: "Hecho con Fresh",
};

export const i18n = (lang: Lang, message: Message): string => {
  const messages: EnumDictionary<Message, string> = lang === Lang.EN
    ? messagesEN
    : messagesES;
  return messages[message];
};
