import { type PageProps } from "$fresh/server.ts";
import { i18n, Message } from "../utils/i18n.ts";
import { Lang, Theme } from "../utils/types.ts";

const App = ({ data, Component }: PageProps) => {
  const lang = (data?.lang as Lang) || Lang.EN;
  const theme = (data?.theme as Theme) || Theme.LIGHT;
  return (
    <html lang={lang} class={theme}>
      <head>
        <title>Sp1k_e</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content={i18n(lang, Message.PageMetaDescription)}
        />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <div class="max-w-xl my-5 mx-auto lg:mx-2 sm:mx-1 text-sm leading-none tracking-wide md:my-3">
          <Component />
        </div>
      </body>
    </html>
  );
};

export default App;
