import { Comment } from "./Comment";

import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Post.module.css";

interface Author{
  name: string;
  role: string;
  avatarUrl: string;
}
interface Content{
  id: number;
  type: string;
  content: string;
}
interface PostProps {
  id?:number;
  author: Author;
  publishedAt: Date;
  content: Content[];
};

export function Post({ author, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState(["Primeiro comentario"]);
  const [newCommentText, setNewCommentText] = useState("");
  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }
  function handleNewCommentChange(
    event: ChangeEvent<HTMLTextAreaElement>
  ) {
    event?.target.setCustomValidity("")
    setNewCommentText(event.target.value);
  }
  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeleteOne = comments.filter(comment => comment !== commentToDelete)
    setComments(commentsWithoutDeleteOne);
  }
  function handleNewCommentInvalid(event:InvalidEvent<HTMLTextAreaElement>){
    event?.target.setCustomValidity("Esse campo é obrigatório")
  }

  const isNewCommentEmpty = newCommentText.length === 0
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
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((item) => {
          if (item.type === "paragraph") {
            return <p key={item.id}>{item.content}</p>;
          } else if (item.type === "link") {
            return (
              <p key={item.id}>
                <a href="#">{item.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          onChange={handleNewCommentChange}
          value={newCommentText}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
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
