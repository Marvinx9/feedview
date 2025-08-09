import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/angelicaweiler.png" />
          <div className={styles.authorInfo}>
            <strong>Angélica Weiler</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="11 de agosto às 08:13h" dateTime="2025-08-11 08:13:32">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>
        <p>Acabei de subir mais um projeto no meu portfólio. É um</p>
        projeto que fiz no com React, muito legal. O nome do projeto é
        MarvinCare
        <p>
          👉 - <a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a> <a href="#">#front-end</a>{" "}
          <a href="#">#react</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe seu comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
