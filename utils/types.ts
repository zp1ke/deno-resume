export enum Lang {
  EN = "en",
  ES = "es",
}

export enum Theme {
  SYSTEM = "system",
  LIGHT = "light",
  DARK = "dark",
}

export type State = {
  lang: Lang | undefined;
  theme: Theme | undefined;
};

export type EnumDictionary<T extends string | symbol, U> = {
  [K in T]: U;
};
