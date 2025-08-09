import styles from "./Post.module.css";

interface PostProps {
  author: string;
  content: string;
}

export function Post({ author, content }: PostProps) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/Marvinx9.png"
          />
          <div className={styles.authorInfo}>
            <strong>Afrânio Nunes</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="11 de agosto às 08:13h" dateTime="2025-08-11 08:13:32">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>
        <p>Acabei de subir mais um projeto no meu portifa. É um</p>
        projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é
        DoctorCare
        <p>
          👉<a href="#"> jane.design/doctorcare</a>
        </p>
        <p>
          <a>#novoprojeto #nlw #rocketseat</a>
        </p>
      </div>
    </article>
  );
}
