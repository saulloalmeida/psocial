import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

interface CommentProps {
  content:string
  id?:number
  onDeleteComment:(content:string) => void
}
export function Comment({content, onDeleteComment}:CommentProps) {
  const [likeCount, setLikeCount] = useState(0)
  function handleDeleteComment(){
    onDeleteComment(content)
  }
  function handleLikeComment(){
    setLikeCount(likeCount+1)
  }
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/13395268?v=4"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Saullo Almeida</strong>
              <time title="07 de junho ás 08:29" dateTime="2022-06-07">
                Cerca de 1h atras
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentario">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button title="Aplaudir comentario" onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
