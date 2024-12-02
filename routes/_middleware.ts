import { FreshContext } from "$fresh/server.ts";
import { Lang, State, Theme } from "../utils/types.ts";

export const langCookie = "lang";

export const handler = [
  async function langMiddleware(req: Request, ctx: FreshContext<State>) {
    let lang = Lang.EN;

    const cookie = req.headers.get("cookie");
    if (cookie?.includes(langCookie)) {
      lang = cookie.split("=")[1] as Lang;
    } else if (req.headers.get("accept-language")?.includes(Lang.ES)) {
      lang = Lang.ES;
    }

    ctx.state = {
      lang: lang,
      theme: Theme.SYSTEM,
    };
    const res = await ctx.next();
    res.headers.set("Set-Cookie", `${langCookie}=${lang}`);
    return res;
  },
];
