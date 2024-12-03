export enum Lang {
  EN = "en",
  ES = "es",
}

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export type State = {
  lang: Lang | undefined;
  theme: Theme | undefined;
};

export type Dictionary<T extends string | symbol, U> = {
  [K in T]: U;
};
