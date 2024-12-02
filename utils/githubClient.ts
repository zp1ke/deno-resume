import { Octokit } from "npm:@octokit/rest";

const gistFileName = "resume.json";
const octokit = new Octokit();

let gistContent: string = "";

export const fetchGistContent = async (gistId: string): Promise<string> => {
  if (gistContent.length == 0) {
    const gistJson = await octokit.rest.gists.get({ gist_id: gistId });
    const gistFiles = gistJson.data.files ?? {};
    gistContent = gistFiles[gistFileName]?.content ?? "";
  }
  return gistContent;
};
