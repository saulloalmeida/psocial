import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src="https://avatars.githubusercontent.com/u/13395268?v=4"
          />
          <div className={styles.authorInfo}>
            <strong>Saullo Almeida</strong>
            <span>FullStack Developer</span>
          </div>
        </div>
        <time title="07 de junho ás 08:29" dateTime="2022-06-07">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala Galera!</p>
        <p>
          Acabei de subir mais um projeto no meu portifolio. É um projeto que
          fiz no NLW Return, evento da rocketseat, segue o link para acesso:
          <a href="">github.com</a>
        </p>
        <p>
          
          <a href="">#novoprojeto</a>{" "}
          <a href="">#nlw</a>{" "}
          <a href="">#rockeseat</a>{" "}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário"/>
        <footer><button type="submit">Publicar</button></footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
