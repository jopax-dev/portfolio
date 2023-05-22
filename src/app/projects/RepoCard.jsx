import styles from './projects.module.css'

export default function RepoCard ({ children }) {
  return (
    <div className={styles.repocard}>
      {children}
    </div>
  )
}
