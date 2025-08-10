import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import styles from "./Post.module.css";

type AuthorData = {
  avatarUrl: string;
  name: string;
  role: string;
};

type PostType = {
  author: AuthorData;
  content: string;
  publishedAt: Date;
};

export function Post({ author, content, publishedAt }: PostType) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title="11 de agosto às 08:13h"
          dateTime={publishedAt.toISOString()}
        >
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>{content}</div>

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
