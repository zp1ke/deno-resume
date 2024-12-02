import { Octokit } from "npm:@octokit/rest";

const octokit = new Octokit();

export const fetchGistContent = async (
  gistId: string,
  gistFileName: string,
): Promise<string> => {
  const gistJson = await octokit.rest.gists.get({ gist_id: gistId });
  const gistFiles = gistJson.data.files ?? {};
  return gistFiles[gistFileName]?.content ?? "";
};
