// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_middleware from "./routes/_middleware.ts";
import * as $api_joke from "./routes/api/joke.ts";
import * as $index from "./routes/index.tsx";
import * as $minesweeper from "./routes/minesweeper.tsx";
import * as $languague from "./islands/languague.tsx";
import * as $themeMode from "./islands/themeMode.tsx";
import type { Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_middleware.ts": $_middleware,
    "./routes/api/joke.ts": $api_joke,
    "./routes/index.tsx": $index,
    "./routes/minesweeper.tsx": $minesweeper,
  },
  islands: {
    "./islands/languague.tsx": $languague,
    "./islands/themeMode.tsx": $themeMode,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
