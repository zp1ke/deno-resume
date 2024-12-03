import { FreshContext } from "$fresh/server.ts";
import { Dictionary, Lang, State, Theme } from "../utils/types.ts";

export const langCookie = "lang";
export const themeCookie = "theme";

const parseCookies = (cookie: string | null): Dictionary<string, string> => {
  const dict: Dictionary<string, string> = {};
  if (cookie) {
    const cookieList = cookie.split(";");
    for (const cookie of cookieList) {
      const parts = cookie.split("=");
      if (parts.length == 2) {
        dict[parts[0].trim()] = parts[1].trim();
      }
    }
  }
  return dict;
};

const fetchLang = (req: Request, cookies: Dictionary<string, string>): Lang => {
  for (const key of Object.keys(cookies)) {
    if (key === langCookie) {
      return cookies[key] as Lang;
    }
  }
  if (req.headers.get("accept-language")?.includes(Lang.ES)) {
    return Lang.ES;
  }
  return Lang.EN;
};

const fetchTheme = (cookies: Dictionary<string, string>): Theme => {
  for (const key of Object.keys(cookies)) {
    if (key === themeCookie) {
      return cookies[key] as Theme;
    }
  }
  return Theme.LIGHT;
};

export const handler = [
  async function langThemeMiddleware(req: Request, ctx: FreshContext<State>) {
    const cookies = parseCookies(req.headers.get("cookie"));
    const lang = fetchLang(req, cookies);
    const theme = fetchTheme(cookies);
    ctx.state = {
      lang: lang,
      theme: theme,
    };
    const res = await ctx.next();
    res.headers.set("Set-Cookie", `${langCookie}=${lang}`);
    res.headers.set("Set-Cookie", `${themeCookie}=${theme}`);
    return res;
  },
];
