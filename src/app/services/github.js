const { Octokit } = require('octokit')

const apiKey = process.env.GITHUB_KEY

export const getRepos = async () => {
  const octokit = new Octokit({
    auth: apiKey
  })

  const repos = await octokit.request('GET /user/repos', {
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })

  return repos
}
