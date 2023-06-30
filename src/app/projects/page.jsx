import styles from './projects.module.css'
import RepoCard from './RepoCard'
import { getRepoData } from '../../../lib/getRepoData'
export const revalidate = 30
export default async function Home () {
  const data = await getRepoData()

  const publicRepos = data.filter(repo => repo.visibility === 'public')

  const wipRepos = data.filter(repo => repo.visibility !== 'public' && (repo.topics.includes('testing') || repo.topics.includes('wip')))

  const privateRepos = data.filter(repo => repo.visibility !== 'public' && repo.topics.includes('nda') && !repo.topics.includes('wip'))

  return (
    <section className={styles.projectContainer}>
      <h1>Proyectos públicos</h1>
      {publicRepos.map((repo) =>
        <RepoCard key={repo.name} repo={repo} />
      )}

      <h1>Privados - Trabajando en ello</h1>
      {wipRepos.map((repo) =>
        <RepoCard key={repo.name} repo={repo} />
      )}

      <h1>Privados con NDA</h1>
      {privateRepos.map((repo) =>
        <RepoCard key={repo.name} repo={repo} />
      )}
    </section>
  )
}
