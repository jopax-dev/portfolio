const { Octokit } = require('octokit')

const apiKey = process.env.GITHUB_KEY
const githubUser = process.env.GITHUB_USER

export default async function repos (req, res) {
  const getRepos = async () => {
    const octokit = new Octokit({
      auth: apiKey
    })

    const repos = await octokit.request('GET /users/{username}/repos', {
      username: githubUser,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    })

    return repos
  }
  try {
    const repoList = await getRepos()
    const data = repoList.data.map((repo) => {
      const filteredRepo = {
        url: repo.html_url,
        homepage: repo.homepage,
        name: repo.name,
        description: repo.description,
        stars: repo.stargazers_count,
        topics: repo.topics
      }
      return filteredRepo
    })
    res.status(200).send({ data })
  } catch (error) {
    console.error('Error occurred:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
