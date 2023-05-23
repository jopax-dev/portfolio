import Link from 'next/link'
import styles from './projects.module.css'
import Image from 'next/image'
import RepoCard from './RepoCard'

const url = process.env.API_URL

export default async function Home () {
  const res = await fetch(`${url}/api/repos`, {
    next: {
      revalidate: 600
    }
  })
  const data = await res.json()
  return (
    <section className={styles.projectContainer}>
      {data.map((repo) =>
        <RepoCard key={repo.name}>
          <article className={styles.repo}>
            <header className={styles.repoImage}>
              <Image
                width='240'
                height='120'
                src={`/${repo.name}.webp`}
                alt='repo image'
              />
            </header>
            <section>
              <div className={styles.info}>
                <p>{repo.description}</p>
                <p><Link href={repo.url}>Accede al repo</Link></p>
                {repo.homepage && <p><Link className={styles.liveLink} href={repo.homepage}>Live</Link> {repo.stars > 0 && <span> ⭐ {repo.stars}</span>} </p>}
              </div>
              <div className={styles.tech}>
                {repo.topics.map((topic) => {
                  const src = topic.includes('github') ? 'github' : topic
                  return (
                    <Image
                      key={topic}
                      width='50'
                      height='50'
                      src={`/${src}-logo.svg`}
                      alt={`${src} logo`}
                      className={styles.logo}
                    />
                  )
                })}
              </div>
            </section>
          </article>
        </RepoCard>
      )}
    </section>

  )
}
