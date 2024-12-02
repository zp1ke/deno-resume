import { type PageProps } from "$fresh/server.ts";
import { i18n, Message } from "../utils/i18n.ts";
import { Lang } from "../utils/types.ts";

const App = ({ Component }: PageProps) => {
  return (
    <html lang={Lang.EN}>
      <head>
        <title>Sp1k_e</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content={i18n(Lang.EN, Message.PageMetaDescription)}
        />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <div class="max-w-xl my-5 mx-auto lg:mx-2 sm:mx-1 text-sm text-white leading-none tracking-wide md:my-3">
          <Component />
        </div>
      </body>
    </html>
  );
};

export default App;
