
const GITHUB_API_URL = 'https://api.github.com/repos';

const parseRepoUrl = (url: string): { owner: string; repo: string } | null => {
  try {
    const urlObj = new URL(url);
    if (urlObj.hostname !== 'github.com') {
      return null;
    }
    const pathParts = urlObj.pathname.split('/').filter(part => part);
    if (pathParts.length < 2) {
      return null;
    }
    const [owner, repo] = pathParts;
    return { owner, repo: repo.replace('.git', '') };
  } catch (error) {
    return null;
  }
};

export const fetchReadme = async (repoUrl: string): Promise<string> => {
  const repoInfo = parseRepoUrl(repoUrl);
  if (!repoInfo) {
    throw new Error('Invalid GitHub repository URL format.');
  }

  const { owner, repo } = repoInfo;
  const apiUrl = `${GITHUB_API_URL}/${owner}/${repo}/readme`;

  try {
    const response = await fetch(apiUrl, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(`Repository or README not found at ${repoUrl}. Please check the URL.`);
      }
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    if (data.encoding !== 'base64') {
      throw new Error('Unsupported README encoding.');
    }
    
    // In browser environment, atob is available globally
    return atob(data.content);
  } catch (error) {
    if (error instanceof Error) {
        throw new Error(`Failed to fetch README: ${error.message}`);
    }
    throw new Error('An unknown error occurred while fetching the README.');
  }
};
