import { type PageProps } from "$fresh/server.ts";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sp1k_e</title>
        <meta
          name="description"
          content="Software Developer"
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
}
