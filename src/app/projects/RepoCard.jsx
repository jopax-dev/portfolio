import Link from 'next/link'
import styles from './projects.module.css'
import Image from 'next/image'

export default function RepoCard ({ repo }) {
  const delayAfter = Math.random() + 0.5
  const durationAfter = Math.random() + 2.5
  const delay = delayAfter * Math.random()
  const duration = Math.random() + 2.5
  return (
    <div
      className={styles.repocard}
      style={{
        '--duration': `${duration}s`,
        '--delay': `${delay}s`,
        '--delayAfter': `${delayAfter}s`,
        '--durationAfter': `${durationAfter}s`
      }}
    >
      <article className={styles.repo}>
        <header className={styles.headername}>
          <p>{repo.name}</p>
        </header>
        <section>
          <div className={styles.info}>
            <p>{repo.description}</p>
            {repo.visibility === 'public' && <p><Link href={repo.url} className={styles.url}>Accede al repo</Link></p>}
            {repo.homepage && <p><Link className={styles.liveLink} href={repo.homepage}>Live</Link> </p>}
          </div>
          <div className={styles.tech}>
            {repo.topics.map((topic) => {
              const src = topic.includes('github') ? 'github' : topic
              return (
                src !== 'wip' && src !== 'testing' && <Image
                  key={topic}
                  width='50'
                  height='50'
                  src={`/${src}-logo.svg`}
                  alt={`${src} logo`}
                  className={styles.logo}
                  title={src}
                                                      />
              )
            })}
          </div>
        </section>
      </article>
    </div>
  )
}
