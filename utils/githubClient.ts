import "jsr:@std/dotenv/load";
import { Octokit } from "npm:@octokit/rest";

const authToken = Deno.env.get("GITHUB_ACCESS_TOKEN");
const gistId = Deno.env.get("GITHUB_GIST_ID") ?? "";
const gistFileName = Deno.env.get("GITHUB_GIST_FILE_NAME") ?? "";
const octokit = new Octokit({ auth: authToken });

let gistContent: string = "";

export const fetchGistContent = async (): Promise<string> => {
  if (gistContent.length == 0) {
    const gistJson = await octokit.rest.gists.get({ gist_id: gistId });
    const gistFiles = gistJson.data.files ?? {};
    gistContent = gistFiles[gistFileName]?.content ?? "";
  }
  return gistContent;
};
