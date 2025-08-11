import styles from "./Post.module.css";
import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

import type { PostType } from "../../types";
import { useState } from "react";

export function Post({ author, content, publishedAt }: PostType) {
  const [comments, setComments] = useState(["Post muito bom!"]);
  const [newcommentText, setNewcommentText] = useState("");

  const publishedFormat = format(publishedAt, "d 'de' LLLL às HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelative = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function hashtagParser(content: string): string {
    return content.replace(/#([\w-]+)/g, '<a href="">#$1</a>');
  }

  function handleCreateNewComment() {
    event?.preventDefault();
    setComments([...comments, newcommentText]);
    setNewcommentText("");
  }

  function handleNewCommentChange(
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) {
    event?.target.setCustomValidity("");
    setNewcommentText(event?.target.value);
  }

  function handleNewCommentInvalid(
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) {
    event?.target.setCustomValidity("Esse campo é obrigatório!");
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne: string[] = comments.filter((comment) => {
      return comment != commentToDelete;
    });

    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newcommentText.length === 0;
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
        <time title={publishedFormat} dateTime={publishedAt.toISOString()}>
          {publishedDateRelative}
        </time>
      </header>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: hashtagParser(content) }}
      ></div>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe seu comentário"
          value={newcommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
