import { getRepos } from '@/app/services/github'

export const getRepoData = async () => {
  try {
    const repos = await getRepos()
    const data = repos.data
      .map((repo) => {
        const filteredRepo = {
          url: repo.html_url,
          homepage: repo.homepage,
          name: repo.name,
          description: repo.description,
          topics: repo.topics,
          visibility: repo.visibility
        }
        return filteredRepo
      })
    if (!repos) {
      throw new Error('Repos not loaded')
    }
    return data
  } catch (error) {
    console.log(error.message)
  }
}
